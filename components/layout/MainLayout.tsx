"use client";

import React from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import StructuredData from "@/components/StructuredData";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerRef = React.useRef<HTMLElement>(null);
  const { activeSection, navigateTo } = useScrollSpy(headerRef);

  return (
    <>
      <StructuredData />
      <Analytics />
      <SpeedInsights />
      <Navbar
        ref={headerRef}
        activeSection={activeSection}
        navigateTo={navigateTo}
      />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer activeSection={activeSection} navigateTo={navigateTo} />
    </>
  );
}
