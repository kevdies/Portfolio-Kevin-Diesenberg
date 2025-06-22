// src/hooks/useScrollSpy.ts
import { useState, useEffect, useCallback } from "react";

const SECTION_IDS = [
  "about",
  "skills",
  "professional-projects",
  "experience",
  "connect",
] as const;
type SectionId = (typeof SECTION_IDS)[number];

// ← change this to match your real nav-height
const HEADER_HEIGHT_PX = 72;

export function useScrollSpy() {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  // IntersectionObserver watches sections crossing under the header line
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: `-${HEADER_HEIGHT_PX}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  // scrollIntoView will respect each section’s scroll-margin-top
  const navigateTo = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return { activeSection, navigateTo };
}
