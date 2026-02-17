import { Metadata } from "next";
import Link from "next/link";
import { profile, now, social, achievements, programSelections, pianoAchievements } from "@/content";
import { renderHighlights, renderBold } from "@/lib/text-utils";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(profile.title, profile.metaDescription);

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
            {renderHighlights(paragraph)}
          </p>
        ))}
      </header>

      <div className="star">✦</div>

      {/* Now - What I'm up to */}
      <section id="now" className="section">
        {/* <h2 className="section-title">Now</h2> */}
        <p className="body-text">
          {renderBold(now.current)}
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
          <Link href="/writings" className="explore-link">
            <span className="explore-link-title">Writings</span>
            <span className="explore-link-desc">— essays & notes</span>
          </Link>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Highlights - Elegant achievements */}
      <section id="highlights" className="section">
        <h2 className="section-title">Highlights</h2>
        
        <div className="accolades-grid">
          {achievements.map((item, i) => (
            <div key={i} className="accolade-item">
              <span className="accolade-year">{item.year}</span>
              <div className="accolade-content">
                <span className="accolade-title">{item.title}</span>
                {item.detail && <span className="accolade-detail">{item.detail}</span>}
              </div>
            </div>
          ))}
        </div>

        {/* Program Selections */}
        <div className="programs-section">
          <p className="programs-intro">
            Selected for <span className="highlight">7 international programs</span> in China, 2025
          </p>
          <div className="programs-list">
            {programSelections.map((program, i) => (
              <div key={i} className="program-item">
                <span className="program-marker">✦</span>
                <span className="program-name">{program}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Off the Keys - Piano */}
      <section id="piano" className="section">
        <h2 className="section-title">Off the Keys</h2>
        <p className="body-text" style={{ marginBottom: '2rem', fontStyle: 'italic' }}>
          Before I wrote code, I played music. The piano has been my companion since childhood.
        </p>
        
        <div className="piano-list">
          {pianoAchievements.map((item, i) => (
            <div key={i} className="piano-item">
              <span className="piano-title">{item.title}</span>
              {item.context && <span className="piano-context">— {item.context}</span>}
            </div>
          ))}
        </div>
      </section>

      <div className="star">✦</div>

      {/* Connect - Simple & elegant */}
      <section id="connect" className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title" style={{ textAlign: 'center' }}>Connect</h2>
        <p className="body-text" style={{ textAlign: 'center', marginBottom: '2rem' }}>
        Always up for interesting conversations. You’ll find me on Twitter, or by email.
        </p>
        <div className="social-links">
          <a href={`mailto:${social.email}`} className="social-link">Email</a>
          <span className="social-divider">·</span>
          <a href={social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">Twitter</a>
          <span className="social-divider">·</span>
          <a href={social.github} target="_blank" rel="noopener noreferrer" className="social-link">GitHub</a>
          <span className="social-divider">·</span>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
        </div>
      </section>

      <div className="star">✦</div>

      {/* Inspirational Quotes */}
      {profile.heroQuotes.length > 0 && (
        <section className="section" style={{ marginTop: '2rem' }}>
          <div className="hero-quotes">
            {profile.heroQuotes.map((quote, i) => (
              <p key={i} className="footer-quote hero-quote" style={{ whiteSpace: "pre-line" }}>
                {quote}
              </p>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
