import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectCard } from '@/components/ProjectCard';
import { getProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Progetti pubblicati',
  description: 'Siti web pubblicati e case study verificabili.',
  alternates: { canonical: '/lavori/', languages: { it: '/lavori/', en: '/en/portfolio/' } },
};

export default function WorkPage() {
  const published = getProjects('it').filter((project) => project.kind === 'real');
  return <main><PageHero eyebrow="Progetti / Pubblicati" title="Siti già online." intro="Lavori realizzati per clienti veri, che puoi visitare. Per ognuno trovi cosa serviva e come l’ho costruito." meta={`${published.length} progetti pubblicati`} /><section className="listing-section shell"><div className="portfolio-grid">{published.map((project) => <ProjectCard lang="it" project={project} key={project.id} />)}</div></section><ContactBand lang="it" /></main>;
}
