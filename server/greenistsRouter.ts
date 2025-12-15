import { z } from "zod";
import { getDb } from "./db";
import { 
  events, inquiries, eventMilestones, eventPackages, 
  quotes, bookings, products, addOns, notifications, 
  suppliers, volunteers, emailTemplates 
} from "../drizzle/schema";
import { eq, desc, and, gte, lte, like, sql } from "drizzle-orm";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";

// Exchange rates
const USD_TO_YER = 1700;
const USD_TO_SAR = 3.75;

// Generate unique quote number
function generateQuoteNumber(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  return `GRN-${year}-${random}`;
}

// Generate unique booking code
function generateBookingCode(): string {
  const year = new Date().getFullYear();
  const random = Math.floor(Math.random() * 9999).toString().padStart(4, '0');
  return `GRN-BK-${year}-${random}`;
}

export const greenistsRouter = router({
  // ============================================
  // EVENTS
  // ============================================
  events: router({
    // Get all events (for admin/staff)
    list: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const allEvents = await db.select().from(events).orderBy(desc(events.createdAt));
      return allEvents;
    }),
    
    // Get events for current user
    myEvents: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      const userId = ctx.user?.id;
      if (!userId) return [];
      const userEvents = await db
        .select()
        .from(events)
        .where(eq(events.clientId, userId))
        .orderBy(desc(events.createdAt));
      return userEvents;
    }),
    
    // Get single event with milestones
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const event = await db
          .select()
          .from(events)
          .where(eq(events.id, input.id))
          .limit(1);
        
        if (event.length === 0) {
          throw new Error("Event not found");
        }
        
        const milestones = await db
          .select()
          .from(eventMilestones)
          .where(eq(eventMilestones.eventId, input.id))
          .orderBy(eventMilestones.orderNum);
        
        return { ...event[0], milestones };
      }),
    
    // Create new event
    create: protectedProcedure
      .input(z.object({
        title: z.string().min(1),
        titleAr: z.string().optional(),
        eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]),
        description: z.string().optional(),
        eventDate: z.string().optional(),
        venue: z.string().optional(),
        venueType: z.enum(["indoor", "outdoor", "hotel", "beach"]).optional(),
        guestCount: z.number().optional(),
        cateringLevel: z.enum(["basic", "standard", "premium", "luxury"]).optional(),
        decorationLevel: z.enum(["minimal", "standard", "elegant", "luxury"]).optional(),
        estimatedCostUsd: z.string().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(events).values({
          ...input,
          clientId: ctx.user?.id,
          eventDate: input.eventDate ? new Date(input.eventDate) : null,
        });
        return { id: result[0].insertId, ...input };
      }),
    
    // Update event
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        status: z.enum(["inquiry", "confirmed", "planning", "in_progress", "completed", "cancelled"]).optional(),
        progress: z.number().min(0).max(100).optional(),
        notes: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { id, ...data } = input;
        await db.update(events).set(data).where(eq(events.id, id));
        return { success: true };
      }),
      
    // Get event statistics
    stats: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return { total: 0, pending: 0, inProgress: 0, completed: 0 };
      
      const allEvents = await db.select().from(events);
      const total = allEvents.length;
      const pending = allEvents.filter(e => e.status === 'inquiry' || e.status === 'confirmed').length;
      const inProgress = allEvents.filter(e => e.status === 'planning' || e.status === 'in_progress').length;
      const completed = allEvents.filter(e => e.status === 'completed').length;
      
      return { total, pending, inProgress, completed };
    }),
  }),
  
  // ============================================
  // INQUIRIES
  // ============================================
  inquiries: router({
    // Get all inquiries (admin only)
    list: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const allInquiries = await db.select().from(inquiries).orderBy(desc(inquiries.createdAt));
      return allInquiries;
    }),
    
    // Submit new inquiry (public)
    submit: publicProcedure
      .input(z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().optional(),
        subject: z.string().optional(),
        message: z.string().min(10, "Message must be at least 10 characters"),
        eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]).optional(),
        preferredDate: z.string().optional(),
        guestCount: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(inquiries).values({
          ...input,
          preferredDate: input.preferredDate ? new Date(input.preferredDate) : null,
        });
        return { 
          success: true, 
          id: result[0].insertId,
          message: "Inquiry submitted successfully" 
        };
      }),
    
    // Update inquiry status
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["new", "contacted", "converted", "closed"]),
        assignedTo: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { id, ...data } = input;
        await db.update(inquiries).set(data).where(eq(inquiries.id, id));
        return { success: true };
      }),
  }),
  
  // ============================================
  // MILESTONES
  // ============================================
  milestones: router({
    // Add milestone to event
    create: protectedProcedure
      .input(z.object({
        eventId: z.number(),
        title: z.string().min(1),
        titleAr: z.string().optional(),
        description: z.string().optional(),
        dueDate: z.string().optional(),
        orderNum: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(eventMilestones).values({
          ...input,
          dueDate: input.dueDate ? new Date(input.dueDate) : null,
        });
        return { id: result[0].insertId, ...input };
      }),
    
    // Toggle milestone completion
    toggle: protectedProcedure
      .input(z.object({
        id: z.number(),
        isCompleted: z.boolean(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.update(eventMilestones).set({ 
          isCompleted: input.isCompleted, 
          completedAt: input.isCompleted ? new Date() : null 
        }).where(eq(eventMilestones.id, input.id));
        return { success: true };
      }),
  }),
  
  // ============================================
  // PACKAGES
  // ============================================
  packages: router({
    // Get all active packages
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) {
        // Return default packages if DB not available
        return getDefaultPackages();
      }
      const packages = await db
        .select()
        .from(eventPackages)
        .where(eq(eventPackages.isActive, true));
      
      // If no packages in DB, return defaults
      if (packages.length === 0) {
        return getDefaultPackages();
      }
      return packages;
    }),
    
    // Get packages by event type
    byEventType: publicProcedure
      .input(z.object({ eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]) }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          return getDefaultPackages().filter(p => p.eventType === input.eventType || p.eventType === 'all');
        }
        const packages = await db
          .select()
          .from(eventPackages)
          .where(eq(eventPackages.isActive, true));
        
        const filtered = packages.filter(p => p.eventType === input.eventType);
        return filtered.length > 0 ? filtered : getDefaultPackages().filter(p => p.eventType === input.eventType || p.eventType === 'all');
      }),
      
    // Create package (admin)
    create: protectedProcedure
      .input(z.object({
        name: z.string().min(1),
        nameAr: z.string().optional(),
        tier: z.enum(["essential", "silver", "gold", "diamond"]),
        eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]),
        description: z.string().optional(),
        descriptionAr: z.string().optional(),
        basePriceUsd: z.string(),
        perGuestPriceUsd: z.string(),
        maxGuests: z.number().optional(),
        duration: z.string().optional(),
        features: z.array(z.string()).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const { features, ...rest } = input;
        const result = await db.insert(eventPackages).values({
          ...rest,
          features: features || [],
        });
        return { id: result[0].insertId, ...input };
      }),
  }),
  
  // ============================================
  // QUOTES
  // ============================================
  quotes: router({
    // Create quote from calculator
    create: publicProcedure
      .input(z.object({
        // Client info (optional for anonymous quotes)
        clientName: z.string().optional(),
        clientEmail: z.string().email().optional(),
        clientPhone: z.string().optional(),
        clientCompany: z.string().optional(),
        
        // Event details
        eventType: z.string(),
        eventDate: z.string().optional(),
        guestCount: z.number().min(1),
        venueType: z.string().optional(),
        cateringLevel: z.string().optional(),
        decorationLevel: z.string().optional(),
        
        // Add-ons
        addOns: z.array(z.string()).optional(),
        
        // Pricing
        baseCostUsd: z.number(),
        addOnsCostUsd: z.number().optional(),
        subtotalUsd: z.number(),
        taxUsd: z.number().optional(),
        totalUsd: z.number(),
        
        // Display currency
        displayCurrency: z.enum(["USD", "YER", "SAR"]).optional(),
        
        // ROI (for corporate)
        expectedRevenue: z.number().optional(),
        expectedRoi: z.number().optional(),
        sustainabilityScore: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          // Return mock quote if DB not available
          const quoteNumber = generateQuoteNumber();
          return {
            success: true,
            quoteNumber,
            ...input,
            totalYer: input.totalUsd * USD_TO_YER,
            totalSar: input.totalUsd * USD_TO_SAR,
          };
        }
        
        const quoteNumber = generateQuoteNumber();
        const validUntil = new Date();
        validUntil.setDate(validUntil.getDate() + 30); // Valid for 30 days
        
        const result = await db.insert(quotes).values({
          quoteNumber,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          clientCompany: input.clientCompany,
          eventType: input.eventType,
          eventDate: input.eventDate ? new Date(input.eventDate) : null,
          guestCount: input.guestCount,
          venueType: input.venueType,
          cateringLevel: input.cateringLevel,
          decorationLevel: input.decorationLevel,
          addOns: input.addOns || [],
          baseCostUsd: input.baseCostUsd.toString(),
          addOnsCostUsd: (input.addOnsCostUsd || 0).toString(),
          subtotalUsd: input.subtotalUsd.toString(),
          taxUsd: (input.taxUsd || 0).toString(),
          totalUsd: input.totalUsd.toString(),
          displayCurrency: input.displayCurrency || "USD",
          expectedRevenue: input.expectedRevenue?.toString(),
          expectedRoi: input.expectedRoi?.toString(),
          sustainabilityScore: input.sustainabilityScore,
          validUntil,
        });
        
        return {
          success: true,
          id: result[0].insertId,
          quoteNumber,
          totalYer: input.totalUsd * USD_TO_YER,
          totalSar: input.totalUsd * USD_TO_SAR,
        };
      }),
    
    // Get quote by number
    get: publicProcedure
      .input(z.object({ quoteNumber: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const quote = await db
          .select()
          .from(quotes)
          .where(eq(quotes.quoteNumber, input.quoteNumber))
          .limit(1);
        
        if (quote.length === 0) {
          throw new Error("Quote not found");
        }
        
        // Mark as viewed
        await db.update(quotes).set({ status: 'viewed' }).where(eq(quotes.quoteNumber, input.quoteNumber));
        
        return {
          ...quote[0],
          totalYer: parseFloat(quote[0].totalUsd || '0') * USD_TO_YER,
          totalSar: parseFloat(quote[0].totalUsd || '0') * USD_TO_SAR,
        };
      }),
    
    // List quotes (admin)
    list: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const allQuotes = await db.select().from(quotes).orderBy(desc(quotes.createdAt));
      return allQuotes;
    }),
    
    // Generate PDF for quote
    generatePdf: publicProcedure
      .input(z.object({ quoteNumber: z.string() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          // Return mock PDF URL
          return {
            success: true,
            pdfUrl: `/api/quotes/${input.quoteNumber}/pdf`,
          };
        }
        
        const quote = await db
          .select()
          .from(quotes)
          .where(eq(quotes.quoteNumber, input.quoteNumber))
          .limit(1);
        
        if (quote.length === 0) {
          throw new Error("Quote not found");
        }
        
        // In production, this would generate actual PDF
        const pdfUrl = `/api/quotes/${input.quoteNumber}/pdf`;
        
        await db.update(quotes).set({ 
          pdfUrl, 
          pdfGeneratedAt: new Date() 
        }).where(eq(quotes.quoteNumber, input.quoteNumber));
        
        return { success: true, pdfUrl };
      }),
  }),
  
  // ============================================
  // BOOKINGS
  // ============================================
  bookings: router({
    // Create booking
    create: publicProcedure
      .input(z.object({
        quoteId: z.number().optional(),
        
        // Client info
        clientName: z.string().min(1),
        clientEmail: z.string().email(),
        clientPhone: z.string().min(1),
        clientCompany: z.string().optional(),
        
        // Event details
        eventType: z.string(),
        eventTitle: z.string().min(1),
        eventDate: z.string(),
        eventEndDate: z.string().optional(),
        guestCount: z.number().min(1),
        venueType: z.string().optional(),
        venueAddress: z.string().optional(),
        
        // Services
        packageTier: z.enum(["essential", "silver", "gold", "diamond"]).optional(),
        cateringLevel: z.string().optional(),
        decorationLevel: z.string().optional(),
        addOns: z.array(z.string()).optional(),
        specialRequests: z.string().optional(),
        
        // Pricing
        totalUsd: z.number(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        const bookingCode = generateBookingCode();
        const depositUsd = input.totalUsd * 0.3; // 30% deposit
        
        if (!db) {
          // Return mock booking if DB not available
          return {
            success: true,
            bookingCode,
            depositUsd,
            depositYer: depositUsd * USD_TO_YER,
            message: "Booking created successfully",
          };
        }
        
        const result = await db.insert(bookings).values({
          bookingCode,
          quoteId: input.quoteId,
          clientName: input.clientName,
          clientEmail: input.clientEmail,
          clientPhone: input.clientPhone,
          clientCompany: input.clientCompany,
          eventType: input.eventType,
          eventTitle: input.eventTitle,
          eventDate: new Date(input.eventDate),
          eventEndDate: input.eventEndDate ? new Date(input.eventEndDate) : null,
          guestCount: input.guestCount,
          venueType: input.venueType,
          venueAddress: input.venueAddress,
          packageTier: input.packageTier,
          cateringLevel: input.cateringLevel,
          decorationLevel: input.decorationLevel,
          addOns: input.addOns || [],
          specialRequests: input.specialRequests,
          totalUsd: input.totalUsd.toString(),
          depositUsd: depositUsd.toString(),
          balanceUsd: (input.totalUsd - depositUsd).toString(),
        });
        
        return {
          success: true,
          id: result[0].insertId,
          bookingCode,
          depositUsd,
          depositYer: depositUsd * USD_TO_YER,
          message: "Booking created successfully",
        };
      }),
    
    // Get booking by code
    get: publicProcedure
      .input(z.object({ bookingCode: z.string() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const booking = await db
          .select()
          .from(bookings)
          .where(eq(bookings.bookingCode, input.bookingCode))
          .limit(1);
        
        if (booking.length === 0) {
          throw new Error("Booking not found");
        }
        
        return {
          ...booking[0],
          totalYer: parseFloat(booking[0].totalUsd || '0') * USD_TO_YER,
          depositYer: parseFloat(booking[0].depositUsd || '0') * USD_TO_YER,
        };
      }),
    
    // List bookings (admin)
    list: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const allBookings = await db.select().from(bookings).orderBy(desc(bookings.createdAt));
      return allBookings;
    }),
    
    // Update booking status
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "deposit_paid", "in_progress", "completed", "cancelled"]),
        cancellationReason: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const updateData: any = { status: input.status };
        if (input.status === 'confirmed') {
          updateData.confirmedAt = new Date();
        } else if (input.status === 'cancelled') {
          updateData.cancelledAt = new Date();
          updateData.cancellationReason = input.cancellationReason;
        } else if (input.status === 'deposit_paid') {
          updateData.depositPaidAt = new Date();
        }
        
        await db.update(bookings).set(updateData).where(eq(bookings.id, input.id));
        return { success: true };
      }),
  }),
  
  // ============================================
  // PRODUCTS
  // ============================================
  products: router({
    // List all products
    list: publicProcedure
      .input(z.object({
        category: z.string().optional(),
        featured: z.boolean().optional(),
      }).optional())
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return getDefaultProducts();
        
        let query = db.select().from(products).where(eq(products.isActive, true));
        
        const allProducts = await query.orderBy(products.name);
        return allProducts.length > 0 ? allProducts : getDefaultProducts();
      }),
    
    // Get single product
    get: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const product = await db
          .select()
          .from(products)
          .where(eq(products.id, input.id))
          .limit(1);
        
        if (product.length === 0) {
          throw new Error("Product not found");
        }
        
        return {
          ...product[0],
          priceYer: parseFloat(product[0].priceUsd || '0') * USD_TO_YER,
        };
      }),
    
    // Create product (admin)
    create: protectedProcedure
      .input(z.object({
        sku: z.string().min(1),
        name: z.string().min(1),
        nameAr: z.string().optional(),
        description: z.string().optional(),
        descriptionAr: z.string().optional(),
        category: z.enum(["stationery", "clothing", "bags", "promotional", "accessories"]),
        subcategory: z.string().optional(),
        priceUsd: z.string(),
        costUsd: z.string().optional(),
        imageUrl: z.string().optional(),
        images: z.array(z.string()).optional(),
        stockQuantity: z.number().optional(),
        minOrderQuantity: z.number().optional(),
        isEcoFriendly: z.boolean().optional(),
        isFeatured: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(products).values({
          ...input,
          images: input.images || [],
        });
        return { id: result[0].insertId, ...input };
      }),
  }),
  
  // ============================================
  // ADD-ONS
  // ============================================
  addOns: router({
    // List all add-ons
    list: publicProcedure.query(async () => {
      const db = await getDb();
      if (!db) return getDefaultAddOns();
      
      const allAddOns = await db
        .select()
        .from(addOns)
        .where(eq(addOns.isActive, true))
        .orderBy(addOns.sortOrder);
      
      return allAddOns.length > 0 ? allAddOns : getDefaultAddOns();
    }),
    
    // Create add-on (admin)
    create: protectedProcedure
      .input(z.object({
        name: z.string().min(1),
        nameAr: z.string().optional(),
        description: z.string().optional(),
        descriptionAr: z.string().optional(),
        category: z.enum(["premium", "entertainment", "wellness", "cultural", "sustainability"]),
        priceUsd: z.string(),
        priceType: z.enum(["flat", "per_guest", "per_hour"]).optional(),
        imageUrl: z.string().optional(),
        icon: z.string().optional(),
        sortOrder: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(addOns).values(input);
        return { id: result[0].insertId, ...input };
      }),
  }),
  
  // ============================================
  // SUPPLIERS
  // ============================================
  suppliers: router({
    // Register supplier
    register: publicProcedure
      .input(z.object({
        companyName: z.string().min(1),
        companyNameAr: z.string().optional(),
        contactName: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        category: z.enum(["hotels", "catering", "decoration", "photography", "transportation", "venues"]),
        services: z.array(z.string()).optional(),
        address: z.string().optional(),
        city: z.string().optional(),
        isEcoCertified: z.boolean().optional(),
        certifications: z.array(z.string()).optional(),
        sustainabilityPledge: z.boolean().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          return { success: true, message: "Registration submitted" };
        }
        
        const result = await db.insert(suppliers).values({
          ...input,
          services: input.services || [],
          certifications: input.certifications || [],
        });
        
        return { success: true, id: result[0].insertId, message: "Registration submitted" };
      }),
    
    // List approved suppliers
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) return [];
        
        const approvedSuppliers = await db
          .select()
          .from(suppliers)
          .where(eq(suppliers.status, 'approved'))
          .orderBy(desc(suppliers.rating));
        
        return approvedSuppliers;
      }),
    
    // Approve supplier (admin)
    approve: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.update(suppliers).set({
          status: 'approved',
          approvedAt: new Date(),
          approvedBy: ctx.user?.id,
        }).where(eq(suppliers.id, input.id));
        
        return { success: true };
      }),
  }),
  
  // ============================================
  // VOLUNTEERS
  // ============================================
  volunteers: router({
    // Register volunteer
    register: publicProcedure
      .input(z.object({
        name: z.string().min(1),
        email: z.string().email(),
        phone: z.string().min(1),
        eventId: z.string().optional(),
        eventName: z.string().optional(),
        tshirtSize: z.enum(["S", "M", "L", "XL", "XXL"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) {
          return { success: true, message: "Registration successful" };
        }
        
        const result = await db.insert(volunteers).values(input);
        return { success: true, id: result[0].insertId, message: "Registration successful" };
      }),
    
    // List volunteers (admin)
    list: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) return [];
      const allVolunteers = await db.select().from(volunteers).orderBy(desc(volunteers.createdAt));
      return allVolunteers;
    }),
  }),
  
  // ============================================
  // NOTIFICATIONS
  // ============================================
  notifications: router({
    // Get user notifications
    myNotifications: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) return [];
      
      const userNotifications = await db
        .select()
        .from(notifications)
        .where(eq(notifications.userId, ctx.user?.id))
        .orderBy(desc(notifications.createdAt));
      
      return userNotifications;
    }),
    
    // Mark as read
    markRead: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        await db.update(notifications).set({
          isRead: true,
          readAt: new Date(),
        }).where(eq(notifications.id, input.id));
        
        return { success: true };
      }),
    
    // Create notification (internal)
    create: protectedProcedure
      .input(z.object({
        userId: z.number(),
        type: z.enum(["booking_confirmation", "quote_sent", "payment_received", "event_reminder", "inquiry_received"]),
        title: z.string(),
        titleAr: z.string().optional(),
        message: z.string(),
        messageAr: z.string().optional(),
        bookingId: z.number().optional(),
        quoteId: z.number().optional(),
        eventId: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        
        const result = await db.insert(notifications).values(input);
        return { success: true, id: result[0].insertId };
      }),
  }),
  
  // ============================================
  // CALCULATOR (enhanced)
  // ============================================
  calculator: router({
    calculate: publicProcedure
      .input(z.object({
        eventType: z.string(),
        venueType: z.string(),
        cateringLevel: z.string(),
        decorationLevel: z.string(),
        guestCount: z.number().min(1).max(10000),
        packageTier: z.enum(["essential", "silver", "gold", "diamond"]).optional(),
        addOns: z.array(z.string()).optional(),
        currency: z.enum(["USD", "YER", "SAR"]).optional(),
      }))
      .mutation(async ({ input }) => {
        const { eventType, venueType, cateringLevel, decorationLevel, guestCount, packageTier, addOns: selectedAddOns, currency } = input;
        
        // Package tier multipliers
        const tierMultipliers: Record<string, number> = {
          essential: 1.0,
          silver: 1.3,
          gold: 1.6,
          diamond: 2.0,
        };
        
        // Base prices in USD
        const eventPrices: Record<string, { base: number; perGuest: number }> = {
          corporate: { base: 500, perGuest: 15 },
          wedding: { base: 1000, perGuest: 25 },
          conference: { base: 800, perGuest: 20 },
          government: { base: 1200, perGuest: 30 },
          tradeshow: { base: 1500, perGuest: 10 },
          kids: { base: 400, perGuest: 12 },
          healthcare: { base: 700, perGuest: 18 },
          banking: { base: 900, perGuest: 22 },
          ngo: { base: 600, perGuest: 15 },
          education: { base: 500, perGuest: 12 },
          entertainment: { base: 800, perGuest: 20 },
          construction: { base: 700, perGuest: 18 },
          energy: { base: 1000, perGuest: 25 },
          travel: { base: 600, perGuest: 15 },
          condolences: { base: 300, perGuest: 10 },
        };
        
        const venuePrices: Record<string, { base: number; perGuest: number }> = {
          indoor: { base: 200, perGuest: 5 },
          outdoor: { base: 300, perGuest: 7 },
          hotel: { base: 500, perGuest: 10 },
          beach: { base: 800, perGuest: 15 },
        };
        
        const cateringPrices: Record<string, { base: number; perGuest: number }> = {
          basic: { base: 0, perGuest: 10 },
          standard: { base: 100, perGuest: 20 },
          premium: { base: 300, perGuest: 35 },
          luxury: { base: 500, perGuest: 50 },
        };
        
        const decorationPrices: Record<string, { base: number; perGuest: number }> = {
          minimal: { base: 100, perGuest: 2 },
          standard: { base: 300, perGuest: 5 },
          elegant: { base: 600, perGuest: 8 },
          luxury: { base: 1000, perGuest: 12 },
        };
        
        // Add-on prices
        const addOnPrices: Record<string, number> = {
          'saffron-water': 150,
          'kids-corner': 300,
          'live-music': 500,
          'drone-photography': 400,
          'vip-lounge': 600,
          'fireworks': 800,
          'celebrity-mc': 1000,
          'luxury-transport': 700,
          'spa-wellness': 450,
          'cultural-performance': 350,
        };
        
        const event = eventPrices[eventType] || eventPrices.corporate;
        const venue = venuePrices[venueType] || venuePrices.indoor;
        const catering = cateringPrices[cateringLevel] || cateringPrices.standard;
        const decoration = decorationPrices[decorationLevel] || decorationPrices.standard;
        
        const eventCost = event.base + (event.perGuest * guestCount);
        const venueCost = venue.base + (venue.perGuest * guestCount);
        const cateringCost = catering.base + (catering.perGuest * guestCount);
        const decorationCost = decoration.base + (decoration.perGuest * guestCount);
        
        // Calculate add-ons cost
        let addOnsCost = 0;
        if (selectedAddOns && selectedAddOns.length > 0) {
          addOnsCost = selectedAddOns.reduce((sum, addon) => {
            return sum + (addOnPrices[addon] || 0);
          }, 0);
        }
        
        // Apply tier multiplier
        const tierMultiplier = packageTier ? tierMultipliers[packageTier] : 1.0;
        
        const baseCost = (eventCost + venueCost + cateringCost + decorationCost) * tierMultiplier;
        const subtotalUsd = baseCost + addOnsCost;
        const serviceFeeUsd = subtotalUsd * 0.15;
        const totalUsd = subtotalUsd + serviceFeeUsd;
        
        // Calculate sustainability score
        const sustainabilityScore = calculateSustainabilityScore(venueType, cateringLevel, selectedAddOns || []);
        
        // Calculate ROI for corporate events
        let roi = null;
        if (eventType === 'corporate' || eventType === 'conference' || eventType === 'tradeshow') {
          const avgRevenuePerGuest = 150; // Estimated revenue per guest
          const expectedRevenue = guestCount * avgRevenuePerGuest;
          roi = {
            expectedRevenue,
            roi: ((expectedRevenue - totalUsd) / totalUsd) * 100,
            breakEvenGuests: Math.ceil(totalUsd / avgRevenuePerGuest),
          };
        }
        
        return {
          breakdown: {
            eventCost,
            venueCost,
            cateringCost,
            decorationCost,
            addOnsCost,
            baseCost,
            subtotalUsd,
            serviceFeeUsd,
            tierMultiplier,
          },
          totalUsd,
          totalYer: totalUsd * USD_TO_YER,
          totalSar: totalUsd * USD_TO_SAR,
          exchangeRates: {
            USD_TO_YER,
            USD_TO_SAR,
          },
          sustainabilityScore,
          roi,
          perGuestCost: totalUsd / guestCount,
        };
      }),
      
    // Get pricing tiers
    tiers: publicProcedure.query(() => {
      return [
        {
          id: 'essential',
          name: 'Essential',
          nameAr: 'الأساسية',
          multiplier: 1.0,
          description: 'Basic event package with essential services',
          features: ['Basic setup', 'Standard catering', 'Basic decoration'],
        },
        {
          id: 'silver',
          name: 'Silver',
          nameAr: 'الفضية',
          multiplier: 1.3,
          description: 'Enhanced package with additional services',
          features: ['Enhanced setup', 'Premium catering', 'Elegant decoration', 'Photography'],
        },
        {
          id: 'gold',
          name: 'Gold',
          nameAr: 'الذهبية',
          multiplier: 1.6,
          description: 'Premium package with luxury services',
          features: ['Premium setup', 'Luxury catering', 'Luxury decoration', 'Photo + Video', 'Live music'],
        },
        {
          id: 'diamond',
          name: 'Diamond',
          nameAr: 'الماسية',
          multiplier: 2.0,
          description: 'Ultimate package with all premium services',
          features: ['VIP setup', 'Gourmet catering', 'Designer decoration', 'Full media coverage', 'Celebrity MC', 'Fireworks'],
        },
      ];
    }),
  }),
  
  // ============================================
  // DASHBOARD STATS
  // ============================================
  dashboard: router({
    stats: protectedProcedure.query(async () => {
      const db = await getDb();
      if (!db) {
        return {
          totalEvents: 0,
          totalBookings: 0,
          totalQuotes: 0,
          totalRevenue: 0,
          pendingInquiries: 0,
        };
      }
      
      const allEvents = await db.select().from(events);
      const allBookings = await db.select().from(bookings);
      const allQuotes = await db.select().from(quotes);
      const allInquiries = await db.select().from(inquiries);
      
      const totalRevenue = allBookings.reduce((sum, b) => {
        return sum + parseFloat(b.totalUsd || '0');
      }, 0);
      
      return {
        totalEvents: allEvents.length,
        totalBookings: allBookings.length,
        totalQuotes: allQuotes.length,
        totalRevenue,
        pendingInquiries: allInquiries.filter(i => i.status === 'new').length,
      };
    }),
  }),
});

// Helper function to calculate sustainability score
function calculateSustainabilityScore(venueType: string, cateringLevel: string, addOns: string[]): number {
  let score = 50; // Base score
  
  // Venue impact
  if (venueType === 'outdoor') score += 10;
  if (venueType === 'beach') score += 5;
  
  // Catering impact
  if (cateringLevel === 'basic') score += 10;
  if (cateringLevel === 'standard') score += 5;
  
  // Add-ons impact
  if (addOns.includes('cultural-performance')) score += 5;
  if (addOns.includes('spa-wellness')) score += 5;
  
  // Negative impacts
  if (addOns.includes('fireworks')) score -= 15;
  if (cateringLevel === 'luxury') score -= 5;
  
  return Math.max(0, Math.min(100, score));
}

// Default packages when DB is not available
function getDefaultPackages() {
  return [
    {
      id: 1,
      name: 'Essential Package',
      nameAr: 'الباقة الأساسية',
      tier: 'essential',
      eventType: 'all',
      description: 'Basic event package with essential services',
      basePriceUsd: '500',
      perGuestPriceUsd: '15',
      features: ['Basic setup', 'Standard catering', 'Basic decoration'],
      isActive: true,
    },
    {
      id: 2,
      name: 'Silver Package',
      nameAr: 'الباقة الفضية',
      tier: 'silver',
      eventType: 'all',
      description: 'Enhanced package with additional services',
      basePriceUsd: '1000',
      perGuestPriceUsd: '25',
      features: ['Enhanced setup', 'Premium catering', 'Elegant decoration', 'Photography'],
      isActive: true,
    },
    {
      id: 3,
      name: 'Gold Package',
      nameAr: 'الباقة الذهبية',
      tier: 'gold',
      eventType: 'all',
      description: 'Premium package with luxury services',
      basePriceUsd: '2000',
      perGuestPriceUsd: '40',
      features: ['Premium setup', 'Luxury catering', 'Luxury decoration', 'Photo + Video', 'Live music'],
      isActive: true,
    },
    {
      id: 4,
      name: 'Diamond Package',
      nameAr: 'الباقة الماسية',
      tier: 'diamond',
      eventType: 'all',
      description: 'Ultimate package with all premium services',
      basePriceUsd: '5000',
      perGuestPriceUsd: '75',
      features: ['VIP setup', 'Gourmet catering', 'Designer decoration', 'Full media coverage', 'Celebrity MC', 'Fireworks'],
      isActive: true,
    },
  ];
}

// Default products when DB is not available
function getDefaultProducts() {
  return [
    { id: 1, sku: 'GRN-BC-001', name: 'Business Cards', nameAr: 'بطاقات الأعمال', category: 'stationery', priceUsd: '50', isEcoFriendly: true, isActive: true },
    { id: 2, sku: 'GRN-LH-001', name: 'Letterhead', nameAr: 'ورق رسمي', category: 'stationery', priceUsd: '75', isEcoFriendly: true, isActive: true },
    { id: 3, sku: 'GRN-NB-001', name: 'Notebook A5', nameAr: 'دفتر ملاحظات', category: 'stationery', priceUsd: '25', isEcoFriendly: true, isActive: true },
    { id: 4, sku: 'GRN-TS-001', name: 'Staff T-Shirt', nameAr: 'قميص الموظفين', category: 'clothing', priceUsd: '35', isEcoFriendly: false, isActive: true },
    { id: 5, sku: 'GRN-PL-001', name: 'Polo Shirt', nameAr: 'قميص بولو', category: 'clothing', priceUsd: '45', isEcoFriendly: false, isActive: true },
    { id: 6, sku: 'GRN-TB-001', name: 'Tote Bag', nameAr: 'حقيبة تسوق', category: 'bags', priceUsd: '20', isEcoFriendly: true, isActive: true },
    { id: 7, sku: 'GRN-BB-001', name: 'Business Bag', nameAr: 'حقيبة رسمية', category: 'bags', priceUsd: '85', isEcoFriendly: false, isActive: true },
    { id: 8, sku: 'GRN-CP-001', name: 'Cap', nameAr: 'قبعة', category: 'clothing', priceUsd: '15', isEcoFriendly: false, isActive: true },
    { id: 9, sku: 'GRN-PN-001', name: 'Executive Pen', nameAr: 'قلم تنفيذي', category: 'accessories', priceUsd: '30', isEcoFriendly: false, isActive: true },
    { id: 10, sku: 'GRN-WL-001', name: 'Luxury Wallet', nameAr: 'محفظة فاخرة', category: 'accessories', priceUsd: '65', isEcoFriendly: false, isActive: true },
  ];
}

// Default add-ons when DB is not available
function getDefaultAddOns() {
  return [
    { id: 1, name: 'Saffron Water Welcome', nameAr: 'استقبال بماء الزعفران', category: 'premium', priceUsd: '150', priceType: 'flat', icon: 'Droplets', isActive: true },
    { id: 2, name: 'Kids Corner', nameAr: 'ركن الأطفال', category: 'entertainment', priceUsd: '300', priceType: 'flat', icon: 'Baby', isActive: true },
    { id: 3, name: 'Live Music', nameAr: 'موسيقى حية', category: 'entertainment', priceUsd: '500', priceType: 'flat', icon: 'Music', isActive: true },
    { id: 4, name: 'Drone Photography', nameAr: 'تصوير بالدرون', category: 'premium', priceUsd: '400', priceType: 'flat', icon: 'Camera', isActive: true },
    { id: 5, name: 'VIP Lounge', nameAr: 'صالة VIP', category: 'premium', priceUsd: '600', priceType: 'flat', icon: 'Crown', isActive: true },
    { id: 6, name: 'Fireworks Display', nameAr: 'عرض الألعاب النارية', category: 'entertainment', priceUsd: '800', priceType: 'flat', icon: 'Sparkles', isActive: true },
    { id: 7, name: 'Celebrity MC', nameAr: 'مقدم مشهور', category: 'premium', priceUsd: '1000', priceType: 'flat', icon: 'Star', isActive: true },
    { id: 8, name: 'Luxury Transport', nameAr: 'نقل فاخر', category: 'premium', priceUsd: '700', priceType: 'flat', icon: 'Car', isActive: true },
    { id: 9, name: 'Spa & Wellness', nameAr: 'سبا وعافية', category: 'wellness', priceUsd: '450', priceType: 'flat', icon: 'Heart', isActive: true },
    { id: 10, name: 'Cultural Performance', nameAr: 'عرض ثقافي', category: 'cultural', priceUsd: '350', priceType: 'flat', icon: 'Theater', isActive: true },
  ];
}
