import React from "react";
import { cn } from "@/utils/utils";

export const HobbyList: React.FC<{ hobbies: string[] }> = ({ hobbies }) => (
  <div className="flex flex-wrap justify-center gap-4">
    {hobbies.map((hobby, idx) => (
      <div
        key={idx}
        className={cn(
          "flex items-center space-x-2 rounded-full",
          "border border-zinc-600 bg-zinc-800",
          "px-6 py-2",
          "transition-all duration-200",
          "group hover:border-zinc-500 hover:bg-zinc-700",
        )}
      >
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-transform duration-200 group-hover:scale-110" />
        <span className="text-gray-400 transition-colors duration-200 group-hover:text-gray-200">
          {hobby}
        </span>
      </div>
    ))}
  </div>
);
