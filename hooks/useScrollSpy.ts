import { useState, useEffect, useCallback, RefObject } from "react";

const SECTION_IDS = [
  "about",
  "skills",
  "professional-projects",
  "experience",
  "connect",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

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

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: `-${headerHeight}px 0px 0px 0px`,
        threshold: 0,
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, [headerHeight]);

  // scrollIntoView will respect each section’s scroll-margin-top
  const navigateTo = useCallback((id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;

    // We can't use scroll-margin-top because of the smooth scrolling behavior
    // which is not consistent across browsers. Instead, we manually calculate the offset.
    const yOffset = -headerHeight;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  }, [headerHeight]);

  return { activeSection, navigateTo };
}
