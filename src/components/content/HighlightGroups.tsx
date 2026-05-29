import type { HighlightGroup, HighlightItem } from "@/content";
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

function HighlightList({ items }: { items: readonly HighlightItem[] }) {
  return (
    <div className="accolades-grid">
      {items.map((item) => (
        <div key={`${item.category}-${item.title}`} className="accolade-item">
          <span className="accolade-year">{item.year ?? item.date}</span>
          <div className="accolade-content">
            <span className="accolade-title">{item.title}</span>
            {item.detail && <span className="accolade-detail">{item.detail}</span>}
          </div>
        </div>
      ))}
    </div>
  );
}

export function HighlightGroups({ groups }: HighlightGroupsProps) {
  const items = groups.flatMap((group) => group.items);
  return <HighlightList items={items} />;
}

export function ProgramHighlights({ intro, items }: ProgramHighlightsProps) {
  return (
    <div className="programs-section">
      <p className="programs-intro">
        <RichText text={intro} />
      </p>
      <div className="programs-list">
        {items.map((program) => (
          <div key={program.title} className="program-item">
            <span className="program-marker">✦</span>
            <span className="program-name">{program.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MusicHighlights({ intro, items }: MusicHighlightsProps) {
  return (
    <>
      <p className="body-text piano-intro">{intro}</p>
      <div className="piano-list">
        {items.map((item) => (
          <div key={item.title} className="piano-item">
            <span className="piano-title">{item.title}</span>
            {item.detail && <span className="piano-context">— {item.detail}</span>}
          </div>
        ))}
      </div>
    </>
  );
}
