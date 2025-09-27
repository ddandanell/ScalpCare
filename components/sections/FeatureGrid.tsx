import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Target, Users, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that loads in under 2 seconds, keeping your users engaged and Google happy."
  },
  {
    icon: Target,
    title: "Conversion Focused",
    description: "Every element designed to guide visitors toward your most important actions and business goals."
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description: "Intuitive interfaces that your customers love to use, reducing friction and increasing satisfaction."
  },
  {
    icon: BarChart3,
    title: "Data-Driven Results",
    description: "Measurable improvements backed by analytics and A/B testing to ensure continuous optimization."
  }
];

export function FeatureGrid() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">Why Choose Aganeto</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We combine strategic thinking with technical excellence to deliver digital experiences that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
