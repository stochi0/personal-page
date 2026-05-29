import type { Metadata } from "next";
import { ExperienceList } from "@/components/content/ExperienceList";
import { DecorativeStar, PageHeader, PageShell, SiteFooter } from "@/components/layout/PageShell";
import { profile, workPageMeta, workSections } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  workPageMeta.title,
  workPageMeta.description,
  profile.name,
);

export default function Work() {
  return (
    <PageShell>
      <PageHeader title={workPageMeta.title} tagline={workPageMeta.tagline} />
      <DecorativeStar />
      <ExperienceList sections={workSections} />
      <DecorativeStar />
      <SiteFooter />
    </PageShell>
  );
}
