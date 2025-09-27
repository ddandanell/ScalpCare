import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X, Cookie, Shield, Settings } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    // Check if cookies have been accepted before
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setIsAccepted(true);
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieAccepted', 'false');
    setIsAccepted(true);
    setIsVisible(false);
  };

  if (!isVisible || isAccepted) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 z-40 max-w-sm">
      <Card className="shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            {/* Cookie Icon */}
            <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <Cookie className="w-5 h-5 text-amber-600" />
            </div>
            
            {/* Content */}
            <div className="flex-1 space-y-3">
              <div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">
                  We use cookies
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Secure</span>
                </div>
                <div className="flex items-center gap-1">
                  <Settings className="w-3 h-3" />
                  <span>Customizable</span>
                </div>
              </div>
              
              {/* Buttons */}
              <div className="flex gap-2">
                <Button
                  onClick={handleAccept}
                  size="sm"
                  className="flex-1 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white text-xs font-semibold py-2"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-xs py-2"
                >
                  Decline
                </Button>
              </div>
            </div>
            
            {/* Close Button */}
            <Button
              onClick={handleDecline}
              variant="ghost"
              size="sm"
              className="p-1 h-6 w-6 text-slate-400 hover:text-slate-600"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
