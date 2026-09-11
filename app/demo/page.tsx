import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { demoProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Demo interattive',
  description: 'Demo interattive per professionisti, hospitality e piccole attività.',
  alternates: { canonical: '/demo' },
};

export default function DemoPage() {
  return <main><PageHero eyebrow="Demo / Interattive" title="Cinque direzioni, tutte esplorabili." intro="Concept completi per strutture ricettive e professionisti, con contenuti, interazioni e percorsi di contatto realmente visibili nelle demo." meta="5 demo interattive" /><section className="listing-section shell"><ProjectGallery items={demoProjects} /></section><ContactBand /></main>;
}
