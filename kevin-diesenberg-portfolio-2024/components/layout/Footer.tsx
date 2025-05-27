"use client";

import React from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#professional-projects" },
  { label: "Experience", href: "#experience" },
  { label: "Connect", href: "#connect" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    href: "https://linkedin.com/in/kevindiesenberg",
  },
  {
    name: "GitHub",
    icon: "github" as const,
    href: "https://github.com/kevdies",
  },
  {
    name: "Email",
    icon: "email" as const,
    href: "mailto:kdiesenb@gmail.com",
  },
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
    <footer className="bg-surface/50 border-t border-border backdrop-blur-sm">
      <div className="container mx-auto max-w-7xl px-md py-xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg mb-lg">
          {/* Brand/Name */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-heading font-semibold gradient-text mb-sm">
              Kevin Diesenberg
            </h3>
            <p className="text-textMuted text-sm leading-relaxed">
              Web Developer passionate about building accessible, performant
              applications that make a difference.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="text-center">
            <h4 className="text-sm font-semibold text-emphasis mb-sm uppercase tracking-wide">
              Quick Links
            </h4>
            <nav className="flex flex-wrap justify-center gap-x-md gap-y-xs">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "text-sm text-textMuted hover:text-text",
                    "transition-colors duration-200",
                    "focus-ring rounded px-1 py-0.5"
                  )}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-sm font-semibold text-emphasis mb-sm uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex justify-center md:justify-end gap-sm">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Connect on ${link.name}`}
                  className={cn(
                    "w-8 h-8 rounded-full bg-surface border border-border",
                    "flex items-center justify-center",
                    "text-textMuted hover:text-text",
                    "hover:border-border-hover hover:bg-surface-hover",
                    "transition-all duration-300",
                    "hover:-translate-y-0.5 hover:shadow-sm",
                    "focus-ring"
                  )}
                >
                  <Icon name={link.icon} size="sm" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 pt-lg">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-md text-center sm:text-left">
            <p className="text-textMuted text-sm">
              {`© ${currentYear} Kevin Diesenberg. All rights reserved.`}
            </p>
            <div className="flex items-center gap-2 text-textDim text-sm">
              <span>{`Built with`}</span>
              <Icon name="heart" size="sm" className="text-red-400" />
              <span>{`using Next.js, TypeScript, and Tailwind CSS`}</span>
            </div>
          </div>

          {/* Back to top - separate row for better spacing */}
          <div className="text-center mt-md pt-md border-t border-border/30">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "text-sm text-textMuted hover:text-text",
                "transition-all duration-300",
                "focus-ring rounded px-3 py-2",
                "hover:-translate-y-0.5 hover:bg-surface/30"
              )}
              aria-label="Back to top"
            >
              {`↑ Back to top`}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
