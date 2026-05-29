import type { MDXComponents } from "mdx/types";
import type { ReactNode } from "react";

type WritingDisclosureProps = {
  title: string;
  children: ReactNode;
};

function WritingDisclosure({ title, children }: WritingDisclosureProps) {
  return (
    <details className="writing-disclosure">
      <summary className="writing-disclosure-summary">
        <span>{title}</span>
      </summary>
      <div className="writing-disclosure-content">{children}</div>
    </details>
  );
}

/**
 * MDX component overrides so blog content matches the site's
 * elegant typography and theme (Cormorant, accent, borders).
 */
const components: MDXComponents = {
  WritingDisclosure,
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
  pre: ({ children, ...props }) => (
    <pre className="writing-pre" {...props}>{children}</pre>
  ),
  code: ({ className, children, ...props }) => {
    const isInline = !className;
    if (isInline) {
      return (
        <code className="writing-inline-code" {...props}>
          {children}
        </code>
      );
    }
    return (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
  img: (props) => (
    <span className="writing-image-wrap">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...props} alt={props.alt ?? ""} className="writing-image" />
    </span>
  ),
  table: ({ children, ...props }) => (
    <div className="writing-table-wrap">
      <table {...props}>{children}</table>
    </div>
  ),
};

export function useMDXComponents(provided: MDXComponents): MDXComponents {
  return { ...components, ...provided };
}
