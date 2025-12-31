import * as React from "react";

import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8", className)}
        {...props}
      >
        {children}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
