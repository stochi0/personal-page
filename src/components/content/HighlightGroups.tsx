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
    <>
      {groups.map((group) => (
        <EditorialChapter key={group.category}>
          <EditorialChapterHeader>{group.title}</EditorialChapterHeader>
          <HighlightList items={group.items} />
        </EditorialChapter>
      ))}
    </>
  );
}

export function ProgramHighlights({ intro, items }: ProgramHighlightsProps) {
  return (
    <EditorialChapter className="selected-programs-chapter">
      <EditorialChapterHeader>Selected Programs</EditorialChapterHeader>
      <p className="programs-intro selected-programs-intro">
        <RichText text={intro} />
      </p>
      <div className="selected-program-list">
        {items.map((program) => (
          <div key={program.title} className="selected-program-row">
            <span className="selected-program-marker">✦</span>
            <span className="selected-program-title">{program.title}</span>
          </div>
        ))}
      </div>
    </EditorialChapter>
  );
}

export function MusicHighlights({ intro, items }: MusicHighlightsProps) {
  return (
    <EditorialChapter>
      <EditorialChapterHeader>OFF THE KEYS</EditorialChapterHeader>
      <p className="body-text piano-intro editorial-intro">{intro}</p>
      <div className="selected-music-list">
        {items.map((item) => (
          <div key={item.title} className="selected-music-row">
            <span className="selected-music-title">{item.title}</span>
            {item.detail && (
              <span className="selected-music-detail">— {item.detail}</span>
            )}
          </div>
        ))}
      </div>
    </EditorialChapter>
  );
}
