import { pgTable, text, integer, timestamp, boolean, decimal, uuid, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

// Users table (extended from template)
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  openId: text("open_id").unique(),
  name: text("name"),
  email: text("email"),
  avatarUrl: text("avatar_url"),
  role: text("role").default("client"), // client, staff, admin
  phone: text("phone"),
  company: text("company"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Events table
export const events = pgTable("events", {
  id: uuid("id").defaultRandom().primaryKey(),
  clientId: text("client_id").references(() => users.id),
  
  // Event details
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  eventType: text("event_type").notNull(), // corporate, wedding, conference, government, tradeshow, kids, healthcare, banking, ngo, education, entertainment, construction, energy, travel, condolences
  description: text("description"),
  descriptionAr: text("description_ar"),
  
  // Date and location
  eventDate: timestamp("event_date"),
  endDate: timestamp("end_date"),
  venue: text("venue"),
  venueType: text("venue_type"), // indoor, outdoor, hotel, beach
  address: text("address"),
  
  // Guest and budget info
  guestCount: integer("guest_count"),
  cateringLevel: text("catering_level"), // basic, standard, premium, luxury
  decorationLevel: text("decoration_level"), // minimal, standard, elegant, luxury
  
  // Pricing (in USD)
  estimatedCostUsd: decimal("estimated_cost_usd", { precision: 10, scale: 2 }),
  finalCostUsd: decimal("final_cost_usd", { precision: 10, scale: 2 }),
  depositPaid: decimal("deposit_paid", { precision: 10, scale: 2 }),
  
  // Status tracking
  status: text("status").default("inquiry"), // inquiry, confirmed, planning, in_progress, completed, cancelled
  progress: integer("progress").default(0), // 0-100 percentage
  
  // Metadata
  notes: text("notes"),
  attachments: jsonb("attachments"), // Array of file URLs
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Event milestones/tasks
export const eventMilestones = pgTable("event_milestones", {
  id: uuid("id").defaultRandom().primaryKey(),
  eventId: uuid("event_id").references(() => events.id),
  
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  description: text("description"),
  
  dueDate: timestamp("due_date"),
  completedAt: timestamp("completed_at"),
  isCompleted: boolean("is_completed").default(false),
  
  order: integer("order").default(0),
  createdAt: timestamp("created_at").defaultNow(),
});

// Contact inquiries
export const inquiries = pgTable("inquiries", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  subject: text("subject"),
  message: text("message").notNull(),
  
  eventType: text("event_type"),
  preferredDate: timestamp("preferred_date"),
  guestCount: integer("guest_count"),
  
  status: text("status").default("new"), // new, contacted, converted, closed
  assignedTo: text("assigned_to").references(() => users.id),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Event packages/templates
export const eventPackages = pgTable("event_packages", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull(),
  nameAr: text("name_ar"),
  eventType: text("event_type").notNull(),
  tier: text("tier").notNull(), // essential, silver, gold, diamond
  
  description: text("description"),
  descriptionAr: text("description_ar"),
  
  basePriceUsd: decimal("base_price_usd", { precision: 10, scale: 2 }),
  perGuestPriceUsd: decimal("per_guest_price_usd", { precision: 10, scale: 2 }),
  maxGuests: integer("max_guests"),
  duration: text("duration"), // e.g., "4 hours", "8 hours", "multi-day"
  
  features: jsonb("features"), // Array of included features
  isActive: boolean("is_active").default(true),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Quotes generated from calculator
export const quotes = pgTable("quotes", {
  id: uuid("id").defaultRandom().primaryKey(),
  quoteNumber: text("quote_number").notNull().unique(), // GRN-2025-0001 format
  
  // Client info (may be anonymous)
  clientId: text("client_id").references(() => users.id),
  clientName: text("client_name"),
  clientEmail: text("client_email"),
  clientPhone: text("client_phone"),
  clientCompany: text("client_company"),
  
  // Event details
  eventType: text("event_type").notNull(),
  eventDate: timestamp("event_date"),
  guestCount: integer("guest_count").notNull(),
  venueType: text("venue_type"),
  cateringLevel: text("catering_level"),
  decorationLevel: text("decoration_level"),
  
  // Add-ons selected
  addOns: jsonb("add_ons"), // Array of selected add-on IDs
  
  // Pricing breakdown
  baseCostUsd: decimal("base_cost_usd", { precision: 10, scale: 2 }),
  addOnsCostUsd: decimal("add_ons_cost_usd", { precision: 10, scale: 2 }),
  subtotalUsd: decimal("subtotal_usd", { precision: 10, scale: 2 }),
  taxUsd: decimal("tax_usd", { precision: 10, scale: 2 }),
  totalUsd: decimal("total_usd", { precision: 10, scale: 2 }),
  
  // Currency display
  displayCurrency: text("display_currency").default("USD"), // USD, YER, SAR
  exchangeRateYer: decimal("exchange_rate_yer", { precision: 10, scale: 2 }).default("1700"),
  exchangeRateSar: decimal("exchange_rate_sar", { precision: 10, scale: 4 }).default("3.75"),
  
  // ROI calculations (for corporate events)
  expectedRevenue: decimal("expected_revenue", { precision: 10, scale: 2 }),
  expectedRoi: decimal("expected_roi", { precision: 5, scale: 2 }),
  sustainabilityScore: integer("sustainability_score"), // 0-100
  
  // PDF generation
  pdfUrl: text("pdf_url"),
  pdfGeneratedAt: timestamp("pdf_generated_at"),
  
  // Status
  status: text("status").default("draft"), // draft, sent, viewed, accepted, expired
  validUntil: timestamp("valid_until"),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Bookings (confirmed events from quotes or direct)
export const bookings = pgTable("bookings", {
  id: uuid("id").defaultRandom().primaryKey(),
  bookingCode: text("booking_code").notNull().unique(), // GRN-BK-2025-0001 format
  
  // Link to quote if applicable
  quoteId: uuid("quote_id").references(() => quotes.id),
  eventId: uuid("event_id").references(() => events.id),
  
  // Client info
  clientId: text("client_id").references(() => users.id),
  clientName: text("client_name").notNull(),
  clientEmail: text("client_email").notNull(),
  clientPhone: text("client_phone").notNull(),
  clientCompany: text("client_company"),
  
  // Event details
  eventType: text("event_type").notNull(),
  eventTitle: text("event_title").notNull(),
  eventDate: timestamp("event_date").notNull(),
  eventEndDate: timestamp("event_end_date"),
  guestCount: integer("guest_count").notNull(),
  venueType: text("venue_type"),
  venueAddress: text("venue_address"),
  
  // Services selected
  packageTier: text("package_tier"), // essential, silver, gold, diamond
  cateringLevel: text("catering_level"),
  decorationLevel: text("decoration_level"),
  addOns: jsonb("add_ons"),
  specialRequests: text("special_requests"),
  
  // Pricing
  totalUsd: decimal("total_usd", { precision: 10, scale: 2 }).notNull(),
  depositUsd: decimal("deposit_usd", { precision: 10, scale: 2 }),
  depositPaidAt: timestamp("deposit_paid_at"),
  balanceUsd: decimal("balance_usd", { precision: 10, scale: 2 }),
  balancePaidAt: timestamp("balance_paid_at"),
  
  // Status
  status: text("status").default("pending"), // pending, confirmed, deposit_paid, in_progress, completed, cancelled
  confirmedAt: timestamp("confirmed_at"),
  cancelledAt: timestamp("cancelled_at"),
  cancellationReason: text("cancellation_reason"),
  
  // Assigned staff
  coordinatorId: text("coordinator_id").references(() => users.id),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Products for store
export const products = pgTable("products", {
  id: uuid("id").defaultRandom().primaryKey(),
  sku: text("sku").notNull().unique(),
  
  name: text("name").notNull(),
  nameAr: text("name_ar"),
  description: text("description"),
  descriptionAr: text("description_ar"),
  
  category: text("category").notNull(), // stationery, clothing, bags, promotional, accessories
  subcategory: text("subcategory"),
  
  priceUsd: decimal("price_usd", { precision: 10, scale: 2 }).notNull(),
  costUsd: decimal("cost_usd", { precision: 10, scale: 2 }),
  
  imageUrl: text("image_url"),
  images: jsonb("images"), // Array of image URLs
  
  stockQuantity: integer("stock_quantity").default(0),
  minOrderQuantity: integer("min_order_quantity").default(1),
  
  isEcoFriendly: boolean("is_eco_friendly").default(false),
  isActive: boolean("is_active").default(true),
  isFeatured: boolean("is_featured").default(false),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Add-ons for events
export const addOns = pgTable("add_ons", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull(),
  nameAr: text("name_ar"),
  description: text("description"),
  descriptionAr: text("description_ar"),
  
  category: text("category").notNull(), // premium, entertainment, wellness, cultural, sustainability
  
  priceUsd: decimal("price_usd", { precision: 10, scale: 2 }).notNull(),
  priceType: text("price_type").default("flat"), // flat, per_guest, per_hour
  
  imageUrl: text("image_url"),
  icon: text("icon"), // Lucide icon name
  
  isActive: boolean("is_active").default(true),
  sortOrder: integer("sort_order").default(0),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Notifications
export const notifications = pgTable("notifications", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  userId: text("user_id").references(() => users.id),
  
  type: text("type").notNull(), // booking_confirmation, quote_sent, payment_received, event_reminder, inquiry_received
  title: text("title").notNull(),
  titleAr: text("title_ar"),
  message: text("message").notNull(),
  messageAr: text("message_ar"),
  
  // Related entities
  bookingId: uuid("booking_id").references(() => bookings.id),
  quoteId: uuid("quote_id").references(() => quotes.id),
  eventId: uuid("event_id").references(() => events.id),
  
  // Email tracking
  emailSent: boolean("email_sent").default(false),
  emailSentAt: timestamp("email_sent_at"),
  emailError: text("email_error"),
  
  isRead: boolean("is_read").default(false),
  readAt: timestamp("read_at"),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Email templates
export const emailTemplates = pgTable("email_templates", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull().unique(),
  subject: text("subject").notNull(),
  subjectAr: text("subject_ar"),
  
  bodyHtml: text("body_html").notNull(),
  bodyHtmlAr: text("body_html_ar"),
  bodyText: text("body_text"),
  bodyTextAr: text("body_text_ar"),
  
  variables: jsonb("variables"), // Array of variable names used in template
  
  isActive: boolean("is_active").default(true),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Suppliers
export const suppliers = pgTable("suppliers", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  companyName: text("company_name").notNull(),
  companyNameAr: text("company_name_ar"),
  contactName: text("contact_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  
  category: text("category").notNull(), // hotels, catering, decoration, photography, transportation, venues
  services: jsonb("services"), // Array of specific services offered
  
  address: text("address"),
  city: text("city"),
  
  // Sustainability
  isEcoCertified: boolean("is_eco_certified").default(false),
  certifications: jsonb("certifications"), // Array of certification names
  sustainabilityPledge: boolean("sustainability_pledge").default(false),
  
  // Status
  status: text("status").default("pending"), // pending, approved, rejected, suspended
  approvedAt: timestamp("approved_at"),
  approvedBy: text("approved_by").references(() => users.id),
  
  rating: decimal("rating", { precision: 3, scale: 2 }),
  reviewCount: integer("review_count").default(0),
  
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Volunteer registrations
export const volunteers = pgTable("volunteers", {
  id: uuid("id").defaultRandom().primaryKey(),
  
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  
  eventId: text("event_id"), // Beach cleanup event ID
  eventName: text("event_name"),
  
  tshirtSize: text("tshirt_size"), // S, M, L, XL, XXL
  
  status: text("status").default("registered"), // registered, confirmed, attended, no_show
  confirmedAt: timestamp("confirmed_at"),
  attendedAt: timestamp("attended_at"),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertEventSchema = createInsertSchema(events, {
  title: z.string().min(1, "Event title is required"),
  eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow", "kids", "healthcare", "banking", "ngo", "education", "entertainment", "construction", "energy", "travel", "condolences"]),
  guestCount: z.number().min(1).max(10000).optional(),
});
export const selectEventSchema = createSelectSchema(events);

export const insertInquirySchema = createInsertSchema(inquiries, {
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});
export const selectInquirySchema = createSelectSchema(inquiries);

export const insertMilestoneSchema = createInsertSchema(eventMilestones);
export const selectMilestoneSchema = createSelectSchema(eventMilestones);

export const insertQuoteSchema = createInsertSchema(quotes, {
  eventType: z.string().min(1, "Event type is required"),
  guestCount: z.number().min(1, "Guest count is required"),
});
export const selectQuoteSchema = createSelectSchema(quotes);

export const insertBookingSchema = createInsertSchema(bookings, {
  clientName: z.string().min(1, "Client name is required"),
  clientEmail: z.string().email("Valid email is required"),
  clientPhone: z.string().min(1, "Phone is required"),
  eventType: z.string().min(1, "Event type is required"),
  eventTitle: z.string().min(1, "Event title is required"),
  guestCount: z.number().min(1, "Guest count is required"),
});
export const selectBookingSchema = createSelectSchema(bookings);

export const insertProductSchema = createInsertSchema(products, {
  name: z.string().min(1, "Product name is required"),
  sku: z.string().min(1, "SKU is required"),
  category: z.string().min(1, "Category is required"),
});
export const selectProductSchema = createSelectSchema(products);

export const insertAddOnSchema = createInsertSchema(addOns, {
  name: z.string().min(1, "Add-on name is required"),
  category: z.string().min(1, "Category is required"),
});
export const selectAddOnSchema = createSelectSchema(addOns);

export const insertNotificationSchema = createInsertSchema(notifications);
export const selectNotificationSchema = createSelectSchema(notifications);

export const insertSupplierSchema = createInsertSchema(suppliers, {
  companyName: z.string().min(1, "Company name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
  category: z.string().min(1, "Category is required"),
});
export const selectSupplierSchema = createSelectSchema(suppliers);

export const insertVolunteerSchema = createInsertSchema(volunteers, {
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(1, "Phone is required"),
});
export const selectVolunteerSchema = createSelectSchema(volunteers);

// Types
export type User = z.infer<typeof selectUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Event = z.infer<typeof selectEventSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;

export type Inquiry = z.infer<typeof selectInquirySchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type EventMilestone = z.infer<typeof selectMilestoneSchema>;
export type InsertMilestone = z.infer<typeof insertMilestoneSchema>;

export type Quote = z.infer<typeof selectQuoteSchema>;
export type InsertQuote = z.infer<typeof insertQuoteSchema>;

export type Booking = z.infer<typeof selectBookingSchema>;
export type InsertBooking = z.infer<typeof insertBookingSchema>;

export type Product = z.infer<typeof selectProductSchema>;
export type InsertProduct = z.infer<typeof insertProductSchema>;

export type AddOn = z.infer<typeof selectAddOnSchema>;
export type InsertAddOn = z.infer<typeof insertAddOnSchema>;

export type Notification = z.infer<typeof selectNotificationSchema>;
export type InsertNotification = z.infer<typeof insertNotificationSchema>;

export type Supplier = z.infer<typeof selectSupplierSchema>;
export type InsertSupplier = z.infer<typeof insertSupplierSchema>;

export type Volunteer = z.infer<typeof selectVolunteerSchema>;
export type InsertVolunteer = z.infer<typeof insertVolunteerSchema>;
