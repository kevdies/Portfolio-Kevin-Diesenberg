"use client";

import React, { useState, useEffect } from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "professional-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle navigation
  const handleNav = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Get all sections with their positions
      const sectionPositions = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            top: rect.top,
            bottom: rect.bottom,
          };
        })
        .filter(Boolean);

      // Find the section that's currently in view
      // Check from bottom to top to prioritize lower sections when multiple are visible
      let currentSection = "";

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = sectionPositions[i];
        if (!section) continue;

        // Section is active if its top is above viewport center
        // or if it's the last section and we're near bottom of page
        const isLastSection = i === sectionPositions.length - 1;
        const nearBottom =
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100;

        if (
          section.top <= window.innerHeight / 2 ||
          (isLastSection && nearBottom)
        ) {
          currentSection = section.id;
          break;
        }
      }

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // No body scroll lock needed - mobile menu is fixed position anyway

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-border-hover"
          : "bg-background/90 backdrop-blur-sm border-border"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            setActive("");
          }}
          className="text-md md:text-l font-heading font-bold text-text-emphasis hover:text-primary transition-colors"
        >
          Kevin Diesenberg
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  "py-2 px-4 rounded-md transition-colors",
                  active === item.id
                    ? "text-primary font-semibold"
                    : "text-text-muted hover:text-text"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-surface"
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop with proper z-index */}
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />
          {/* Menu panel with higher z-index and solid background */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-background border-l border-border shadow-xl md:hidden z-50">
            <div className="flex items-center justify-between p-6 border-b border-border bg-background">
              <span className="text-lg font-heading font-semibold text-text-emphasis">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-surface"
              >
                <Icon name="times" size="lg" />
              </button>
            </div>
            <nav className="p-6 bg-background">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-md",
                        "hover:bg-surface transition-colors",
                        active === item.id
                          ? "bg-surface text-primary font-semibold"
                          : "text-text-muted hover:text-text"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
