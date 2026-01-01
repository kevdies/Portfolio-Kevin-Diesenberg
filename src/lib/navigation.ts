export const navItems = [
  { id: "about", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "professional-projects", label: "Projects" },
  { id: "connect", label: "Connect" },
] as const;

export type NavItem = (typeof navItems)[number];
