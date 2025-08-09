import { useState, useEffect, useCallback, RefObject } from "react";

import { navItems, type NavItem } from "@/lib/navigation";

const SECTION_IDS = navItems.map((item) => item.id);
type SectionId = NavItem["id"];

export function useScrollSpy(headerRef: RefObject<HTMLElement>) {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [headerHeight, setHeaderHeight] = useState(0);

  // Measure header height
  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeaderHeight(headerElement.offsetHeight);
    });

    resizeObserver.observe(headerElement);
    return () => resizeObserver.disconnect();
  }, [headerRef]);

  // IntersectionObserver watches sections crossing under the header line
  useEffect(() => {
    if (headerHeight === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          // Find the entry with the largest intersection ratio
          const mostVisibleEntry = intersectingEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current,
          );
          const newActiveSection = mostVisibleEntry.target.id as SectionId;
          setActiveSection(newActiveSection);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: [0.1, 0.5, 0.9], // Use multiple thresholds for better accuracy
      },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headerHeight]);

  const navigateTo = useCallback((id: SectionId) => {
    // Immediately update the active section for instant feedback
    setActiveSection(id);

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return { activeSection, navigateTo, headerHeight };
}
