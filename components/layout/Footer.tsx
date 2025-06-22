"use client";

import React from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "professional-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();
  const { activeSection, navigateTo } = useScrollSpy();

  return (
    <footer className="bg-black border-t border-zinc-600/20 pt-8">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Kevin Diesenberg</h3>
            <p className="text-sm text-gray-400">
              © {year} All rights reserved.
            </p>
          </div>

          {/* Shrunken nav: no wrap, tight gap, xs text */}
          <nav className="flex flex-nowrap justify-center gap-2 text-xs">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigateTo(item.id)}
                className={cn(
                  "px-2 py-1 rounded",
                  activeSection === item.id
                    ? "text-purple-500 bg-purple-500/20 font-semibold"
                    : "text-gray-400 hover:text-gray-200"
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Built With */}
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <Icon name="heart" size="sm" className="text-red-400" />
            <span>Next.js & Tailwind</span>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8 pb-8">
          <button
            onClick={() => navigateTo("about")}
            className="inline-flex items-center gap-2 text-sm hover:-translate-y-1"
          >
            <span>↑</span> Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
