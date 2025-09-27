import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Calendar, ArrowUp, X, Sparkles } from 'lucide-react';

export default function FloatingActionButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [pulseAnimation, setPulseAnimation] = useState(false);

  // Show scroll to top button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Pulse animation every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPulseAnimation(true);
      setTimeout(() => setPulseAnimation(false), 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openChat = () => {
    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
    if (chatButton) chatButton.click();
  };

  const openPhone = () => {
    window.open('tel:+971501234567', '_self');
  };

  const openBooking = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 space-y-4">
      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="w-12 h-12 rounded-full bg-slate-600 hover:bg-slate-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce"
          size="icon"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Main FAB Menu */}
      <div className="relative">
        {/* Secondary Action Buttons */}
        <div
          className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          {/* Phone Button */}
          <Button
            onClick={openPhone}
            className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce group"
            size="icon"
            title="Call Now"
          >
            <Phone className="w-5 h-5" />
          </Button>

          {/* Booking Button */}
          <Button
            onClick={openBooking}
            className="w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce group"
            size="icon"
            title="Book Appointment"
          >
            <Calendar className="w-5 h-5" />
          </Button>

          {/* Chat Button */}
          <Button
            onClick={openChat}
            className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce group"
            size="icon"
            title="Start Chat"
          >
            <MessageCircle className="w-5 h-5" />
          </Button>
        </div>

        {/* Main FAB Button */}
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 micro-bounce ${
            pulseAnimation ? 'animate-pulse-glow' : ''
          }`}
          size="icon"
        >
          <div className="relative">
            {isExpanded ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <div className="relative">
                <Sparkles className="w-6 h-6 transition-transform duration-300" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            )}
          </div>
        </Button>

        {/* Tooltip */}
        {!isExpanded && (
          <div className="absolute right-20 top-1/2 transform -translate-y-1/2 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Quick Actions
            <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
          </div>
        )}
      </div>

      {/* Live Indicator */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse">
        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
      </div>

      {/* Notification Badge */}
      <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center animate-bounce">
        3
      </div>
    </div>
  );
}
