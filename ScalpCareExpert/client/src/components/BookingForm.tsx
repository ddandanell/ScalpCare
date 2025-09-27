import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Calendar, Clock, User, Mail, Phone, MessageCircle } from "lucide-react";

interface BookingFormProps {
  consultationType?: string;
  onSuccess?: () => void;
}

interface BookingFormData {
  consultationType: string;
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export default function BookingForm({ consultationType = "", onSuccess }: BookingFormProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [formData, setFormData] = useState<BookingFormData>({
    consultationType: consultationType,
    fullName: "",
    email: "",
    phone: "",
    preferredDate: "",
    preferredTime: "",
    message: ""
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("/api/consultations/book", {
        method: "POST",
        body: data
      });
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Booking Submitted Successfully!",
        description: data.message || "Your consultation has been booked successfully!",
      });
      
      // Reset form
      setFormData({
        consultationType: consultationType,
        fullName: "",
        email: "",
        phone: "",
        preferredDate: "",
        preferredTime: "",
        message: ""
      });
      
      // Invalidate queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["/api/consultations"] });
      
      onSuccess?.();
    },
    onError: (error: any) => {
      console.error("Booking error:", error);
      toast({
        title: "Booking Failed",
        description: error.message || "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consultationType || !formData.fullName || !formData.email) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields (consultation type, name, and email).",
        variant: "destructive",
      });
      return;
    }
    
    bookingMutation.mutate(formData);
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const consultationOptions = [
    { value: "essential", label: "Essential Scalp Assessment (450 AED)" },
    { value: "premium", label: "Premium Lifestyle Consultation (1,200 AED)" },
    { value: "vip", label: "VIP Executive Hair Health Audit (2,200 AED)" }
  ];

  const timeSlots = [
    "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM"
  ];

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          Book Your Consultation
        </CardTitle>
        <p className="text-muted-foreground">
          Fill out the form below and we'll contact you within 4 hours to confirm your appointment.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6" data-testid="booking-form">
          {/* Consultation Type */}
          <div className="space-y-2">
            <Label htmlFor="consultationType">Consultation Type *</Label>
            <Select
              value={formData.consultationType}
              onValueChange={(value) => handleChange("consultationType", value)}
              data-testid="select-consultation-type"
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a consultation type" />
              </SelectTrigger>
              <SelectContent>
                {consultationOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Personal Information */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="flex items-center gap-2">
                <User className="w-4 h-4" />
                Full Name *
              </Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                required
                data-testid="input-full-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                required
                data-testid="input-email"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number (WhatsApp preferred)
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+971 XX XXX XXXX"
              data-testid="input-phone"
            />
          </div>

          {/* Preferred Schedule */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="preferredDate" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Preferred Date
              </Label>
              <Input
                id="preferredDate"
                type="date"
                value={formData.preferredDate}
                onChange={(e) => handleChange("preferredDate", e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                data-testid="input-preferred-date"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredTime" className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Preferred Time
              </Label>
              <Select
                value={formData.preferredTime}
                onValueChange={(value) => handleChange("preferredTime", value)}
                data-testid="select-preferred-time"
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((time) => (
                    <SelectItem key={time} value={time}>
                      {time}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Additional Information
            </Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleChange("message", e.target.value)}
              rows={4}
              placeholder="Tell us about your specific hair concerns, medical history, or any questions you have..."
              data-testid="textarea-message"
            />
          </div>

          {/* Submit Button */}
          <Button 
            type="submit" 
            className="w-full" 
            disabled={bookingMutation.isPending}
            data-testid="button-submit-booking"
          >
            {bookingMutation.isPending ? "Submitting..." : "Book Consultation"}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            By submitting this form, you agree to be contacted by ScalpCare Expert regarding your consultation.
            We respect your privacy and will never share your information.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}