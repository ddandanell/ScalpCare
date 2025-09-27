import { useState, useEffect } from 'react';
import { Home, Users, Target, Award, Star, Phone, MessageCircle, Calendar } from 'lucide-react';

export default function MobileBottomNav() {
  const [activeTab, setActiveTab] = useState('home');
  const [showQuickActions, setShowQuickActions] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#home' },
    { id: 'about', label: 'About', icon: Users, href: '#about' },
    { id: 'approach', label: 'Method', icon: Target, href: '#approach' },
    { id: 'services', label: 'Services', icon: Award, href: '#services' },
    { id: 'testimonials', label: 'Reviews', icon: Star, href: '#testimonials' },
  ];

  const quickActions = [
    { label: 'Book Now', icon: Calendar, action: 'book', color: 'bg-emerald-500' },
    { label: 'Chat Live', icon: MessageCircle, action: 'chat', color: 'bg-blue-500' },
    { label: 'Call Us', icon: Phone, action: 'call', color: 'bg-green-500' },
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
            setActiveTab(sectionId);
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
    setShowQuickActions(false);
  };

  return (
    <>
      {/* Quick Actions Overlay */}
      {showQuickActions && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setShowQuickActions(false)}>
          <div className="absolute bottom-20 right-4 space-y-3">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action.action)}
                className={`${action.color} text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 micro-bounce`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <action.icon className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 z-30 md:hidden">
        {/* Quick Action Button */}
        <div className="absolute -top-16 right-4">
          <button
            onClick={() => setShowQuickActions(!showQuickActions)}
            className="w-14 h-14 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 micro-bounce flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-6 h-6 border-2 border-white rounded-full"></div>
              <div className="absolute inset-0 w-6 h-6 border-2 border-white rounded-full animate-ping"></div>
            </div>
          </button>
        </div>

        {/* Navigation Items */}
        <div className="grid grid-cols-5 gap-1 p-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                handleNavClick(item.href);
                setActiveTab(item.id);
              }}
              className={`flex flex-col items-center gap-1 p-3 rounded-lg transition-all duration-300 ${
                activeTab === item.id
                  ? 'text-emerald-600 bg-emerald-50 scale-105'
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
              }`}
            >
              <item.icon className={`w-5 h-5 transition-transform duration-300 ${
                activeTab === item.id ? 'scale-110' : ''
              }`} />
              <span className="text-xs font-medium">{item.label}</span>
              {activeTab === item.id && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="h-1 bg-slate-200">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 transition-all duration-300"
            style={{ width: `${(navItems.findIndex(item => item.id === activeTab) + 1) * 20}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
