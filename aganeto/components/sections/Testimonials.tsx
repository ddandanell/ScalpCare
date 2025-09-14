import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Aganeto transformed our online presence completely. Our conversion rate increased by 150% in just 3 months.",
    author: "Sarah Johnson",
    role: "CEO",
    company: "TechStart Inc.",
    rating: 5
  },
  {
    quote: "The team's attention to detail and strategic approach exceeded our expectations. Highly recommended!",
    author: "Michael Chen",
    role: "Marketing Director",
    company: "GrowthCo",
    rating: 5
  },
  {
    quote: "Professional, reliable, and results-driven. They delivered exactly what we needed to scale our business.",
    author: "Emily Rodriguez",
    role: "Founder",
    company: "EcoSolutions",
    rating: 5
  },
  {
    quote: "Working with Aganeto was a game-changer. Our website performance improved dramatically.",
    author: "David Thompson",
    role: "CTO",
    company: "InnovateLab",
    rating: 5
  },
  {
    quote: "Exceptional service and incredible results. They understood our vision and brought it to life perfectly.",
    author: "Lisa Wang",
    role: "VP Marketing",
    company: "DataFlow",
    rating: 5
  },
  {
    quote: "The ROI from our investment with Aganeto has been outstanding. Best decision we made this year.",
    author: "James Wilson",
    role: "Owner",
    company: "RetailMax",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <h2 className="mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-background rounded-full px-6 py-3 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold">4.9/5</span>
            <span className="text-muted-foreground">from 500+ reviews</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
