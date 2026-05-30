import { plainTextFromRichText } from "@/lib/plain-text";

export const now = {
  copy: [
    "I like {Post-Training}, {Agents}, {RL}, {Model Architectures} and {ML Systems}.",
    "In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot.",
  ],
} as const;

/** Plain-text site description derived from `now.copy` (OG, Twitter, home metadata). */
export const siteDescription = now.copy.map(plainTextFromRichText).join(" ");

export const connectCopy = {
  heading: "Connect",
  body: "Always up for interesting conversations. You'll find me on Twitter, or by email.",
} as const;
