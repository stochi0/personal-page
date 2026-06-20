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
  const hasProjects = item.projects && item.projects.length > 0;

  return (
    <EditorialRow title={item.title} meta={meta}>
      {hasProjects ? (
        <div className="editorial-projects">
          {item.projects!.map((project) => (
            <div key={project.title} className="editorial-project">
              <h4 className="editorial-project-title">{project.title}</h4>
              <EditorialDetails items={project.description} />
            </div>
          ))}
        </div>
      ) : (
        <EditorialDetails items={item.description} />
      )}
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
