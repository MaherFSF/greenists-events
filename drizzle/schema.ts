import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extended with additional fields for Greenists clients.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 32 }),
  company: varchar("company", { length: 255 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin", "staff", "client"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Events table - stores all event bookings
 */
export const events = mysqlTable("events", {
  id: int("id").autoincrement().primaryKey(),
  clientId: int("clientId").references(() => users.id),
  
  // Event details
  title: varchar("title", { length: 255 }).notNull(),
  titleAr: varchar("titleAr", { length: 255 }),
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]).notNull(),
  description: text("description"),
  descriptionAr: text("descriptionAr"),
  
  // Date and location
  eventDate: timestamp("eventDate"),
  endDate: timestamp("endDate"),
  venue: varchar("venue", { length: 255 }),
  venueType: mysqlEnum("venueType", ["indoor", "outdoor", "hotel", "beach"]),
  address: text("address"),
  
  // Guest and budget info
  guestCount: int("guestCount"),
  cateringLevel: mysqlEnum("cateringLevel", ["basic", "standard", "premium", "luxury"]),
  decorationLevel: mysqlEnum("decorationLevel", ["minimal", "standard", "elegant", "luxury"]),
  
  // Pricing (in USD)
  estimatedCostUsd: decimal("estimatedCostUsd", { precision: 10, scale: 2 }),
  finalCostUsd: decimal("finalCostUsd", { precision: 10, scale: 2 }),
  depositPaid: decimal("depositPaid", { precision: 10, scale: 2 }),
  
  // Status tracking
  status: mysqlEnum("status", ["inquiry", "confirmed", "planning", "in_progress", "completed", "cancelled"]).default("inquiry").notNull(),
  progress: int("progress").default(0), // 0-100 percentage
  
  // Metadata
  notes: text("notes"),
  attachments: json("attachments"), // Array of file URLs
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Event = typeof events.$inferSelect;
export type InsertEvent = typeof events.$inferInsert;

/**
 * Event milestones/tasks for tracking progress
 */
export const eventMilestones = mysqlTable("eventMilestones", {
  id: int("id").autoincrement().primaryKey(),
  eventId: int("eventId").references(() => events.id),
  
  title: varchar("title", { length: 255 }).notNull(),
  titleAr: varchar("titleAr", { length: 255 }),
  description: text("description"),
  
  dueDate: timestamp("dueDate"),
  completedAt: timestamp("completedAt"),
  isCompleted: boolean("isCompleted").default(false),
  
  orderNum: int("orderNum").default(0),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EventMilestone = typeof eventMilestones.$inferSelect;
export type InsertMilestone = typeof eventMilestones.$inferInsert;

/**
 * Contact inquiries from the website
 */
export const inquiries = mysqlTable("inquiries", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }),
  subject: varchar("subject", { length: 255 }),
  message: text("message").notNull(),
  
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]),
  preferredDate: timestamp("preferredDate"),
  guestCount: int("guestCount"),
  
  status: mysqlEnum("status", ["new", "contacted", "converted", "closed"]).default("new").notNull(),
  assignedTo: int("assignedTo").references(() => users.id),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Inquiry = typeof inquiries.$inferSelect;
export type InsertInquiry = typeof inquiries.$inferInsert;

/**
 * Event packages/templates for quick pricing
 */
export const eventPackages = mysqlTable("eventPackages", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  nameAr: varchar("nameAr", { length: 255 }),
  tier: mysqlEnum("tier", ["essential", "silver", "gold", "diamond"]).notNull(),
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment", "kids", "healthcare", "banking", "ngo", "construction", "energy", "travel", "condolences"]).notNull(),
  
  description: text("description"),
  descriptionAr: text("descriptionAr"),
  
  basePriceUsd: decimal("basePriceUsd", { precision: 10, scale: 2 }),
  perGuestPriceUsd: decimal("perGuestPriceUsd", { precision: 10, scale: 2 }),
  maxGuests: int("maxGuests"),
  duration: varchar("duration", { length: 64 }),
  
  features: json("features"), // Array of included features
  isActive: boolean("isActive").default(true),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EventPackage = typeof eventPackages.$inferSelect;
export type InsertPackage = typeof eventPackages.$inferInsert;

/**
 * Quotes generated from calculator
 */
export const quotes = mysqlTable("quotes", {
  id: int("id").autoincrement().primaryKey(),
  quoteNumber: varchar("quoteNumber", { length: 32 }).notNull().unique(), // GRN-2025-0001 format
  
  // Client info (may be anonymous)
  clientId: int("clientId").references(() => users.id),
  clientName: varchar("clientName", { length: 255 }),
  clientEmail: varchar("clientEmail", { length: 320 }),
  clientPhone: varchar("clientPhone", { length: 32 }),
  clientCompany: varchar("clientCompany", { length: 255 }),
  
  // Event details
  eventType: varchar("eventType", { length: 64 }).notNull(),
  eventDate: timestamp("eventDate"),
  guestCount: int("guestCount").notNull(),
  venueType: varchar("venueType", { length: 64 }),
  cateringLevel: varchar("cateringLevel", { length: 64 }),
  decorationLevel: varchar("decorationLevel", { length: 64 }),
  
  // Add-ons selected
  addOns: json("addOns"), // Array of selected add-on IDs
  
  // Pricing breakdown
  baseCostUsd: decimal("baseCostUsd", { precision: 10, scale: 2 }),
  addOnsCostUsd: decimal("addOnsCostUsd", { precision: 10, scale: 2 }),
  subtotalUsd: decimal("subtotalUsd", { precision: 10, scale: 2 }),
  taxUsd: decimal("taxUsd", { precision: 10, scale: 2 }),
  totalUsd: decimal("totalUsd", { precision: 10, scale: 2 }),
  
  // Currency display
  displayCurrency: varchar("displayCurrency", { length: 8 }).default("USD"),
  exchangeRateYer: decimal("exchangeRateYer", { precision: 10, scale: 2 }).default("1700"),
  exchangeRateSar: decimal("exchangeRateSar", { precision: 10, scale: 4 }).default("3.75"),
  
  // ROI calculations (for corporate events)
  expectedRevenue: decimal("expectedRevenue", { precision: 10, scale: 2 }),
  expectedRoi: decimal("expectedRoi", { precision: 5, scale: 2 }),
  sustainabilityScore: int("sustainabilityScore"), // 0-100
  
  // PDF generation
  pdfUrl: text("pdfUrl"),
  pdfGeneratedAt: timestamp("pdfGeneratedAt"),
  
  // Status
  status: mysqlEnum("quoteStatus", ["draft", "sent", "viewed", "accepted", "expired"]).default("draft").notNull(),
  validUntil: timestamp("validUntil"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Quote = typeof quotes.$inferSelect;
export type InsertQuote = typeof quotes.$inferInsert;

/**
 * Bookings (confirmed events from quotes or direct)
 */
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  bookingCode: varchar("bookingCode", { length: 32 }).notNull().unique(), // GRN-BK-2025-0001 format
  
  // Link to quote if applicable
  quoteId: int("quoteId").references(() => quotes.id),
  eventId: int("eventId").references(() => events.id),
  
  // Client info
  clientId: int("clientId").references(() => users.id),
  clientName: varchar("clientName", { length: 255 }).notNull(),
  clientEmail: varchar("clientEmail", { length: 320 }).notNull(),
  clientPhone: varchar("clientPhone", { length: 32 }).notNull(),
  clientCompany: varchar("clientCompany", { length: 255 }),
  
  // Event details
  eventType: varchar("eventType", { length: 64 }).notNull(),
  eventTitle: varchar("eventTitle", { length: 255 }).notNull(),
  eventDate: timestamp("eventDate").notNull(),
  eventEndDate: timestamp("eventEndDate"),
  guestCount: int("guestCount").notNull(),
  venueType: varchar("venueType", { length: 64 }),
  venueAddress: text("venueAddress"),
  
  // Services selected
  packageTier: mysqlEnum("packageTier", ["essential", "silver", "gold", "diamond"]),
  cateringLevel: varchar("cateringLevel", { length: 64 }),
  decorationLevel: varchar("decorationLevel", { length: 64 }),
  addOns: json("addOns"),
  specialRequests: text("specialRequests"),
  
  // Pricing
  totalUsd: decimal("totalUsd", { precision: 10, scale: 2 }).notNull(),
  depositUsd: decimal("depositUsd", { precision: 10, scale: 2 }),
  depositPaidAt: timestamp("depositPaidAt"),
  balanceUsd: decimal("balanceUsd", { precision: 10, scale: 2 }),
  balancePaidAt: timestamp("balancePaidAt"),
  
  // Status
  status: mysqlEnum("bookingStatus", ["pending", "confirmed", "deposit_paid", "in_progress", "completed", "cancelled"]).default("pending").notNull(),
  confirmedAt: timestamp("confirmedAt"),
  cancelledAt: timestamp("cancelledAt"),
  cancellationReason: text("cancellationReason"),
  
  // Assigned staff
  coordinatorId: int("coordinatorId").references(() => users.id),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;

/**
 * Products for store
 */
export const products = mysqlTable("products", {
  id: int("id").autoincrement().primaryKey(),
  sku: varchar("sku", { length: 64 }).notNull().unique(),
  
  name: varchar("name", { length: 255 }).notNull(),
  nameAr: varchar("nameAr", { length: 255 }),
  description: text("description"),
  descriptionAr: text("descriptionAr"),
  
  category: mysqlEnum("category", ["stationery", "clothing", "bags", "promotional", "accessories"]).notNull(),
  subcategory: varchar("subcategory", { length: 64 }),
  
  priceUsd: decimal("priceUsd", { precision: 10, scale: 2 }).notNull(),
  costUsd: decimal("costUsd", { precision: 10, scale: 2 }),
  
  imageUrl: text("imageUrl"),
  images: json("images"), // Array of image URLs
  
  stockQuantity: int("stockQuantity").default(0),
  minOrderQuantity: int("minOrderQuantity").default(1),
  
  isEcoFriendly: boolean("isEcoFriendly").default(false),
  isActive: boolean("isActive").default(true),
  isFeatured: boolean("isFeatured").default(false),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Product = typeof products.$inferSelect;
export type InsertProduct = typeof products.$inferInsert;

/**
 * Add-ons for events
 */
export const addOns = mysqlTable("addOns", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  nameAr: varchar("nameAr", { length: 255 }),
  description: text("description"),
  descriptionAr: text("descriptionAr"),
  
  category: mysqlEnum("addOnCategory", ["premium", "entertainment", "wellness", "cultural", "sustainability"]).notNull(),
  
  priceUsd: decimal("priceUsd", { precision: 10, scale: 2 }).notNull(),
  priceType: mysqlEnum("priceType", ["flat", "per_guest", "per_hour"]).default("flat").notNull(),
  
  imageUrl: text("imageUrl"),
  icon: varchar("icon", { length: 64 }), // Lucide icon name
  
  isActive: boolean("isActive").default(true),
  sortOrder: int("sortOrder").default(0),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type AddOn = typeof addOns.$inferSelect;
export type InsertAddOn = typeof addOns.$inferInsert;

/**
 * Notifications
 */
export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  
  userId: int("userId").references(() => users.id),
  
  type: mysqlEnum("notificationType", ["booking_confirmation", "quote_sent", "payment_received", "event_reminder", "inquiry_received"]).notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  titleAr: varchar("titleAr", { length: 255 }),
  message: text("message").notNull(),
  messageAr: text("messageAr"),
  
  // Related entities
  bookingId: int("bookingId").references(() => bookings.id),
  quoteId: int("quoteId").references(() => quotes.id),
  eventId: int("eventId").references(() => events.id),
  
  // Email tracking
  emailSent: boolean("emailSent").default(false),
  emailSentAt: timestamp("emailSentAt"),
  emailError: text("emailError"),
  
  isRead: boolean("isRead").default(false),
  readAt: timestamp("readAt"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;

/**
 * Email templates
 */
export const emailTemplates = mysqlTable("emailTemplates", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 64 }).notNull().unique(),
  subject: varchar("subject", { length: 255 }).notNull(),
  subjectAr: varchar("subjectAr", { length: 255 }),
  
  bodyHtml: text("bodyHtml").notNull(),
  bodyHtmlAr: text("bodyHtmlAr"),
  bodyText: text("bodyText"),
  bodyTextAr: text("bodyTextAr"),
  
  variables: json("variables"), // Array of variable names used in template
  
  isActive: boolean("isActive").default(true),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type EmailTemplate = typeof emailTemplates.$inferSelect;
export type InsertEmailTemplate = typeof emailTemplates.$inferInsert;

/**
 * Suppliers
 */
export const suppliers = mysqlTable("suppliers", {
  id: int("id").autoincrement().primaryKey(),
  
  companyName: varchar("companyName", { length: 255 }).notNull(),
  companyNameAr: varchar("companyNameAr", { length: 255 }),
  contactName: varchar("contactName", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  
  category: mysqlEnum("supplierCategory", ["hotels", "catering", "decoration", "photography", "transportation", "venues"]).notNull(),
  services: json("services"), // Array of specific services offered
  
  address: text("address"),
  city: varchar("city", { length: 64 }),
  
  // Sustainability
  isEcoCertified: boolean("isEcoCertified").default(false),
  certifications: json("certifications"), // Array of certification names
  sustainabilityPledge: boolean("sustainabilityPledge").default(false),
  
  // Status
  status: mysqlEnum("supplierStatus", ["pending", "approved", "rejected", "suspended"]).default("pending").notNull(),
  approvedAt: timestamp("approvedAt"),
  approvedBy: int("approvedBy").references(() => users.id),
  
  rating: decimal("rating", { precision: 3, scale: 2 }),
  reviewCount: int("reviewCount").default(0),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Supplier = typeof suppliers.$inferSelect;
export type InsertSupplier = typeof suppliers.$inferInsert;

/**
 * Volunteer registrations
 */
export const volunteers = mysqlTable("volunteers", {
  id: int("id").autoincrement().primaryKey(),
  
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 32 }).notNull(),
  
  eventId: varchar("eventId", { length: 64 }), // Beach cleanup event ID
  eventName: varchar("eventName", { length: 255 }),
  
  tshirtSize: mysqlEnum("tshirtSize", ["S", "M", "L", "XL", "XXL"]),
  
  status: mysqlEnum("volunteerStatus", ["registered", "confirmed", "attended", "no_show"]).default("registered").notNull(),
  confirmedAt: timestamp("confirmedAt"),
  attendedAt: timestamp("attendedAt"),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Volunteer = typeof volunteers.$inferSelect;
export type InsertVolunteer = typeof volunteers.$inferInsert;
