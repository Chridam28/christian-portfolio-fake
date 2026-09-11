import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand } from '@/components/ContactBand';
import { ProjectGallery } from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

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
          <div className="hero-copy">
            <p className="eyebrow page-enter page-enter-1"><span className="status-dot" /> Freelance web designer &amp; developer</p>
            <h1 className="page-enter page-enter-2">Il tuo lavoro merita uno spazio digitale <em>all’altezza.</em></h1>
            <p className="hero-intro page-enter page-enter-3">Progetto siti web e strumenti digitali su misura: chiari da usare, riconoscibili e costruiti intorno alla tua attività.</p>
            <div className="hero-actions page-enter page-enter-4">
              <a className="button button-accent" href="#progetti">Guarda i progetti <span aria-hidden="true">↓</span></a>
              <Link className="button button-ghost" href="/contatti">Raccontami il tuo progetto <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero-canvas page-enter page-enter-5" aria-hidden="true">
            <div className="canvas-ruler ruler-top">08 — 24 — 48 — 64 — 96</div>
            <div className="canvas-ruler ruler-side">STRUCTURE / CONTENT / INTERACTION</div>
            <div className="canvas-card canvas-card-primary"><span className="mini-label">PROGETTO / 01</span><strong>Web design su misura</strong><div className="mini-lines"><i /><i /><i /></div></div>
            <div className="canvas-card canvas-card-secondary"><span>Design responsive</span><b>Ogni schermo</b></div>
            <div className="canvas-orbit"><span /></div><span className="canvas-cross cross-a">+</span><span className="canvas-cross cross-b">+</span>
          </div>
        </div>
        <div className="hero-meta shell page-enter page-enter-6"><span>Trieste · Progetti in tutta Italia</span><span>Disponibile per nuovi progetti</span><span>Scorri per esplorare <b aria-hidden="true">↓</b></span></div>
      </section>

      <section className="intro-band" aria-label="Approccio">
        <div className="shell intro-layout reveal"><p className="section-index">00 / In breve</p><p className="intro-statement">Niente passaggi di mano. <span>Parli direttamente con chi progetta, sviluppa e segue il tuo sito dopo la pubblicazione.</span></p></div>
      </section>

      <section className="portfolio-section" id="progetti"><div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow dark">01 / Progetti</p><h2>Progetti selezionati.</h2></div><p>Siti pubblicati e demo interattive progettati per attività, professionisti e strutture ricettive.</p></div>
        <ProjectGallery items={projects} />
        <Link className="button button-dark section-cta" href="/portfolio">Approfondisci i progetti <span aria-hidden="true">↗</span></Link>
      </div></section>

      <section className="services-section" id="servizi"><div className="shell services-layout">
        <div className="services-heading reveal"><p className="eyebrow">02 / Servizi</p><h2>Il necessario,<br /><em>fatto bene.</em></h2><p>Parto dal problema da risolvere e costruisco una proposta proporzionata, senza aggiungere complessità che non serve.</p><Link className="text-link light-link" href="/servizi">Scopri tutti i servizi <span aria-hidden="true">↗</span></Link></div>
        <div className="services-list">{services.map(([number, title, copy]) => <article className="service-row reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></article>)}</div>
      </div></section>

      <section className="method-section shell" id="metodo">
        <div className="section-heading reveal"><div><p className="eyebrow dark">03 / Metodo</p><h2>Un percorso chiaro,<br />dall’idea al sito.</h2></div><p>Quattro passaggi leggibili, con spazio per confrontarsi e senza lasciare decisioni importanti all’ultimo momento.</p></div>
        <div className="method-grid">{method.map(([number, title, copy]) => <article className="method-card reveal" key={number}><div className="method-card-top"><span>{number}</span><div className="method-marker" aria-hidden="true" /></div><div className="method-card-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="reasons-section"><div className="shell reasons-grid reveal">
        <div className="reasons-intro"><p className="eyebrow dark">04 / Lavorare insieme</p><h2>Più diretto.<br /><em>Più personale.</em></h2><p>Collaborare con un freelance significa parlare sempre con la persona che prende le decisioni e mette mano al progetto.</p></div>
        <ol>{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, '0')}</span><p>{reason}</p></li>)}</ol>
      </div></section>

      <section className="about-preview shell"><div className="about-grid reveal"><p className="section-index">05 / Chi sono</p><div><h2>Un professionista indipendente. Un unico referente, dall’idea al lancio.</h2><p>Sono Christian e lavoro a Trieste. Seguo ogni progetto in prima persona, dalla struttura alle ultime verifiche, per mantenere coerenza, tempi chiari e un rapporto semplice con chi mi affida il proprio spazio digitale.</p><Link className="button button-dark" href="/chi-sono">Qualcosa su di me <span aria-hidden="true">↗</span></Link></div><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div></div></section>
      <ContactBand />
    </main>
  );
}
