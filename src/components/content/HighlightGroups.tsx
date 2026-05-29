import type { HighlightGroup, HighlightItem } from "@/content";
import {
  EditorialChapter,
  EditorialChapterHeader,
  EditorialList,
  EditorialRow,
} from "./EditorialList";
import { RichText } from "./RichText";

type HighlightGroupsProps = {
  groups: readonly HighlightGroup[];
};

type ProgramHighlightsProps = {
  intro: string;
  items: readonly HighlightItem[];
};

type MusicHighlightsProps = {
  intro: string;
  items: readonly HighlightItem[];
};

function formatHighlightMeta(item: HighlightItem) {
  return [item.detail, item.location, item.year ?? item.date].filter(Boolean).join(" · ");
}

function HighlightList({ items }: { items: readonly HighlightItem[] }) {
  return (
    <EditorialList>
      {items.map((item) => (
        <EditorialRow
          key={`${item.category}-${item.title}`}
          title={item.title}
          meta={formatHighlightMeta(item)}
          compact
        />
      ))}
    </EditorialList>
  );
}

export function HighlightGroups({ groups }: HighlightGroupsProps) {
  return (
    <EditorialChapter>
      <EditorialChapterHeader>Distinctions</EditorialChapterHeader>
      <HighlightList items={groups.flatMap((group) => group.items)} />
    </EditorialChapter>
  );
}

export function ProgramHighlights({ intro, items }: ProgramHighlightsProps) {
  return (
    <EditorialChapter>
      <EditorialChapterHeader>Selected Programs</EditorialChapterHeader>
      <p className="programs-intro editorial-intro">
        <RichText text={intro} />
      </p>
      <EditorialList>
        {items.map((program) => (
          <EditorialRow
            key={program.title}
            title={program.title}
            meta={[program.location, program.year].filter(Boolean).join(" · ")}
            compact
          />
        ))}
      </EditorialList>
    </EditorialChapter>
  );
}

export function MusicHighlights({ intro, items }: MusicHighlightsProps) {
  return (
    <EditorialChapter>
      <EditorialChapterHeader>OFF THE KEYS</EditorialChapterHeader>
      <p className="body-text piano-intro editorial-intro">{intro}</p>
      <EditorialList>
        {items.map((item) => (
          <EditorialRow
            key={item.title}
            title={item.title}
            meta={item.detail}
            compact
          />
        ))}
      </EditorialList>
    </EditorialChapter>
  );
}
