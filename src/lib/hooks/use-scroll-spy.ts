import { useState, useEffect, useCallback, type RefObject } from "react";
import { navItems, type NavItem } from "@/lib/navigation";

const SECTION_IDS = navItems.map((item) => item.id);
type SectionId = NavItem["id"];

export function useScrollSpy(headerRef: RefObject<HTMLElement | null>) {
  const [activeSection, setActiveSection] = useState<SectionId>("about");
  const [headerHeight, setHeaderHeight] = useState(80);

  useEffect(() => {
    const headerElement = headerRef.current;
    if (!headerElement) return;

    const resizeObserver = new ResizeObserver(() => {
      setHeaderHeight(headerElement.offsetHeight);
    });

    resizeObserver.observe(headerElement);
    return () => resizeObserver.disconnect();
  }, [headerRef]);

  useEffect(() => {
    if (headerHeight === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersectingEntries = entries.filter((e) => e.isIntersecting);

        if (intersectingEntries.length > 0) {
          const mostVisibleEntry = intersectingEntries.reduce((prev, current) =>
            prev.intersectionRatio > current.intersectionRatio ? prev : current
          );
          const newActiveSection = mostVisibleEntry.target.id as SectionId;
          setActiveSection(newActiveSection);
        }
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: [0.1, 0.5, 0.9],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headerHeight]);

  const navigateTo = useCallback(
    (id: SectionId) => {
      const el = document.getElementById(id);
      if (!el) return;

      const elementPosition = el.offsetTop;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: "smooth",
      });

      setTimeout(() => setActiveSection(id), 100);
    },
    [headerHeight]
  );

  return { activeSection, navigateTo, headerHeight };
}
