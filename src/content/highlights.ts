import type { HighlightGroup, HighlightItem } from "./types";

export const highlightItems = [
  {
    title: "Scholarship — Tsinghua HTGR Summer School",
    category: "scholarships",
    detail: "Program scholarship",
    year: "2025",
    featured: true,
  },
  {
    title: "Meta Hacker Cup",
    category: "competitions",
    detail: "Advanced to Round 2 of global competitive programming contest",
    year: "2024",
  },
  {
    title: "CodeUncode",
    category: "competitions",
    detail: "Ranked 49th of 2000 in ACM-ICPC style competition",
    year: "2024",
  },
  {
    title: "Tsinghua HTGR Summer School",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Tsinghua Summer School for International Construction",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Tsinghua Design Futures · Shared Vision — Academy of Arts & Design",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Tsinghua IEDA Summer School — Industrial Engineering & Data Analytics",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Tsinghua–Princeton–CI Summer School on Combustion",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Tsinghua Brain & Intelligence Lab — Music Brain Science Camp",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "Renmin University of China International Summer School",
    category: "programs",
    location: "China",
    year: "2025",
  },
  {
    title: "1st Place, District Classical Concert",
    category: "music",
    detail: "Led as pianist in the group performance",
  },
  {
    title: "Lead Pianist, School Choir",
    category: "music",
    detail: "Grades 5–12, musical arrangements",
  },
  {
    title: "Farewell Ceremony Pianist",
    category: "music",
    detail: "Senior farewell performance",
  },
  {
    title: "1st Runner-up, Greek Play",
    category: "music",
    detail: "Live background score composition",
  },
] as const satisfies readonly HighlightItem[];

export const highlightGroups = [
  {
    category: "scholarships",
    title: "Scholarships",
    items: highlightItems.filter((item) => item.category === "scholarships"),
  },
  {
    category: "competitions",
    title: "Competitions",
    items: highlightItems.filter((item) => item.category === "competitions"),
  },
] as const satisfies readonly HighlightGroup[];

export const programHighlights = {
  intro: "Selected for {7 international programs} in China, 2025",
  items: highlightItems.filter((item) => item.category === "programs"),
} as const;

export const musicHighlights = {
  intro:
    "Before I wrote code, I played music. The piano has been my companion since childhood.",
  items: highlightItems.filter((item) => item.category === "music"),
} as const;
