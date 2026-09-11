import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { ProjectGallery } from '@/components/ProjectGallery';
import { ProjectPreview } from '@/components/ProjectPreview';
import { projects, realProjects, statusLabels } from '@/data/projects';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const services = [
  ['01', 'Siti web professionali', 'Una presenza credibile, chiara e costruita attorno al modo in cui lavori.'],
  ['02', 'Landing page', 'Una pagina focalizzata per presentare un servizio, un evento o una nuova iniziativa.'],
  ['03', 'Restyling', 'Struttura, identità e prestazioni ripensate senza perdere ciò che già funziona.'],
  ['04', 'Prenotazioni e funzioni su misura', 'Flussi utili integrati nel sito, dalle richieste di disponibilità alle aree riservate.'],
  ['05', 'Strumenti digitali', 'Piccole web app costruite per semplificare attività, passaggi e informazioni.'],
  ['06', 'Manutenzione e SEO iniziale', 'Aggiornamenti, assistenza e fondamenta tecniche per rendere il sito trovabile e affidabile.'],
];

const method = [
  ['01', 'Confronto iniziale', 'Mi racconti attività, pubblico e obiettivi. Mettiamo a fuoco cosa serve davvero.'],
  ['02', 'Struttura e direzione', 'Definisco contenuti, priorità e una direzione visiva coerente con la tua identità.'],
  ['03', 'Realizzazione e revisioni', 'Costruisco il progetto per fasi e condivido gli avanzamenti in momenti chiari.'],
  ['04', 'Pubblicazione e assistenza', 'Porto il sito online, verifico tutto e rimango disponibile dopo il lancio.'],
];

const reasons = [
  'Hai un unico referente dall’inizio alla pubblicazione.',
  'Ogni scelta parte dalla tua attività, non da un template.',
  'Progetto il mobile come parte centrale dell’esperienza.',
  'Sai sempre cosa stiamo facendo e quale sarà il passo successivo.',
  'Dopo il lancio non scompaio: posso seguire aggiornamenti e manutenzione.',
  'Quando serve, sito e funzioni personalizzate possono crescere insieme.',
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid shell">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span className="status-dot" /> Freelance web designer &amp; developer</p>
            <h1>Il tuo lavoro merita uno spazio digitale <em>all’altezza.</em></h1>
            <p className="hero-intro">Progetto siti web e strumenti digitali su misura: chiari da usare, riconoscibili e costruiti intorno alla tua attività.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#lavori">Guarda i miei lavori <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="/contatti" data-analytics="form_open">Raccontami il tuo progetto <span aria-hidden="true">↗</span></a>
            </div>
          </div>
          <div className="hero-canvas" aria-hidden="true">
            <div className="canvas-ruler ruler-top">08 — 24 — 48 — 64 — 96</div>
            <div className="canvas-ruler ruler-side">STRUCTURE / CONTENT / INTERACTION</div>
            <div className="canvas-card canvas-card-primary"><span className="mini-label">PROGETTO / 01</span><strong>Web design su misura</strong><div className="mini-lines"><i /><i /><i /></div></div>
            <div className="canvas-card canvas-card-secondary"><span>Design responsive</span><b>Ogni schermo</b></div>
            <div className="canvas-orbit"><span /></div><span className="canvas-cross cross-a">+</span><span className="canvas-cross cross-b">+</span>
          </div>
        </div>
        <div className="hero-meta shell"><span>Trieste · Progetti in tutta Italia</span><span>Disponibile per nuovi progetti</span><span>Scorri per esplorare <b aria-hidden="true">↓</b></span></div>
      </section>

      <section className="intro-band" aria-label="Approccio">
        <div className="shell intro-layout reveal"><p className="section-index">00 / In breve</p><p className="intro-statement">Niente passaggi di mano. <span>Parli direttamente con chi progetta, sviluppa e segue il tuo sito dopo la pubblicazione.</span></p></div>
      </section>

      <section className="work-section shell" id="lavori">
        <div className="section-heading reveal"><div><p className="eyebrow dark">01 / Lavori reali</p><h2>Progetti online,<br />non promesse.</h2></div><p>Due siti pubblicati, raccontati attraverso scelte concrete. Nessun numero inventato, solo il lavoro che puoi vedere.</p></div>
        <div className="featured-list">
          {realProjects.map((project) => (
            <article className={`featured-project ${project.theme} reveal`} key={project.id}>
              <div className="project-copy">
                <span className="project-number">{String(project.order).padStart(2, '0')}</span><p className="project-status">{statusLabels[project.status]}</p>
                <h3>{project.title}</h3><p className="project-sector">{project.sector} · {project.typeLabel}</p><p>{project.shortDescription}</p>
                <div className="project-links"><a className="text-link" href={`/progetti/${project.slug}`} data-analytics="project_open" data-project={project.slug}>Apri il case study <span aria-hidden="true">↗</span></a><a className="text-link muted-link" href="/contatti">Vorrei un progetto simile</a></div>
              </div>
              <a className="project-visual" href={`/progetti/${project.slug}`} aria-label={`Apri il case study ${project.title}`} data-analytics="project_open" data-project={project.slug}><ProjectPreview project={project} eager={project.order === 1} /><span className="view-chip">Vedi progetto</span></a>
            </article>
          ))}
        </div>
        <a className="button button-dark section-cta" href="/lavori">Tutti i lavori reali <span aria-hidden="true">↗</span></a>
      </section>

      <section className="portfolio-section"><div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow dark">02 / Esplorazioni</p><h2>Demo che mostrano<br />cosa è possibile.</h2></div><p>Concept e progetti interni per settori diversi. Ogni scheda dichiara con chiarezza cosa è reale, cosa è dimostrativo e cosa è ancora in sviluppo.</p></div>
        <ProjectGallery items={projects} limit={6} />
        <a className="button button-dark section-cta" href="/portfolio">Esplora tutto il portfolio <span aria-hidden="true">↗</span></a>
      </div></section>

      <section className="services-section" id="servizi"><div className="shell services-layout">
        <div className="services-heading reveal"><p className="eyebrow">03 / Servizi</p><h2>Il necessario,<br /><em>fatto bene.</em></h2><p>Parto dal problema da risolvere e costruisco una proposta proporzionata, senza aggiungere complessità che non serve.</p><a className="text-link light-link" href="/servizi">Scopri tutti i servizi <span aria-hidden="true">↗</span></a></div>
        <div className="services-list">{services.map(([number, title, copy]) => <article className="service-row reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></article>)}</div>
      </div></section>

      <section className="method-section shell" id="metodo">
        <div className="section-heading reveal"><div><p className="eyebrow dark">04 / Metodo</p><h2>Un percorso chiaro,<br />dall’idea al sito.</h2></div><p>Quattro passaggi leggibili, con spazio per confrontarsi e senza lasciare decisioni importanti all’ultimo momento.</p></div>
        <div className="method-grid">{method.map(([number, title, copy]) => <article className="method-card reveal" key={number}><div className="method-card-top"><span>{number}</span><div className="method-marker" aria-hidden="true" /></div><div className="method-card-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="reasons-section"><div className="shell reasons-grid reveal">
        <div className="reasons-intro"><p className="eyebrow dark">05 / Lavorare insieme</p><h2>Più diretto.<br /><em>Più personale.</em></h2><p>Collaborare con un freelance significa parlare sempre con la persona che prende le decisioni e mette mano al progetto.</p></div>
        <ol>{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, '0')}</span><p>{reason}</p></li>)}</ol>
      </div></section>

      <section className="about-preview shell"><div className="about-grid reveal"><p className="section-index">06 / Chi sono</p><div><h2>Un professionista indipendente. Un unico referente, dall’idea al lancio.</h2><p>Sono Christian e lavoro a Trieste. Seguo ogni progetto in prima persona, dalla struttura alle ultime verifiche, per mantenere coerenza, tempi chiari e un rapporto semplice con chi mi affida il proprio spazio digitale.</p><a className="button button-dark" href="/chi-sono">Qualcosa su di me <span aria-hidden="true">↗</span></a></div><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div></div></section>
      <ContactBand />
    </main>
  );
}
