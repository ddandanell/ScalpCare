import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun, Droplets, Beaker, Plane, Users } from "lucide-react";

export default function ClimateSection() {
  const challenges = [
    {
      icon: Sun,
      title: "Extreme Heat & Sun Exposure",
      description: "Dubai's intense UV radiation and temperatures exceeding 45°C can damage hair follicles, dry out the scalp, and accelerate hair loss. Our protocols address heat-related scalp stress."
    },
    {
      icon: Droplets,
      title: "Humidity Fluctuations",
      description: "Moving between 90% outdoor humidity and dry air-conditioned environments creates scalp imbalance, leading to increased oil production, dandruff, and follicle irritation."
    },
    {
      icon: Beaker,
      title: "Hard Water & Chemical Exposure",
      description: "Dubai's desalinated water and pool chemicals strip natural oils from hair and scalp, causing dryness, brittleness, and increased hair fall."
    },
    {
      icon: Plane,
      title: "Lifestyle Factors",
      description: "Frequent travel, time zone changes, stress from expatriate life, and dietary changes all impact hormonal balance and hair health."
    },
    {
      icon: Users,
      title: "Cultural Hair Practices",
      description: "Frequent hijab wearing, chemical treatments to combat humidity, and styling stress from professional requirements need specialized attention."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30" id="climate">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground" data-testid="climate-headline">
            Why Dubai Residents Need Specialized Hair Care
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Dubai's unique environment presents specific challenges that require expert understanding and specialized treatment approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`climate-challenge-${index}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {challenge.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}