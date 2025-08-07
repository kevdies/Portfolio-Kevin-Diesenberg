"use client";
import React from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import FocusTrap from "focus-trap-react";
import { CSSTransition } from "react-transition-group";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "professional-projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "connect", label: "Connect" },
] as const;

type NavItem = typeof navItems[number];

interface NavLinkProps {
  item: NavItem;
  activeSection: string | null;
  isMobile?: boolean;
  onClick: (id: NavItem["id"]) => void;
}

function NavLink({ item, activeSection, isMobile, onClick }: NavLinkProps) {
  const baseClasses = "rounded transition-colors duration-200";
  const desktopClasses = "py-2 px-4";
  const mobileClasses = "text-2xl py-4";

  const activeClasses = "text-purple-400";
  const inactiveClasses = "text-gray-200 hover:text-purple-400";

  return (
    <button
      onClick={() => onClick(item.id)}
      className={cn(
        baseClasses,
        isMobile ? mobileClasses : desktopClasses,
        activeSection === item.id ? activeClasses : inactiveClasses
      )}
    >
      {item.label}
    </button>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { activeSection, navigateTo } = useScrollSpy();

  const handleLinkClick = (id: NavItem["id"]) => {
    navigateTo(id);
    if (isOpen) {
      setIsOpen(false);
    }
  };

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
              <NavLink
                item={item}
                activeSection={activeSection}
                onClick={handleLinkClick}
              />
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsOpen((o) => !o)}
          className="md:hidden p-2 rounded hover:bg-zinc-800"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <Icon name={isOpen ? "times" : "bars"} size="lg" />
        </button>
      </div>

      <CSSTransition
        in={isOpen}
        timeout={200}
        classNames="mobile-menu"
        unmountOnExit
      >
        <FocusTrap active={isOpen}>
          <div
            id="mobile-menu"
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    item={item}
                    activeSection={activeSection}
                    isMobile
                    onClick={handleLinkClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        </FocusTrap>
      </CSSTransition>
    </nav>
  );
}
