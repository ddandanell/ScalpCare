import { useState, useEffect } from 'react';
import { Users, Eye, Clock } from 'lucide-react';

export default function LiveVisitorCounter() {
  const [visitorCount, setVisitorCount] = useState(0);
  const [recentActivity, setRecentActivity] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate realistic visitor count
    const baseCount = Math.floor(Math.random() * 15) + 8; // 8-22 visitors
    setVisitorCount(baseCount);

    // Update count every 30-60 seconds
    const updateCount = () => {
      const change = Math.floor(Math.random() * 3) - 1; // -1, 0, or 1
      setVisitorCount(prev => Math.max(5, prev + change));
    };

    const interval = setInterval(updateCount, Math.random() * 30000 + 30000);

    // Generate recent activity
    const activities = [
      "Sarah from Dubai just booked a consultation",
      "Ahmed from Abu Dhabi viewed our services",
      "Maria from Sharjah completed her assessment",
      "David from Jumeirah is viewing testimonials",
      "Fatima from Downtown just called us",
      "James from Marina booked a VIP consultation",
      "Aisha from Deira is reading our approach",
      "Michael from Business Bay viewed pricing",
      "Layla from Palm Jumeirah completed booking",
      "Omar from DIFC is chatting with us"
    ];

    const generateActivity = () => {
      const randomActivity = activities[Math.floor(Math.random() * activities.length)];
      setRecentActivity(prev => [randomActivity, ...prev.slice(0, 2)]);
    };

    // Generate initial activity
    generateActivity();
    
    // Generate new activity every 15-45 seconds
    const activityInterval = setInterval(generateActivity, Math.random() * 30000 + 15000);

    // Show/hide based on scroll position
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 200 && scrollY < document.documentElement.scrollHeight - window.innerHeight - 200);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      clearInterval(interval);
      clearInterval(activityInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 max-w-xs">
      {/* Main Counter */}
      <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-4 mb-3">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          </div>
          <div>
            <div className="text-sm font-medium text-slate-700">
              <Users className="w-4 h-4 inline mr-1" />
              {visitorCount} people viewing this page
            </div>
            <div className="text-xs text-slate-500">Live now</div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200 p-4 space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700">
            <Eye className="w-4 h-4" />
            Recent Activity
          </div>
          
          <div className="space-y-2">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="text-xs text-slate-600 animate-slide-in-stagger"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{activity}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Trust Indicators */}
      <div className="bg-emerald-50/95 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-200 p-3 mt-3">
        <div className="flex items-center gap-2 text-sm text-emerald-700">
          <Clock className="w-4 h-4" />
          <span className="font-medium">Average wait time: 2 minutes</span>
        </div>
        <div className="text-xs text-emerald-600 mt-1">
          Our experts are online and ready to help
        </div>
      </div>
    </div>
  );
}
