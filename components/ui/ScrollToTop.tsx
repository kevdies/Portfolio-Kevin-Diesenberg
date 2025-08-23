"use client";

import React from "react";
import { cn } from "@/utils/utils";
import { Icon } from "./Icon";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);

  React.useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrolled / maxHeight) * 100;
      
      setScrollProgress(progress);
      setIsVisible(scrolled > 300); // Show after 300px
    };

    const handleScroll = () => {
      requestAnimationFrame(toggleVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50",
        "flex h-14 w-14 items-center justify-center",
        "rounded-full bg-surface-secondary/90 backdrop-blur-sm",
        "border border-surface-border hover:border-brand-primary/50",
        "shadow-lg hover:shadow-xl",
        "mobile-hover",
        "focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2 focus:ring-offset-surface-primary",
        "touch-target-lg group"
      )}
      aria-label="Scroll to top"
    >
      {/* Progress ring */}
      <svg
        className="absolute inset-0 h-14 w-14 -rotate-90"
        viewBox="0 0 56 56"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="rgba(168, 85, 247, 0.2)"
          strokeWidth="2"
        />
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke="rgb(168, 85, 247)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray={`${2 * Math.PI * 26}`}
          strokeDashoffset={`${2 * Math.PI * 26 * (1 - scrollProgress / 100)}`}
          className="transition-all duration-300"
        />
      </svg>
      
      {/* Arrow icon */}
      <Icon 
        name="chevronDown" 
        size="lg" 
        className="rotate-180 text-hierarchy-secondary transition-colors group-hover:text-brand-primary" 
      />
    </button>
  );
}