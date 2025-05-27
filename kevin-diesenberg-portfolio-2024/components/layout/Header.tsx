"use client";

import React, { useState, useEffect } from "react";
import Icon from "../ui/Icon";
import { useSectionScroll } from "../../hooks/useSectionScroll";
import { cn } from "../../utils/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "professional-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
];

const Navbar: React.FC = () => {
  const scrollToSection = useSectionScroll();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection for header styling
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy for desktop underline
  useEffect(() => {
    const onScroll = () => {
      const offsetY = window.scrollY + 100;
      let current = "";
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && offsetY >= el.offsetTop) {
          current = navItems[i].id;
          break;
        }
      }
      if (window.scrollY < 50) current = navItems[0].id;
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive(navItems[0].id);
  };

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b border-border",
        isScrolled ? "bg-background shadow-md border-border" : "bg-background"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo - Enhanced */}
        <button
          onClick={handleLogoClick}
          className={cn(
            "text-2xl md:text-h1 font-heading font-bold gradient-text",
            "cursor-pointer select-none",
            "transition-all duration-300",
            "hover:scale-105 focus-ring rounded-md px-2 py-1",
            "focus:outline-none"
          )}
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          aria-label="Kevin Diesenberg - Back to top"
        >
          {`Kevin Diesenberg`}
        </button>

        {/* Desktop Menu - Enhanced */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  "py-2 px-3 rounded-md transition-all duration-300",
                  "focus-ring focus:outline-none",
                  active === item.id
                    ? "text-primary font-semibold"
                    : "text-textMuted hover:text-text font-medium"
                )}
                aria-label={`Navigate to ${item.label} section`}
              >
                {item.label}
              </button>
              {/* Active indicator with smooth animation */}
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-0.5 gradient-bg rounded-full",
                  "transition-all duration-300 ease-out",
                  active === item.id
                    ? "w-full opacity-100 -translate-x-1/2"
                    : "w-0 opacity-0 -translate-x-1/2"
                )}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle - Enhanced */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className={cn(
            "md:hidden p-2 rounded-md transition-all duration-300",
            "hover:bg-surface focus-ring focus:outline-none",
            isOpen && "bg-surface"
          )}
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {/* Mobile Overlay - Enhanced */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop with blur */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          {/* Panel with enhanced styling */}
          <div className="relative flex flex-col h-full bg-background/98 backdrop-blur-sm border-r border-border">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-border/50">
              <span className="text-lg font-heading font-semibold gradient-text">
                {`Navigation`}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-surface transition-colors focus-ring"
              >
                <Icon name="times" size="lg" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-6 py-8">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className={cn(
                        "w-full text-left text-xl py-3 px-4 rounded-lg",
                        "transition-all duration-300",
                        "hover:bg-surface hover:translate-x-1",
                        "focus-ring focus:outline-none",
                        active === item.id
                          ? "bg-surface border border-border-hover text-primary font-semibold"
                          : "text-textMuted hover:text-text"
                      )}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
