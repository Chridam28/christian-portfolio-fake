import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectCard } from '@/components/ProjectCard';
import { realProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Lavori reali',
  description: 'Siti web realmente pubblicati e case study verificabili.',
  alternates: { canonical: '/lavori' },
};

export default function WorkPage() {
  return <main><PageHero eyebrow="Lavori / Online" title="Il lavoro si vede nei dettagli." intro="Qui raccolgo solo progetti realmente pubblicati. Ogni case study descrive ciò che è possibile osservare e verificare, senza risultati o numeri inventati." meta="2 progetti reali online" /><section className="listing-section shell"><div className="portfolio-grid">{realProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section><ContactBand /></main>;
}
