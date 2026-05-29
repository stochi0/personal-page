import type { HomeSectionNavItem, NavItem } from "./types";

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
] as const satisfies readonly NavItem[];

export const homeSectionNavItems = [
  { id: "now", label: "Now" },
  { id: "explore", label: "Explore" },
  { id: "highlights", label: "Highlights" },
  { id: "connect", label: "Connect" },
] as const satisfies readonly HomeSectionNavItem[];
