import { useState, useEffect } from 'react';
import { Shield, Lock, Award, CheckCircle, Star, Users, Clock, Globe } from 'lucide-react';

export default function TrustSignals() {
  const [liveCount, setLiveCount] = useState(0);
  const [recentBookings, setRecentBookings] = useState<string[]>([]);

  useEffect(() => {
    // Simulate live visitor count
    const baseCount = Math.floor(Math.random() * 20) + 15;
    setLiveCount(baseCount);

    const interval = setInterval(() => {
      setLiveCount(prev => prev + Math.floor(Math.random() * 3) - 1);
    }, 5000);

    // Simulate recent bookings
    const bookings = [
      "Sarah from Dubai Marina just booked",
      "Ahmed from Jumeirah completed assessment",
      "Emma from Downtown Dubai called us",
      "Michael from Business Bay booked VIP",
      "Fatima from Al Wasl scheduled consultation",
      "James from Palm Jumeirah is viewing services",
      "Layla from Deira completed booking",
      "Omar from DIFC is chatting with us"
    ];

    const generateBooking = () => {
      const randomBooking = bookings[Math.floor(Math.random() * bookings.length)];
      setRecentBookings(prev => [randomBooking, ...prev.slice(0, 2)]);
    };

    generateBooking();
    const bookingInterval = setInterval(generateBooking, 8000);

    return () => {
      clearInterval(interval);
      clearInterval(bookingInterval);
    };
  }, []);

  const trustBadges = [
    {
      icon: Shield,
      title: "SSL Secured",
      description: "256-bit encryption",
      color: "text-green-600",
      bgColor: "bg-green-100"
    },
    {
      icon: Lock,
      title: "Data Protected",
      description: "GDPR compliant",
      color: "text-blue-600",
      bgColor: "bg-blue-100"
    },
    {
      icon: Award,
      title: "Certified Experts",
      description: "Licensed professionals",
      color: "text-purple-600",
      bgColor: "bg-purple-100"
    },
    {
      icon: CheckCircle,
      title: "30-Day Guarantee",
      description: "Money-back promise",
      color: "text-emerald-600",
      bgColor: "bg-emerald-100"
    }
  ];

  const stats = [
    { icon: Users, value: "4,500+", label: "Happy Clients" },
    { icon: Star, value: "4.9/5", label: "Average Rating" },
    { icon: Award, value: "5+", label: "Years Experience" },
    { icon: Globe, value: "98%", label: "Success Rate" }
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {trustBadges.map((badge, index) => (
            <div
              key={index}
              className={`${badge.bgColor} p-4 rounded-xl text-center hover:shadow-lg transition-all duration-300 micro-bounce`}
            >
              <badge.icon className={`w-8 h-8 ${badge.color} mx-auto mb-2`} />
              <h3 className={`font-semibold ${badge.color} text-sm`}>{badge.title}</h3>
              <p className="text-xs text-slate-600 mt-1">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Live Activity */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Live Visitors */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-lg font-semibold text-slate-900">Live Activity</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-600">People viewing this page:</span>
                <span className="font-bold text-emerald-600">{liveCount}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Average wait time:</span>
                <span className="font-bold text-blue-600">2 minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-600">Last booking:</span>
                <span className="font-bold text-purple-600">3 minutes ago</span>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-200">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-5 h-5 text-slate-600" />
              <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
            </div>
            <div className="space-y-3">
              {recentBookings.map((booking, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-600 animate-slide-in-stagger"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{booking}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 micro-bounce"
            >
              <stat.icon className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Security Notice */}
        <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-emerald-600" />
              <Lock className="w-8 h-8 text-blue-600" />
              <Award className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Your Privacy & Security Matter
            </h3>
            <p className="text-slate-600 mb-6">
              We use industry-standard security measures to protect your personal information. 
              All consultations are confidential, and we never share your data without your explicit consent.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                HIPAA Compliant
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                GDPR Compliant
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                SSL Encrypted
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-green-500" />
                PCI Compliant
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
