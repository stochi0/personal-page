/**
 * ============================================
 * PROFILE & PERSONAL INFO
 * ============================================
 * 
 * Edit this file to update your personal information.
 * Changes here will automatically reflect across the site.
 * 
 * Quick updates:
 * - Change your name/alias: edit `profile.name` and `profile.aka`
 * - Update your bio: edit `profile.bio` array (use {text} for highlights)
 * - Update "Now" section: edit `now.current` (use **text** for bold)
 * - Update social links: edit the `social` object
 */

export const profile = {
  name: "Ayush",
  aka: "stochi0",
  
  // Used in meta tags and SEO
  title: "Ayush",
  description: "AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.",
  
  // Hero section bio - use {highlight} to wrap text you want accented
  bio: [
    "I build things at the intersection of {AI research} and {engineering}. Currently obsessed with agents, reinforcement learning, and making machines understand the world better.",
    "When I'm not training models, you'll find me at the {piano} — music is my other language.",
  ],
  
  // Footer quote
  footerQuote: "Game Is Game.",
};

// ============================================
// "NOW" SECTION - What you're currently up to
// Update this whenever your status changes
// ============================================

export const now = {
  // Main update - what you're doing right now
  current: "Just returned from a solo adventure through **11 cities in China**, Macau, and Hong Kong. Still processing the chaos of night markets in Chengdu, the quiet of West Lake in Hangzhou, and way too much hotpot.",
  
  // Previous roles to mention (links to /work)
  previous: [
    { name: "QX Labs", link: "/work" },
    { name: "Unsiloed AI", link: "/work", badge: "YC F25" },
  ],
};

// ============================================
// SOCIAL LINKS & CONTACT
// ============================================

export const social = {
  email: "ayushbodade1@gmail.com",
  twitter: "https://x.com/stochi0",
  github: "https://github.com/stochi0",
  // Add more as needed:
  // linkedin: "https://linkedin.com/in/...",
  // website: "https://...",
};

// Connect section text
export const connect = {
  title: "Let's talk",
  description: "I'm always interested in new projects, research collaborations, or just chatting about AI, music, or travel stories.",
};

