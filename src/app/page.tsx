import type { Metadata } from "next";
import {
  ConnectSection,
  ExploreSection,
  HeroQuotesSection,
  HeroSection,
  HighlightsSection,
  NowSection,
} from "@/components/home/HomeSections";
import { DecorativeStar, PageShell, SiteFooter } from "@/components/layout/PageShell";
import { profile, siteDescription } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(profile.title, siteDescription);

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <div className="home-sections">
        <DecorativeStar />
        <NowSection />
        <DecorativeStar />
        <ExploreSection />
        <DecorativeStar />
        <HighlightsSection />
        <DecorativeStar />
        <ConnectSection />
      </div>
      <DecorativeStar />
      <HeroQuotesSection />
      <SiteFooter />
    </PageShell>
  );
}
