'use client';

import { useState } from 'react';
import type { Project } from '@/data/projects';
import { ProjectCard } from './ProjectCard';

const filters = [
  { label: 'Tutti', key: 'all' },
  { label: 'Progetti pubblicati', key: 'real' },
  { label: 'Demo interattive', key: 'demo' },
  { label: 'Professionisti', key: 'professionisti' },
  { label: 'Hospitality', key: 'hospitality' },
  { label: 'Sport', key: 'sport' },
] as const;

export function ProjectGallery({ items, limit }: { items: Project[]; limit?: number }) {
  const [active, setActive] = useState<(typeof filters)[number]['key']>('all');
  const filtered = items.filter((project) => {
    if (active === 'all') return true;
    if (active === 'real') return project.kind === 'real';
    if (active === 'demo') return project.kind !== 'real';
    return project.categories.includes(active);
  });
  const visible = typeof limit === 'number' ? filtered.slice(0, limit) : filtered;

  return (
    <div className="project-gallery">
      <div className="filter-bar" aria-label="Filtra i progetti">
        {filters.map((filter) => (
          <button
            type="button"
            key={filter.key}
            className={active === filter.key ? 'active' : ''}
            aria-pressed={active === filter.key}
            onClick={() => setActive(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <p className="filter-count" aria-live="polite">{visible.length} {visible.length === 1 ? 'progetto' : 'progetti'}</p>
      <div className="portfolio-grid">
        {visible.map((project, index) => <ProjectCard project={project} eager={index === 0} key={project.id} />)}
      </div>
    </div>
  );
}
