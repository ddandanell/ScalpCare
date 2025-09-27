import { Button } from "@/components/ui/button";
import { Check, Star, Award, Users, Shield, Lock, CreditCard, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_woman_with_healthy_hair_cdfaefd8.png";

export default function HeroSection() {
  const trustStats = [
    { icon: Users, value: "4,500+", label: "Happy Clients" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Star, value: "98%", label: "Success Rate" },
    { icon: Shield, value: "30", label: "Day Guarantee" }
  ];

  return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-emerald-50/30 overflow-hidden">
          {/* Simple Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/3 via-transparent to-blue-500/3"></div>
            <div className="absolute top-20 left-10 w-24 h-24 bg-emerald-200/15 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-200/15 rounded-full blur-3xl"></div>
          </div>
      
          {/* Main Content */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 sm:py-12 lg:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-4 sm:space-y-6 text-center md:text-left order-2 md:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
              <Award className="w-4 h-4" />
              Dubai's #1 Scalp Health Specialists
            </div>

                {/* Main Headline - Mobile Optimized */}
                <div className="space-y-3 sm:space-y-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
                    <span className="block text-slate-900">Transform Your</span>
                    <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                      Hair Health
                    </span>
                    <span className="block text-slate-900">in 45 Minutes</span>
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Professional scalp diagnosis by certified experts. 
                    <span className="font-semibold text-slate-900">No product sales</span> - just honest, 
                    personalized treatment plans.
                  </p>
                </div>

                {/* CTA Button - Mobile Optimized */}
                <div className="flex justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg" 
                    data-testid="button-free-assessment"
                    onClick={() => {
                      const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                      if (chatButton) chatButton.click();
                    }}
                  >
                    Book Free Assessment
                  </Button>
                </div>

            {/* Trust Stats - Mobile Optimized */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 sm:pt-6">
              {trustStats.map((stat, index) => (
                <div key={index} className="text-center md:text-left p-3 rounded-xl">
                  <div className="flex items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-1">
                    <stat.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                    <span className="text-lg sm:text-xl font-bold text-slate-900">{stat.value}</span>
                  </div>
                  <p className="text-xs sm:text-xs text-slate-600 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Security & Trust Badges - Mobile Optimized */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3 pt-4 sm:pt-6">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                <Shield className="w-3 h-3" />
                <span className="hidden sm:inline">SSL Secured</span>
                <span className="sm:hidden">SSL</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                <Lock className="w-3 h-3" />
                <span className="hidden sm:inline">Data Protected</span>
                <span className="sm:hidden">Secure</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                <CreditCard className="w-3 h-3" />
                <span className="hidden sm:inline">Secure Payments</span>
                <span className="sm:hidden">Pay</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                <CheckCircle className="w-3 h-3" />
                <span className="hidden sm:inline">Certified Experts</span>
                <span className="sm:hidden">Certified</span>
              </div>
            </div>
          </div>

          {/* Right Image - Mobile Optimized */}
              <div className="relative order-1 md:order-2">
            <div className="relative">
              {/* Main image container */}
              <div className="relative aspect-square sm:aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl group">
                <img
                  src={heroImage}
                  alt="Professional woman with healthy, natural hair"
                  className="w-full h-full object-cover"
                  data-testid="hero-image"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                
                {/* Floating badge on image */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 sm:px-3 sm:py-1.5 shadow-lg">
                  <div className="flex items-center gap-1 sm:gap-1.5">
                    <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                    <span className="text-xs font-semibold text-slate-900">Live Now</span>
                  </div>
                </div>
              </div>

              {/* Removed decorative elements for better performance */}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}