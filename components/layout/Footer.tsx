"use client";

import React from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#professional-projects" },
  { label: "Experience", href: "#experience" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-black border-t border-zinc-600/20">
      <div className="container mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-['Poppins'] font-bold text-white mb-2">
              Kevin Diesenberg
            </h3>
            <p className="text-sm text-gray-400">
              © {currentYear} All rights reserved.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={cn(
                  "text-sm text-gray-400 hover:text-gray-200",
                  "transition-colors duration-200",
                  "focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-2 py-1"
                )}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span>Built with</span>
            <Icon name="heart" size="sm" className="text-red-400" />
            <span>Next.js & Tailwind</span>
          </div>
        </div>

        <div className="text-center mt-8 pt-6 border-t border-zinc-600/20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={cn(
              "inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200",
              "transition-all duration-300",
              "focus:outline-none focus:ring-2 focus:ring-purple-500 rounded px-3 py-2",
              "hover:-translate-y-1"
            )}
            aria-label="Back to top"
          >
            <span>↑</span>
            <span>Back to top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
