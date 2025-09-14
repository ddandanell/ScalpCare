import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, DollarSign, Wrench, ArrowRight, Calculator, Clock, Shield, CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Staff Leasing",
    description: "Hire dedicated full-time developers directly from our team for long-term projects",
    price: "$500-700",
    period: "per month",
    comparison: "vs. $5,000-7,500 in Europe",
    features: [
      "Dedicated full-time developer",
      "Recruitment & onboarding included",
      "European project management",
      "Direct communication channels",
      "Flexible contract terms",
      "No long-term commitment required"
    ],
    cta: "Get Started",
    popular: false,
    icon: Users,
    savings: "Save up to 90%"
  },
  {
    name: "Project-Based",
    description: "Complete platforms delivered ready-to-launch with full documentation and support",
    price: "$2,000-5,000",
    period: "per project",
    comparison: "Complete platforms delivered ready-to-launch",
    features: [
      "Complete discovery workshops",
      "Full system documentation",
      "Design, development & QA",
      "30-45 day delivery",
      "Milestone-based payments",
      "Post-launch support included"
    ],
    cta: "Get Quote",
    popular: true,
    icon: DollarSign,
    savings: "Save up to 70%"
  },
  {
    name: "Task-Based",
    description: "Individual features, modules, or improvements with fixed pricing and fast delivery",
    price: "Get Price",
    period: "per task",
    comparison: "Contact us for a custom quote",
    features: [
      "1-5 days",
      "No long-term commitment",
      "Perfect for small additions",
      "Fixed price guarantee",
      "Quality assurance included",
      "Quick project start"
    ],
    cta: "Get Quote",
    popular: false,
    icon: Wrench,
    savings: "Save up to 80%"
  }
];

const priceComparison = [
  { 
    service: "MVP Development (15-30 days)", 
    european: "€50,000-80,000", 
    us: "$2,000-5,000", 
    savings: "€45,000-75,000",
    savingsPercent: "90%"
  },
  { 
    service: "E-commerce Platform (30-60 days)", 
    european: "€80,000-150,000", 
    us: "$2,000-8,000", 
    savings: "€75,000-142,000",
    savingsPercent: "95%"
  },
  { 
    service: "Full-Stack Web App (30-90 days)", 
    european: "€60,000-120,000", 
    us: "$5,000-15,000", 
    savings: "€55,000-105,000",
    savingsPercent: "92%"
  },
  { 
    service: "Mobile App (30-60 days)", 
    european: "€60,000-120,000", 
    us: "$5,000-15,000", 
    savings: "€55,000-105,000",
    savingsPercent: "92%"
  },
  { 
    service: "Enterprise Solution (60-120 days)", 
    european: "€100,000-300,000", 
    us: "$5,000-10,000", 
    savings: "€95,000-290,000",
    savingsPercent: "97%"
  }
];

const pricingFeatures = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "European project management ensures the highest quality standards on every project"
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "3x faster delivery than European agencies with our streamlined processes"
  },
  {
    icon: Calculator,
    title: "Transparent Pricing",
    description: "No hidden costs, surprise invoices, or inflated estimates. You know exactly what you're paying for"
  }
];

const faqPricing = [
  {
    question: "What's included in the project-based pricing?",
    answer: "Everything needed to launch: discovery workshops, design, development, testing, deployment, documentation, and 30 days of post-launch support. No hidden costs."
  },
  {
    question: "Can I switch between pricing models?",
    answer: "Absolutely! You can start with staff leasing and move to project-based, or combine different models for different parts of your project."
  },
  {
    question: "What if my project goes over budget?",
    answer: "We provide detailed estimates upfront and stick to them. Any changes are discussed and approved before implementation, with transparent pricing for additions."
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes! For larger projects, we offer milestone-based payments. You only pay for completed, tested, and approved work."
  },
  {
    question: "What's the difference between staff leasing and hiring locally?",
    answer: "You get the same quality developer but at 90% less cost, plus European project management, no recruitment hassle, and immediate availability."
  },
  {
    question: "Can I get a custom quote for my specific project?",
    answer: "Of course! We provide free consultations and detailed quotes within 24 hours. Contact us with your project details for a personalized estimate."
  }
];

export default function PricingPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <div className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
          {/* Full-screen background elements */}
          <div className="absolute inset-0 w-full">
            {/* Modern gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 via-green-600/5 to-cyan-600/10" />
            
            {/* Abstract tech grid overlay */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 204, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 0, 200, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }} />
            </div>
            
            {/* Glowing orbs */}
            <div className="absolute top-20 left-20 w-36 h-36 bg-emerald-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-28 h-28 bg-green-500/20 rounded-full blur-2xl" />
          </div>
          
          <div className="relative py-16 sm:py-20 md:py-24 w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="max-w-5xl mx-auto text-center">
              {/* Main headline with emotional punch */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
                Save 60%, Get 3x More
              </h1>
              
              {/* Aspirational subheadline */}
              <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
                Transparent pricing that puts European agencies to shame. Get enterprise-quality development at Indonesian prices with zero hidden costs.
              </p>
              
              {/* Premium benefit + proof statements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Save Up to 70%</h3>
                    <p className="text-muted-foreground">Same quality as European agencies • Half the price</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">3x Faster Delivery</h3>
                    <p className="text-muted-foreground">MVPs in 30 days vs 120 days • No delays</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">Zero Hidden Costs</h3>
                    <p className="text-muted-foreground">Transparent pricing • No surprise invoices</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2 text-lg">3 Flexible Models</h3>
                    <p className="text-muted-foreground">Staff leasing • Project-based • Task-based</p>
                  </div>
                </div>
              </div>
              
              {/* Premium CTA Buttons with trust sublabels */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
                <div className="text-center">
                  <Button size="lg" className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90">
                    Get Free Quote
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <p className="text-xs text-muted-foreground">Custom pricing • 24-hour response</p>
                </div>
                <div className="text-center">
                  <Button variant="outline" size="lg" className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10">
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate Savings
                  </Button>
                  <p className="text-xs text-muted-foreground">Compare with European agencies</p>
                </div>
              </div>
              
              {/* Premium trust indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">3 Pricing Models</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Up to 70% Savings</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">Milestone Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      <main className="py-20">
        <Container>
          {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {pricingPlans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card key={index} className={`relative ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-primary">{plan.price}</div>
                    <div className="text-sm text-muted-foreground">{plan.period}</div>
                    <div className="text-xs text-muted-foreground mt-1">{plan.comparison}</div>
                    <div className="text-sm font-semibold text-primary mt-2">{plan.savings}</div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="h-4 w-4 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Price Comparison Table */}
        <div className="bg-muted/30 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Price Comparison: Us vs. European Agencies</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Service</th>
                  <th className="text-left py-4 px-4 font-semibold">European Agency</th>
                  <th className="text-left py-4 px-4 font-semibold">DCPH Digital</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary">Your Savings</th>
                  <th className="text-left py-4 px-4 font-semibold text-primary">Savings %</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, index) => (
                  <tr key={index} className="border-b hover:bg-muted/50">
                    <td className="py-4 px-4 font-medium">{row.service}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.european}</td>
                    <td className="py-4 px-4 text-muted-foreground">{row.us}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{row.savings}</td>
                    <td className="py-4 px-4 text-primary font-semibold">{row.savingsPercent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Our Pricing is Better</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqPricing.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>

      </Container>

      {/* Cost Calculator */}
      <div className="w-full bg-black text-white py-20">
        <Container>
          <h2 className="text-3xl font-bold text-center mb-8">Calculate Your Savings</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xl mb-8 opacity-90">
              Use our simple calculator to see how much you could save by choosing DCPH Digital
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">€50,000</div>
                <div className="text-sm opacity-75">Average European Agency Cost</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2">$5,000</div>
                <div className="text-sm opacity-75">Our Cost</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold mb-2 text-green-400">€45,000</div>
                <div className="text-sm opacity-75">Your Savings</div>
              </div>
            </div>
            <Button size="lg" variant="secondary" className="min-h-[44px]">
              Get Your Custom Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </Container>
      </div>

      <Container>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Save 60% on Your Next Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a free consultation and detailed project estimate within 24 hours. No obligation, just honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="min-h-[44px]">
              Get Free Quote
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-h-[44px]">
              Schedule Consultation
            </Button>
          </div>
        </div>
        </Container>
      </main>
    </>
  );
}
