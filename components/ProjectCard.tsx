import { kindLabels, statusLabels, type Project } from '@/data/projects';
import { ProjectPreview } from './ProjectPreview';

export function ProjectCard({ project, eager = false }: { project: Project; eager?: boolean }) {
  const isPublished = project.kind === 'real';
  const actionLabel = isPublished ? 'Visita il sito' : 'Esplora la demo';

  return (
    <article className="portfolio-card reveal" data-project-kind={project.kind} data-project-categories={project.categories.join(' ')}>
      <a href={`/progetti/${project.slug}`} className="portfolio-card-visual" data-analytics={project.kind === 'real' ? 'project_open' : 'demo_open'} data-project={project.slug}>
        <ProjectPreview project={project} compact eager={eager} />
      </a>
      <div className="portfolio-card-body">
        <div className="card-kicker">
          <span>{kindLabels[project.kind]}</span>
          <span>{statusLabels[project.status]}</span>
        </div>
        <h2><a href={`/progetti/${project.slug}`}>{project.title}</a></h2>
        <p>{project.shortDescription}</p>
        <div className="card-footer">
          <span>{project.sector}</span>
          <a href={`/progetti/${project.slug}`}>Dettagli progetto <span aria-hidden="true">↗</span></a>
        </div>
        {project.externalUrl && (
          <a
            className="project-card-cta"
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${actionLabel}: ${project.title} (si apre in una nuova scheda)`}
            data-analytics="external_site_click"
            data-project={project.slug}
          >
            {actionLabel} <span aria-hidden="true">↗</span>
          </a>
        )}
      </div>
    </article>
  );
}
