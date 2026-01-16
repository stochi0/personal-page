import { Metadata } from "next";
import Link from "next/link";
import { profile, now, social } from "@/content";

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
        <p className="body-text">
          {renderMarkdown(now.current)}
        </p>
        <p className="body-text" style={{ marginTop: '1.5rem' }}>
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
      </section>

      {/* Explore - Minimal links */}
      <section id="explore" className="section">
        <h2 className="section-title">Explore</h2>
        <div className="explore-links">
          <Link href="/work" className="explore-link">
            <span className="explore-link-title">Work</span>
            <span className="explore-link-desc">— experience & research</span>
          </Link>
          <Link href="/projects" className="explore-link">
            <span className="explore-link-title">Projects</span>
            <span className="explore-link-desc">— things I&apos;ve built</span>
          </Link>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Connect - Simple & elegant */}
      <section id="connect" className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Connect</h2>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Open to collaborations, research, or just a good conversation.
        </p>
        <div className="social-links">
          <a href={`mailto:${social.email}`} className="social-link">Email</a>
          <span className="social-divider">·</span>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <span className="social-divider">·</span>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
