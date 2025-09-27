"use client";

import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, ShoppingCart, Building, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

const services = [
  {
    icon: Code,
    title: "MVP Development",
    description: "Get your product to market in 15-30 days with a fully functional MVP that validates your business model and attracts investors.",
    features: [
      "Market validation features",
      "Scalable architecture", 
      "User analytics integration",
      "Investor-ready presentation",
      "Rapid prototyping"
    ],
    timeline: "15-30 days",
    price: "From $2,000"
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "Complete web applications with modern frontend, robust backend, database design, and cloud deployment.",
    features: [
      "React/Next.js frontend",
      "Node.js/Python backend",
      "Cloud infrastructure",
      "Database design & optimization",
      "API development & integration"
    ],
    timeline: "30-90 days",
    price: "From $5,000"
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps with cross-platform solutions using React Native and Flutter.",
    features: [
      "iOS & Android native apps",
      "Cross-platform development",
      "App store optimization",
      "Push notifications",
      "Offline functionality"
    ],
    timeline: "30-60 days",
    price: "From $5,000"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Complete online stores with payment processing, inventory management, and customer analytics.",
    features: [
      "Payment gateway integration",
      "Inventory management",
      "Order processing system",
      "Customer analytics",
      "Multi-vendor support"
    ],
    timeline: "30-60 days",
    price: "From $2,000"
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom business software with advanced features, integrations, and enterprise-grade security.",
    features: [
      "Custom business logic",
      "Third-party integrations",
      "Advanced security",
      "Scalable architecture",
      "24/7 support"
    ],
    timeline: "60-120 days",
    price: "Up to $10,000"
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful APIs, GraphQL endpoints, and microservices architecture for scalable backend systems.",
    features: [
      "RESTful & GraphQL APIs",
      "Microservices architecture",
      "API documentation",
      "Rate limiting & security",
      "Performance optimization"
    ],
    timeline: "1-30 days",
    price: "From $1,000"
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start with intensive workshops to understand your business goals, technical requirements, and success metrics."
  },
  {
    step: "02", 
    title: "Design & Architecture",
    description: "Our team creates detailed system architecture, user experience designs, and technical specifications."
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "Agile development with regular milestones, continuous testing, and transparent progress reporting."
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "Seamless deployment to production with comprehensive documentation and ongoing support."
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
        {/* Full-screen background elements */}
        <div className="absolute inset-0 w-full">
          {/* Modern gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/5 to-pink-600/10" />
          
          {/* Abstract tech grid overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255, 0, 200, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }} />
          </div>
          
          {/* Glowing orbs */}
          <div className="absolute top-10 right-20 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main headline with emotional punch */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Build Your Digital Empire
            </h1>
            
            {/* Aspirational subheadline */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              From startup MVPs to enterprise platforms, we craft digital solutions that scale with your ambition and deliver results that matter.
            </p>
            
            {/* Premium benefit + proof statements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Launch 3x Faster</h3>
                  <p className="text-muted-foreground">MVPs in 15-30 days vs 60-120 days • 750+ projects completed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Save 60% on Development</h3>
                  <p className="text-muted-foreground">Same enterprise quality at half the cost • $2M+ saved for clients</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">End-to-End Solutions</h3>
                  <p className="text-muted-foreground">From design to deployment • Complete digital transformation</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Ready to Scale</h3>
                  <p className="text-muted-foreground">45 full-stack specialists available • Start immediately</p>
                </div>
              </div>
            </div>
            
            {/* Premium CTA Buttons with trust sublabels */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <div className="text-center">
                <Button size="lg" className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90">
                  Explore Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground">6 comprehensive service packages</p>
              </div>
              <div className="text-center">
                <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10">
                  <Code className="mr-2 h-5 w-5" />
                  Get Custom Quote
                </Button>
                <p className="text-xs text-muted-foreground">Free consultation • No commitment</p>
              </div>
            </div>
            
            {/* Premium trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">6 Service Categories</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">30-180 Day Delivery</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">Complete Documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-20">
        <Container>
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex justify-between items-center mb-6 text-sm">
                      <span className="text-muted-foreground">Timeline:</span>
                      <span className="font-semibold">{service.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6 text-sm">
                      <span className="text-muted-foreground">Starting from:</span>
                      <span className="font-semibold text-primary">{service.price}</span>
                    </div>
                    
                    <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Proven Process</h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              A proven 4-step process that ensures quality, transparency, and on-time delivery
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">European Quality Standards</h3>
              <p className="text-muted-foreground">
                Every project led by experienced European managers ensuring the highest quality standards
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3x Faster Delivery</h3>
              <p className="text-muted-foreground">
                Streamlined processes and dedicated teams deliver results 3x faster than European agencies
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">60% Cost Savings</h3>
              <p className="text-muted-foreground">
                Get European-quality development at Indonesian prices - save up to 60% on your project costs
              </p>
            </div>
          </div>
        </Container>
      </main>

      {/* CTA Section */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get a free consultation and detailed project estimate within 24 hours
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="min-h-[44px]">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="min-h-[44px] bg-transparent border-white/20 text-white hover:bg-white/10">
                View Portfolio
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}