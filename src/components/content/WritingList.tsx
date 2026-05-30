import Link from "next/link";
import type { WritingMeta } from "@/content";
import { formatDisplayDate } from "@/lib/dates";
import { EditorialList, EditorialRow } from "./EditorialList";

type WritingListProps = {
  writings: readonly { slug: string; metadata: WritingMeta }[];
};

export function WritingList({ writings }: WritingListProps) {
  if (writings.length === 0) {
    return <p className="body-text empty-state">In quiet preparation</p>;
  }

  return (
    <EditorialList>
      {writings.map(({ slug, metadata }) => {
        const dateFormatted = formatDisplayDate(metadata.date);

        return (
          <EditorialRow
            key={slug}
            title={
              <Link href={`/writings/${slug}`} className="content-link writing-title-link">
                {metadata.title}
              </Link>
            }
            meta={dateFormatted}
            summary={metadata.description}
          />
        );
      })}
    </EditorialList>
  );
}
