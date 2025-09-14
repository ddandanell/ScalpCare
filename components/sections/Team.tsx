import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, Globe, Clock, Star, CheckCircle, MessageCircle, Shield } from "lucide-react";

export function Team() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Users className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              Meet Your Team
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Perfect Blend of Talent & Leadership
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            45 full-stack specialists and marketing experts from Indonesia, organized and led by experienced 
            European managers. You get world-class talent at Indonesian prices with European quality standards and communication.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Indonesian Excellence */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">45 In-House Specialists</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Full-stack developers, frontend/backend specialists, UI/UX designers, plus marketing and SEO experts - 
                all working exclusively on your projects
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Senior Full-Stack Developers</span>
                  </div>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Frontend Specialists</span>
                  </div>
                  <span className="font-semibold">6</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Backend Engineers</span>
                  </div>
                  <span className="font-semibold">4</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>UI/UX Designers</span>
                  </div>
                  <span className="font-semibold">3</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Indonesian Excellence */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Award className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">Indonesian Excellence</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Highly trained, experienced professionals from Indonesia's top universities and tech companies, 
                bringing affordability without sacrificing quality
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    <span>Average Experience</span>
                  </div>
                  <span className="font-semibold">5+ years</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>English Proficiency</span>
                  </div>
                  <span className="font-semibold">Advanced</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Time Zone Coverage</span>
                  </div>
                  <span className="font-semibold">GMT+7</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-primary" />
                    <span>Cost Advantage</span>
                  </div>
                  <span className="font-semibold">60% less</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* European Leadership */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-8 w-8 text-primary" />
                <CardTitle className="text-2xl">European Leadership</CardTitle>
              </div>
              <p className="text-muted-foreground">
                Every project led by Danish or UK-based managers with 10+ years experience, ensuring perfect 
                communication and European quality standards
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span>Project Managers</span>
                  </div>
                  <span className="font-semibold text-right w-32">Danish/UK</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Quality Assurance</span>
                  </div>
                  <span className="font-semibold text-right w-32">European Standards</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-primary" />
                    <span>Communication</span>
                  </div>
                  <span className="font-semibold text-right w-32">Native English</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Business Hours</span>
                  </div>
                  <span className="font-semibold text-right w-32">EU Timezone</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Our Team Delivers */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Star className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Why Our Team Delivers Superior Results</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Certified Experts</h4>
              <p className="text-sm text-muted-foreground">
                AWS, Google Cloud, Microsoft Azure certifications across the team
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Proven Track Record</h4>
              <p className="text-sm text-muted-foreground">
                500+ successful projects across 15+ industries
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Continuous Learning</h4>
              <p className="text-sm text-muted-foreground">
                Monthly training on latest technologies and best practices
              </p>
            </div>
            <div className="text-center p-6 bg-background rounded-lg shadow-sm">
              <Star className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Client Satisfaction</h4>
              <p className="text-sm text-muted-foreground">
                98% client satisfaction rate with 85% repeat business
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
