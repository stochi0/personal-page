import type { MDXComponents } from "mdx/types";

/**
 * MDX component overrides so blog content matches the site's
 * elegant typography and theme (Cormorant, accent, borders).
 */
const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="writing-title">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="writing-heading">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="writing-subheading">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="writing-body">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="writing-list">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="writing-list writing-list-ordered">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="writing-list-item">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="writing-blockquote">{children}</blockquote>
  ),
  hr: () => <hr className="writing-hr" />,
  a: ({ href, children }) => (
    <a href={href} className="inline-link" target={href?.startsWith("http") ? "_blank" : undefined} rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
      {children}
    </a>
  ),
  strong: ({ children }) => <strong className="writing-strong">{children}</strong>,
  em: ({ children }) => <em>{children}</em>,
};

export function useMDXComponents(provided: MDXComponents): MDXComponents {
  return { ...components, ...provided };
}
