"use client";

import { useState, useEffect } from "react";
import { Cookie, X, Settings, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    localStorage.setItem('analyticsConsent', 'accepted');
    localStorage.setItem('marketingConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-primary/20 p-6 animate-in slide-in-from-bottom-2 duration-500">
          {!showDetails ? (
            // Simple view
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-center gap-3 flex-1">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    We use cookies to enhance your experience
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    We use essential cookies to make our site work and analytics cookies to help us improve it. 
                    <button 
                      onClick={() => setShowDetails(true)}
                      className="text-primary hover:underline ml-1"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button
                  onClick={handleAccept}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Accept Essential
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="default"
                  className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-white"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                >
                  Decline
                </Button>
              </div>
            </div>
          ) : (
            // Detailed view
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-pink-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    Cookie Preferences
                  </h3>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetails(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-foreground">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for the website to function properly
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-muted-foreground">Always Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how visitors interact with our website
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-primary rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 right-1"></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted/30 rounded-lg">
                  <div>
                    <h4 className="font-semibold text-foreground">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to track visitors across websites for advertising
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-6 bg-muted rounded-full relative">
                      <div className="w-4 h-4 bg-white rounded-full absolute top-1 left-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-border/50">
                <Button
                  onClick={handleAccept}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Save Preferences
                </Button>
                <Button
                  onClick={handleAcceptAll}
                  variant="default"
                  className="bg-gradient-to-r from-primary to-pink-600 hover:from-primary/90 hover:to-pink-600/90 text-white"
                >
                  Accept All
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                >
                  Decline All
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
