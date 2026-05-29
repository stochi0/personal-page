import type { Metadata } from "next";
import {
  ConnectSection,
  ExploreSection,
  HeroQuotesSection,
  HeroSection,
  HighlightsSection,
  MusicSection,
  NowSection,
} from "@/components/home/HomeSections";
import { DecorativeStar, PageShell, SiteFooter } from "@/components/layout/PageShell";
import { homePageMeta } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  homePageMeta.title,
  homePageMeta.description,
);

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <DecorativeStar />
      <NowSection />
      <ExploreSection />
      <DecorativeStar />
      <HighlightsSection />
      <MusicSection />
      <DecorativeStar />
      <ConnectSection />
      <DecorativeStar />
      <HeroQuotesSection />
      <SiteFooter />
    </PageShell>
  );
}
