import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Thermometer, Microscope, Users, TrendingUp } from "lucide-react";

export default function WhyDifferentSection() {
  const differentiators = [
    {
      icon: Shield,
      title: "No Product Sales = Honest Advice",
      description: "We only make money from our expertise, not from selling you expensive products. This means our advice is always objective and based on what's best for YOU - not our bottom line. Unlike other clinics in Dubai that push expensive product lines, we remain completely neutral."
    },
    {
      icon: Thermometer,
      title: "Climate-Specialized Approach",
      description: "Living in Dubai presents unique challenges for scalp and hair health - extreme heat, humidity fluctuations, air conditioning, and sun exposure. Our team has developed specialized protocols specifically for the Middle Eastern climate and lifestyle."
    },
    {
      icon: Microscope,
      title: "Science-Based International Standards",
      description: "Our specialists combine traditional trichology with cutting-edge research from our headquarters in Denmark and international best practices. All recommendations are based on peer-reviewed studies and documented results from diverse climates and populations."
    },
    {
      icon: Users,
      title: "Holistic Multi-Cultural Understanding",
      description: "We work with clients from over 40 nationalities in Dubai. Our team understands how different ethnicities, hair types, cultural practices, and dietary habits affect scalp health in this unique environment."
    },
    {
      icon: TrendingUp,
      title: "Documented Results in Challenging Conditions",
      description: "We measure everything and follow up on your progress. Our Dubai clients experience an average 82% improvement in scalp health within 6 months - even in this challenging climate - and we can prove it with extensive before/after documentation."
    }
  ];

  return (
    <section className="py-16 lg:py-24" id="why-different">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="why-different-headline">
            We Are Different - And That's Why We Lead Dubai's Market
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {differentiators.map((item, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`differentiator-card-${index}`}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}