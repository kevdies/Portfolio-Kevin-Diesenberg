import { forwardRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, type NavItem } from "@/lib/navigation";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ModeToggle } from "@/components/mode-toggle";

interface NavLinkProps {
  item: NavItem;
  activeSection: string | null;
  isMobile?: boolean;
  onClick: (id: NavItem["id"]) => void;
}

function NavLink({ item, activeSection, isMobile, onClick }: NavLinkProps) {
  const baseClasses = "rounded transition-colors duration-200";
  const desktopClasses = "py-2 px-4 text-sm";
  const mobileClasses = "text-3xl font-medium py-6 px-4";

  const activeClasses = "text-brand-primary-light";
  const inactiveClasses =
    "text-muted-foreground hover:text-brand-primary-light";

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
  const [open, setOpen] = useState(false);

  const handleNavClick = (id: NavItem["id"]) => {
    onLinkClick(id);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="flex h-dvh max-h-none w-screen max-w-none flex-col items-center justify-center border-none bg-background/95 backdrop-blur-md"
      >
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <ul className="flex flex-col items-center space-y-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <NavLink
                item={item}
                activeSection={activeSection}
                isMobile
                onClick={handleNavClick}
              />
            </li>
          ))}
        </ul>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-4"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          <X className="h-6 w-6" />
        </Button>
      </DialogContent>
    </Dialog>
  );
}

interface NavbarProps {
  activeSection: string | null;
  navigateTo: (id: NavItem["id"]) => void;
}

export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  ({ activeSection, navigateTo }, ref) => {
    return (
      <header
        ref={ref}
        className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md"
      >
        <div className="container mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => navigateTo("about")}
            className="text-lg font-bold text-foreground transition-colors hover:text-brand-primary"
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
            <ModeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
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
