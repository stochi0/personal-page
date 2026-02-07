import { Metadata } from "next";
import { industry, research, academia, workPageMeta, WorkItem, profile } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  workPageMeta.title,
  workPageMeta.description,
  profile.name
);

function WorkItemCard({ item }: { item: WorkItem }) {
  return (
    <div className="work-item">
      <div className="work-header">
        <span className="work-title">{item.title}</span>
        <span className="work-date">{item.date}</span>
      </div>
      <div className="work-company">
        {item.company}
        {item.location && `, ${item.location}`}
      </div>
      <ul className="work-description">
        {item.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  return (
    <div className="main-container">
      {/* Page Title */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>{workPageMeta.title}</h1>
        <p className="tagline" style={{ marginTop: '1rem' }}>
          {workPageMeta.tagline}
        </p>
      </header>

      <div className="star">✦</div>

      {/* Industry Experience */}
      <section className="section">
        <h2 className="section-title">Industry</h2>
        {industry.map((item, i) => (
          <WorkItemCard key={i} item={item} />
        ))}
      </section>

      {/* Research */}
      <section className="section">
        <h2 className="section-title">Research</h2>
        {research.map((item, i) => (
          <WorkItemCard key={i} item={item} />
        ))}
      </section>

      {/* Academia */}
      <section className="section">
        <h2 className="section-title">Academia & Community</h2>
        {academia.map((item, i) => (
          <WorkItemCard key={i} item={item} />
        ))}
      </section>

      <div className="star">✦</div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
