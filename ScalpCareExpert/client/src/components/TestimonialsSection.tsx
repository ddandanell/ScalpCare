import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Quote, Shield, Lock, CreditCard, Award, CheckCircle, Phone } from "lucide-react";
import { useState } from "react";

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      location: "Dubai Marina",
      rating: 5,
      text: "After struggling with hair loss for 2 years in Dubai's climate, ScalpCare Expert completely transformed my hair health. Their Dubai Climate Method is incredible - I finally understand what was causing my issues and how to prevent them.",
      treatment: "Essential Scalp Assessment",
      duration: "3 months ago",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      location: "Jumeirah",
      rating: 5,
      text: "As an expat from Europe, my hair was suffering badly in Dubai. The team at ScalpCare Expert not only diagnosed the problem but gave me a complete lifestyle plan. My hair is now healthier than it's been in years!",
      treatment: "Premium Lifestyle Consultation",
      duration: "2 months ago",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Emma Thompson",
      location: "Downtown Dubai",
      rating: 5,
      text: "The VIP consultation was worth every dirham. They spent 2 hours analyzing my scalp and created a personalized plan. No product sales pressure - just honest, professional advice. My confidence is back!",
      treatment: "VIP Executive Hair Health Audit",
      duration: "1 month ago",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Michael Chen",
      location: "Business Bay",
      rating: 5,
      text: "I was skeptical about scalp consultations, but ScalpCare Expert changed my mind completely. Their scientific approach and climate-specific advice solved problems I didn't even know I had. Highly recommend!",
      treatment: "Essential Scalp Assessment",
      duration: "6 weeks ago",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "Fatima Al-Zahra",
      location: "Al Wasl",
      rating: 5,
      text: "Finally found someone who understands Dubai's unique hair challenges! The team is professional, knowledgeable, and genuinely cares about results. My hair has never looked better.",
      treatment: "Premium Lifestyle Consultation",
      duration: "4 weeks ago",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "James Wilson",
      location: "Palm Jumeirah",
      rating: 5,
      text: "The before and after results speak for themselves. ScalpCare Expert's approach is different from any other clinic I've visited. They focus on education and prevention, not just treatment.",
      treatment: "VIP Executive Hair Health Audit",
      duration: "2 weeks ago",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const trustBadges = [
    { icon: Shield, text: "SSL Secured", color: "text-green-500" },
    { icon: Lock, text: "Data Protected", color: "text-blue-500" },
    { icon: CreditCard, text: "Secure Payments", color: "text-purple-500" },
    { icon: Award, text: "Certified Experts", color: "text-emerald-500" }
  ];

  const stats = [
    { number: "4,500+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "5+", label: "Years Experience" },
    { number: "30", label: "Day Guarantee" }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Client Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            What Our Clients Say About
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
              Our Results
            </span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Real stories from real clients who have transformed their hair health with our Dubai Climate Method.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md">
              <badge.icon className={`w-5 h-5 ${badge.color}`} />
              <span className="text-sm font-medium text-slate-700">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="p-6 hover:shadow-xl transition-all duration-300 group border-slate-200 hover:border-emerald-200">
              <CardContent className="p-0">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.location}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-emerald-200 absolute -top-2 -left-1" />
                  <p className="text-slate-600 leading-relaxed pl-6">{testimonial.text}</p>
                </div>

                {/* Treatment Info */}
                <div className="flex items-center justify-between text-sm">
                  <Badge variant="outline" className="text-emerald-600 border-emerald-200">
                    {testimonial.treatment}
                  </Badge>
                  <span className="text-slate-500">{testimonial.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl sm:text-2xl text-slate-700 leading-relaxed mb-8 font-medium">
              "ScalpCare Expert completely changed my understanding of hair health in Dubai. Their scientific approach and climate-specific advice solved problems I didn't even know I had. The results speak for themselves!"
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                alt="Featured Client"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="text-left">
                <div className="font-semibold text-slate-900">Ahmed Al-Rashid</div>
                <div className="text-slate-600">VIP Executive Client</div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            Your Privacy is Protected
          </div>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto mb-8">
            All client testimonials are shared with explicit consent. We never share personal information without permission, 
            and all data is protected with industry-standard security measures.
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
            Join Our Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
