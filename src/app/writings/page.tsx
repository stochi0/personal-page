import { Metadata } from "next";
import Link from "next/link";
import { profile } from "@/content";
import { createMetadata } from "@/lib/metadata";
import { getAllWritingsMeta } from "@/lib/writings";

export const metadata: Metadata = createMetadata(
  "Writings",
  "Thoughts, insights, and stories from Ayush",
  profile.name
);

function formatDate(dateStr?: string) {
  if (!dateStr) return null;
  try {
    const d = new Date(dateStr);
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
  } catch {
    return null;
  }
}

export default async function WritingsPage() {
  const writings = await getAllWritingsMeta();

  return (
    <div className="main-container">
      <header className="section" style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h1 style={{ fontSize: "2.5rem" }}>Writings</h1>
        <p className="tagline" style={{ marginTop: "1rem" }}>
          Collected thoughts and quiet observations
        </p>
      </header>

      <div className="star">✦</div>

      <section className="section">
        <h2 className="section-title">Essays & notes</h2>
        {writings.length === 0 ? (
          <p className="body-text" style={{ textAlign: "center", padding: "4rem 0" }}>
            In quiet preparation
          </p>
        ) : (
          <ul className="item-list">
            {writings.map(({ slug, metadata }) => {
              const dateFormatted = formatDate(metadata.date);
              return (
                <li key={slug}>
                  <Link href={`/writings/${slug}`} className="content-link writing-entry-link">
                    <span className="writing-entry-title">{metadata.title}</span>
                    {metadata.description && (
                      <span className="writing-entry-desc">{metadata.description}</span>
                    )}
                    {dateFormatted && (
                      <span className="writing-entry-date">{dateFormatted}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <div className="star">✦</div>

      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
