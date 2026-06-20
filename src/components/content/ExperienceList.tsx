import type { WorkItem, WorkSection } from "@/content";
import { EditorialDetails, EditorialList, EditorialRow } from "./EditorialList";

type ExperienceListProps = {
  sections: readonly WorkSection[];
};

function parseMonthYear(value: string | undefined) {
  const match = value?.match(/(\d{2})\/(\d{4})/);
  if (!match) return 0;

  const [, month, year] = match;
  return Number(year) * 12 + Number(month);
}

function sortByTimeline(a: WorkItem, b: WorkItem) {
  const aDates = a.date.match(/\d{2}\/\d{4}/g) ?? [];
  const bDates = b.date.match(/\d{2}\/\d{4}/g) ?? [];
  const aEnd = parseMonthYear(aDates.at(-1));
  const bEnd = parseMonthYear(bDates.at(-1));
  const aStart = parseMonthYear(aDates[0]);
  const bStart = parseMonthYear(bDates[0]);

  return bEnd - aEnd || bStart - aStart || a.title.localeCompare(b.title);
}

function ExperienceItem({ item }: { item: WorkItem }) {
  const meta = [item.company, item.date, item.location]
    .filter(Boolean)
    .join(" · ");
  const hasProjects = item.projects && item.projects.length > 0;

  return (
    <div className="experience-timeline-item">
      <span className="experience-timeline-marker" aria-hidden="true" />
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
    </div>
  );
}

export function ExperienceList({ sections }: ExperienceListProps) {
  const timelineItems = sections.flatMap((section) => section.items).sort(sortByTimeline);

  return (
    <section id="work-list" className="section">
      <EditorialList className="experience-timeline">
        {timelineItems.map((item) => (
          <ExperienceItem
            key={`${item.company}-${item.title}-${item.date}`}
            item={item}
          />
        ))}
      </EditorialList>
    </section>
  );
}
