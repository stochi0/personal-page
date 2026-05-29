import type { Profile, SocialLink } from "./types";

export const profile = {
  name: "stochi",
  aka: "stochi0",

  title: "Stochi",
  description:
    "AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.",
  /** Used for page metadata / OG / Twitter (from bio) */
  metaDescription:
    "I like Post-Training, Agents, RL, ModelArchitectures and ML Systems.",
  bio: ["Towards {Autonomy}. {Self-Evolution}. {Open-Ended Discovery}."],
  heroQuotes: [
    `胜则生，败则死。
不战，何来胜利？
向前进。

~ 艾伦·耶格尔`,
    `勝てば生きる。負ければ死ぬ。
戦わなければ勝てない。
前へ進め。

~ エレン・イェーガー`,
    `If you win, you live. If you lose, you die.
If you don't fight, you can't win.
Keep moving forward.

~ Eren Yeager`,
  ],
  footerQuote: "Game Is Game.",
} as const satisfies Profile;

export const social = {
  email: "heystochi@gmail.com",
  twitter: "https://x.com/stochi0",
  github: "https://github.com/stochi0",
};

export const socialLinks = [
  { label: "Email", href: `mailto:${social.email}`, external: false },
  { label: "Twitter", href: social.twitter, external: true },
  { label: "GitHub", href: social.github, external: true },
] as const satisfies readonly SocialLink[];
