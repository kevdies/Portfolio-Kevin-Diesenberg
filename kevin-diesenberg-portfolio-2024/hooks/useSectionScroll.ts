// hooks/useSectionScroll.ts
import { useCallback } from "react";

export function useSectionScroll(): (id: string) => void {
  const scrollToSection = useCallback((id: string) => {
    try {
      const el = document.getElementById(id);
      if (!el) {
        console.warn(`Element with id "${id}" not found`);
        return;
      }

      // Calculate offset for sticky header (approximately 80px)
      const headerOffset = 80;
      const elementPosition =
        el.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Error scrolling to section:", error);
    }
  }, []);

  return scrollToSection;
}
