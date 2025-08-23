"use client";
import React from "react";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/utils/utils";
import * as Dialog from "@radix-ui/react-dialog";

import { navItems, type NavItem } from "@/lib/navigation";

interface NavLinkProps {
  item: NavItem;
  activeSection: string | null;
  isMobile?: boolean;
  onClick: (id: NavItem["id"]) => void;
}

function NavLink({ item, activeSection, isMobile, onClick }: NavLinkProps) {
  const baseClasses = "rounded transition-colors duration-200";
  const desktopClasses = "py-2 px-4 text-sm touch-target";
  const mobileClasses = "text-3xl font-medium py-6 px-4 touch-target-lg";

  const activeClasses = "text-brand-primary-light";
  const inactiveClasses = "text-gray-300 hover:text-brand-primary-light";

  return (
    <button
      onClick={() => onClick(item.id)}
      className={cn(
        baseClasses,
        isMobile ? mobileClasses : desktopClasses,
        activeSection === item.id ? activeClasses : inactiveClasses,
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
          className="rounded-md p-3 hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary md:hidden touch-target-lg"
          aria-label="Open menu"
        >
          <Icon name="bars" size="lg" />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-surface-primary/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-surface-primary/95 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0">
          <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>
          <Dialog.Description className="sr-only">Navigate to different sections of the portfolio</Dialog.Description>
          <ul className="flex flex-col items-center space-y-6">
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
              className="absolute right-4 top-4 rounded-md p-3 hover:bg-surface-secondary focus:outline-none focus:ring-2 focus:ring-brand-primary touch-target-lg"
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

function NavbarComponent(
  { activeSection, navigateTo }: NavbarProps,
  ref: React.Ref<HTMLElement>,
) {
  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 border-b border-surface-secondary bg-surface-primary/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigateTo("about")}
          className="text-lg font-bold text-white transition-colors hover:text-brand-primary"
        >
          Kevin Diesenberg
        </button>

        <nav className="hidden items-center space-x-2 md:flex">
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
          <MobileMenu activeSection={activeSection} onLinkClick={navigateTo} />
        </div>
      </div>
    </header>
  );
}

const Navbar = React.forwardRef(NavbarComponent);
Navbar.displayName = "Navbar";

export { Navbar };
