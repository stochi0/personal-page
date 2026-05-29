import Link from "next/link";
import { navItems } from "@/content";
import { DecorativeStar, PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
  return (
    <PageShell>
      <div className="not-found">
        <h1 className="not-found-title">404</h1>
        <p className="tagline not-found-copy">The page you seek has wandered off...</p>
        <DecorativeStar />
        <div className="not-found-links">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="connect-link">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
