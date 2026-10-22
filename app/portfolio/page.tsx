import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Siti online e demo interattive per psicologi, studi professionali e strutture ricettive.',
  alternates: { canonical: '/portfolio' },
};

export default function PortfolioPage() {
  return <main><PageHero eyebrow="Portfolio / Progetti" title="Lavori e demo." intro="Siti già online per clienti veri e demo che puoi aprire e provare: guarda come potrebbe funzionare il tuo." meta={`${projects.length} progetti`} /><section className="listing-section shell"><ProjectGallery items={projects} /></section><ContactBand /></main>;
}
