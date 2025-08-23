import React from "react";

export function FeatureTag({ children }: { children: React.ReactNode }) {
  return (
  <span className="mb-2 mr-2 inline-block rounded-full border border-surface-border bg-surface-secondary px-3 py-1 text-xs font-medium text-gray-200 transition-colors duration-200 hover:border-surface-border-light">
    {children}
  </span>
  );
}
