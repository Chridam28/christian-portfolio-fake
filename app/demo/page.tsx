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
  return <main><PageHero eyebrow="Demo / Interattive" title="Cinque demo da provare." intro="Siti dimostrativi per strutture ricettive e professionisti, completamente navigabili: aprili e prova prenotazioni, moduli e contatti." meta="5 demo interattive" /><section className="listing-section shell"><ProjectGallery items={demoProjects} /></section><ContactBand /></main>;
}
