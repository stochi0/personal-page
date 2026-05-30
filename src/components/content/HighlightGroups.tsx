import type { HighlightGroup, HighlightItem } from "@/content";
import {
  EditorialChapter,
  EditorialChapterHeader,
  EditorialList,
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
    <EditorialList className="highlight-point-list">
      {items.map((item) => {
        const meta = formatHighlightMeta(item);

        return (
          <div key={`${item.category}-${item.title}`} className="highlight-point-row">
            <span className="highlight-point-marker">✦</span>
            <span className="highlight-point-title">{item.title}</span>
            {meta && <span className="highlight-point-detail">— {meta}</span>}
          </div>
        );
      })}
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
    <EditorialChapter className="programs-chapter">
      <EditorialChapterHeader>Programs</EditorialChapterHeader>
      <p className="programs-intro programs-summary">
        <RichText text={intro} />
      </p>
      <div className="programs-list">
        {items.map((program) => (
          <div key={program.title} className="programs-row">
            <span className="highlight-point-marker">✦</span>
            <span className="highlight-point-title">{program.title}</span>
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
      <div className="music-point-list">
        {items.map((item) => (
          <div key={item.title} className="music-point-row">
            <span className="highlight-point-marker">✦</span>
            <span className="highlight-point-title">{item.title}</span>
            {item.detail && (
              <span className="highlight-point-detail">— {item.detail}</span>
            )}
          </div>
        ))}
      </div>
    </EditorialChapter>
  );
}
