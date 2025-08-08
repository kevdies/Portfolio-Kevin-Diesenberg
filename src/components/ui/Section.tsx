import * as React from "react";
import { cn } from "../../utils/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
  paddingTop?: string;
  paddingBottom?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <section
      id={id}
      className={cn(
        "px-4 sm:px-6", // Reduced horizontal padding, responsive
        paddingTop ? paddingTop : "pt-8 md:pt-12 lg:pt-16",
        paddingBottom ? paddingBottom : "pb-8 md:pb-12 lg:pb-16",
        "bg-black",
        "relative overflow-hidden",
        "scroll-mt-[64px]",
        className,
      )}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-purple-600/5 opacity-50" />

      {/* Subtle animated dots pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="container relative mx-auto max-w-7xl">
        {title && (
          <div className="mb-8 text-center md:mb-12">
            {/* Enhanced title with better animation */}
            <h2
              className={cn(
                "mb-4 font-['Poppins'] text-3xl font-semibold md:mb-6",
                "bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent",
                "duration-700 animate-in fade-in slide-in-from-bottom-4",
              )}
            >
              {title}
            </h2>

            {/* Enhanced subtitle */}
            {subtitle && (
              <p
                className={cn(
                  "mx-auto max-w-2xl text-lg leading-relaxed text-gray-400",
                  "delay-300 duration-700 animate-in fade-in slide-in-from-bottom-4",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content with subtle animation */}
        <div className="delay-500 duration-700 animate-in fade-in slide-in-from-bottom-4">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
