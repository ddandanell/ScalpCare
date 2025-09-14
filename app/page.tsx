import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { Team } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Pricing } from "@/components/sections/Pricing";
import { TechStack } from "@/components/sections/TechStack";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <Stats />
        <ProblemSolution />
        <Team />
        <Process />
        <Services />
        <Pricing />
        <TechStack />
        <CaseStudies />
        <CTA />
      </main>
    </>
  );
}
