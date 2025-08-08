"use client";
import React from "react";
import Icon from "../ui/Icon";
import { cn } from "../../utils/utils";
import * as Dialog from "@radix-ui/react-dialog";

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
  const desktopClasses = "py-2 px-4 text-sm";
  const mobileClasses = "text-3xl font-medium py-4";

  const activeClasses = "text-purple-400";
  const inactiveClasses = "text-gray-300 hover:text-purple-400";

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

interface MobileMenuProps {
  activeSection: string | null;
  onLinkClick: (id: NavItem["id"]) => void;
}

function MobileMenu({ activeSection, onLinkClick }: MobileMenuProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          className="md:hidden p-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Open menu"
        >
          <Icon name="bars" size="lg" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/95 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <ul className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <Dialog.Close asChild>
                  <NavLink
                    item={item}
                    activeSection={activeSection}
                    isMobile
                    onClick={onLinkClick}
                  />
                </Dialog.Close>
              </li>
            ))}
          </ul>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-2 rounded-md hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Close menu"
            >
              <Icon name="times" size="lg" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

interface NavbarProps {
  activeSection: string | null;
  navigateTo: (id: NavItem["id"]) => void;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ activeSection, navigateTo }, ref) => {
    return (
      <header
        ref={ref}
        className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-zinc-800"
      >
        <div className="container mx-auto max-w-7xl flex items-center justify-between py-4 px-6">
          <button
            onClick={() => navigateTo("about")}
            className="text-lg font-bold text-white hover:text-purple-500 transition-colors"
          >
            Kevin Diesenberg
          </button>

          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                item={item}
                activeSection={activeSection}
                onClick={navigateTo}
              />
            ))}
          </nav>

          <div className="md:hidden">
            <MobileMenu
              activeSection={activeSection}
              onLinkClick={navigateTo}
            />
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = "Navbar";

export default Navbar;
