import React from "react";
import { cn } from "@/utils/utils";

export function HobbyList({ hobbies }: { hobbies: string[] }) {
  return (
  <div className="flex flex-wrap justify-center gap-4">
    {hobbies.map((hobby, idx) => (
      <div
        key={idx}
        className={cn(
          "flex items-center space-x-2 rounded-full",
          "border border-surface-border bg-surface-secondary",
          "px-6 py-2",
          "transition-all duration-200",
          "group hover:border-surface-border-light hover:bg-surface-tertiary",
        )}
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dark transition-transform duration-200 group-hover:scale-110" />
        <span className="text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
          {hobby}
        </span>
      </div>
    ))}
  </div>
  );
}
