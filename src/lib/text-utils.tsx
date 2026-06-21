import type { ReactNode } from 'react';

/**
 * Renders text with {highlighted} sections wrapped in span.highlight.
 * Use {label|href} to render a highlighted link.
 */
export function renderHighlights(text: string): ReactNode[] {
  const parts = text.split(/\{([^}]+)\}/g);
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;

    const [label, href] = part.split("|");

    return href ? (
      <a
        key={i}
        className="highlight highlight-link"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {label}
      </a>
    ) : (
      <span key={i} className="highlight">
        {part}
      </span>
    );
  });
}

/**
 * Renders text with **bold** markdown syntax
 */
export function renderBold(text: string): ReactNode[] {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return parts.map((part, i) => 
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}
