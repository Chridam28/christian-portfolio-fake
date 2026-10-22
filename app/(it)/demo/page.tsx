import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { getProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Demo interattive',
  description: 'Demo interattive per professionisti, hospitality e piccole attività.',
  alternates: { canonical: '/demo/', languages: { it: '/demo/', en: '/en/portfolio/' } },
};

export default function DemoPage() {
  const demos = getProjects('it').filter((project) => project.kind !== 'real');
  return <main><PageHero eyebrow="Demo / Interattive" title="Demo da provare." intro="Siti dimostrativi per strutture ricettive e professionisti, completamente navigabili: aprili e prova prenotazioni, moduli e contatti." meta={`${demos.length} demo interattive`} /><section className="listing-section shell"><ProjectGallery lang="it" items={demos} /></section><ContactBand lang="it" /></main>;
}
