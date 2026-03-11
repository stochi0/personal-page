export interface Achievement {
  title: string;
  detail?: string;
  year?: string;
}

export interface PianoAchievement {
  title: string;
  context?: string;
}

export const achievements: Achievement[] = [
  {
    title: "Scholarship — Tsinghua HTGR Summer School",
    detail: "Program scholarship",
    year: "2025",
  },
  {
    title: "Meta Hacker Cup",
    detail: "Advanced to Round 2 of global competitive programming contest",
    year: "2024",
  },
  {
    title: "CodeUncode",
    detail: "Ranked 49th of 2000 in ACM-ICPC style competition",
    year: "2024",
  },
];

export const programSelections = [
  "Tsinghua HTGR Summer School",
  "Tsinghua Summer School for International Construction",
  "Tsinghua Design Futures · Shared Vision — Academy of Arts & Design",
  "Tsinghua IEDA Summer School — Industrial Engineering & Data Analytics",
  "Tsinghua–Princeton–CI Summer School on Combustion",
  "Tsinghua Brain & Intelligence Lab — Music Brain Science Camp",
  "Renmin University of China International Summer School",
];

export const pianoAchievements: PianoAchievement[] = [
  {
    title: "1st Place, District Classical Concert",
    context: "Led as pianist in the group performance",
  },
  {
    title: "Lead Pianist, School Choir",
    context: "Grades 5–12, musical arrangements",
  },
  {
    title: "Farewell Ceremony Pianist",
    context: "Senior farewell performance",
  },
  {
    title: "1st Runner-up, Greek Play",
    context: "Live background score composition",
  },
];

