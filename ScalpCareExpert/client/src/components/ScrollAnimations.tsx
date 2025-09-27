import { useEffect, useRef } from 'react';

interface ScrollAnimationsProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn' | 'rotateIn';
  delay?: number;
  threshold?: number;
}

export default function ScrollAnimations({ 
  children, 
  className = '', 
  animationType = 'fadeIn',
  delay = 0,
  threshold = 0.1
}: ScrollAnimationsProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      { threshold }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [delay, threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'opacity-0 transition-all duration-1000 ease-out';
    
    switch (animationType) {
      case 'fadeIn':
        return `${baseClasses} animate-in:opacity-100`;
      case 'slideUp':
        return `${baseClasses} translate-y-8 animate-in:translate-y-0 animate-in:opacity-100`;
      case 'slideLeft':
        return `${baseClasses} translate-x-8 animate-in:translate-x-0 animate-in:opacity-100`;
      case 'slideRight':
        return `${baseClasses} -translate-x-8 animate-in:translate-x-0 animate-in:opacity-100`;
      case 'scaleIn':
        return `${baseClasses} scale-95 animate-in:scale-100 animate-in:opacity-100`;
      case 'rotateIn':
        return `${baseClasses} rotate-3 scale-95 animate-in:rotate-0 animate-in:scale-100 animate-in:opacity-100`;
      default:
        return `${baseClasses} animate-in:opacity-100`;
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
}
