import * as React from "react";
import { cn } from "@/utils/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  subtitle?: string;
}

function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-section", // Consistent section spacing
        "px-4 xs:px-5 sm:px-6 lg:px-8", // Enhanced mobile padding progression
        "bg-surface-primary",
        "relative overflow-hidden",
        "scroll-mt-[64px]",
        className,
      )}
    >

      <div className="container relative mx-auto max-w-7xl">
        {title && (
          <div className="mb-content-xl text-center">
            <h2 className="mb-content font-heading text-2xl font-semibold text-white xs:text-3xl md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mx-auto max-w-3xl text-base text-hierarchy-tertiary xs:text-lg md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;
