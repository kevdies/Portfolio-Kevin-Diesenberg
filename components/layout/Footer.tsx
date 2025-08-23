"use client";

import React from "react";
import { Icon } from "@/components/ui/Icon";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border/20 bg-surface-primary pt-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-hierarchy-primary">Kevin Diesenberg</h3>
            <p className="text-sm text-hierarchy-tertiary">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-2 text-sm text-hierarchy-muted">
            <span>Built with</span>
            <Icon name="heart" size="sm" className="text-red-400" />
            <span>Next.js & Tailwind</span>
          </div>
        </div>

        {/* Reduced footer padding since we now have floating scroll to top */}
        <div className="mt-6 pb-6"></div>
      </div>
    </footer>
  );
};
