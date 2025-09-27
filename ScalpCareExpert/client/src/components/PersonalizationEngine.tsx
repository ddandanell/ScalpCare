import { useState, useEffect } from 'react';

interface PersonalizationData {
  location: string;
  timeOfDay: string;
  deviceType: 'mobile' | 'desktop' | 'tablet';
  visitCount: number;
  interests: string[];
  lastVisit: Date | null;
}

export default function PersonalizationEngine() {
  const [personalizationData, setPersonalizationData] = useState<PersonalizationData>({
    location: 'Dubai',
    timeOfDay: 'morning',
    deviceType: 'desktop',
    visitCount: 1,
    interests: [],
    lastVisit: null
  });

  const [personalizedContent, setPersonalizedContent] = useState({
    greeting: 'Welcome to ScalpCare Expert',
    ctaText: 'Book Your Free Assessment',
    urgencyMessage: 'Limited spots available this week',
    recommendedService: 'Essential Scalp Assessment'
  });

  useEffect(() => {
    // Detect user location (simplified)
    const detectLocation = () => {
      // In a real app, you'd use geolocation API or IP-based detection
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai')) {
        return 'Dubai';
      }
      return 'Dubai'; // Default for this demo
    };

    // Detect time of day
    const detectTimeOfDay = () => {
      const hour = new Date().getHours();
      if (hour < 12) return 'morning';
      if (hour < 17) return 'afternoon';
      return 'evening';
    };

    // Detect device type
    const detectDeviceType = (): 'mobile' | 'desktop' | 'tablet' => {
      const width = window.innerWidth;
      if (width < 768) return 'mobile';
      if (width < 1024) return 'tablet';
      return 'desktop';
    };

    // Get visit count from localStorage
    const getVisitCount = () => {
      const count = localStorage.getItem('visitCount');
      return count ? parseInt(count) + 1 : 1;
    };

    // Get last visit from localStorage
    const getLastVisit = () => {
      const lastVisit = localStorage.getItem('lastVisit');
      return lastVisit ? new Date(lastVisit) : null;
    };

    // Update personalization data
    const newData: PersonalizationData = {
      location: detectLocation(),
      timeOfDay: detectTimeOfDay(),
      deviceType: detectDeviceType(),
      visitCount: getVisitCount(),
      interests: [], // Would be populated from user behavior
      lastVisit: getLastVisit()
    };

    setPersonalizationData(newData);

    // Save to localStorage
    localStorage.setItem('visitCount', newData.visitCount.toString());
    localStorage.setItem('lastVisit', new Date().toISOString());

    // Generate personalized content
    generatePersonalizedContent(newData);
  }, []);

  const generatePersonalizedContent = (data: PersonalizationData) => {
    const greetings = {
      morning: 'Good morning! Ready to transform your hair health?',
      afternoon: 'Good afternoon! Perfect time for a scalp consultation',
      evening: 'Good evening! Book your consultation for tomorrow'
    };

    const ctaTexts = {
      first: 'Start Your Hair Health Journey',
      returning: 'Continue Your Transformation',
      frequent: 'Book Your Next Session'
    };

    const urgencyMessages = {
      morning: 'Morning slots filling up fast - book now!',
      afternoon: 'Afternoon consultations available today',
      evening: 'Secure your spot for tomorrow'
    };

    const recommendedServices = {
      mobile: 'Quick Assessment',
      tablet: 'Premium Consultation',
      desktop: 'VIP Executive Audit'
    };

    let ctaText = ctaTexts.first;
    if (data.visitCount > 3) ctaText = ctaTexts.frequent;
    else if (data.visitCount > 1) ctaText = ctaTexts.returning;

    setPersonalizedContent({
      greeting: greetings[data.timeOfDay as keyof typeof greetings],
      ctaText,
      urgencyMessage: urgencyMessages[data.timeOfDay as keyof typeof urgencyMessages],
      recommendedService: recommendedServices[data.deviceType]
    });
  };

  const getPersonalizedRecommendations = () => {
    const recommendations = [];
    
    if (personalizationData.visitCount === 1) {
      recommendations.push('Start with our free assessment');
      recommendations.push('Learn about our Dubai Climate Method');
    } else if (personalizationData.visitCount > 1) {
      recommendations.push('Book your follow-up consultation');
      recommendations.push('Explore our premium services');
    }

    if (personalizationData.timeOfDay === 'evening') {
      recommendations.push('Schedule for tomorrow morning');
    }

    return recommendations;
  };

  return {
    personalizationData,
    personalizedContent,
    recommendations: getPersonalizedRecommendations()
  };
}
