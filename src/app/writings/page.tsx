import type { Metadata } from "next";
import { WritingList } from "@/components/content/WritingList";
import { DecorativeStar, PageHeader, PageShell, Section, SiteFooter } from "@/components/layout/PageShell";
import { profile } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { getAllWritingsMeta } from "@/lib/writings";

export const metadata: Metadata = createMetadata(
  "Writings",
  "Thoughts, insights, and stories from stochi",
  profile.name,
);

export default async function WritingsPage() {
  const writings = await getAllWritingsMeta();

  return (
    <PageShell>
      <PageHeader title="Writings" tagline="Collected thoughts and quiet observations" />
      <DecorativeStar />
      <Section title="Essays & notes">
        <WritingList writings={writings} />
      </Section>
      <DecorativeStar />
      <SiteFooter />
    </PageShell>
  );
}
