import Link from "next/link";
import {
  connectCopy,
  exploreLinks,
  highlightGroups,
  musicHighlights,
  now,
  profile,
  programHighlights,
  socialLinks,
} from "@/content";
import { HighlightGroups, MusicHighlights, ProgramHighlights } from "@/components/content/HighlightGroups";
import { RichText } from "@/components/content/RichText";
import { Section } from "@/components/layout/PageShell";

export function HeroSection() {
  return (
    <header className="section page-title-section">
      <p className="hero-greeting">Hey, I&apos;m</p>
      <h1 className="page-title">{profile.name}</h1>
      {profile.bio.map((paragraph, index) => (
        <p
          key={paragraph}
          className={["tagline", index === 0 ? "hero-bio-primary" : "hero-bio"].join(" ")}
        >
          <RichText text={paragraph} />
        </p>
      ))}
    </header>
  );
}

export function NowSection() {
  return (
    <Section id="now">
      <p className="body-text">
        <RichText text={now.interests} />
      </p>
      <p className="body-text body-text-spaced">
        <RichText text={now.current} variant="bold" />
      </p>
    </Section>
  );
}

export function ExploreSection() {
  return (
    <Section id="explore" title="Explore">
      <div className="explore-links">
        {exploreLinks.map((item) => (
          <Link key={item.href} href={item.href} className="explore-link">
            <span className="explore-link-title">{item.title}</span>
            <span className="explore-link-desc">— {item.description}</span>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export function HighlightsSection() {
  return (
    <Section id="highlights" title="Selected">
      <HighlightGroups groups={highlightGroups} />
      <ProgramHighlights intro={programHighlights.intro} items={programHighlights.items} />
      <MusicHighlights intro={musicHighlights.intro} items={musicHighlights.items} />
    </Section>
  );
}

export function ConnectSection() {
  return (
    <Section id="connect" title={connectCopy.heading} className="centered-section">
      <p className="body-text centered-body">{connectCopy.body}</p>
      <div className="social-links">
        {socialLinks.map((link, index) => (
          <span key={link.label} className="social-link-group">
            {index > 0 && <span className="social-divider">·</span>}
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="social-link"
            >
              {link.label}
            </a>
          </span>
        ))}
      </div>
    </Section>
  );
}

export function HeroQuotesSection() {
  const quotes: readonly string[] = profile.heroQuotes;

  if (quotes.length === 0) return null;

  return (
    <section className="section hero-quotes-section">
      <div className="hero-quotes">
        {quotes.map((quote) => (
          <p key={quote} className="footer-quote hero-quote">
            {quote}
          </p>
        ))}
      </div>
    </section>
  );
}
