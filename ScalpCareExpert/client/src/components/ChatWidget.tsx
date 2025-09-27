import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ChatWidget() {
  const openWhatsApp = () => {
    const message = "How can we help you?";
    const phoneNumber = "+971501234567"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={openWhatsApp}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse"
          size="sm"
          data-chat-button
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    </>
  );
}