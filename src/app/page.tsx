import { Metadata } from "next";
import Link from "next/link";
import { profile, now, social, connect } from "@/content";

export const metadata: Metadata = {
  title: profile.title,
  description: profile.description,
  openGraph: {
    title: profile.title,
    description: profile.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: profile.title,
    description: profile.description,
  },
};

// Helper to render bio text with highlights
function renderBio(text: string) {
  const parts = text.split(/\{([^}]+)\}/g);
  return parts.map((part, i) => 
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  );
}

// Helper to render markdown-style bold
function renderMarkdown(text: string) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => 
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}

export default function Home() {
  return (
    <div className="main-container">
      {/* Hero - Personal Introduction */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <p className="hero-greeting">Hey, I&apos;m</p>
        <h1 style={{ fontSize: '2.5rem' }}>{profile.name}</h1>
        <p className="hero-aka">aka {profile.aka}</p>
        {profile.bio.map((paragraph, i) => (
          <p key={i} className="tagline" style={{ marginTop: i === 0 ? '1.5rem' : '1rem' }}>
            {renderBio(paragraph)}
          </p>
        ))}
      </header>

      <div className="star">✦</div>

      {/* Now - What I'm up to */}
      <section id="now" className="section">
        <h2 className="section-title">Now</h2>
        <div className="now-card">
          <p className="now-text">
            {renderMarkdown(now.current)}
          </p>
          <p className="now-text" style={{ marginTop: '1.5rem' }}>
            Previously shipped AI at{' '}
            {now.previous.map((item, i) => (
              <span key={item.name}>
                <Link href={item.link} className="inline-link">
                  {item.name}
                </Link>
                {item.badge && ` (${item.badge})`}
                {i < now.previous.length - 1 && ' and '}
              </span>
            ))}
            .
          </p>
        </div>
      </section>

      {/* Explore */}
      <section id="explore" className="section">
        <div className="explore-grid">
          <Link href="/work" className="explore-card">
            <span className="explore-label">Work</span>
            <span className="explore-desc">Experience, research, and where I&apos;ve been</span>
            <span className="explore-arrow">→</span>
          </Link>
          <Link href="/projects" className="explore-card">
            <span className="explore-label">Projects</span>
            <span className="explore-desc">Things I&apos;ve built and experiments</span>
            <span className="explore-arrow">→</span>
          </Link>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Connect */}
      <section id="connect" className="section connect-section">
        <h2 className="connect-title">{connect.title}</h2>
        <p className="connect-text">{connect.description}</p>
        <div className="connect-links">
          <a href={`mailto:${social.email}`} className="connect-btn">
            <span className="connect-icon">✉</span>
            Email
          </a>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">𝕏</span>
            Twitter
          </a>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">◆</span>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
