import { Container } from "@/components/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, DollarSign, Clock, MessageCircle, Zap, Shield, Target } from "lucide-react";

export function ProblemSolution() {
  return (
    <section className="py-20">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Target className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              The Problem We Solve
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why European Startups Choose Us
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            European agencies quote six figures for simple MVPs and take 3-4 months to deliver basic functionality. 
            Meanwhile, your competitors are launching faster and cheaper. We break that cycle with Indonesian talent 
            under European leadership - giving you the best of both worlds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Problem */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <AlertTriangle className="h-6 w-6 text-destructive" />
              <h3 className="text-3xl font-bold text-destructive">The Expensive Problem</h3>
            </div>
            
            <div className="space-y-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-destructive" />
                    <CardTitle className="text-xl">Outrageous Pricing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    European agencies charge €50,000-€150,000 for basic MVPs that should cost $2,000. 
                    Their overhead costs, office rents, and inflated salaries get passed directly to you.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Clock className="h-6 w-6 text-destructive" />
                    <CardTitle className="text-xl">Glacial Speed</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projects take 3-6 months when they should take 30-45 days. Endless meetings, bureaucracy, 
                    and inefficient processes mean your time-to-market suffers while competitors launch first.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-destructive" />
                    <CardTitle className="text-xl">Communication Chaos</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Junior account managers who don't understand your business, developers who never speak to clients, 
                    and project managers who create more confusion than clarity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-8">
              <Shield className="h-6 w-6 text-primary" />
              <h3 className="text-3xl font-bold text-primary">Our Proven Solution</h3>
            </div>
            
            <div className="space-y-6">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <DollarSign className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Transparent, Fair Pricing</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Projects starting from $1,000 with completely transparent pricing. No hidden costs, 
                    no surprise invoices, no inflated estimates. You know exactly what you're paying for.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Lightning-Fast Delivery</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    MVPs delivered in 30-45 days, not 120. Our streamlined process eliminates bureaucracy 
                    and focuses on results. Get to market 3x faster than your competitors.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-primary" />
                    <CardTitle className="text-xl">Perfect Communication</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    European project leadership ensures crystal-clear communication. Direct WhatsApp access, 
                    weekly video calls, and project managers who actually understand your business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="text-center bg-primary/5 rounded-2xl p-12">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Target className="h-6 w-6 text-primary" />
            <h3 className="text-3xl font-bold">Real Results from Real Clients</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <DollarSign className="h-6 w-6 text-primary" />
                <div className="text-4xl font-bold text-primary">€127,000</div>
              </div>
              <div className="text-muted-foreground">Saved vs. European agency quote</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="h-6 w-6 text-primary" />
                <div className="text-4xl font-bold text-primary">67 days</div>
              </div>
              <div className="text-muted-foreground">Faster than original timeline</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Zap className="h-6 w-6 text-primary" />
                <div className="text-4xl font-bold text-primary">340%</div>
              </div>
              <div className="text-muted-foreground">ROI in first 6 months</div>
            </div>
          </div>
          <div className="mt-8">
            <button className="text-primary font-semibold hover:underline">
              View Full Case Studies →
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
