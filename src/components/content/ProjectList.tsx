import type { Project, ProjectCategory } from "@/content";

type ProjectListProps = {
  categories: readonly ProjectCategory[];
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="work-item">
      <div className="work-header">
        <span className="work-title">{project.title}</span>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="content-link project-link"
          >
            {project.linkText || "View →"}
          </a>
        )}
      </div>
      <div className="work-company project-tech">{project.tech}</div>
      <ul className="work-description">
        {project.description.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export function ProjectList({ categories }: ProjectListProps) {
  return (
    <>
      {categories.map((category) => (
        <section key={category.name} className="section">
          <h2 className="section-title">{category.name}</h2>
          {category.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </section>
      ))}
    </>
  );
}
