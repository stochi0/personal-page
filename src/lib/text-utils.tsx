import React, { ReactNode } from 'react';

/**
 * Renders text with {highlighted} sections wrapped in span.highlight
 */
export function renderHighlights(text: string): ReactNode[] {
  const parts = text.split(/\{([^}]+)\}/g);
  return parts.map((part, i) => 
    i % 2 === 1 ? <span key={i} className="highlight">{part}</span> : part
  );
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

