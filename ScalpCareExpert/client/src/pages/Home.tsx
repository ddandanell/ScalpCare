import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ApproachSection from "@/components/ApproachSection";
import ProblemSection from "@/components/ProblemSection";
import WhyDifferentSection from "@/components/WhyDifferentSection";
import ClimateSection from "@/components/ClimateSection";
import ConsultationTypes from "@/components/ConsultationTypes";
import TestimonialsSection from "@/components/TestimonialsSection";
import BeforeAfterGallery from "@/components/BeforeAfterGallery";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ApproachSection />
            <ProblemSection />
            <WhyDifferentSection />
            <ClimateSection />
            <ConsultationTypes />
                <TestimonialsSection />
                <BeforeAfterGallery />
                <TeamSection />
            <ContactSection />
          </main>
      <Footer />
    </div>
  );
}