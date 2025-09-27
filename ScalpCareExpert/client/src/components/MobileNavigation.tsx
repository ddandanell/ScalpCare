import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Target, 
  Phone, 
  MessageCircle, 
  Calendar,
  Star,
  Award,
  Shield
} from 'lucide-react';

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: Users, href: '#about' },
    { id: 'approach', label: 'Our Method', icon: Target, href: '#approach' },
    { id: 'services', label: 'Services', icon: Award, href: '#services' },
    { id: 'testimonials', label: 'Reviews', icon: Star, href: '#testimonials' },
    { id: 'contact', label: 'Contact', icon: Phone, href: '#contact' },
  ];

  const quickActions = [
    { label: 'Book Now', icon: Calendar, action: 'book' },
    { label: 'Chat Live', icon: MessageCircle, action: 'chat' },
    { label: 'Call Us', icon: Phone, action: 'call' },
  ];

  // Track active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleQuickAction = (action: string) => {
    switch (action) {
      case 'book':
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'chat':
        const chatButton = document.querySelector('[data-chat-button]') as HTMLElement;
        if (chatButton) chatButton.click();
        break;
      case 'call':
        window.open('tel:+971501234567', '_self');
        break;
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Trigger */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </Button>
        </SheetTrigger>
        
        <SheetContent side="right" className="w-80 p-0 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="h-full flex flex-col">
            {/* Header */}
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2 className="font-bold text-slate-900">ScalpCare Expert</h2>
                    <p className="text-xs text-slate-500">Dubai's #1 Hair Health</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="w-8 h-8 rounded-full hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 p-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-emerald-100 text-emerald-700 shadow-md'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-6 border-t border-slate-200 space-y-3">
              <h3 className="text-sm font-semibold text-slate-700 mb-3">Quick Actions</h3>
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className={`w-full justify-start gap-3 h-12 ${
                    index === 0
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white shadow-lg'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <action.icon className="w-5 h-5" />
                  <span className="font-medium">{action.label}</span>
                </Button>
              ))}
            </div>

            {/* Trust Indicators */}
            <div className="p-6 bg-slate-50 space-y-3">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live support available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span>4.9/5 rating from 4,500+ clients</span>
              </div>
              <div className="text-xs text-slate-500">
                Free consultation • No obligation • 30-day guarantee
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Bottom Tab Navigation (Alternative) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 md:hidden z-40">
        <div className="grid grid-cols-4 gap-1 p-2">
          {navItems.slice(0, 4).map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.href)}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-emerald-600 bg-emerald-50'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
