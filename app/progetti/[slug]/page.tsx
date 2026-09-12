import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ContactBand } from '@/components/ContactBand';
import { ProjectPreview } from '@/components/ProjectPreview';
import { getProject, kindLabels, projects, statusLabels } from '@/data/projects';

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const image = project.desktopImages[0];
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: { canonical: `/progetti/${project.slug}` },
    openGraph: { title: project.title, description: project.shortDescription, url: `/progetti/${project.slug}`, images: image ? [{ url: image, alt: `Anteprima del progetto ${project.title}` }] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: project.title, description: project.shortDescription, images: image ? [image] : [] },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const isPublished = project.kind === 'real';
  const externalAction = isPublished ? 'Visita il sito' : 'Esplora la demo';
  return <main>
    <section className={`project-hero theme-${project.theme}`}>
      <div className="shell project-hero-top"><p className="eyebrow">{kindLabels[project.kind]} / {project.sector}</p><span>{statusLabels[project.status]}</span></div>
      <div className="shell project-title-grid"><h1>{project.title}</h1><div><p>{project.shortDescription}</p>{project.externalUrl ? <a className="button button-accent" href={project.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${externalAction}: ${project.title} (si apre in una nuova scheda)`} data-analytics="external_site_click" data-project={project.slug}>{externalAction} <span aria-hidden="true">↗</span></a> : <span className="unavailable-link">Collegamento non disponibile</span>}</div></div>
      <div className="shell project-hero-visual"><ProjectPreview project={project} eager /></div>
    </section>
    <section className="project-facts shell reveal"><dl><div><dt>{isPublished ? 'Cliente' : 'Contesto'}</dt><dd>{isPublished ? project.title : project.scenarioLabel}</dd></div><div><dt>Settore</dt><dd>{project.sector}</dd></div><div><dt>Anno</dt><dd>{project.year}</dd></div><div><dt>Intervento</dt><dd>{project.typeLabel}</dd></div></dl></section>
    <section className="case-intro shell"><p className="section-index">{isPublished ? 'La necessità' : 'Il concept'}</p><div className="reveal"><h2>{project.problem}</h2><p>{project.fullDescription}</p></div></section>
    <section className="case-solution"><div className="shell case-solution-grid"><div className="reveal"><p className="eyebrow">La soluzione</p><h2>Struttura, identità e uso quotidiano.</h2><p>{project.solution}</p></div><div className="feature-list reveal"><p className="list-title">{isPublished ? 'Principali funzioni' : 'Funzioni dimostrate'}</p>{project.features.map((feature, index) => <div key={feature}><span>{String(index + 1).padStart(2, '0')}</span><p>{feature}</p></div>)}</div></div></section>
    <section className="objectives shell"><div><p className="eyebrow dark">Obiettivi</p><h2>{isPublished ? 'Le priorità che hanno guidato il progetto.' : 'Le priorità del concept dimostrativo.'}</h2></div><ol>{project.objectives.map((objective, index) => <li className="reveal" key={objective}><span>{String(index + 1).padStart(2, '0')}</span>{objective}</li>)}</ol></section>
    {project.desktopImages.length > 1 && <section className="project-gallery-images shell"><div className="gallery-heading"><p className="eyebrow dark">Desktop / Dettagli</p><h2>Una gerarchia che lascia respirare i contenuti.</h2></div>{project.desktopImages.slice(1).map((image, index) => <div className="gallery-image reveal" key={image}><Image src={image} alt={`Schermata di dettaglio ${index + 1} del progetto ${project.title}`} width={1440} height={1000} sizes="(max-width: 900px) 100vw, 90vw" /></div>)}</section>}
    {project.mobileImages.length > 0 && <section className="mobile-experience"><div className="shell mobile-grid"><div className="reveal"><p className="eyebrow">Esperienza mobile</p><h2>La stessa chiarezza, nello spazio più importante.</h2><p>Gerarchie, leggibilità e azioni principali sono state controllate su schermi piccoli, senza ridurre il mobile a una semplice versione compressa del desktop.</p></div><div className="phone-frame reveal"><Image src={project.mobileImages[0]} alt={`Versione mobile del progetto ${project.title}`} width={430} height={932} sizes="430px" /></div></div></section>}
    <section className="project-services shell"><div><p className="eyebrow dark">{isPublished ? 'Servizi forniti' : 'Ambiti esplorati'}</p><h2>Cosa comprende la scheda.</h2></div><div className="tag-list">{project.services.map((service) => <span key={service}>{service}</span>)}{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {!isPublished && project.possibleCustomizations && <section className="customizations shell"><p className="section-index">Possibili personalizzazioni</p><div>{project.possibleCustomizations.map((item) => <span key={item}>{item}</span>)}</div></section>}
    <ContactBand />
  </main>;
}
