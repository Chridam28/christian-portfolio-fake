import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Lavori reali, concept demo e progetti interni di Christian D’Ambrosio.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return <main><PageHero eyebrow="Portfolio / Archivio" title="Lavori, demo e idee in costruzione." intro="Un archivio pensato per crescere: progetti online, concept dichiarati e strumenti digitali in sviluppo, sempre distinti con chiarezza." meta={`${projects.length} progetti catalogati`} /><section className="listing-section shell"><ProjectGallery items={projects} /></section><ContactBand /></main>;
}
