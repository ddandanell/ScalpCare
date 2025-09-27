import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Search, DollarSign, Sun } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: ShoppingCart,
      title: "Have you tried countless products without seeing results?",
      description: "Frustrated with products that promise miracles but deliver disappointment"
    },
    {
      icon: Search,
      title: "Do you feel lost in the jungle of contradictory advice online?",
      description: "Overwhelmed by conflicting information about hair care solutions"
    },
    {
      icon: DollarSign,
      title: "Are you tired of expensive 'miracle cures' that don't work?",
      description: "Wasted money on treatments that overpromise and underdeliver"
    },
    {
      icon: Sun,
      title: "Struggling with hair issues in Dubai's challenging climate?",
      description: "Heat, humidity, and lifestyle taking a toll on your hair health"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30" id="problems">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="problems-headline">
            Do You Recognize These Frustrations?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`problem-card-${index}`}>
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <problem.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground leading-tight">
                  {problem.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="transition-text">
            You're not alone. Every month we help over 600 residents of Dubai and the UAE find the right answers to their hair problems in this unique climate.
          </p>
        </div>
      </div>
    </section>
  );
}