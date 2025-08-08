import React from "react";

export const FeatureTag: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <span className="mb-2 mr-2 inline-block rounded-full border border-zinc-600 bg-zinc-800 px-3 py-1 text-xs font-medium text-gray-200 transition-colors duration-200 hover:border-zinc-500">
    {children}
  </span>
);
