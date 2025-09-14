import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className, size = "md" }: LogoProps) {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12", 
    lg: "h-14 w-14"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {/* Modern Coding/Outsourcing Icon */}
      <div className={cn("relative flex-shrink-0", sizeClasses[size])}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="h-full w-full"
        >
          {/* Main coding brackets - modern tech aesthetic */}
          <path
            d="M8 3L4 7L8 11"
            stroke="url(#purpleGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M16 3L20 7L16 11"
            stroke="url(#purpleGradient)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Central coding elements */}
          <path
            d="M10 7H14"
            stroke="url(#purpleGradient2)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle
            cx="12"
            cy="7"
            r="1"
            fill="url(#purpleGradient3)"
          />
          
          {/* Modern connecting lines */}
          <path
            d="M8 3L10 7M14 7L16 3M8 11L10 7M14 7L16 11"
            stroke="url(#purpleGradient4)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.4"
          />
          
          {/* Accent dots for tech feel */}
          <circle
            cx="6"
            cy="5"
            r="0.8"
            fill="url(#purpleGradient5)"
            opacity="0.6"
          />
          <circle
            cx="18"
            cy="9"
            r="0.8"
            fill="url(#purpleGradient5)"
            opacity="0.6"
          />
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(112, 51, 255)" />
              <stop offset="50%" stopColor="rgb(139, 92, 246)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
            <linearGradient id="purpleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(196, 181, 253)" />
              <stop offset="100%" stopColor="rgb(221, 214, 254)" />
            </linearGradient>
            <linearGradient id="purpleGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(255, 255, 255)" />
              <stop offset="100%" stopColor="rgb(221, 214, 254)" />
            </linearGradient>
            <linearGradient id="purpleGradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(112, 51, 255)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
            <linearGradient id="purpleGradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(196, 181, 253)" />
              <stop offset="100%" stopColor="rgb(221, 214, 254)" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      {/* Text */}
      <div className="flex items-center">
        <span className={cn("font-bold text-foreground leading-none uppercase tracking-wide", textSizeClasses[size])}>
          OUTSOURCING
        </span>
      </div>
    </div>
  );
}
