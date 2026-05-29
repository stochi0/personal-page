import type { WorkItem, WorkSection } from "@/content";

type ExperienceListProps = {
  sections: readonly WorkSection[];
};

function ExperienceItem({ item }: { item: WorkItem }) {
  return (
    <div className="work-item">
      <div className="work-header">
        <span className="work-title">{item.title}</span>
        <span className="work-date">{item.date}</span>
      </div>
      <div className="work-company">
        {item.company}
        {item.location && `, ${item.location}`}
      </div>
      <ul className="work-description">
        {item.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export function ExperienceList({ sections }: ExperienceListProps) {
  return (
    <>
      {sections.map((section) => (
        <section key={section.title} className="section">
          <h2 className="section-title">{section.title}</h2>
          {section.items.map((item) => (
            <ExperienceItem key={`${item.company}-${item.title}-${item.date}`} item={item} />
          ))}
        </section>
      ))}
    </>
  );
}
