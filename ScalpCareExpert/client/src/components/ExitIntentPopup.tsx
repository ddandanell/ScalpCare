import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { X, Clock, Gift, Star, Shield } from 'lucide-react';

export default function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [timeOnSite, setTimeOnSite] = useState(0);

  useEffect(() => {
    // Track time on site
    const startTime = Date.now();
    const interval = setInterval(() => {
      setTimeOnSite(Math.floor((Date.now() - startTime) / 1000));
    }, 1000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && timeOnSite > 10) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    // Scroll-based trigger (alternative)
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercentage > 70 && !hasShown && timeOnSite > 15) {
        setIsOpen(true);
        setHasShown(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, timeOnSite]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBookNow = () => {
    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
    if (chatButton) chatButton.click();
    setIsOpen(false);
  };

  const handleGetOffer = () => {
    // Track offer click
    console.log('Special offer clicked');
    handleBookNow();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-white to-emerald-50/30 border-0 shadow-2xl">
        <DialogHeader className="relative">
          <Button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            size="icon"
          >
            <X className="w-4 h-4" />
          </Button>
          
          <div className="text-center space-y-4">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium animate-pulse">
              <Clock className="w-4 h-4" />
              Limited Time Offer
            </div>

            {/* Main Headline */}
            <DialogTitle className="text-2xl font-bold text-slate-900 leading-tight">
              Wait! Don't Miss Your
              <span className="block bg-gradient-to-r from-emerald-600 to-blue-500 bg-clip-text text-transparent">
                Free Hair Assessment
              </span>
            </DialogTitle>

            {/* Value Proposition */}
            <div className="space-y-3">
              <p className="text-slate-600">
                Get a personalized scalp analysis worth <span className="line-through text-slate-400">AED 450</span>{' '}
                <span className="font-bold text-emerald-600">completely FREE</span>
              </p>
              
              <div className="bg-emerald-50 rounded-lg p-4 space-y-2">
                <div className="flex items-center gap-2 text-emerald-700">
                  <Gift className="w-5 h-5" />
                  <span className="font-semibold">What You Get:</span>
                </div>
                <ul className="text-sm text-slate-600 space-y-1">
                  <li>• Professional scalp diagnosis</li>
                  <li>• Personalized treatment plan</li>
                  <li>• No product sales pressure</li>
                  <li>• 30-day money-back guarantee</li>
                </ul>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>4,500+ Clients</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-3 pt-4">
              <Button
                onClick={handleBookNow}
                className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Claim My Free Assessment
              </Button>
              
              <Button
                onClick={handleGetOffer}
                variant="outline"
                className="w-full border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50 font-medium py-2 rounded-lg transition-all duration-300"
              >
                Get 20% Off First Treatment
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex justify-center gap-6 text-xs text-slate-400">
              <span>✓ SSL Secured</span>
              <span>✓ No Spam</span>
              <span>✓ Instant Booking</span>
            </div>

            {/* Countdown Timer */}
            <div className="bg-slate-100 rounded-lg p-3">
              <div className="text-sm text-slate-600 mb-2">Offer expires in:</div>
              <div className="flex justify-center gap-2 text-lg font-bold text-slate-900">
                <span className="bg-white px-2 py-1 rounded">05</span>
                <span>:</span>
                <span className="bg-white px-2 py-1 rounded">00</span>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
