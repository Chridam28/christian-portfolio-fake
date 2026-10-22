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
  const n = (index: number) => String(index + 1).padStart(2, '0');
  return <main>
    <section className={`project-hero theme-${project.theme}`}>
      <div className="shell project-hero-top"><p className="eyebrow">{kindLabels[project.kind]} / {project.sector}</p><span>{statusLabels[project.status]}</span></div>
      <div className="shell project-title-grid"><h1>{project.title}</h1><div><p>{project.shortDescription}</p><div className="project-hero-actions">{project.externalUrl ? <a className="button button-accent" href={project.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${externalAction}: ${project.title} (si apre in una nuova scheda)`} data-analytics="external_site_click" data-project={project.slug}>{externalAction} <span aria-hidden="true">↗</span></a> : <span className="unavailable-link">Collegamento non disponibile</span>}{project.variant && <a className="button button-ghost" href="#variante">Vedi la variante <span aria-hidden="true">↓</span></a>}</div></div></div>
      <div className="shell project-hero-visual"><ProjectPreview project={project} eager /></div>
    </section>
    <section className="project-facts shell reveal"><dl><div><dt>{isPublished ? 'Cliente' : 'Contesto'}</dt><dd>{isPublished ? project.title : project.scenarioLabel}</dd></div><div><dt>Settore</dt><dd>{project.sector}</dd></div><div><dt>Anno</dt><dd>{project.year}</dd></div><div><dt>Intervento</dt><dd>{project.typeLabel}</dd></div></dl></section>
    <section className="case-intro shell"><p className="section-index">{isPublished ? 'Cosa serviva' : 'L’idea'}</p><div className="reveal"><h2>{project.problem}</h2><p>{project.fullDescription}</p></div></section>
    <section className="case-solution"><div className="shell case-solution-grid"><div className="reveal"><p className="eyebrow">{isPublished ? 'Cosa ho fatto' : 'Come funziona'}</p><h2>{project.solutionTitle}</h2><p>{project.solution}</p></div><div className="feature-list reveal"><p className="list-title">{isPublished ? 'Principali funzioni' : 'Funzioni dimostrate'}</p>{project.features.map((feature, index) => <div key={feature}><span>{n(index)}</span><p>{feature}</p></div>)}</div></div></section>
    <section className="highlights-section shell"><div className="section-heading reveal"><div><p className="eyebrow dark">Nel dettaglio</p><h2>{isPublished ? <>Le scelte che<br /><em>fanno la differenza.</em></> : <>Cosa la rende<br /><em>utile davvero.</em></>}</h2></div><p>{isPublished ? `I dettagli pensati per chi visita il sito di ${project.title}.` : 'Le funzioni che puoi provare aprendo la demo, pensate per il lavoro di tutti i giorni.'}</p></div><div className={`highlights-grid count-${project.highlights.length}`}>{project.highlights.map((item, index) => <article className="highlight-card reveal" key={item.title}><span>{n(index)}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    {project.desktopImages.length > 1 && <section className="project-gallery-images shell"><div className="gallery-heading"><p className="eyebrow dark">Da vicino</p><h2>{project.galleryTitle ?? 'Alcuni dettagli da vicino.'}</h2></div>{project.desktopImages.slice(1).map((image, index) => <div className="gallery-image reveal" key={image}><Image src={image} alt={`Schermata di dettaglio ${index + 1} del progetto ${project.title}`} width={1440} height={1000} sizes="(max-width: 900px) 100vw, 90vw" /></div>)}</section>}
    {project.mobileImages.length > 0 && <section className="mobile-experience"><div className="shell mobile-grid"><div className="reveal"><p className="eyebrow">Da smartphone</p><h2>{project.mobileTitle ?? 'Pensato prima per lo smartphone.'}</h2><p>{project.mobileText ?? 'Testi leggibili, pulsanti facili da toccare e contatto sempre a portata di dito.'}</p></div><div className="phone-frame reveal"><Image src={project.mobileImages[0]} alt={`Versione mobile del progetto ${project.title}`} width={430} height={932} sizes="430px" /></div></div></section>}
    {project.testimonial && <section className="testimonial-feature"><div className="shell reveal"><p className="section-index">Parola al cliente</p><figure><blockquote>“{project.testimonial.quote}”</blockquote><figcaption><strong>{project.testimonial.author}</strong><span>{project.testimonial.role}</span></figcaption></figure></div></section>}
    {project.variant && <section className="variant-section" id="variante"><div className="shell variant-grid"><div className="reveal"><p className="eyebrow">{project.variant.label}</p><h2>{project.variant.title}</h2><p>{project.variant.description}</p><ul>{project.variant.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="button button-accent" href={project.variant.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`Esplora la variante ${project.variant.title} (si apre in una nuova scheda)`} data-analytics="external_site_click" data-project={`${project.slug}-variante`}>Esplora la variante <span aria-hidden="true">↗</span></a></div><div className="variant-visual reveal"><div className="browser-frame"><div className="browser-bar"><i /><i /><i /><span>Variante · Demo interattiva</span></div><Image src={project.variant.image} alt={`Anteprima della variante ${project.variant.label}`} width={1440} height={1000} sizes="(max-width: 900px) 100vw, 55vw" /></div></div></div></section>}
    <section className="objectives shell"><div><p className="eyebrow dark">Obiettivi</p><h2>{isPublished ? 'Cosa doveva fare il sito.' : 'Cosa vuole dimostrare.'}</h2></div><ol>{project.objectives.map((objective, index) => <li className="reveal" key={objective}><span>{n(index)}</span>{objective}</li>)}</ol></section>
    <section className="project-services shell"><div><p className="eyebrow dark">{isPublished ? 'Servizi forniti' : 'Ambiti esplorati'}</p><h2>{isPublished ? 'Di cosa mi sono occupato.' : 'Cosa contiene la demo.'}</h2></div><div className="tag-list">{project.services.map((service) => <span key={service}>{service}</span>)}{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {!isPublished && project.possibleCustomizations && <section className="customizations shell"><p className="section-index">Si può adattare a te</p><div>{project.possibleCustomizations.map((item) => <span key={item}>{item}</span>)}</div></section>}
    <ContactBand />
  </main>;
}
