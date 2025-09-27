import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Sun, 
  Wind, 
  Droplets, 
  Thermometer, 
  Shield, 
  Target, 
  CheckCircle, 
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Zap,
  Globe,
  TrendingUp,
  Calendar,
  Eye,
  Brain,
  Heart
} from "lucide-react";

export default function ApproachSection() {
  const steps = [
    {
      number: "01",
      title: "Comprehensive Environmental Assessment",
      description: "We evaluate how Dubai's unique environment affects your individual hair type, considering factors like sun exposure, air conditioning usage, water quality, and lifestyle patterns specific to expatriate and local life.",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      factors: [
        { icon: Sun, text: "Sun exposure patterns" },
        { icon: Wind, text: "Air conditioning impact" },
        { icon: Droplets, text: "Water quality analysis" },
        { icon: Users, text: "Lifestyle assessment" }
      ]
    },
    {
      number: "02", 
      title: "Multi-Factor Analysis",
      description: "Our specialists examine the interaction between genetic predisposition, hormonal changes from climate adaptation, stress from expatriate life, dietary changes, and environmental factors unique to the Gulf region.",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      factors: [
        { icon: Heart, text: "Genetic predisposition" },
        { icon: TrendingUp, text: "Hormonal changes" },
        { icon: Globe, text: "Climate adaptation" },
        { icon: Users, text: "Expatriate stress factors" }
      ]
    },
    {
      number: "03",
      title: "Climate-Adapted Treatment Planning", 
      description: "Based on our findings, we create treatment plans that work specifically in Dubai's challenging conditions, including seasonal adjustments, protection strategies, and lifestyle modifications that fit your routine.",
      icon: Target,
      color: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      factors: [
        { icon: Shield, text: "Protection strategies" },
        { icon: Calendar, text: "Seasonal adjustments" },
        { icon: Clock, text: "Routine modifications" },
        { icon: MapPin, text: "Dubai-specific solutions" }
      ]
    },
    {
      number: "04",
      title: "Ongoing Climate Monitoring",
      description: "We follow up on your progress throughout Dubai's seasonal changes, adjusting recommendations for summer heat, winter humidity changes, and sandstorm seasons that can affect scalp health.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      factors: [
        { icon: Sun, text: "Summer heat adaptation" },
        { icon: Droplets, text: "Winter humidity changes" },
        { icon: Wind, text: "Sandstorm protection" },
        { icon: Calendar, text: "Seasonal follow-ups" }
      ]
    }
  ];

  const climateChallenges = [
    {
      icon: Sun,
      title: "Extreme Sun Exposure",
      description: "Dubai's intense UV radiation requires specialized protection strategies",
      impact: "High UV damage potential"
    },
    {
      icon: Wind,
      title: "Air Conditioning Stress",
      description: "Constant AC usage creates dry, artificial environments",
      impact: "Scalp dehydration risk"
    },
    {
      icon: Droplets,
      title: "Water Quality Issues",
      description: "Hard water and desalination affect hair health",
      impact: "Mineral buildup concerns"
    },
    {
      icon: Globe,
      title: "Climate Adaptation",
      description: "Expatriates face dramatic environmental changes",
      impact: "Hair shock and adjustment"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-emerald-50/30" id="approach">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-4 bg-gradient-to-r from-emerald-100 to-blue-100 text-emerald-700 hover:from-emerald-200 hover:to-blue-200 transition-all duration-300">
            <Globe className="w-4 h-4 mr-2" />
            Our Unique Method
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            The Dubai Climate Method
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Science Meets Desert
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Our proprietary 4-step process specifically designed for Dubai's unique environmental challenges and expatriate lifestyle needs.
          </p>
        </div>

        {/* Climate Challenges Overview */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Dubai's Climate is Unique
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Understanding the specific challenges that make traditional hair care advice ineffective in the Gulf region.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {climateChallenges.map((challenge, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-climate-pulse">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-emerald-200 group-hover:to-blue-200 transition-all duration-300 group-hover:animate-icon-pulse">
                    <challenge.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{challenge.title}</h4>
                  <p className="text-sm text-slate-600 mb-3 group-hover:text-slate-700 transition-colors duration-300">{challenge.description}</p>
                  <Badge className="bg-red-100 text-red-700 text-xs group-hover:bg-red-200 transition-colors duration-300">{challenge.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 4-Step Process - New Design */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our 4-Step Dubai Climate Method
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A systematic approach that addresses every aspect of hair health in Dubai's challenging environment.
            </p>
          </div>

          {/* Horizontal Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200 rounded-full transform -translate-y-1/2"></div>
            
            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Step Number Circle */}
                  <div className="flex items-center justify-center w-16 h-16 bg-white border-4 border-emerald-500 rounded-full mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10">
                    <span className="text-xl font-bold text-emerald-600">{step.number}</span>
                    <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>

                  {/* Step Card */}
                  <Card className={`p-6 hover:shadow-2xl transition-all duration-500 group-hover:scale-105 border-slate-200 hover:border-emerald-200 ${step.bgColor} animate-card-float`}>
                    <CardContent className="p-0 text-center">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${step.iconBg} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:animate-icon-pulse transition-all duration-300`}>
                        <step.icon className={`w-6 h-6 ${step.iconColor}`} />
                      </div>

                      {/* Title */}
                      <h4 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                        {step.title}
                      </h4>

                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed mb-4 group-hover:text-slate-700 transition-colors duration-300">
                        {step.description}
                      </p>

                      {/* Factors */}
                      <div className="space-y-2">
                        {step.factors.map((factor, factorIndex) => (
                          <div key={factorIndex} className="flex items-center gap-2 p-2 bg-white/60 rounded-lg group-hover:bg-white/80 transition-colors duration-300">
                            <factor.icon className="w-3 h-3 text-slate-600 flex-shrink-0" />
                            <span className="text-xs font-medium text-slate-700 text-left">{factor.text}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8 flex items-center justify-center z-20">
                      <ArrowRight className="w-4 h-4 text-slate-400" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">
              Why Our Method Works
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The results speak for themselves - our climate-specific approach delivers real results in Dubai's challenging environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-icon-pulse">
                  <CheckCircle className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">98% Success Rate</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Our climate-specific approach delivers measurable results for Dubai residents and expatriates.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-icon-pulse">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Dubai-Specific</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Tailored specifically for Dubai's unique climate, lifestyle, and environmental challenges.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-icon-pulse">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">Proven Science</h4>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  Based on clinical research and years of experience with Middle Eastern climate challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-50 via-blue-50 to-purple-50 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Ready to Experience the 
              <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Dubai Climate Method?
              </span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Book your comprehensive environmental assessment and discover how our climate-specific approach can transform your hair health in Dubai.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 rounded-xl"
                onClick={() => {
                  const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                  if (chatButton) chatButton.click();
                }}
              >
                Start Your Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold border-2 border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 rounded-xl"
              >
                Learn More About Our Method
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
