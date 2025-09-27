import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertConsultationBookingSchema, insertContactInquirySchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Consultation booking endpoint
  app.post("/api/consultations/book", async (req, res) => {
    try {
      const validatedData = insertConsultationBookingSchema.parse(req.body);
      const booking = await storage.createConsultationBooking(validatedData);
      
      // Log the booking for demonstration (remove in production)
      console.log("New consultation booking:", {
        id: booking.id,
        type: booking.consultationType,
        name: booking.fullName,
        email: booking.email,
        date: booking.preferredDate,
        time: booking.preferredTime
      });
      
      res.status(201).json({
        success: true,
        message: "Consultation booking submitted successfully. We'll contact you within 4 hours to confirm your appointment.",
        bookingId: booking.id
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        const validationError = fromZodError(error as any);
        res.status(400).json({
          success: false,
          message: "Invalid booking data",
          errors: validationError.details
        });
      } else {
        console.error("Booking error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to submit booking. Please try again."
        });
      }
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactInquirySchema.parse(req.body);
      const inquiry = await storage.createContactInquiry(validatedData);
      
      // Log the inquiry for demonstration (remove in production)
      console.log("New contact inquiry:", {
        id: inquiry.id,
        name: inquiry.fullName,
        email: inquiry.email,
        message: inquiry.message.substring(0, 100) + (inquiry.message.length > 100 ? "..." : "")
      });
      
      res.status(201).json({
        success: true,
        message: "Your message has been sent successfully. We'll respond within 4 hours during business days.",
        inquiryId: inquiry.id
      });
    } catch (error) {
      if (error instanceof Error && error.name === "ZodError") {
        const validationError = fromZodError(error as any);
        res.status(400).json({
          success: false,
          message: "Invalid contact data",
          errors: validationError.details
        });
      } else {
        console.error("Contact error:", error);
        res.status(500).json({
          success: false,
          message: "Failed to send message. Please try again."
        });
      }
    }
  });

  // Get all bookings (for admin purposes)
  app.get("/api/consultations", async (req, res) => {
    try {
      const bookings = await storage.getConsultationBookings();
      res.json({
        success: true,
        bookings: bookings
      });
    } catch (error) {
      console.error("Get bookings error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve bookings"
      });
    }
  });

  // Get all contact inquiries (for admin purposes)
  app.get("/api/contact", async (req, res) => {
    try {
      const inquiries = await storage.getContactInquiries();
      res.json({
        success: true,
        inquiries: inquiries
      });
    } catch (error) {
      console.error("Get inquiries error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to retrieve inquiries"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
