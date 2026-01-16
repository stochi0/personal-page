import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Ayush',
  description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
  openGraph: {
    title: 'Ayush',
    description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayush',
    description: 'AI, Agents, RL, Vision. Research & Engineering. Open to AI research & applied roles.',
  },
};

export default function Home() {
  return (
    <div className="main-container">
      {/* Hero - Personal Introduction */}
      <section id="intro" className="hero-section">
        <div className="hero-greeting">Hey, I&apos;m</div>
        <h1 className="hero-name">Ayush</h1>
        <p className="hero-aka">aka stochi0</p>
        <p className="hero-bio">
          I build things at the intersection of <span className="highlight">AI research</span> and 
          <span className="highlight"> engineering</span>. Currently obsessed with agents, reinforcement learning, 
          and making machines understand the world better.
        </p>
        <p className="hero-bio" style={{ marginTop: '1rem' }}>
          When I&apos;m not training models, you&apos;ll find me at the <span className="highlight">piano</span> — 
          music is my other language.
        </p>
      </section>

      {/* Now - What I'm up to */}
      <section id="now" className="section">
        <div className="section-header">
          <span className="section-label">Now</span>
          <div className="section-line"></div>
        </div>
        <div className="now-card">
          <p className="now-text">
            Just returned from a solo adventure through <strong>11 cities in China</strong>, Macau, and Hong Kong. 
            Still processing the chaos of night markets in Chengdu, the quiet of West Lake in Hangzhou, 
            and way too much hotpot.
          </p>
          <p className="now-text" style={{ marginTop: '1.5rem' }}>
            Previously shipped AI at <Link href="/work" className="inline-link">QX Labs</Link> and 
            <Link href="/work" className="inline-link"> Unsiloed AI</Link> (YC F25).
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

      <div className="divider divider-accent">✦</div>

      {/* Connect */}
      <section id="connect" className="section connect-section">
        <h2 className="connect-title">Let&apos;s talk</h2>
        <p className="connect-text">
          I&apos;m always interested in new projects, research collaborations, or just chatting about AI, music, or travel stories.
        </p>
        <div className="connect-links">
          <a href="mailto:ayushbodade1@gmail.com" className="connect-btn">
            <span className="connect-icon">✉</span>
            Email
          </a>
          <a href="https://x.com/stochi0" target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">𝕏</span>
            Twitter
          </a>
          <a href="https://github.com/stochi0" target="_blank" rel="noopener noreferrer" className="connect-btn">
            <span className="connect-icon">◆</span>
            GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;Game Is Game.&rdquo;</p>
      </footer>
    </div>
  );
}
