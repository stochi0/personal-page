import type { Metadata } from "next";
import { ProjectList } from "@/components/content/ProjectList";
import { DecorativeStar, PageHeader, PageShell, SiteFooter } from "@/components/layout/PageShell";
import { profile, projectCategories, projectsPageMeta } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  projectsPageMeta.title,
  projectsPageMeta.description,
  profile.name,
);

export default function Projects() {
  return (
    <PageShell>
      <PageHeader title={projectsPageMeta.title} tagline={projectsPageMeta.tagline} />
      <DecorativeStar />
      <ProjectList categories={projectCategories} />
      <DecorativeStar />
      <SiteFooter />
    </PageShell>
  );
}
