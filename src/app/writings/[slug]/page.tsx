import { Metadata } from "next";
import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { profile } from "@/content";
import { getWritingSlugs } from "@/lib/writings";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = getWritingSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const mod = await import(`@/content/writings/${slug}.mdx`);
  const meta = (mod as { metadata?: { title: string; description?: string } }).metadata;
  if (!meta?.title) return {};
  return createMetadata(meta.title, meta.description ?? "", profile.name);
}

function formatPostDate(dateStr?: string) {
  if (!dateStr) return null;
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return null;
  }
}

export default async function WritingPage({ params }: Props) {
  const { slug } = await params;
  const mod = await import(`@/content/writings/${slug}.mdx`);
  const { default: Content } = mod;
  const meta = (mod as { metadata?: { date?: string } }).metadata;
  const dateFormatted = formatPostDate(meta?.date);

  return (
    <div className="main-container">
      <header className="section">
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

      <div className="star">✦</div>

      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
