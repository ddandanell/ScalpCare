"use client";

import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);

  // Marketing messages that rotate
  const messages = [
    "🚀 Get your MVP in 15-30 days for just $2,000!",
    "💡 Need a full-stack web app? We deliver in 30-90 days!",
    "📱 Mobile app development starting at $5,000",
    "🛒 E-commerce platform ready in 30-60 days",
    "⚡ API development in just 1-30 days!",
    "🏢 Enterprise solutions up to $10,000 max"
  ];

  // Show widget after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Rotate messages every 4 seconds
  useEffect(() => {
    if (!isOpen) {
      const interval = setInterval(() => {
        setCurrentMessage((prev) => (prev + 1) % messages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isOpen, messages.length]);

  const handleWhatsAppClick = () => {
    const phoneNumber = "+6281234567890"; // PT. DCPH Digital Consulting WhatsApp
    const message = encodeURIComponent("Hi! I'm interested in your development services. Can you help me get started?");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Bubble */}
      {isOpen && (
        <div className="mb-4 w-80 bg-white rounded-2xl shadow-2xl border border-primary/20 overflow-hidden animate-in slide-in-from-bottom-2 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary to-pink-600 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold">DCPH Digital Team</h3>
                  <p className="text-xs opacity-90">Usually replies instantly</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-8 w-8 p-0"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="p-4 space-y-3 max-h-64 overflow-y-auto">
            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted/50 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-foreground">
                  Hi! 👋 I'm here to help you with your development needs. 
                  What can we build for you today?
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-primary" />
              </div>
              <div className="bg-muted/50 rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-foreground">
                  {messages[currentMessage]}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 border-t border-border/50">
            <div className="space-y-2">
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                Start WhatsApp Chat
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => window.location.href = '/contact'}
              >
                <Send className="w-4 h-4 mr-2" />
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-xs text-white font-bold">!</span>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
