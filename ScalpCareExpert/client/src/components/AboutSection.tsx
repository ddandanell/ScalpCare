import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Heart, 
  Globe, 
  Users, 
  Award, 
  MapPin, 
  Calendar,
  TrendingUp,
  Shield,
  Lightbulb,
  CheckCircle
} from "lucide-react";

export default function AboutSection() {
  const missionPoints = [
    {
      icon: Target,
      title: "Science-Based Approach",
      description: "Evidence-based scalp health advice rooted in clinical research and trichology expertise."
    },
    {
      icon: Heart,
      title: "No Hidden Agendas",
      description: "Pure consultation focus - we don't sell products, only honest, personalized treatment plans."
    },
    {
      icon: Globe,
      title: "Climate-Specific Solutions",
      description: "Specialized knowledge of Middle Eastern environmental challenges and their impact on hair health."
    }
  ];

  const timelineEvents = [
    {
      year: "2019",
      title: "Foundation",
      description: "Founded by Danish experts who recognized the gap in Dubai's hair care market",
      icon: Lightbulb
    },
    {
      year: "2020",
      title: "Dubai Clinic Launch",
      description: "Opened our Jumeirah clinic, becoming the region's first consultation-focused hair health center",
      icon: MapPin
    },
    {
      year: "2021-2023",
      title: "Rapid Growth",
      description: "Helped thousands of expatriates adapt their hair care to Dubai's unique climate",
      icon: TrendingUp
    },
    {
      year: "2024",
      title: "Regional Leadership",
      description: "Established as Dubai's leading scalp health specialists with research headquarters in Denmark",
      icon: Award
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integrity First",
      description: "We prioritize your hair health over profit, providing unbiased advice without product sales pressure."
    },
    {
      icon: Users,
      title: "Expatriate Focus",
      description: "Specialized understanding of the unique challenges faced by Dubai's international community."
    },
    {
      icon: CheckCircle,
      title: "Proven Results",
      description: "98% success rate with over 4,500 satisfied clients across the Middle East."
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50/30 to-white" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20">
          <Badge className="mb-4 bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors duration-300">
            <Award className="w-4 h-4 mr-2" />
            Our Story
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Pioneering Hair Health in the 
            <span className="block bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
              Middle East
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            From Danish clinical excellence to Dubai's unique challenges - discover how we became the region's most trusted scalp health specialists.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                  At ScalpCare Expert, we believe everyone deserves healthy hair regardless of where they live or the challenges their environment presents. Our mission is to provide Dubai residents with the most objective, science-based scalp health advice - without hidden sales agendas or expensive product requirements - while addressing the unique challenges of Middle Eastern living.
                </p>
                <div className="flex items-center gap-3 text-emerald-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>No product sales • Pure consultation focus</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 animate-slide-up">
              {missionPoints.map((point, index) => (
                <Card key={index} className="p-6 hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
                  <CardContent className="p-0">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-icon-pulse">
                        <point.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">{point.title}</h4>
                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Story Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Journey
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From recognizing a critical gap in Dubai's market to becoming the region's leading scalp health specialists.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 via-emerald-300 to-emerald-200 rounded-full hidden lg:block"></div>
            
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <Card className="p-6 lg:p-8 hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
                      <CardContent className="p-0">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-icon-pulse">
                            <event.icon className="w-6 h-6 text-emerald-600" />
                          </div>
                          <div>
                            <Badge className="bg-emerald-600 text-white font-semibold px-3 py-1 group-hover:bg-emerald-700 transition-colors duration-300">
                              {event.year}
                            </Badge>
                            <h4 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-emerald-700 transition-colors duration-300">{event.title}</h4>
                          </div>
                        </div>
                        <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 bg-white border-4 border-emerald-500 rounded-full relative z-10">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at ScalpCare Expert.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-all duration-500 group border-slate-200 hover:border-emerald-200 hover:scale-105 animate-card-float">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-emerald-200 transition-colors duration-300 group-hover:animate-icon-pulse">
                    <value.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">{value.title}</h4>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-emerald-50 to-blue-50 rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Ready to Experience the 
              <span className="block text-emerald-600">ScalpCare Expert Difference?</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Join thousands of satisfied clients who have transformed their hair health with our science-based, climate-specific approach.
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
                Book Your Free Assessment
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-4 h-auto font-semibold border-2 border-slate-300 hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300 rounded-xl"
              >
                Learn About Our Process
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
