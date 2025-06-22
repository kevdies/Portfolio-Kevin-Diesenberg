"use client";

import React, { useState, useEffect, useCallback } from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "professional-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
] as const;

const SCROLL_THRESHOLD = 20;
const NAVBAR_OFFSET = -80;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Smooth scroll to section
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const y =
      element.getBoundingClientRect().top + window.scrollY + NAVBAR_OFFSET;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  // Handle navigation click
  const handleNavClick = useCallback(
    (id: string) => {
      setIsOpen(false);
      scrollToSection(id);
    },
    [scrollToSection]
  );

  // Handle logo click
  const handleLogoClick = useCallback(() => {
    setActive("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Optimized scroll detection with map instead of loops
  useEffect(() => {
    let ticking = false;

    const updateScrollState = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > SCROLL_THRESHOLD);

      // Get section positions using map
      const sectionPositions = navItems
        .map((item, index) => {
          const element = document.getElementById(item.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            index,
            top: rect.top,
            isVisible: rect.top <= window.innerHeight / 2,
          };
        })
        .filter(Boolean);

      // Find active section using map/find instead of loop
      const viewportCenter = window.innerHeight / 2;
      const isNearBottom =
        window.innerHeight + scrollY >= document.body.offsetHeight - 100;

      // Check from bottom to top by reversing
      const activeSection = sectionPositions.reverse().find((section) => {
        if (!section) return false;
        const isLastSection = section.index === navItems.length - 1;
        return section.top <= viewportCenter || (isLastSection && isNearBottom);
      });

      const currentSection = activeSection?.id || "";

      if (currentSection !== active) {
        setActive(currentSection);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScrollState();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [active]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg border-zinc-600"
          : "bg-black/90 backdrop-blur-sm border-zinc-700"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className="text-lg md:text-xl font-['Poppins'] font-bold text-white hover:text-purple-500 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md px-2 py-1"
          aria-label="Go to top of page"
        >
          Kevin Diesenberg
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavClick(item.id)}
                className={cn(
                  "py-2 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500",
                  active === item.id
                    ? "text-purple-500 font-semibold bg-purple-500/10"
                    : "text-gray-400 hover:text-gray-200 hover:bg-zinc-800/50"
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
          className="md:hidden p-2 rounded-md hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 md:hidden z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-zinc-600 shadow-xl md:hidden z-50">
            <div className="flex items-center justify-between p-6 border-b border-zinc-600">
              <span className="text-lg font-['Poppins'] font-semibold text-white">
                Menu
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
                aria-label="Close menu"
              >
                <Icon name="times" size="lg" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={cn(
                        "w-full text-left px-4 py-3 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500",
                        active === item.id
                          ? "bg-zinc-800 text-purple-500 font-semibold"
                          : "text-gray-400 hover:text-gray-200 hover:bg-zinc-800"
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
