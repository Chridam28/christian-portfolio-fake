import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectCard } from '@/components/ProjectCard';
import { publishedProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Progetti pubblicati',
  description: 'Siti web pubblicati e case study verificabili.',
  alternates: { canonical: '/lavori' },
};

export default function WorkPage() {
  return <main><PageHero eyebrow="Progetti / Pubblicati" title="Il lavoro si vede nei dettagli." intro="Qui trovi i progetti già online. Ogni case study racconta scelte, struttura e funzioni osservabili, senza risultati o numeri inventati." meta="2 progetti pubblicati" /><section className="listing-section shell"><div className="portfolio-grid">{publishedProjects.map((project) => <ProjectCard project={project} key={project.id} />)}</div></section><ContactBand /></main>;
}
