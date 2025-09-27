import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, CreditCard, Eye, Settings, Shield, Zap, Target } from "lucide-react";

export function Process() {
  const steps = [
    {
      number: "1",
      title: "Discovery Workshops",
      description: "1-2 day intensive workshops to define requirements, create detailed roadmaps, and identify success KPIs before any coding begins",
      icon: CheckCircle,
      features: [
        "Business requirements analysis",
        "Technical architecture planning", 
        "User journey mapping",
        "Success metrics definition"
      ]
    },
    {
      number: "2", 
      title: "Complete Documentation",
      description: "Full system architecture, code explanations, API mapping, and deployment guides so you always own and understand your code",
      icon: FileText,
      features: [
        "System architecture diagrams",
        "API documentation",
        "Database schema documentation", 
        "Deployment & maintenance guides"
      ]
    },
    {
      number: "3",
      title: "Milestone Payments", 
      description: "Milestone-based payments mean you only pay for completed, tested, and approved results. Review and approve each phase before moving forward",
      icon: CreditCard,
      features: [
        "Pay only for completed work",
        "Full testing before approval",
        "Change requests handled fairly",
        "No upfront payments required"
      ]
    },
    {
      number: "4",
      title: "Total Transparency",
      description: "Direct access to project tools, dedicated communication channels, weekly video calls, and detailed written progress reports",
      icon: Eye,
      features: [
        "Direct WhatsApp project groups",
        "Weekly video progress calls", 
        "Real-time project dashboard access",
        "Detailed written reports"
      ]
    }
  ];

  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Our Proven Process
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How We Guarantee Quality & Speed
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            Our structured 4-phase process eliminates the risks typically associated with outsourcing. 
            Every step is designed to ensure transparency, quality, and rapid delivery while keeping you in complete control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why This Process Works */}
        <div className="text-center bg-primary/5 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Why This Process Works</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Zero Risk</h4>
              <p className="text-muted-foreground">
                Milestone payments and constant communication eliminate project risks
              </p>
            </div>
            <div className="text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Maximum Speed</h4>
              <p className="text-muted-foreground">
                Streamlined process eliminates bureaucracy and focuses on delivery
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">Perfect Results</h4>
              <p className="text-muted-foreground">
                Continuous feedback loops ensure the final product exceeds expectations
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
