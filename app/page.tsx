import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactBand } from '@/components/ContactBand';
import { Pricing } from '@/components/Pricing';
import { Testimonials } from '@/components/Testimonials';
import { ProjectGallery } from '@/components/ProjectGallery';
import { projects } from '@/data/projects';

export const metadata: Metadata = { alternates: { canonical: '/' } };

const services = [
  ['01', 'Siti web per la tua attività', 'Chi sei, cosa offri e come contattarti: in una pagina o fino a cinque, anche in inglese. Pronti per Google e per le ricerche con l’AI.'],
  ['02', 'Landing page', 'Una pagina sola per lanciare un servizio, un evento o una promozione e raccogliere contatti.'],
  ['03', 'Modifiche incluse tutto l’anno', 'Con la gestione annuale mi scrivi cosa cambiare e lo faccio io: testi, immagini, post, pagine. Più dominio, hosting e backup.'],
  ['04', 'Rifacimento del tuo sito', 'Hai un sito vecchio, lento o che non ti rappresenta più? Lo rifaccio tenendo quello che funziona.'],
  ['05', 'Prenotazioni online', 'I clienti chiedono disponibilità o prenotano dal sito, senza telefonate avanti e indietro.'],
  ['06', 'Strumenti su misura', 'Piccole applicazioni web per sostituire fogli Excel, appunti e passaggi fatti a mano.'],
];

const method = [
  ['01', 'Mi scrivi', 'Mi racconti la tua attività e cosa ti serve. Ti rispondo con una proposta e un prezzo chiaro.'],
  ['02', 'Mi mandi il materiale', 'Testi e immagini. Se non sai cosa preparare, ti dico io cosa serve sezione per sezione.'],
  ['03', 'Demo in 48 ore', 'Entro 48 ore dall’invio del materiale vedi la prima versione funzionante. La sistemiamo insieme.'],
  ['04', 'Online e sempre aggiornato', 'Pubblico il sito e, con la gestione annuale, ogni modifica ai contenuti la faccio io.'],
];

const reasons = [
  'Mi scrivi su WhatsApp e ti rispondo io, non un centralino.',
  'Prezzi fissi, decisi prima di iniziare. Niente sorprese.',
  'Prima demo funzionante in 48 ore dall’invio del materiale.',
  'Ogni sito è disegnato per te, non preso da un template.',
  'Perfetto da smartphone, da dove ti cerca la maggior parte delle persone.',
  'Dopo il lancio non sparisco: le modifiche ai contenuti sono incluse.',
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid shell">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span className="status-dot" /> Freelance web designer &amp; developer</p>
            <h1>Siti web su misura. <em>Prima demo in 48&nbsp;ore.</em></h1>
            <p className="hero-intro">Creo siti per professionisti e piccole attività: chiari, veloci, perfetti da smartphone e pronti per Google. Da 350&nbsp;€, e dopo il lancio le modifiche le faccio io.</p>
            <div className="hero-actions">
              <a className="button button-accent" href="#progetti">Vedi i lavori <span aria-hidden="true">↓</span></a>
              <Link className="button button-ghost" href="/contatti">Chiedimi un preventivo <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero-canvas" aria-hidden="true">
            <div className="canvas-ruler ruler-top">DEMO IN 48 ORE — DA 350 €</div>
            <div className="canvas-ruler ruler-side">DESIGN / SVILUPPO / ONLINE</div>
            <div className="canvas-card canvas-card-primary"><span className="mini-label">IL TUO SITO / 01</span><strong>Su misura, non da template</strong><div className="mini-lines"><i /><i /><i /></div></div>
            <div className="canvas-card canvas-card-secondary"><span>Gestione annuale</span><b>Modifiche incluse</b></div>
            <div className="canvas-orbit"><span /></div><span className="canvas-cross cross-a">+</span><span className="canvas-cross cross-b">+</span>
          </div>
        </div>
        <div className="hero-meta shell"><span>Trieste · Clienti in tutta Italia</span><span>Disponibile per nuovi progetti</span><span>Scorri per esplorare <b aria-hidden="true">↓</b></span></div>
      </section>

      <section className="intro-band" aria-label="Approccio">
        <div className="shell intro-layout reveal"><p className="section-index">00 / In breve</p><p className="intro-statement">Niente agenzie, niente intermediari. <span>Mi scrivi, ti rispondo io e sono sempre io a costruire e aggiornare il tuo sito.</span></p></div>
      </section>

      <section className="portfolio-section" id="progetti"><div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow dark">01 / Progetti</p><h2>Lavori e demo.</h2></div><p>Tre siti già online per clienti veri e quattro demo che puoi aprire e provare. Scorri di lato per vederli tutti.</p></div>
        <ProjectGallery items={projects} layout="carousel" />
        <Link className="button button-dark section-cta" href="/portfolio">Tutti i progetti <span aria-hidden="true">↗</span></Link>
      </div></section>

      <Testimonials />

      <section className="services-section" id="servizi"><div className="shell services-layout">
        <div className="services-heading reveal"><p className="eyebrow">02 / Servizi</p><h2>Cosa posso<br /><em>fare per te.</em></h2><p>Mi dici cosa ti serve e ti propongo solo quello. Niente funzioni inutili per gonfiare il preventivo.</p><Link className="text-link light-link" href="/servizi">Servizi e prezzi <span aria-hidden="true">↗</span></Link></div>
        <div className="services-list">{services.map(([number, title, copy]) => <article className="service-row reveal" key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b aria-hidden="true">↗</b></article>)}</div>
      </div></section>

      <Pricing index="03 / Prezzi" showFaqLink />

      <section className="method-section shell" id="metodo">
        <div className="section-heading reveal"><div><p className="eyebrow dark">04 / Come funziona</p><h2>Dal primo messaggio<br />al sito online.</h2></div><p>Quattro passaggi, prezzo deciso prima e la prima demo pronta in 48 ore da quando ricevo testi e immagini.</p></div>
        <div className="method-grid">{method.map(([number, title, copy]) => <article className="method-card reveal" key={number}><div className="method-card-top"><span>{number}</span><div className="method-marker" aria-hidden="true" /></div><div className="method-card-copy"><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section className="reasons-section"><div className="shell reasons-grid reveal">
        <div className="reasons-intro"><p className="eyebrow dark">05 / Perché io</p><h2>Cosa cambia<br /><em>in pratica.</em></h2><p>Lavorare con un freelance vuol dire parlare direttamente con chi costruisce il tuo sito. Ecco cosa ti porti a casa.</p></div>
        <ol>{reasons.map((reason, index) => <li key={reason}><span>{String(index + 1).padStart(2, '0')}</span><p>{reason}</p></li>)}</ol>
      </div></section>

      <section className="about-preview shell"><div className="about-grid reveal"><p className="section-index">06 / Chi sono</p><div><h2>Sono Christian, web designer e sviluppatore a Trieste.</h2><p>Mi occupo di tutto io: struttura, grafica, sviluppo, messa online e aggiornamenti. Lavoro con professionisti, studi e piccole attività in tutta Italia.</p><Link className="button button-dark" href="/chi-sono">Chi sono <span aria-hidden="true">↗</span></Link></div><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div></div></section>
      <ContactBand />
    </main>
  );
}
