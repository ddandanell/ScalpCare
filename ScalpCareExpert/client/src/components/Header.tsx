import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Sparkles } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#approach", label: "Our Method" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Animated Logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg animate-pulse-slow">
                <Sparkles className="w-5 h-5 text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg blur opacity-30 animate-pulse"></div>
            </div>
            <h1 className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent tracking-tight" data-testid="logo">
              ScalpCare Expert
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 relative group"
                data-testid={`nav-${item.label.toLowerCase().replace(' ', '-')}`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+971-4-XXX-XXXX"
              className="text-sm text-slate-500 hover:text-emerald-600 flex items-center gap-2 transition-colors duration-200"
              data-testid="phone-link"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">+971 4 XXX XXXX</span>
            </a>
            <Button 
              size="sm"
              className="text-sm px-6 py-2 h-8 font-semibold bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 rounded-lg" 
              data-testid="button-book-consultation"
              onClick={() => {
                const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                if (chatButton) chatButton.click();
              }}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200/50 bg-white/95 backdrop-blur-xl" data-testid="mobile-menu">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-slate-50"
                  onClick={() => setIsMenuOpen(false)}
                  data-testid={`mobile-nav-${item.label.toLowerCase().replace(' ', '-')}`}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-3 mt-3 border-t border-slate-200/50 space-y-3">
                <a
                  href="tel:+971-4-XXX-XXXX"
                  className="text-sm text-slate-500 hover:text-emerald-600 flex items-center gap-2 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors duration-200"
                  data-testid="mobile-phone-link"
                >
                  <Phone className="w-4 h-4" />
                  +971 4 XXX XXXX
                </a>
                <Button 
                  size="sm"
                  className="w-full text-sm font-semibold py-2 h-8 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg" 
                  data-testid="mobile-button-book-consultation"
                  onClick={() => {
                    const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
                    if (chatButton) chatButton.click();
                    setIsMenuOpen(false);
                  }}
                >
                  Book Consultation
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}