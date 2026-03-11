import { Metadata } from "next";
import { projectCategories, projectsPageMeta, Project, profile } from "@/content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata(
  projectsPageMeta.title,
  projectsPageMeta.description,
  profile.name
);

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
            className="content-link"
            style={{ fontSize: '0.85rem', textDecoration: 'underline', textUnderlineOffset: '4px' }}
          >
            {project.linkText || 'View →'}
          </a>
        )}
      </div>
      <div className="work-company" style={{ fontStyle: 'italic' }}>{project.tech}</div>
      <ul className="work-description">
        {project.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Projects() {
  return (
    <div className="main-container">
      {/* Page Title */}
      <header className="section" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem' }}>{projectsPageMeta.title}</h1>
        <p className="tagline" style={{ marginTop: '1rem' }}>
          {projectsPageMeta.tagline}
        </p>
      </header>

      <div className="star">✦</div>

      {/* Project Categories */}
      {projectCategories.map((category, i) => (
        <section key={i} className="section">
          <h2 className="section-title">{category.name}</h2>
          {category.projects.map((project, j) => (
            <ProjectCard key={j} project={project} />
          ))}
        </section>
      ))}

      <div className="star">✦</div>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-quote">&ldquo;{profile.footerQuote}&rdquo;</p>
      </footer>
    </div>
  );
}
