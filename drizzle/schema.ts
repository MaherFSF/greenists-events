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
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment"]).notNull(),
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
  
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment"]),
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
  eventType: mysqlEnum("eventType", ["corporate", "wedding", "conference", "government", "tradeshow", "educational", "entertainment"]).notNull(),
  
  description: text("description"),
  descriptionAr: text("descriptionAr"),
  
  basePriceUsd: decimal("basePriceUsd", { precision: 10, scale: 2 }),
  perGuestPriceUsd: decimal("perGuestPriceUsd", { precision: 10, scale: 2 }),
  
  features: json("features"), // Array of included features
  isActive: boolean("isActive").default(true),
  
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EventPackage = typeof eventPackages.$inferSelect;
export type InsertPackage = typeof eventPackages.$inferInsert;
