import type { Metadata } from "next";
import { WritingList } from "@/components/content/WritingList";
import { DecorativeStar, PageHeader, PageShell, Section, SiteFooter } from "@/components/layout/PageShell";
import { profile, writingsPageMeta } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { getAllWritingsMeta } from "@/lib/writings";

export const metadata: Metadata = createMetadata(
  writingsPageMeta.title,
  writingsPageMeta.description,
  profile.name,
);

export default async function WritingsPage() {
  const writings = await getAllWritingsMeta();

  return (
    <PageShell>
      <PageHeader title={writingsPageMeta.title} tagline={writingsPageMeta.tagline} />
      <DecorativeStar />
      <Section title={writingsPageMeta.listTitle}>
        <WritingList writings={writings} />
      </Section>
      <DecorativeStar />
      <SiteFooter />
    </PageShell>
  );
}
