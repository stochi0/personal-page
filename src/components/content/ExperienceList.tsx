import type { WorkItem, WorkSection } from "@/content";
import {
  EditorialChapter,
  EditorialChapterHeader,
  EditorialDetails,
  EditorialList,
  EditorialRow,
} from "./EditorialList";

type ExperienceListProps = {
  sections: readonly WorkSection[];
};

function ExperienceItem({ item }: { item: WorkItem }) {
  const meta = [item.company, item.location, item.date].filter(Boolean).join(" · ");

  return (
    <EditorialRow title={item.title} meta={meta}>
      <EditorialDetails items={item.description} />
    </EditorialRow>
  );
}

export function ExperienceList({ sections }: ExperienceListProps) {
  return (
    <section id="work-list" className="section">
      {sections.map((section) => (
        <EditorialChapter key={section.title}>
          <EditorialChapterHeader>{section.title}</EditorialChapterHeader>
          <EditorialList>
            {section.items.map((item) => (
              <ExperienceItem key={`${item.company}-${item.title}-${item.date}`} item={item} />
            ))}
          </EditorialList>
        </EditorialChapter>
      ))}
    </section>
  );
}
