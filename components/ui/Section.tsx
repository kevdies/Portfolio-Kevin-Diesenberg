import * as React from "react";
import { cn } from "../../utils/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  /** Whether to show the gradient separator below title */
  showSeparator?: boolean;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  showSeparator = true,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "py-8 md:py-12 lg:py-16", // Reduced top/bottom padding with responsive sizing
        "px-4 sm:px-6", // Reduced horizontal padding, responsive
        "bg-background",
        "relative overflow-hidden",
        className
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-start/5 via-transparent to-primary-end/5 opacity-50" />

      {/* Subtle animated dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container mx-auto max-w-7xl relative">
        {title && (
          <div className="text-center mb-8 md:mb-12">
            {/* Enhanced title with better animation */}
            <h2
              className={cn(
                "text-h2 font-heading font-semibold mb-4 md:mb-6",
                "bg-gradient-to-r from-primary-start to-primary-end bg-clip-text text-transparent",
                "animate-in fade-in slide-in-from-bottom-4 duration-700"
              )}
            >
              {title}
            </h2>

            {/* Enhanced separator with glow effect */}
            {showSeparator && (
              <div
                className={cn(
                  "w-12 h-0.5 bg-gradient-to-r from-primary-start to-primary-end mx-auto mb-4 md:mb-6",
                  "opacity-60 rounded-full shadow-sm",
                  "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150"
                )}
              />
            )}

            {/* Enhanced subtitle */}
            {subtitle && (
              <p
                className={cn(
                  "text-lg text-text-muted max-w-2xl mx-auto leading-relaxed",
                  "animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content with subtle animation */}
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
