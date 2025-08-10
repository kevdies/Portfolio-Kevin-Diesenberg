"use client";
import React from "react";
import { Icon } from "../ui/Icon";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "../ui/NavigationMenu";
import { cn } from "../../utils/utils";
import { navItems, type NavItem } from "@/lib/navigation";

interface NavLinkProps {
  item: NavItem;
  activeSection: string | null;
  onClick: (id: NavItem["id"]) => void;
  className?: string;
}

function NavLink({ item, activeSection, onClick, className }: NavLinkProps) {
  return (
    <NavigationMenuLink asChild>
      <button
        onClick={() => onClick(item.id)}
        className={cn(
          "rounded px-4 py-2 text-sm font-medium transition-colors hover:text-purple-400",
          activeSection === item.id ? "text-purple-400" : "text-gray-300",
          className,
        )}
      >
        {item.label}
      </button>
    </NavigationMenuLink>
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
      className="sticky top-0 z-40 border-b border-zinc-800 bg-black/80 backdrop-blur-md"
    >
      <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => navigateTo("about")}
          className="text-lg font-bold text-white transition-colors hover:text-purple-500"
        >
          Kevin Diesenberg
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <NavLink
                    item={item}
                    activeSection={activeSection}
                    onClick={navigateTo}
                  />
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  aria-label="Open menu"
                  data-testid="mobile-menu-trigger"
                >
                  <Icon name="bars" size="lg" />
                </NavigationMenuTrigger>
                <NavigationMenuContent data-testid="mobile-menu-content">
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    {navItems.map((item) => (
                      <li key={item.id}>
                        <NavLink
                          item={item}
                          activeSection={activeSection}
                          onClick={navigateTo}
                          className="w-full justify-start text-lg"
                        />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

const Navbar = React.forwardRef(NavbarComponent);
Navbar.displayName = "Navbar";

export { Navbar };
