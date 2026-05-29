import { plainTextFromRichText } from "@/lib/plain-text";

export const now = {
  interests:
    "I like {Post-Training}, {Agents}, {RL}, {Model Architectures} and {ML Systems}.",
  current:
    "In a different vein, I traveled solo through 11 cities in China, Macau, Hong Kong, and Vietnam. Oh, and I love hotpot.",
} as const;

/** Plain-text site description derived from `now.interests` (OG, Twitter, home metadata). */
export const siteDescription = plainTextFromRichText(now.interests);

export const connectCopy = {
  heading: "Connect",
  body: "Always up for interesting conversations. You'll find me on Twitter, or by email.",
} as const;
