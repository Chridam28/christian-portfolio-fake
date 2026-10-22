'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

import type { Lang } from '@/lib/i18n';

const filters = [
  { label: { it: 'Tutti', en: 'All' }, key: 'all' },
  { label: { it: 'Progetti pubblicati', en: 'Live projects' }, key: 'real' },
  { label: { it: 'Demo interattive', en: 'Interactive demos' }, key: 'demo' },
  { label: { it: 'Professionisti', en: 'Professionals' }, key: 'professionisti' },
  { label: { it: 'Hospitality', en: 'Hospitality' }, key: 'hospitality' },
  { label: { it: 'Sport', en: 'Sport' }, key: 'sport' },
] as const;

const copy = {
  it: { filter: 'Filtra i progetti', one: 'progetto', many: 'progetti', prev: 'Progetto precedente', next: 'Progetto successivo', region: 'Progetti, scorri in orizzontale' },
  en: { filter: 'Filter projects', one: 'project', many: 'projects', prev: 'Previous project', next: 'Next project', region: 'Projects, scroll horizontally' },
};

type GalleryProps = {
  lang: Lang;
  items: Project[];
  limit?: number;
  layout?: 'grid' | 'carousel';
};

export function ProjectGallery({ lang, items, limit, layout = 'grid' }: GalleryProps) {
  const t = copy[lang];
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  const filtered = items.filter((project) => {
    if (active === 'all') return true;
    if (active === 'real') return project.kind === 'real';
    if (active === 'demo') return project.kind !== 'real';
    return project.categories.includes(active);
  });
  const visible = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;
  const isCarousel = layout === 'carousel';

  const updateEdges = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setEdges({ start: track.scrollLeft <= 4, end: track.scrollLeft >= max - 4 });
  }, []);

  useEffect(() => {
    if (!isCarousel) return;
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0 });
    const frame = requestAnimationFrame(updateEdges);
    track.addEventListener('scroll', updateEdges, { passive: true });
    window.addEventListener('resize', updateEdges);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', updateEdges);
      window.removeEventListener('resize', updateEdges);
    };
  }, [isCarousel, active, updateEdges]);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.portfolio-card');
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const step = card ? card.offsetWidth + gap : track.clientWidth * 0.8;
    track.scrollBy({ left: step * direction, behavior: 'smooth' });
  };

  return (
    <div className={`project-gallery${isCarousel ? ' is-carousel' : ''}`}>
      <div className="filter-bar" aria-label={t.filter}>
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.key}
            className={active === filter.key ? 'active' : ''}
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
          >
            {filter.label[lang]}
          </button>
        ))}
      </div>
      <div className="gallery-toolbar">
        <p className="filter-count" aria-live="polite">{visible.length} {visible.length === 1 ? t.one : t.many}</p>
        {isCarousel && visible.length > 1 && (
          <div className="carousel-controls">
            <button type="button" onClick={() => scrollByCard(-1)} disabled={edges.start} aria-label={t.prev}>←</button>
            <button type="button" onClick={() => scrollByCard(1)} disabled={edges.end} aria-label={t.next}>→</button>
          </div>
        )}
      </div>
      <div
        className={isCarousel ? 'portfolio-track' : 'portfolio-grid'}
        ref={isCarousel ? trackRef : undefined}
        tabIndex={isCarousel ? 0 : undefined}
        role={isCarousel ? 'region' : undefined}
        aria-label={isCarousel ? t.region : undefined}
      >
        {visible.map((project, index) => <ProjectCard lang={lang} project={project} eager={index === 0} key={project.id} />)}
      </div>
    </div>
  );
}
