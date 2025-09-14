"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Calendar, FileText, Zap, CheckCircle, Clock, DollarSign, Award } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

export function CTA() {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="py-20 bg-black text-white w-full">
      <Container>
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="h-8 w-8 text-white" />
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
              Ready to Get Started?
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white/90">
            Stop Overpaying for Development
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Don't waste another €50,000 on an agency that takes 4 months to deliver what we can build in 15-30 days. 
            Let us show you how much faster, cheaper, and better your next project can be – without sacrificing quality.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white/10 rounded-lg">
              <Calendar className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Free Consultation</h4>
              <p className="text-sm opacity-75">30-minute call to discuss your project and provide accurate estimates</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg">
              <FileText className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Detailed Proposal</h4>
              <p className="text-sm opacity-75">Complete project breakdown with timeline, costs, and deliverables</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg">
              <Zap className="h-8 w-8 text-white mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Fast Start</h4>
              <p className="text-sm opacity-75">Begin development within 1 week of project approval</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-black hover:bg-white/90"
              onClick={openContactModal}
            >
              Book Your Free Consultation Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-white/20 text-white hover:bg-white/10"
              onClick={openContactModal}
            >
              Get Project Estimate
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 mb-4">
              <CheckCircle className="h-4 w-4 text-white" />
              <span className="text-sm opacity-75">No obligation</span>
              <CheckCircle className="h-4 w-4 text-white ml-4" />
              <span className="text-sm opacity-75">Free consultation</span>
              <CheckCircle className="h-4 w-4 text-white ml-4" />
              <span className="text-sm opacity-75">Response within 24 hours</span>
            </div>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="flex items-center gap-1 text-sm font-medium">
                <Clock className="h-4 w-4" />
                Speed: MVPs in 30 days
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <DollarSign className="h-4 w-4" />
                Savings: 60% less than Europe
              </div>
              <div className="flex items-center gap-1 text-sm font-medium">
                <Award className="h-4 w-4" />
                Quality: European standards
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
