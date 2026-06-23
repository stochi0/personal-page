export type PageMeta = {
  title: string;
  description: string;
  tagline?: string;
};

export type Profile = {
  name: string;
  displayName: {
    alias: string;
    realName: string;
  };
  title: string;
  bio: string[];
  heroQuotes: string[];
  footerQuote: string;
};

export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type HomeSectionId =
  | "now"
  | "explore"
  | "highlights"
  | "connect";

export type NavItem = {
  href: string;
  label: string;
};

export type HomeSectionNavItem = {
  id: HomeSectionId;
  label: string;
};

export type ExploreLink = {
  href: string;
  title: string;
  description: string;
};

export type HighlightCategory =
  | "competitions"
  | "programs"
  | "scholarships"
  | "music"
  | "community";

export type HighlightItem = {
  title: string;
  category: HighlightCategory;
  year?: string;
  date?: string;
  detail?: string;
  location?: string;
  link?: string;
  featured?: boolean;
};

export type HighlightGroup = {
  category: HighlightCategory;
  title: string;
  intro?: string;
  items: HighlightItem[];
};

export type WorkProject = {
  title: string;
  description: string[];
};

export type WorkItem = {
  title: string;
  company: string;
  location?: string;
  date: string;
  description: string[];
  projects?: WorkProject[];
  link?: string;
};

export type WorkSection = {
  title: string;
  items: WorkItem[];
};

export type Project = {
  title: string;
  tech: string;
  description: string[];
  link?: string;
  linkText?: string;
};

export type ProjectCategory = {
  name: string;
  projects: Project[];
};

export type WritingMeta = {
  title: string;
  description?: string;
  date?: string;
};
