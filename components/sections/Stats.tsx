import { Container } from "@/components/container";
import { Award, Users, Zap, DollarSign } from "lucide-react";

export function Stats() {
  return (
    <section className="py-20 bg-muted/30">
      <Container>
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Award className="h-8 w-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold">
              The Numbers Don't Lie
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            While European agencies struggle with overhead costs and lengthy processes, we deliver measurable results that transform businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Award className="h-6 w-6 text-primary" />
              <div className="text-4xl md:text-5xl font-bold text-primary">25</div>
            </div>
            <div className="text-lg font-semibold mb-1">Years Experience</div>
            <div className="text-sm text-muted-foreground">Since 1999</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Users className="h-6 w-6 text-primary" />
              <div className="text-4xl md:text-5xl font-bold text-primary">25</div>
            </div>
            <div className="text-lg font-semibold mb-1">Full-Stack Developers</div>
            <div className="text-sm text-muted-foreground">In-house team</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Zap className="h-6 w-6 text-primary" />
              <div className="text-4xl md:text-5xl font-bold text-primary">3x</div>
            </div>
            <div className="text-lg font-semibold mb-1">Faster Delivery</div>
            <div className="text-sm text-muted-foreground">vs. European agencies</div>
          </div>
          
          <div className="text-center p-6 bg-background rounded-lg shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <DollarSign className="h-6 w-6 text-primary" />
              <div className="text-4xl md:text-5xl font-bold text-primary">60%</div>
            </div>
            <div className="text-lg font-semibold mb-1">Cost Savings</div>
            <div className="text-sm text-muted-foreground">Guaranteed</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
