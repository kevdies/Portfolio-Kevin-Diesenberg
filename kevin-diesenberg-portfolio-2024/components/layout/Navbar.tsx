"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { id: "about", label: "About", href: "#about" },
  { id: "skills", label: "Skills", href: "#skills" },
  {
    id: "professional-projects",
    label: "Projects",
    href: "#professional-projects",
  },
  { id: "experience", label: "Experience", href: "#experience" },
  { id: "connect", label: "Connect", href: "#connect" },
];

const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const isNavigating = useRef(false);

  // Smooth scroll function with URL update
  const scrollToSection = useCallback((elementId: string, updateUrl = true) => {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Account for sticky navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });

      // Update URL hash without triggering scroll
      if (updateUrl && !isNavigating.current) {
        window.history.pushState(null, "", `#${elementId}`);
      }
    }
  }, []);

  // Handle navigation with proper timing
  const handleNav = useCallback(
    async (id: string, href: string) => {
      setIsOpen(false);

      // If we're on the home page, just scroll to section
      if (pathname === "/" || pathname === "") {
        scrollToSection(id);
      } else {
        // Set navigation flag to prevent URL updates during navigation
        isNavigating.current = true;

        // Navigate to home page with hash
        await router.push(`/${href}`);

        // Wait for navigation and DOM to be ready
        setTimeout(() => {
          scrollToSection(id, false); // Don't update URL as router already did
          isNavigating.current = false;
        }, 100);
      }
    },
    [pathname, router, scrollToSection]
  );

  // Handle logo click
  const handleLogoClick = useCallback(() => {
    setIsOpen(false);
    if (pathname === "/" || pathname === "") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("");
      // Clear hash from URL
      window.history.pushState(null, "", window.location.pathname);
    } else {
      router.push("/");
    }
  }, [pathname, router]);

  // Handle initial hash on page load
  useEffect(() => {
    if (pathname === "/" || pathname === "") {
      const hash = window.location.hash.slice(1);
      if (hash && navItems.some((item) => item.id === hash)) {
        // Small delay to ensure DOM is ready
        const timer = setTimeout(() => {
          scrollToSection(hash, false); // Don't update URL as it already has hash
          setActive(hash);
        }, 100);
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, scrollToSection]);

  // Handle browser back/forward with hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navItems.some((item) => item.id === hash)) {
        scrollToSection(hash, false);
        setActive(hash);
      } else if (!hash) {
        setActive("");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [scrollToSection]);

  // Scroll detection for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for scroll spy
  useEffect(() => {
    if (pathname !== "/" && pathname !== "") return;

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -70% 0px", // Adjust for better section detection
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Don't update during navigation
      if (isNavigating.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (navItems.some((item) => item.id === id)) {
            setActive(id);
            // Update URL hash during scroll without triggering scroll
            if (!isNavigating.current) {
              window.history.replaceState(null, "", `#${id}`);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    navItems.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [pathname]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        "border-b border-border",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-border-hover"
          : "bg-background/90 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <button
          onClick={handleLogoClick}
          className={cn(
            "font-heading font-bold text-text-emphasis",
            "cursor-pointer select-none",
            "transition-all duration-300",
            "hover:scale-105 hover:text-primary",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
            "rounded-md px-2 py-1"
          )}
          style={{
            fontSize: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
          aria-label="Kevin Diesenberg - Back to top"
        >
          Kevin Diesenberg
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => handleNav(item.id, item.href)}
                className={cn(
                  "py-2 px-4 rounded-md transition-all duration-300",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
                  active === item.id
                    ? "text-primary font-semibold"
                    : "text-text-muted hover:text-text font-medium"
                )}
                aria-label={`Navigate to ${item.label} section`}
                aria-current={active === item.id ? "page" : undefined}
              >
                {item.label}
              </button>
              {/* Active underline indicator */}
              <span
                className={cn(
                  "absolute -bottom-1 left-1/2 h-0.5 bg-primary rounded-full",
                  "transition-all duration-300 ease-out",
                  active === item.id
                    ? "w-4/5 opacity-100 -translate-x-1/2 shadow-sm shadow-primary/50"
                    : "w-0 opacity-0 -translate-x-1/2"
                )}
              />
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className={cn(
            "md:hidden p-3 rounded-md transition-all duration-300",
            "hover:bg-surface hover:scale-105",
            "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1",
            "border border-transparent hover:border-border",
            isOpen && "bg-surface border-border-hover"
          )}
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 md:hidden"
            aria-hidden="true"
            onClick={() => setIsOpen(false)}
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] md:hidden">
            <div className="flex h-full flex-col bg-background border-l border-border shadow-xl">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-background">
                <span className="text-lg font-heading font-semibold text-text-emphasis">
                  Menu
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-md hover:bg-surface transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <Icon name="times" size="lg" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-6 py-6 bg-background">
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => handleNav(item.id, item.href)}
                        className={cn(
                          "w-full text-left px-4 py-3 rounded-md transition-all duration-200",
                          "hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary",
                          active === item.id
                            ? "bg-surface text-primary font-semibold border-l-4 border-primary"
                            : "text-text-muted hover:text-text"
                        )}
                        aria-current={active === item.id ? "page" : undefined}
                      >
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border bg-background">
                <p className="text-xs text-text-dim text-center">
                  © 2024 Kevin Diesenberg
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
