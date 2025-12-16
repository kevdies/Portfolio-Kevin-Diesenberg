import React from "react";
import { cn } from "@/lib/utils";

export function HobbyList({ hobbies }: { hobbies: string[] }) {
  return (
  <ul className="flex flex-wrap justify-center gap-4" role="list">
    {hobbies.map((hobby, idx) => (
      <li
        key={idx}
        className={cn(
          "flex items-center space-x-2 rounded-full",
          "border border-surface-border bg-surface-secondary",
          "px-6 py-2",
          "transition-all duration-200",
          "group hover:border-surface-border-light hover:bg-surface-tertiary",
        )}
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-brand-primary to-brand-primary-dark transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
        <span className="text-hierarchy-tertiary transition-colors duration-200 group-hover:text-hierarchy-primary">
          {hobby}
        </span>
      </li>
    ))}
  </ul>
  );
}
