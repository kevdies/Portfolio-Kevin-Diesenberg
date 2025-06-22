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

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeSection, navigateTo } = useScrollSpy();

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-600 shadow-lg">
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        <button
          onClick={() => navigateTo("about")}
          className="text-lg font-bold text-white hover:text-purple-500"
        >
          Kevin Diesenberg
        </button>

        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => navigateTo(item.id)}
                className={cn(
                  "py-2 px-4 rounded",
                  activeSection === item.id
                    ? "text-purple-500 bg-purple-500/20"
                    : "text-gray-400 hover:text-gray-200 hover:bg-zinc-800/50"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="md:hidden p-2 rounded hover:bg-zinc-800"
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black border-t border-zinc-600">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                navigateTo(item.id);
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-6 py-3 rounded",
                activeSection === item.id
                  ? "text-purple-500 bg-purple-500/20"
                  : "text-gray-400 hover:text-gray-200 hover:bg-zinc-800/50"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
