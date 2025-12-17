"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="py-8 mb-4 flex items-center justify-center gap-8">
      <Link
        href="/"
        className="text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors font-medium"
      >
        Home
      </Link>
      <Link
        href="/work"
        className="text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors font-medium"
      >
        Work
      </Link>
      <Link
        href="/projects"
        className="text-xs uppercase tracking-widest text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors font-medium"
      >
        Projects
      </Link>
    </nav>
  );
}
