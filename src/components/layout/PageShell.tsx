import type { ReactNode } from "react";
import { profile } from "@/content";

type PageShellProps = {
  children: ReactNode;
};

type PageHeaderProps = {
  title: string;
  tagline?: string;
};

type SectionProps = {
  id?: string;
  title?: string;
  className?: string;
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return <div className="main-container">{children}</div>;
}

export function PageHeader({ title, tagline }: PageHeaderProps) {
  return (
    <header className="section page-title-section">
      <h1 className="page-title">{title}</h1>
      {tagline && <p className="tagline page-tagline">{tagline}</p>}
    </header>
  );
}

export function Section({ id, title, className, children }: SectionProps) {
  return (
    <section id={id} className={["section", className].filter(Boolean).join(" ")}>
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}

export function DecorativeStar() {
  return <div className="star">✦</div>;
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
    </footer>
  );
}
