import * as React from "react";
import { cn } from "../../utils/utils";

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
  spacing?: "sm" | "default" | "lg";
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className,
  spacing = "default",
}) => {
  const spacingClasses = {
    sm: "section-padding-sm",
    default: "section-padding",
    lg: "section-padding-lg",
  };

  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        "px-md",
        "bg-background",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">
        {title && (
          <h2 className="text-h2 font-heading font-semibold mb-xl text-center gradient-text">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
