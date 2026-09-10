import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import { ProjectGallery } from '@/components/ProjectGallery';
import { demoProjects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Demo e progetti interni',
  description: 'Concept e strumenti digitali dimostrativi per professionisti, hospitality e piccole attività.',
  alternates: { canonical: '/demo' },
};

export default function DemoPage() {
  return <main><PageHero eyebrow="Demo / Laboratorio" title="Scenari possibili, etichette trasparenti." intro="Questi non sono lavori commissionati. Sono concept, prototipi o progetti interni che mostrano approcci, funzioni e direzioni adattabili a casi reali." meta="Nessuna demo è indicata come online" /><section className="listing-section shell"><div className="notice-box reveal"><span>Nota</span><p>Gli URL delle demo non erano presenti nella repository. Le schede restano quindi senza collegamenti esterni e dichiarano lo stato effettivo.</p></div><ProjectGallery items={demoProjects} /></section><ContactBand /></main>;
}
