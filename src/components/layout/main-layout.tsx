import { useRef } from "react";
import { useScrollSpy } from "@/lib/hooks/use-scroll-spy";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { StructuredData } from "@/components/structured-data";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);
  const { activeSection, navigateTo, headerHeight } = useScrollSpy(headerRef);

  return (
    <div
      style={{ "--header-height": `${headerHeight}px` } as React.CSSProperties}
    >
      <StructuredData />
      <Navbar
        ref={headerRef}
        activeSection={activeSection}
        navigateTo={navigateTo}
      />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </div>
  );
}
