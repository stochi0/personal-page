import { plainTextFromRichText } from "@/lib/plain-text";

export const nowSection = {
  paragraphs: [
    "",
    "I like {Post-Training}, {Agents}, {RL}, {Model Architectures} and {ML Systems}. During my RL residency at {Prime Intellect}, I built RL environments, long-context evals & experiments around Programatic Tool Calling & RLMs (Recursive Language Models)",
    "In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot."
  ],
} as const;

/** Plain-text site description derived from the Now section (OG, Twitter, home metadata). */
export const siteDescription = nowSection.paragraphs
  .map(plainTextFromRichText)
  .join(" ");

export const connectCopy = {
  heading: "Connect",
  body: "Always up for interesting conversations. You'll find me on Twitter, or by email.",
} as const;
