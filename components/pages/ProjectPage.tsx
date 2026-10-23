import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ContactBand } from '@/components/ContactBand';
import { ProjectPreview } from '@/components/ProjectPreview';
import { getProject, kindLabels, statusLabels } from '@/data/projects';
import { alternates, projectHref, sectionIds, type Lang } from '@/lib/i18n';

const copy = {
  it: {
    visit: 'Visita il sito', demo: 'Esplora la demo', newTab: 'si apre in una nuova scheda', unavailable: 'Collegamento non disponibile', seeVariant: 'Vedi la variante',
    client: 'Cliente', context: 'Contesto', sector: 'Settore', year: 'Anno', scope: 'Intervento',
    need: 'Cosa serviva', idea: 'L’idea', did: 'Cosa ho fatto', how: 'Come funziona', features: 'Principali funzioni', demoFeatures: 'Funzioni dimostrate',
    detail: 'Nel dettaglio', detailTitle: <>Le scelte che<br /><em>fanno la differenza.</em></>, demoDetailTitle: <>Cosa la rende<br /><em>utile davvero.</em></>,
    detailText: (title: string) => `I dettagli pensati per chi visita il sito di ${title}.`, demoDetailText: 'Le funzioni che puoi provare aprendo la demo, pensate per il lavoro di tutti i giorni.',
    close: 'Da vicino', closeTitle: 'Alcuni dettagli da vicino.', screenshot: (index: number, title: string) => `Schermata di dettaglio ${index} del progetto ${title}`,
    mobile: 'Da smartphone', mobileTitle: 'Pensato prima per lo smartphone.', mobileText: 'Testi leggibili, pulsanti facili da toccare e contatto sempre a portata di dito.', mobileAlt: (title: string) => `Versione mobile del progetto ${title}`,
    exploreVariant: 'Esplora la variante', variantBar: 'Variante · Demo interattiva', variantAlt: (label: string) => `Anteprima della ${label}`, variantAria: (label: string) => `Esplora la ${label}`,
    goals: 'Obiettivi', goalsTitle: 'Cosa doveva fare il sito.', demoGoalsTitle: 'Cosa vuole dimostrare.',
    services: 'Servizi forniti', demoServices: 'Ambiti esplorati', servicesTitle: 'Di cosa mi sono occupato.', demoServicesTitle: 'Cosa contiene la demo.',
    custom: 'Si può adattare a te', previewAlt: (title: string) => `Anteprima del progetto ${title}`,
  },
  en: {
    visit: 'Visit the website', demo: 'Explore the demo', newTab: 'opens in a new tab', unavailable: 'Link not available', seeVariant: 'See the variant',
    client: 'Client', context: 'Context', sector: 'Sector', year: 'Year', scope: 'Scope',
    need: 'The brief', idea: 'The idea', did: 'What I did', how: 'How it works', features: 'Key features', demoFeatures: 'Features shown',
    detail: 'In detail', detailTitle: <>The choices that<br /><em>make the difference.</em></>, demoDetailTitle: <>What makes it<br /><em>genuinely useful.</em></>,
    detailText: (title: string) => `The details designed for visitors to the ${title} website.`, demoDetailText: 'Features you can try by opening the demo, designed for everyday work.',
    close: 'Up close', closeTitle: 'A few details up close.', screenshot: (index: number, title: string) => `Detail screenshot ${index} of the ${title} project`,
    mobile: 'On smartphones', mobileTitle: 'Designed for smartphones first.', mobileText: 'Readable copy, easy-to-tap buttons and contact details always at your fingertips.', mobileAlt: (title: string) => `Mobile version of the ${title} project`,
    exploreVariant: 'Explore the variant', variantBar: 'Variant · Interactive demo', variantAlt: (label: string) => `Preview of ${label}`, variantAria: (label: string) => `Explore ${label}`,
    goals: 'Goals', goalsTitle: 'What the website had to do.', demoGoalsTitle: 'What it sets out to show.',
    services: 'Services provided', demoServices: 'Areas explored', servicesTitle: 'What I took care of.', demoServicesTitle: 'What the demo includes.',
    custom: 'Can be tailored to you', previewAlt: (title: string) => `Preview of the ${title} project`,
  },
};

export function projectMetadata(slug: string, lang: Lang): Metadata {
  const project = getProject(slug, lang);
  if (!project) return {};
  const image = project.desktopImages[0];
  const url = projectHref(project.slug, lang);
  const alt = copy[lang].previewAlt(project.title);
  return {
    title: project.title,
    description: project.shortDescription,
    alternates: alternates(projectHref(project.slug, 'it'), projectHref(project.slug, 'en'), lang),
    openGraph: { title: project.title, description: project.shortDescription, url, images: image ? [{ url: image, alt }] : [] },
    twitter: { card: image ? 'summary_large_image' : 'summary', title: project.title, description: project.shortDescription, images: image ? [image] : [] },
  };
}

export function ProjectPage({ slug, lang }: { slug: string; lang: Lang }) {
  const project = getProject(slug, lang);
  if (!project) notFound();
  const t = copy[lang];
  const isPublished = project.kind === 'real';
  const externalAction = isPublished ? t.visit : t.demo;
  const n = (index: number) => String(index + 1).padStart(2, '0');
  const variantId = sectionIds.variant[lang];

  return <main>
    <section className={`project-hero theme-${project.theme}`}>
      <div className="shell project-hero-top"><p className="eyebrow">{kindLabels[lang][project.kind]} / {project.sector}</p><span>{statusLabels[lang][project.status]}</span></div>
      <div className="shell project-title-grid"><h1>{project.title}</h1><div><p>{project.shortDescription}</p><div className="project-hero-actions">{project.externalUrl ? <a className="button button-accent" href={project.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${externalAction}: ${project.title} (${t.newTab})`} data-analytics="external_site_click" data-project={project.slug}>{externalAction} <span aria-hidden="true">↗</span></a> : <span className="unavailable-link">{t.unavailable}</span>}{project.variant && <a className="button button-ghost" href={`#${variantId}`}>{t.seeVariant} <span aria-hidden="true">↓</span></a>}</div></div></div>
      <div className="shell project-hero-visual"><ProjectPreview lang={lang} project={project} eager /></div>
    </section>
    <section className="project-facts shell reveal"><dl><div><dt>{isPublished ? t.client : t.context}</dt><dd>{isPublished ? project.title : project.scenarioLabel}</dd></div><div><dt>{t.sector}</dt><dd>{project.sector}</dd></div><div><dt>{t.year}</dt><dd>{project.year}</dd></div><div><dt>{t.scope}</dt><dd>{project.typeLabel}</dd></div></dl></section>
    <section className="case-intro shell"><p className="section-index">{isPublished ? t.need : t.idea}</p><div className="reveal"><h2>{project.problem}</h2><p>{project.fullDescription}</p></div></section>
    <section className="case-solution"><div className="shell case-solution-grid"><div className="reveal"><p className="eyebrow">{isPublished ? t.did : t.how}</p><h2>{project.solutionTitle}</h2><p>{project.solution}</p></div><div className="feature-list reveal"><p className="list-title">{isPublished ? t.features : t.demoFeatures}</p>{project.features.map((feature, index) => <div key={feature}><span>{n(index)}</span><p>{feature}</p></div>)}</div></div></section>
    <section className="highlights-section shell"><div className="section-heading reveal"><div><p className="eyebrow dark">{t.detail}</p><h2>{isPublished ? t.detailTitle : t.demoDetailTitle}</h2></div><p>{isPublished ? t.detailText(project.title) : t.demoDetailText}</p></div><div className={`highlights-grid count-${project.highlights.length}`}>{project.highlights.map((item, index) => <article className="highlight-card reveal" key={item.title}><span>{n(index)}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    {project.desktopImages.length > 1 && <section className="project-gallery-images shell"><div className="gallery-heading"><p className="eyebrow dark">{t.close}</p><h2>{project.galleryTitle ?? t.closeTitle}</h2></div>{project.desktopImages.slice(1).map((image, index) => <div className="gallery-image reveal" key={image}><Image src={image} alt={t.screenshot(index + 1, project.title)} width={1440} height={1000} sizes="(max-width: 900px) 100vw, 90vw" /></div>)}</section>}
    {project.mobileImages.length > 0 && <section className="mobile-experience"><div className="shell mobile-grid"><div className="reveal"><p className="eyebrow">{t.mobile}</p><h2>{project.mobileTitle ?? t.mobileTitle}</h2><p>{project.mobileText ?? t.mobileText}</p></div><div className="phone-frame reveal"><Image src={project.mobileImages[0]} alt={t.mobileAlt(project.title)} width={430} height={932} sizes="330px" /></div></div></section>}
    {project.variant && <section className="variant-section" id={variantId}><div className="shell variant-grid"><div className="reveal"><p className="eyebrow">{project.variant.label}</p><h2>{project.variant.title}</h2><p>{project.variant.description}</p><ul>{project.variant.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><a className="button button-accent" href={project.variant.externalUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.variantAria(project.variant.label)} (${t.newTab})`} data-analytics="external_site_click" data-project={`${project.slug}-variant`}>{t.exploreVariant} <span aria-hidden="true">↗</span></a></div><div className="variant-visual reveal"><div className="browser-frame"><div className="browser-bar"><i /><i /><i /><span>{t.variantBar}</span></div><Image src={project.variant.image} alt={t.variantAlt(project.variant.label)} width={1440} height={1000} sizes="(max-width: 900px) 100vw, 55vw" /></div></div></div></section>}
    <section className="objectives shell"><div><p className="eyebrow dark">{t.goals}</p><h2>{isPublished ? t.goalsTitle : t.demoGoalsTitle}</h2></div><ol>{project.objectives.map((objective, index) => <li className="reveal" key={objective}><span>{n(index)}</span>{objective}</li>)}</ol></section>
    <section className="project-services shell"><div><p className="eyebrow dark">{isPublished ? t.services : t.demoServices}</p><h2>{isPublished ? t.servicesTitle : t.demoServicesTitle}</h2></div><div className="tag-list">{project.services.map((service) => <span key={service}>{service}</span>)}{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div></section>
    {!isPublished && project.possibleCustomizations && <section className="customizations shell"><p className="section-index">{t.custom}</p><div>{project.possibleCustomizations.map((item) => <span key={item}>{item}</span>)}</div></section>}
    <ContactBand lang={lang} />
  </main>;
}
