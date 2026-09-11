import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Progetti pubblicati e demo interattive di Christian D’Ambrosio.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return <main><PageHero eyebrow="Portfolio / Progetti" title="Progetti selezionati." intro="Siti pubblicati e demo interattive progettati per attività, professionisti e strutture ricettive." meta={`${projects.length} progetti`} /><section className="listing-section shell"><ProjectGallery items={projects} /></section><ContactBand /></main>;
}
