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
  eventType: text("event_type").notNull(), // corporate, wedding, conference, government, tradeshow
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
  
  description: text("description"),
  descriptionAr: text("description_ar"),
  
  basePriceUsd: decimal("base_price_usd", { precision: 10, scale: 2 }),
  perGuestPriceUsd: decimal("per_guest_price_usd", { precision: 10, scale: 2 }),
  
  features: jsonb("features"), // Array of included features
  isActive: boolean("is_active").default(true),
  
  createdAt: timestamp("created_at").defaultNow(),
});

// Zod schemas for validation
export const insertUserSchema = createInsertSchema(users);
export const selectUserSchema = createSelectSchema(users);

export const insertEventSchema = createInsertSchema(events, {
  title: z.string().min(1, "Event title is required"),
  eventType: z.enum(["corporate", "wedding", "conference", "government", "tradeshow"]),
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

// Types
export type User = z.infer<typeof selectUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;

export type Event = z.infer<typeof selectEventSchema>;
export type InsertEvent = z.infer<typeof insertEventSchema>;

export type Inquiry = z.infer<typeof selectInquirySchema>;
export type InsertInquiry = z.infer<typeof insertInquirySchema>;

export type EventMilestone = z.infer<typeof selectMilestoneSchema>;
export type InsertMilestone = z.infer<typeof insertMilestoneSchema>;
