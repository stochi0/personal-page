import type { ExploreLink, PageMeta } from "./types";

export const homePageMeta = {
  title: "Stochi",
  description:
    "I like Post-Training, Agents, RL, ModelArchitectures and ML Systems.",
} as const satisfies PageMeta;

export const now = {
  interests:
    "I like {Post-Training}, {Agents}, {RL}, {Model Architectures} and {ML Systems}.",
  current:
    "In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot.",
} as const;

export const exploreLinks = [
  {
    href: "/work",
    title: "Work",
    description: "experience & research",
  },
  {
    href: "/projects",
    title: "Projects",
    description: "things I've built",
  },
  {
    href: "/writings",
    title: "Writings",
    description: "essays & notes",
  },
] as const satisfies readonly ExploreLink[];

export const connectCopy = {
  heading: "Connect",
  body: "Always up for interesting conversations. You’ll find me on Twitter, or by email.",
} as const;
