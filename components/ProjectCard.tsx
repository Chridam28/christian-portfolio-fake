import Link from 'next/link';
import { kindLabels, statusLabels, type Project } from '@/data/projects';
import { projectHref, type Lang } from '@/lib/i18n';
import { ProjectPreview } from './ProjectPreview';

export function ProjectCard({ lang, project, eager = false }: { lang: Lang; project: Project; eager?: boolean }) {
  const isPublished = project.kind === 'real';
  const t = lang === 'en'
    ? { visit: 'Visit the website', demo: 'Explore the demo', details: 'Project details', newTab: 'opens in a new tab' }
    : { visit: 'Visita il sito', demo: 'Esplora la demo', details: 'Dettagli progetto', newTab: 'si apre in una nuova scheda' };
  const actionLabel = isPublished ? t.visit : t.demo;
  const detailHref = projectHref(project.slug, lang);

  return (
    <article className="portfolio-card reveal" data-project-kind={project.kind} data-project-categories={project.categories.join(' ')}>
      <Link href={detailHref} className="portfolio-card-visual" data-analytics={project.kind === 'real' ? 'project_open' : 'demo_open'} data-project={project.slug}>
        <ProjectPreview lang={lang} project={project} compact eager={eager} />
      </Link>
      <div className="portfolio-card-body">
        <div className="card-kicker">
          <span>{kindLabels[lang][project.kind]}</span>
          <span>{statusLabels[lang][project.status]}</span>
        </div>
        <h2><Link href={detailHref}>{project.title}</Link></h2>
        <p>{project.shortDescription}</p>
        <div className="card-footer">
          <span>{project.sector}</span>
          <Link href={detailHref}>{t.details} <span aria-hidden="true">↗</span></Link>
        </div>
        {project.externalUrl && (
          <a
            className="project-card-cta"
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${actionLabel}: ${project.title} (${t.newTab})`}
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
