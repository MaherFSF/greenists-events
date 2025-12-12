import { z } from "zod";
import { getDb } from "./db";
import { events, inquiries, eventMilestones, eventPackages } from "../drizzle/schema";
import { eq, desc } from "drizzle-orm";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";

// Exchange rate constant
const USD_TO_YER = 1700;

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
        eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment"]),
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
        eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment"]).optional(),
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
      if (!db) return [];
      const packages = await db
        .select()
        .from(eventPackages)
        .where(eq(eventPackages.isActive, true));
      return packages;
    }),
  }),
  
  // ============================================
  // CALCULATOR (no DB needed)
  // ============================================
  calculator: router({
    calculate: publicProcedure
      .input(z.object({
        eventType: z.string(),
        venueType: z.string(),
        cateringLevel: z.string(),
        decorationLevel: z.string(),
        guestCount: z.number().min(1).max(10000),
      }))
      .mutation(async ({ input }) => {
        const { eventType, venueType, cateringLevel, decorationLevel, guestCount } = input;
        
        // Base prices in USD
        const eventPrices: Record<string, { base: number; perGuest: number }> = {
          corporate: { base: 500, perGuest: 15 },
          wedding: { base: 1000, perGuest: 25 },
          conference: { base: 800, perGuest: 20 },
          government: { base: 1200, perGuest: 30 },
          tradeshow: { base: 1500, perGuest: 10 },
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
        
        const event = eventPrices[eventType] || eventPrices.corporate;
        const venue = venuePrices[venueType] || venuePrices.indoor;
        const catering = cateringPrices[cateringLevel] || cateringPrices.standard;
        const decoration = decorationPrices[decorationLevel] || decorationPrices.standard;
        
        const eventCost = event.base + (event.perGuest * guestCount);
        const venueCost = venue.base + (venue.perGuest * guestCount);
        const cateringCost = catering.base + (catering.perGuest * guestCount);
        const decorationCost = decoration.base + (decoration.perGuest * guestCount);
        
        const subtotalUsd = eventCost + venueCost + cateringCost + decorationCost;
        const serviceFeeUsd = subtotalUsd * 0.15;
        const totalUsd = subtotalUsd + serviceFeeUsd;
        const totalYer = totalUsd * USD_TO_YER;
        
        return {
          breakdown: {
            eventCost,
            venueCost,
            cateringCost,
            decorationCost,
            subtotalUsd,
            serviceFeeUsd,
          },
          totalUsd,
          totalYer,
          exchangeRate: USD_TO_YER,
        };
      }),
  }),
});
