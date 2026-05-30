import { Metadata } from "next";
import Link from "next/link";
import { DecorativeStar, PageShell, SiteFooter } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content";
import { formatDisplayDate } from "@/lib/dates";
import { getWritingSlugs } from "@/lib/writings";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = await import(`@/content/writings/${slug}/index.mdx`);
  const meta = (mod as { metadata?: { title: string; description?: string } }).metadata;
  if (!meta?.title) return {};
  return createMetadata(meta.title, meta.description ?? "", profile.name);
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const mod = await import(`@/content/writings/${slug}/index.mdx`);
  const { default: Content } = mod;
  const meta = (mod as { metadata?: { date?: string } }).metadata;
  const dateFormatted = formatDisplayDate(meta?.date);

  return (
    <PageShell>
      <header className="section writing-post-header">
        <Link href="/writings" className="back-link">
          ← Writings
        </Link>
        {dateFormatted && (
          <time dateTime={meta?.date} className="writing-post-date">
            {dateFormatted}
          </time>
        )}
      </header>

      <article className="writing-article">
        <Content />
      </article>

      <DecorativeStar />
      <SiteFooter />
    </PageShell>
  );
}
