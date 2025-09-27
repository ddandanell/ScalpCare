import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import BookingForm from "./BookingForm";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return apiRequest("/api/contact", {
        method: "POST",
        body: data
      });
    },
    onSuccess: async (response) => {
      const data = await response.json();
      toast({
        title: "Message Sent Successfully!",
        description: data.message || "Your message has been sent successfully!",
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: ""
      });
      
      // Invalidate queries to refresh data
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: any) => {
      console.error("Contact error:", error);
      toast({
        title: "Message Failed",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Missing Required Fields",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    contactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Clinic Location",
      details: [
        "Jumeirah, Dubai, UAE",
        "Easily accessible from Dubai Marina, Downtown Dubai, and Business Bay",
        "Private parking available",
        "Metro and bus access"
      ]
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: [
        "+971 4 XXX XXXX",
        "WhatsApp consultations available",
        "Emergency consultation access for VIP clients"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@scalpcare-expert.com",
        "Response within 4 hours during business days"
      ]
    },
    {
      icon: Clock,
      title: "Operating Hours",
      details: [
        "Sunday - Thursday: 9:00 AM - 7:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Friday: Closed",
        "Emergency consultations available"
      ]
    }
  ];

  return (
    <section className="py-16 lg:py-24" id="contact">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="contact-headline">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to start your journey to healthier hair? Contact us to book your consultation or ask any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Visit Our Dubai Clinic
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`contact-info-${index}`}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Clinic Features */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>Our State-of-the-Art Facility</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="space-y-2">
                    <p>• Private consultation rooms with professional lighting</p>
                    <p>• Advanced trichoscopy equipment for scalp analysis</p>
                    <p>• Climate-controlled environment</p>
                  </div>
                  <div className="space-y-2">
                    <p>• Comfortable waiting areas with refreshments</p>
                    <p>• Digital trichoscopes for 200x magnification</p>
                    <p>• Secure video consultation capabilities</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 4 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        data-testid="input-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        data-testid="input-phone"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      placeholder="Tell us about your hair concerns, preferred consultation type, or any questions you have..."
                      data-testid="textarea-message"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={contactMutation.isPending}
                      data-testid="button-send-message"
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        data-testid="button-book-consultation"
                        onClick={() => {
                          const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                          if (chatButton) chatButton.click();
                        }}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Book Free Assessment
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1" 
                        onClick={() => {
                          const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                          if (chatButton) chatButton.click();
                        }}
                        data-testid="button-whatsapp"
                      >
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Start Chat
                      </Button>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}