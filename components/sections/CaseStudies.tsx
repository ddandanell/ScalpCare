import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, DollarSign, Clock, TrendingUp, Quote, Award } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce Platform",
    client: "Danish Fashion Startup",
    description: "Complete e-commerce platform with inventory management, payment processing, and marketing automation",
    results: [
      { metric: "€127,000", label: "Saved vs. local quote" },
      { metric: "67 days", label: "Faster than original timeline" },
      { metric: "340%", label: "ROI in 6 months" }
    ],
    testimonial: {
      quote: "The team delivered exactly what we needed, when we needed it. The communication was perfect, and the quality exceeded our expectations. We launched 2 months ahead of schedule and saved over €100,000.",
      author: "David Dandanell",
      role: "Founder"
    }
  },
  {
    title: "SaaS Platform", 
    client: "UK FinTech Startup",
    description: "Complete financial management platform with real-time analytics, API integrations, and mobile app",
    results: [
      { metric: "€89,000", label: "Saved vs. local quote" },
      { metric: "42 days", label: "Total delivery time" },
      { metric: "250%", label: "User growth in Q1" }
    ],
    testimonial: {
      quote: "Outstanding work. The platform handles thousands of transactions daily without issues. The documentation was so thorough that our internal team could immediately take over maintenance.",
      author: "Sarah Thompson", 
      role: "CTO"
    }
  }
];

export function CaseStudies() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Success Stories</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real Results from Real Clients
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            See how we've helped European startups and businesses save money, launch faster, 
            and achieve their goals with our proven development approach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <CardTitle className="text-2xl">{study.title}</CardTitle>
                    <p className="text-muted-foreground">{study.client}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{study.description}</p>
              </CardHeader>
              <CardContent>
                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {study.results.map((result, resultIndex) => {
                    const icons = [DollarSign, Clock, TrendingUp];
                    const Icon = icons[resultIndex];
                    return (
                      <div key={resultIndex} className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <Icon className="h-4 w-4 text-primary" />
                          <div className="text-2xl font-bold text-primary">{result.metric}</div>
                        </div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Testimonial */}
                <div className="border-l-4 border-primary pl-4 mb-6">
                  <div className="flex items-start gap-2 mb-2">
                    <Quote className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <blockquote className="text-muted-foreground italic">
                      "{study.testimonial.quote}"
                    </blockquote>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-primary" />
                    <span className="font-semibold">{study.testimonial.author}</span>
                    <span className="text-muted-foreground">, {study.testimonial.role}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg">
            View More Case Studies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </Container>
    </section>
  );
}
