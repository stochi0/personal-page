import type { ExploreLink, HomeSectionNavItem, NavItem } from "./types";
import { projectsPageMeta } from "./projects";
import { workPageMeta } from "./work";
import { writingsPageMeta } from "./writings-meta";

const explorePages = [
  {
    href: "/work",
    label: workPageMeta.title,
    description: "experience & research",
  },
  {
    href: "/projects",
    label: projectsPageMeta.title,
    description: "things I've built",
  },
  {
    href: "/writings",
    label: writingsPageMeta.title,
    description: writingsPageMeta.listTitle.toLowerCase(),
  },
] as const;

export const navItems = [
  { href: "/", label: "Home" },
  ...explorePages.map(({ href, label }) => ({ href, label })),
] as const satisfies readonly NavItem[];

export const exploreLinks: readonly ExploreLink[] = explorePages.map(
  ({ href, label, description }) => ({
    href,
    title: label,
    description,
  }),
);

export const homeSectionNavItems = [
  { id: "now", label: "Now" },
  { id: "explore", label: "Explore" },
  { id: "highlights", label: "Highlights" },
  { id: "connect", label: "Connect" },
] as const satisfies readonly HomeSectionNavItem[];
