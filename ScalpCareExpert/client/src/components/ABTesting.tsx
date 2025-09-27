import { useState, useEffect } from 'react';

interface ABTest {
  id: string;
  name: string;
  variants: {
    [key: string]: {
      name: string;
      weight: number;
      content: any;
    };
  };
  isActive: boolean;
  startDate: Date;
  endDate: Date;
}

export default function ABTesting() {
  const [activeTests, setActiveTests] = useState<ABTest[]>([]);
  const [userVariants, setUserVariants] = useState<{[key: string]: string}>({});

  useEffect(() => {
    // Initialize A/B tests
    const tests: ABTest[] = [
      {
        id: 'hero-cta',
        name: 'Hero CTA Button',
        variants: {
          'A': {
            name: 'Control',
            weight: 50,
            content: {
              text: 'Book Free Assessment',
              color: 'emerald',
              size: 'lg'
            }
          },
          'B': {
            name: 'Urgency',
            weight: 50,
            content: {
              text: 'Book Now - Limited Spots!',
              color: 'red',
              size: 'lg'
            }
          }
        },
        isActive: true,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days
      },
      {
        id: 'pricing-display',
        name: 'Pricing Display',
        variants: {
          'A': {
            name: 'Standard',
            weight: 50,
            content: {
              showDiscount: false,
              highlightPopular: true
            }
          },
          'B': {
            name: 'Discount',
            weight: 50,
            content: {
              showDiscount: true,
              highlightPopular: true
            }
          }
        },
        isActive: true,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      },
      {
        id: 'testimonial-style',
        name: 'Testimonial Style',
        variants: {
          'A': {
            name: 'Cards',
            weight: 50,
            content: {
              layout: 'cards',
              showPhotos: true
            }
          },
          'B': {
            name: 'Carousel',
            weight: 50,
            content: {
              layout: 'carousel',
              showPhotos: true
            }
          }
        },
        isActive: true,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
      }
    ];

    setActiveTests(tests);

    // Assign user to variants
    const variants: {[key: string]: string} = {};
    tests.forEach(test => {
      if (test.isActive) {
        const variant = assignUserToVariant(test);
        variants[test.id] = variant;
      }
    });
    setUserVariants(variants);

    // Save to localStorage
    localStorage.setItem('abTestVariants', JSON.stringify(variants));
  }, []);

  const assignUserToVariant = (test: ABTest): string => {
    // Check if user already has a variant assigned
    const savedVariants = localStorage.getItem('abTestVariants');
    if (savedVariants) {
      const variants = JSON.parse(savedVariants);
      if (variants[test.id]) {
        return variants[test.id];
      }
    }

    // Assign new variant based on weights
    const random = Math.random() * 100;
    let cumulativeWeight = 0;

    for (const [variantKey, variant] of Object.entries(test.variants)) {
      cumulativeWeight += variant.weight;
      if (random <= cumulativeWeight) {
        return variantKey;
      }
    }

    // Fallback to first variant
    return Object.keys(test.variants)[0];
  };

  const getVariant = (testId: string) => {
    return userVariants[testId] || 'A';
  };

  const getVariantContent = (testId: string) => {
    const test = activeTests.find(t => t.id === testId);
    if (!test) return null;

    const variant = getVariant(testId);
    return test.variants[variant]?.content;
  };

  const trackConversion = (testId: string, action: string, value?: number) => {
    // In a real app, you'd send this to your analytics service
    const event = {
      testId,
      variant: getVariant(testId),
      action,
      value,
      timestamp: new Date().toISOString(),
      userId: localStorage.getItem('userId') || 'anonymous'
    };

    console.log('A/B Test Conversion:', event);
    
    // Save to localStorage for demo purposes
    const conversions = JSON.parse(localStorage.getItem('abTestConversions') || '[]');
    conversions.push(event);
    localStorage.setItem('abTestConversions', JSON.stringify(conversions));
  };

  const getTestResults = (testId: string) => {
    const conversions = JSON.parse(localStorage.getItem('abTestConversions') || '[]');
    const testConversions = conversions.filter((c: any) => c.testId === testId);
    
    const results: {[key: string]: {conversions: number, rate: number}} = {};
    
    // Group by variant
    testConversions.forEach((conversion: any) => {
      if (!results[conversion.variant]) {
        results[conversion.variant] = { conversions: 0, rate: 0 };
      }
      results[conversion.variant].conversions++;
    });

    // Calculate conversion rates (simplified)
    Object.keys(results).forEach(variant => {
      const test = activeTests.find(t => t.id === testId);
      if (test) {
        const totalUsers = 100; // This would come from your analytics
        results[variant].rate = (results[variant].conversions / totalUsers) * 100;
      }
    });

    return results;
  };

  return {
    getVariant,
    getVariantContent,
    trackConversion,
    getTestResults,
    activeTests
  };
}
