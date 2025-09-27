import { type User, type InsertUser, type ConsultationBooking, type InsertConsultationBooking, type ContactInquiry, type InsertContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Consultation bookings
  createConsultationBooking(booking: InsertConsultationBooking): Promise<ConsultationBooking>;
  getConsultationBookings(): Promise<ConsultationBooking[]>;
  getConsultationBooking(id: string): Promise<ConsultationBooking | undefined>;
  updateConsultationBookingStatus(id: string, status: string): Promise<ConsultationBooking | undefined>;
  
  // Contact inquiries
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getContactInquiries(): Promise<ContactInquiry[]>;
  getContactInquiry(id: string): Promise<ContactInquiry | undefined>;
  updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private consultationBookings: Map<string, ConsultationBooking>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.users = new Map();
    this.consultationBookings = new Map();
    this.contactInquiries = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Consultation bookings
  async createConsultationBooking(insertBooking: InsertConsultationBooking): Promise<ConsultationBooking> {
    const id = randomUUID();
    const booking: ConsultationBooking = {
      ...insertBooking,
      id,
      status: "pending",
      createdAt: new Date(),
      phone: insertBooking.phone || null,
      preferredDate: insertBooking.preferredDate || null,
      preferredTime: insertBooking.preferredTime || null,
      message: insertBooking.message || null,
    };
    this.consultationBookings.set(id, booking);
    return booking;
  }

  async getConsultationBookings(): Promise<ConsultationBooking[]> {
    return Array.from(this.consultationBookings.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getConsultationBooking(id: string): Promise<ConsultationBooking | undefined> {
    return this.consultationBookings.get(id);
  }

  async updateConsultationBookingStatus(id: string, status: string): Promise<ConsultationBooking | undefined> {
    const booking = this.consultationBookings.get(id);
    if (booking) {
      const updatedBooking = { ...booking, status };
      this.consultationBookings.set(id, updatedBooking);
      return updatedBooking;
    }
    return undefined;
  }

  // Contact inquiries
  async createContactInquiry(insertInquiry: InsertContactInquiry): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      status: "new",
      createdAt: new Date(),
      phone: insertInquiry.phone || null,
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values())
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  async getContactInquiry(id: string): Promise<ContactInquiry | undefined> {
    return this.contactInquiries.get(id);
  }

  async updateContactInquiryStatus(id: string, status: string): Promise<ContactInquiry | undefined> {
    const inquiry = this.contactInquiries.get(id);
    if (inquiry) {
      const updatedInquiry = { ...inquiry, status };
      this.contactInquiries.set(id, updatedInquiry);
      return updatedInquiry;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
