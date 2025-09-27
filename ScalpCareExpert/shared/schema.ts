import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const consultationBookings = pgTable("consultation_bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  consultationType: text("consultation_type").notNull(), // "essential", "premium", "vip"
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  preferredDate: text("preferred_date"),
  preferredTime: text("preferred_time"),
  message: text("message"),
  status: text("status").notNull().default("pending"), // "pending", "confirmed", "completed", "cancelled"
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  fullName: text("full_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  status: text("status").notNull().default("new"), // "new", "read", "responded"
  createdAt: timestamp("created_at").notNull().default(sql`now()`),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const consultationTypeEnum = z.enum(["essential", "premium", "vip"]);

export const insertConsultationBookingSchema = createInsertSchema(consultationBookings).omit({
  id: true,
  status: true,
  createdAt: true,
}).extend({
  consultationType: consultationTypeEnum,
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({
  id: true,
  status: true,
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type ConsultationBooking = typeof consultationBookings.$inferSelect;
export type InsertConsultationBooking = z.infer<typeof insertConsultationBookingSchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;
export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
