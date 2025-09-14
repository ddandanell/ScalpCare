import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Monitor, Server, Smartphone, Cloud, Code, CheckCircle, Zap, Shield, Target } from "lucide-react";

const techCategories = [
  {
    icon: Monitor,
    title: "Frontend",
    description: "Modern, responsive user interfaces",
    technologies: [
      "React & Next.js",
      "Vue.js & Nuxt.js", 
      "Angular & TypeScript",
      "Tailwind CSS",
      "Material-UI & Ant Design"
    ]
  },
  {
    icon: Server,
    title: "Backend",
    description: "Robust server-side solutions",
    technologies: [
      "Node.js & Express",
      "Python & Django/FastAPI",
      "Ruby on Rails",
      "Java Spring Boot",
      "PHP & Laravel"
    ]
  },
  {
    icon: Smartphone,
    title: "Mobile",
    description: "Cross-platform & native apps",
    technologies: [
      "React Native",
      "Flutter & Dart",
      "Swift (iOS)",
      "Kotlin (Android)",
      "Ionic & Cordova"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Scalable infrastructure",
    technologies: [
      "AWS & Google Cloud",
      "Docker & Kubernetes",
      "CI/CD Pipelines",
      "MongoDB & PostgreSQL",
      "Redis & Elasticsearch"
    ]
  }
];

const benefits = [
  {
    title: "Performance",
    description: "Optimized for speed and scalability, handling millions of users"
  },
  {
    title: "Security", 
    description: "Enterprise-grade security with regular updates and monitoring"
  },
  {
    title: "Future-Proof",
    description: "Modern technologies that grow with your business"
  }
];

export function TechStack() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Code className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">Our Technology Stack</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Built with Modern, Scalable Technologies
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            We use the latest tools and frameworks to build scalable, secure, and maintainable applications. 
            Our technology choices are based on industry best practices and proven performance in production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="flex items-center text-sm text-muted-foreground">
                        <CheckCircle className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                        {tech}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Why Our Technology Choices Matter */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Why Our Technology Choices Matter</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => {
              const icons = [Zap, Shield, Target];
              const Icon = icons[index];
              return (
                <div key={index} className="text-center p-6 bg-background rounded-lg shadow-sm">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-semibold mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
