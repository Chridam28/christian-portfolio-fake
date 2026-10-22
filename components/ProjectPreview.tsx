import Image from 'next/image';
import type { Project } from '@/data/projects';
import type { Lang } from '@/lib/i18n';

export function ProjectPreview({ lang, project, compact = false, eager = false }: { lang: Lang; project: Project; compact?: boolean; eager?: boolean }) {
  const image = project.desktopImages[0];
  const previewLabel = project.kind === 'real'
    ? project.externalUrl?.replace(/^https?:\/\//, '')
    : lang === 'en' ? 'Preview · Interactive demo' : 'Anteprima · Demo interattiva';

  if (image) {
    return (
      <div className={`project-preview project-preview-image theme-${project.theme}`}>
        <div className="browser-frame">
          <div className="browser-bar"><i /><i /><i /><span>{previewLabel}</span></div>
          <Image
            src={image}
            alt={lang === 'en' ? `Preview of the ${project.title} project` : `Anteprima del progetto ${project.title}`}
            width={1440}
            height={1000}
            preload={eager}
            loading={eager ? undefined : 'lazy'}
            sizes={compact ? '(max-width: 580px) 88vw, (max-width: 900px) 78vw, 42vw' : '(max-width: 900px) 100vw, 90vw'}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`project-preview demo-preview theme-${project.theme}`} aria-hidden="true">
      <div className="demo-window">
        <div className="demo-topline"><i /><i /><i /><span>{project.sector}</span></div>
        <div className="demo-layout">
          <p>{project.typeLabel}</p>
          <strong>{project.title}</strong>
          <div className="demo-rule" />
          <div className="demo-columns"><i /><i /><i /></div>
        </div>
      </div>
      <div className="demo-phone">
        <span />
        <b>{project.title.slice(0, 1)}</b>
        <i />
        <i />
      </div>
      <span className="preview-index">{String(project.order).padStart(2, '0')}</span>
    </div>
  );
}
