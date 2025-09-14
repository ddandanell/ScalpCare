import { Container } from "@/components/container";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Globe, Smartphone, ShoppingCart, Building, Zap, CheckCircle, ArrowRight, Settings } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "MVP Development",
    description: "Get your product to market in 30-45 days with a fully functional MVP that validates your business model and attracts investors.",
    features: ["Market validation features", "Scalable architecture", "User analytics integration"]
  },
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    description: "Complete web applications with modern frontend, robust backend, database design, and cloud deployment.",
    features: ["React/Next.js frontend", "Node.js/Python backend", "Cloud infrastructure"]
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native iOS and Android apps or cross-platform solutions using React Native and Flutter.",
    features: ["iOS & Android native", "Cross-platform options", "App store deployment"]
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Platforms",
    description: "Complete online stores with payment processing, inventory management, and marketing automation.",
    features: ["Payment gateway integration", "Inventory management", "Marketing automation"]
  },
  {
    icon: Building,
    title: "Enterprise Solutions",
    description: "Custom business applications, CRM systems, and workflow automation for growing companies.",
    features: ["Custom CRM/ERP systems", "Workflow automation", "Third-party integrations"]
  },
  {
    icon: Zap,
    title: "API Development",
    description: "RESTful APIs, GraphQL endpoints, and microservices architecture for scalable backend systems.",
    features: ["RESTful & GraphQL APIs", "Microservices architecture", "API documentation"]
  }
];

export function Services() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Settings className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything You Need to Launch & Scale
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            From initial concept to market-ready product, we handle every aspect of your digital transformation. 
            Our comprehensive services ensure you have everything needed to compete and win in your market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
