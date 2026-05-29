import Link from "next/link";
import type { WritingMeta } from "@/content";
import { formatDisplayDate } from "@/lib/dates";

type WritingListProps = {
  writings: readonly { slug: string; metadata: WritingMeta }[];
};

export function WritingList({ writings }: WritingListProps) {
  if (writings.length === 0) {
    return <p className="body-text empty-state">In quiet preparation</p>;
  }

  return (
    <ul className="item-list">
      {writings.map(({ slug, metadata }) => {
        const dateFormatted = formatDisplayDate(metadata.date);

        return (
          <li key={slug}>
            <Link href={`/writings/${slug}`} className="content-link writing-entry-link">
              <span className="writing-entry-title">{metadata.title}</span>
              {metadata.description && (
                <span className="writing-entry-desc">{metadata.description}</span>
              )}
              {dateFormatted && (
                <span className="writing-entry-date">{dateFormatted}</span>
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
