import type { PageMeta } from "./types";

export const writingsPageMeta = {
  title: "Writings",
  description: "Thoughts, insights, and stories from stochi",
  tagline: "Collected thoughts and quiet observations",
  listTitle: "Essays & notes",
} as const satisfies PageMeta & { listTitle: string };
