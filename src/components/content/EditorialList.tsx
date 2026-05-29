import type { ReactNode } from "react";

type EditorialListProps = {
  children: ReactNode;
  className?: string;
};

type EditorialRowProps = {
  title: ReactNode;
  meta?: ReactNode;
  action?: ReactNode;
  summary?: ReactNode;
  children?: ReactNode;
  sectionId?: string;
  category?: string;
  compact?: boolean;
};

export function EditorialList({ children, className }: EditorialListProps) {
  return <div className={["editorial-list", className].filter(Boolean).join(" ")}>{children}</div>;
}

export function EditorialRow({
  title,
  meta,
  action,
  summary,
  children,
  sectionId,
  category,
  compact,
}: EditorialRowProps) {
  return (
    <article
      id={sectionId}
      data-category={category}
      className={["editorial-row", compact ? "editorial-row-compact" : undefined]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="editorial-title-line">
        <h3 className="editorial-title">{title}</h3>
        {action && <span className="editorial-action-wrap">{action}</span>}
      </div>
      {meta && (
        <div className="editorial-meta-line">
          <span className="editorial-meta">{meta}</span>
        </div>
      )}
      {summary && <p className="editorial-summary">{summary}</p>}
      {children}
    </article>
  );
}

export function EditorialDetails({ items }: { items: readonly string[] }) {
  if (items.length === 0) return null;

  return (
    <ul className="editorial-details">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function EditorialChapter({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={["editorial-chapter", className].filter(Boolean).join(" ")}>{children}</div>;
}

export function EditorialChapterHeader({ children }: { children: ReactNode }) {
  return (
    <div className="editorial-chapter-header">
      <span className="editorial-chapter-label">{children}</span>
      <span className="editorial-chapter-rule" />
    </div>
  );
}
