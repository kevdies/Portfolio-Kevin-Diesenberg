import * as React from "react";
import { cn } from "@/utils/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "rectangular" | "circular";
  width?: string | number;
  height?: string | number;
  lines?: number;
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ className, variant = "rectangular", width, height, lines = 1, ...props }, ref) => {
    const baseClasses = cn(
      "animate-pulse bg-gradient-to-r from-surface-secondary via-surface-border/30 to-surface-secondary",
      "bg-[length:200px_100%]",
      "animate-shimmer",
      className,
    );

    if (variant === "text" && lines > 1) {
      return (
        <div ref={ref} className="space-y-2" {...props}>
          {Array.from({ length: lines }, (_, i) => (
            <div
              key={i}
              className={cn(
                baseClasses,
                "h-4 rounded",
                i === lines - 1 && "w-3/4", // Last line is shorter
              )}
              style={{ width: i === lines - 1 ? undefined : width }}
            />
          ))}
        </div>
      );
    }

    const variantClasses = {
      text: "h-4 rounded",
      rectangular: "rounded-lg",
      circular: "rounded-full aspect-square",
    };

    return (
      <div
        ref={ref}
        className={cn(baseClasses, variantClasses[variant])}
        style={{ width, height }}
        {...props}
      />
    );
  }
);

Skeleton.displayName = "Skeleton";

// Pre-built skeleton components for common use cases
const SkeletonCard = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("p-content-lg md:p-content-xl rounded-lg border border-subtle bg-surface-secondary", className)} {...props}>
    <div className="space-y-content">
      <Skeleton variant="rectangular" height="12rem" className="mb-content-lg" />
      <Skeleton variant="text" width="60%" />
      <Skeleton variant="text" lines={3} />
      <div className="flex gap-2 mt-content">
        <Skeleton variant="rectangular" width="5rem" height="2rem" />
        <Skeleton variant="rectangular" width="5rem" height="2rem" />
      </div>
    </div>
  </div>
);

const SkeletonText = ({ lines = 3, className, ...props }: { lines?: number } & React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("space-y-2", className)} {...props}>
    {Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        variant="text"
        className={i === lines - 1 ? "w-3/4" : "w-full"}
      />
    ))}
  </div>
);

const SkeletonAvatar = ({ size = "md", className, ...props }: { size?: "sm" | "md" | "lg" } & React.HTMLAttributes<HTMLDivElement>) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12", 
    lg: "w-16 h-16",
  };

  return (
    <Skeleton
      variant="circular"
      className={cn(sizeClasses[size], className)}
      {...props}
    />
  );
};

export { Skeleton, SkeletonCard, SkeletonText, SkeletonAvatar };