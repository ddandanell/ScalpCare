import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Users, DollarSign, Wrench, Calculator, ArrowRight, Shield, Zap } from "lucide-react";

const plans = [
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
      "Flexible contract terms"
    ],
    cta: "Get Started",
    popular: false,
    icon: Users
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
      "Milestone-based payments"
    ],
    cta: "Get Quote",
    popular: true,
    icon: DollarSign
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
      "Quality assurance included"
    ],
    cta: "Get Quote",
    popular: false,
    icon: Wrench
  }
];

const priceComparison = [
  { service: "MVP Development (15-30 days)", european: "€50,000-80,000", us: "$2,000-5,000", savings: "€45,000-75,000" },
  { service: "E-commerce Platform (30-60 days)", european: "€80,000-150,000", us: "$2,000-8,000", savings: "€75,000-142,000" },
  { service: "Full-Stack Web App (30-90 days)", european: "€60,000-120,000", us: "$5,000-15,000", savings: "€55,000-105,000" }
];

export function Pricing() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Calculator className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Transparent Pricing</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            No Hidden Costs, No Surprises
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Choose the pricing model that works best for your needs. All options include European project management, 
            complete documentation, and our quality guarantee. Compare our prices to European agencies and see the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => {
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
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Price Comparison Table */}
        <div className="bg-muted/30 rounded-2xl p-8">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="h-6 w-6 text-primary" />
            <h3 className="text-2xl font-bold">Price Comparison: Us vs. European Agencies</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 font-semibold">Service</th>
                  <th className="text-left py-3 px-4 font-semibold">European Agency</th>
                  <th className="text-left py-3 px-4 font-semibold">DCPH Digital</th>
                  <th className="text-left py-3 px-4 font-semibold text-primary">Your Savings</th>
                </tr>
              </thead>
              <tbody>
                {priceComparison.map((row, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 font-medium">{row.service}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.european}</td>
                    <td className="py-3 px-4 text-muted-foreground">{row.us}</td>
                    <td className="py-3 px-4 text-primary font-semibold">{row.savings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
