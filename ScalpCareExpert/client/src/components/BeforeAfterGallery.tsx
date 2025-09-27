import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Eye, Calendar, User, Award, Shield, Lock, Phone } from "lucide-react";
import { useState } from "react";
import InteractiveBeforeAfter from "./InteractiveBeforeAfter";

export default function BeforeAfterGallery() {
  const [selectedCase, setSelectedCase] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const cases = [
    {
      id: 1,
      name: "Sarah M.",
      age: 32,
      location: "Dubai Marina",
      treatment: "Essential Scalp Assessment",
      duration: "3 months",
      beforeImage: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      description: "Complete hair health transformation using our Dubai Climate Method. Addressed scalp dehydration and hair thinning caused by AC exposure and hard water.",
      results: ["85% improvement in hair thickness", "Eliminated scalp dryness", "Reduced hair breakage by 90%", "Improved overall hair health"],
      testimonial: "The results exceeded my expectations. My hair is now healthier than it's been in years!"
    },
    {
      id: 2,
      name: "Ahmed A.",
      age: 28,
      location: "Jumeirah",
      treatment: "Premium Lifestyle Consultation",
      duration: "4 months",
      beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      description: "Expatriate hair shock recovery. Addressed dramatic hair changes after moving from Europe to Dubai, focusing on climate adaptation and lifestyle adjustments.",
      results: ["Complete hair shock recovery", "Adapted to Dubai climate", "Improved scalp health", "Maintained European hair quality"],
      testimonial: "As an expat, I was struggling with hair changes. ScalpCare Expert helped me adapt perfectly to Dubai's climate."
    },
    {
      id: 3,
      name: "Emma T.",
      age: 35,
      location: "Downtown Dubai",
      treatment: "VIP Executive Hair Health Audit",
      duration: "6 months",
      beforeImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      description: "Executive lifestyle hair health optimization. Comprehensive analysis of work stress, travel, and Dubai's environmental factors affecting hair health.",
      results: ["Optimized for executive lifestyle", "Reduced stress-related hair loss", "Improved hair quality", "Maintained professional appearance"],
      testimonial: "The VIP consultation was worth every dirham. They understood my busy lifestyle and created a plan that actually works."
    },
    {
      id: 4,
      name: "Michael C.",
      age: 29,
      location: "Business Bay",
      treatment: "Essential Scalp Assessment",
      duration: "2 months",
      beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      description: "Scalp condition improvement. Addressed dandruff, scalp irritation, and hair thinning caused by Dubai's hard water and climate conditions.",
      results: ["Eliminated scalp irritation", "Reduced dandruff by 95%", "Improved hair growth", "Enhanced scalp health"],
      testimonial: "I was skeptical about scalp consultations, but the results speak for themselves. My scalp has never been healthier."
    },
    {
      id: 5,
      name: "Fatima A.",
      age: 26,
      location: "Al Wasl",
      treatment: "Premium Lifestyle Consultation",
      duration: "5 months",
      beforeImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop&crop=face",
      description: "Hair texture improvement. Focused on managing frizz, dryness, and texture changes caused by Dubai's humidity and hard water.",
      results: ["Improved hair texture", "Reduced frizz by 80%", "Enhanced hair manageability", "Better hair styling results"],
      testimonial: "Finally found someone who understands Dubai's unique hair challenges! My hair has never looked better."
    },
    {
      id: 6,
      name: "James W.",
      age: 41,
      location: "Palm Jumeirah",
      treatment: "VIP Executive Hair Health Audit",
      duration: "7 months",
      beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
      afterImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      description: "Age-related hair health optimization. Comprehensive approach to maintaining hair health while aging in Dubai's challenging climate.",
      results: ["Maintained hair density", "Improved hair quality", "Reduced aging effects", "Enhanced confidence"],
      testimonial: "The before and after results speak for themselves. ScalpCare Expert's approach is different from any other clinic."
    }
  ];

  const nextCase = () => {
    setSelectedCase((prev) => (prev + 1) % cases.length);
  };

  const prevCase = () => {
    setSelectedCase((prev) => (prev - 1 + cases.length) % cases.length);
  };

  const currentCase = cases[selectedCase];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50" id="gallery">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <Eye className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Before & After
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
              Transformations
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            See the real results our clients have achieved with our Dubai Climate Method. Every transformation is authentic and documented with client consent.
          </p>
        </div>

        {/* Security Notice */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            <Shield className="w-4 h-4" />
            Client Consent Verified
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            <Lock className="w-4 h-4" />
            Privacy Protected
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
            <Award className="w-4 h-4" />
            Authentic Results
          </div>
        </div>

        {/* Interactive Before/After Gallery */}
        <div className="max-w-6xl mx-auto">
          <InteractiveBeforeAfter 
            images={cases.map(caseItem => ({
              before: caseItem.beforeImage,
              after: caseItem.afterImage,
              title: `${caseItem.name} - ${caseItem.treatment}`,
              description: caseItem.description,
              clientName: caseItem.name,
              treatment: caseItem.treatment,
              duration: caseItem.duration
            }))}
          />

          {/* View All Cases Button */}
          <div className="text-center mt-12">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white">
                  View All Cases
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>All Before & After Cases</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {cases.map((caseItem) => (
                    <Card key={caseItem.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="relative">
                          <img
                            src={caseItem.afterImage}
                            alt={`${caseItem.name} - After`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-2 left-2">
                            <Badge className="bg-green-500 text-white text-xs">After</Badge>
                          </div>
                        </div>
                        <div className="p-4">
                          <h4 className="font-semibold text-slate-900">{caseItem.name}</h4>
                          <p className="text-sm text-slate-600">{caseItem.treatment}</p>
                          <p className="text-xs text-slate-500 mt-1">{caseItem.duration}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Privacy Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            Privacy & Consent
          </div>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-8">
            All before and after photos are shared with explicit client consent. We respect our clients' privacy and never share personal information without permission. 
            All images are anonymized and used solely for educational purposes.
          </p>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            onClick={() => {
              const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
              if (chatButton) chatButton.click();
            }}
          >
            <Phone className="w-5 h-5 mr-2" />
            Start Your Transformation
          </Button>
        </div>
      </div>
    </section>
  );
}
