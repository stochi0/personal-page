import type { Project, ProjectCategory } from "@/content";
import {
  EditorialChapter,
  EditorialChapterHeader,
  EditorialDetails,
  EditorialList,
  EditorialRow,
} from "./EditorialList";

type ProjectListProps = {
  categories: readonly ProjectCategory[];
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <EditorialRow
      title={project.title}
      meta={project.tech}
      action={
        project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer noopener"
            className="editorial-action"
          >
            {project.linkText || "View →"}
          </a>
        ) : null
      }
    >
      <EditorialDetails items={project.description} />
    </EditorialRow>
  );
}

export function ProjectList({ categories }: ProjectListProps) {
  return (
    <section id="project-list" className="section">
      {categories.map((category) => (
        <EditorialChapter key={category.name}>
          <EditorialChapterHeader>{category.name}</EditorialChapterHeader>
          <EditorialList>
            {category.projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </EditorialList>
        </EditorialChapter>
      ))}
    </section>
  );
}
