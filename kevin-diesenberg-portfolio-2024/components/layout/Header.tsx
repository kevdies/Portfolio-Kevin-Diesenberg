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

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <h1
          className="text-h1 font-heading font-bold gradient-text cursor-pointer select-none"
          style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Kevin Diesenberg
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNav(item.id)}
                className={cn(
                  "py-1 px-1 transition-colors duration-200",
                  active === item.id
                    ? "text-primary font-medium"
                    : "text-textMuted hover:text-text"
                )}
              >
                {item.label}
              </button>
              {active === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 gradient-bg rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((o) => !o)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 rounded-md hover:bg-surface transition-colors"
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Panel with bottom-aligned links */}
          <div className="relative flex flex-col h-full px-6">
            {/* Top “×” close */}
            <div className="flex justify-end pt-4">
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-surface transition-colors"
              >
                <Icon name="times" size="lg" />
              </button>
            </div>

            {/* Push links to bottom */}
            <div className="flex-1" />

            <nav className="pb-12">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNav(item.id)}
                      className="w-full text-right text-xl py-2 rounded-lg hover:bg-surface transition-colors"
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
