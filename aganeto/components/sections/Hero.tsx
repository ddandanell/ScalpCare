"use client";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { ArrowRight, Play, Award, CheckCircle } from "lucide-react";
import { useContactModal } from "@/components/ContactModalProvider";

export function Hero() {
  const { openContactModal } = useContactModal();
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center w-screen -ml-[50vw] left-1/2">
      {/* Full-screen background elements */}
      <div className="absolute inset-0 w-full">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-pink-600/10" />
        
        {/* Abstract tech grid overlay */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(255, 0, 200, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 204, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="relative py-16 sm:py-20 md:py-24 w-full max-w-7xl mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            
            {/* Main headline with emotional punch */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Your Vision, Our Velocity
            </h1>
            
            {/* Aspirational subheadline */}
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your boldest ideas into market-ready software with the speed of Indonesian innovation and the precision of European excellence.
            </p>
            
            {/* Premium benefit + proof statements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Launch 3x Faster</h3>
                  <p className="text-muted-foreground">MVPs delivered in 30 days vs 120 days • 500+ projects completed</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-cyan-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">💰</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Save 60% on Development</h3>
                  <p className="text-muted-foreground">Same enterprise quality at half the cost • $2M+ saved for clients</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">European Leadership</h3>
                  <p className="text-muted-foreground">Perfect communication & quality control • 25 years experience</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-left p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2 text-lg">Ready to Scale</h3>
                  <p className="text-muted-foreground">45 full-stack specialists available • Start immediately</p>
                </div>
              </div>
            </div>
            
            {/* Premium CTA Buttons with trust sublabels */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <div className="text-center">
                <Button 
                  size="lg" 
                  className="h-14 px-10 text-lg font-semibold mb-2 bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90"
                  onClick={openContactModal}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-xs text-muted-foreground">Free consultation • No commitment</p>
              </div>
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="h-14 px-10 text-lg font-semibold mb-2 border-2 hover:bg-white/10"
                  onClick={() => window.location.href = '/cases'}
                >
                  <Play className="mr-2 h-5 w-5" />
                  View Success Stories
                </Button>
                <p className="text-xs text-muted-foreground">500+ case studies • 98% satisfaction</p>
              </div>
            </div>
            
            {/* Premium trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">25 Years Excellence</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="font-medium">98% Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
