import * as React from "react";
import { cn } from "../../utils/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
}) => {
  return (
    <section
      id={id}
      className={cn(
        // Consistent vertical padding
        "section-padding",
        // Horizontal padding
        "px-md",
        // Single background color throughout
        "bg-background",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {title && (
          <h2
            className={cn(
              "text-4xl font-bold mb-xl text-center",
              // Gradient text for titles
              "gradient-text"
            )}
          >
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
