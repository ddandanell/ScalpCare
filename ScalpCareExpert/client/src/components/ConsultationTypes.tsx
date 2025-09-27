import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Check, Clock, Video, MapPin, Shield, Lock, CreditCard, CheckCircle, Award } from "lucide-react";
import { useState } from "react";
import BookingForm from "./BookingForm";

export default function ConsultationTypes() {
  const [selectedConsultation, setSelectedConsultation] = useState<string>("");
  const [bookingModalOpen, setBookingModalOpen] = useState(false);

  const handleBookingClick = (consultationType: string) => {
    // Open chat widget for lead generation
    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
    if (chatButton) chatButton.click();
  };

  const consultations = [
    {
      name: "Essential Scalp Assessment",
      price: "450 AED",
      duration: "45 minutes",
      type: "Online consultation",
      icon: Video,
      popular: false,
      features: [
        "Comprehensive pre-consultation questionnaire tailored for Middle Eastern climate",
        "Live HD video analysis of your scalp and hair condition with Dubai-based specialist",
        "Personal diagnosis with identification of climate-related and genetic causes",
        "Written report with detailed findings and Dubai-specific recommendations",
        "Basic 3-month treatment plan adapted for local conditions",
        "Product guide with recommendations available in UAE markets",
        "1 week of free WhatsApp support after consultation",
        "Climate protection strategies for Dubai living"
      ],
      bestFor: "Expats and residents who want answers to their hair problems and practical solutions for Dubai's climate."
    },
    {
      name: "Premium Lifestyle Consultation",
      price: "1,200 AED",
      duration: "90 minutes", 
      type: "Online or in-person",
      icon: Video,
      popular: true,
      features: [
        "Everything from Essential Assessment",
        "In-depth expat lifestyle analysis (stress, travel, dietary changes, cultural adjustments)",
        "Detailed hormonal and nutritional evaluation considering local food availability",
        "Climate adaptation strategies for scalp health",
        "Comprehensive 20-page personal report with Dubai-specific protocols",
        "6-month treatment plan with monthly milestones adapted for seasonal changes",
        "Nutrition plan optimized for local cuisine and supplement availability",
        "Stress management techniques for expatriate challenges",
        "1 month of unlimited WhatsApp support",
        "Free 30-minute follow-up consultation after 8 weeks",
        "Seasonal adjustment guide for Dubai's weather patterns"
      ],
      bestFor: "Professionals and long-term residents who want comprehensive transformation adapted to their Dubai lifestyle."
    },
    {
      name: "VIP Executive Hair Health Audit",
      price: "2,200 AED",
      duration: "2.5 hours",
      type: "In-person at our Jumeirah clinic",
      icon: MapPin,
      popular: false,
      features: [
        "Everything from Premium consultation",
        "Physical examination with professional trichoscopy equipment",
        "Microscopic analysis of scalp condition and climate damage assessment",
        "UV damage evaluation and protection planning",
        "Detailed recommendations for blood tests (referrals to Dubai healthcare providers)",
        "Executive lifestyle optimization plan for high-stress Dubai professionals",
        "Climate protection protocol with seasonal adjustments",
        "Complete 25+ page report with photo documentation and progress tracking",
        "4-month follow-up program with monthly check-ins",
        "Direct WhatsApp access to your specialist (business hours)",
        "Priority rebooking and emergency consultation access",
        "Referral network to trusted Dubai dermatologists and nutritionists",
        "Corporate wellness program options for companies"
      ],
      bestFor: "Executives, entrepreneurs, and high-achievers who want the most comprehensive analysis and ongoing support for their demanding Dubai lifestyle."
    }
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50 via-white to-emerald-50/20" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-8 mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            Premium Consultation Services
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight" data-testid="consultations-headline">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
              Consultation Experience
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Each consultation is carefully designed to address your unique hair health needs in Dubai's challenging climate. 
            Select the experience that matches your lifestyle and goals.
          </p>
        </div>

        {/* Consultation Packages - Premium Layout */}
        <div className="space-y-16">
          {consultations.map((consultation, index) => (
            <div key={index} className="relative">
              {/* Popular Badge */}
              {consultation.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-semibold px-6 py-2 text-sm shadow-xl">
                    Most Popular Choice
                  </Badge>
                </div>
              )}

                  {/* Main Package Card */}
                  <Card 
                    className={`relative overflow-hidden transition-all duration-300 group ${
                      consultation.popular 
                        ? 'border-2 border-emerald-200 shadow-2xl bg-gradient-to-br from-emerald-50/50 to-white' 
                        : 'border border-slate-200 shadow-lg hover:shadow-2xl bg-white'
                    }`}
                    data-testid={`consultation-card-${index}`}
                  >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Left Side - Visual & Info */}
                  <div className={`p-12 lg:p-16 ${consultation.popular ? 'bg-gradient-to-br from-emerald-50 to-emerald-100/50' : 'bg-slate-50'}`}>
                    <div className="space-y-8">
                      {/* Icon & Title */}
                      <div className="space-y-6">
                            <div className={`w-20 h-20 rounded-2xl flex items-center justify-center ${
                              consultation.popular 
                                ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg' 
                                : 'bg-gradient-to-br from-slate-600 to-slate-700'
                            }`}>
                              <consultation.icon className="w-10 h-10 text-white" />
                            </div>
                        <div>
                          <h3 className="text-3xl font-bold text-slate-900 mb-3">
                            {consultation.name}
                          </h3>
                          <div className="flex items-center gap-4 text-slate-600">
                            <div className="flex items-center gap-2">
                              <Clock className="w-5 h-5" />
                              <span className="font-medium">{consultation.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <consultation.icon className="w-5 h-5" />
                              <span className="font-medium">{consultation.type}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="space-y-2">
                        <div className="text-5xl font-bold text-slate-900">
                          {consultation.price}
                        </div>
                        <p className="text-slate-600 text-lg">One-time consultation fee</p>
                      </div>

                      {/* Best For */}
                      <div className="p-6 bg-white/80 rounded-xl border border-slate-200/50">
                        <h4 className="text-lg font-semibold text-slate-900 mb-3">Perfect For:</h4>
                        <p className="text-slate-600 leading-relaxed">{consultation.bestFor}</p>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Features & CTA */}
                  <div className="p-12 lg:p-16">
                    <div className="space-y-8">
                      {/* Features */}
                      <div className="space-y-6">
                        <h4 className="text-xl font-semibold text-slate-900">What's Included:</h4>
                        <div className="space-y-4">
                          {consultation.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start gap-4 group">
                              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-200 transition-colors duration-200">
                                <Check className="w-4 h-4 text-emerald-600" />
                              </div>
                              <span className="text-slate-600 leading-relaxed text-lg">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-6">
                            <Button 
                              size="lg"
                              className={`w-full text-lg font-semibold py-4 h-auto transition-all duration-300 ${
                                consultation.popular
                                  ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl'
                                  : 'bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-white shadow-lg hover:shadow-xl'
                              }`}
                              onClick={() => handleBookingClick(consultation.name.toLowerCase().replace(/\s+/g, '-'))}
                              data-testid={`button-book-${consultation.name.toLowerCase().replace(/\s+/g, '-')}`}
                            >
                              Book {consultation.name}
                            </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-transparent rounded-full blur-xl"></div>
              </Card>
            </div>
          ))}
        </div>

            {/* Payment Security Notice */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Secure & Protected
              </div>
              <div className="flex flex-wrap justify-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Lock className="w-4 h-4 text-green-500" />
                  SSL Encrypted
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CreditCard className="w-4 h-4 text-blue-500" />
                  PCI Compliant
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  30-Day Guarantee
                </div>
              </div>
              <p className="text-slate-600 text-sm max-w-2xl mx-auto">
                All payments are processed securely through encrypted channels. Your personal and payment information is protected with industry-standard security measures.
              </p>
            </div>

            {/* Booking Modal */}
            <Dialog open={bookingModalOpen} onOpenChange={setBookingModalOpen}>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Book Your Consultation</DialogTitle>
                </DialogHeader>
                <BookingForm 
                  consultationType={selectedConsultation}
                  onSuccess={() => setBookingModalOpen(false)}
                />
              </DialogContent>
            </Dialog>
      </div>
    </section>
  );
}