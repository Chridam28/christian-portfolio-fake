import Link from 'next/link';
import { ContactBand } from '@/components/ContactBand';
import { Pricing } from '@/components/Pricing';
import { ProjectGallery } from '@/components/ProjectGallery';
import { Testimonials } from '@/components/Testimonials';
import { getProjects } from '@/data/projects';
import { href, sectionIds, type Lang } from '@/lib/i18n';

const copy = {
  it: {
    eyebrow: 'Web designer e sviluppatore freelance',
    title: <>Siti web su misura. <em>Prima demo in 48&nbsp;ore.</em></>,
    intro: <>Creo siti per professionisti e piccole attività: chiari, veloci, perfetti da smartphone e pronti per Google. Da 350&nbsp;€, e dopo il lancio le modifiche le faccio io.</>,
    seeWork: 'Vedi i lavori',
    quote: 'Chiedimi un preventivo',
    canvas: { top: 'DEMO IN 48 ORE — DA 350 €', side: 'DESIGN / SVILUPPO / ONLINE', label: 'IL TUO SITO / 01', card: 'Su misura, non da template', small: 'Gestione annuale', big: 'Modifiche incluse' },
    meta: ['Trieste · Clienti in tutta Italia', 'Disponibile per nuovi progetti', 'Scorri per esplorare'],
    introLabel: 'Approccio',
    introIndex: '00 / In breve',
    introLead: 'Niente agenzie, niente intermediari.',
    introText: 'Mi scrivi, ti rispondo io e sono sempre io a costruire e aggiornare il tuo sito.',
    projects: { eyebrow: '01 / Progetti', title: 'Lavori e demo.', text: 'Tre siti già online per clienti veri e quattro demo che puoi aprire e provare. Scorri di lato per vederli tutti.', all: 'Tutti i progetti' },
    services: {
      eyebrow: '02 / Servizi', title: <>Cosa posso<br /><em>fare per te.</em></>, text: 'Mi dici cosa ti serve e ti propongo solo quello. Niente funzioni inutili per gonfiare il preventivo.', link: 'Servizi e prezzi',
      items: [
        ['Siti web per la tua attività', 'Chi sei, cosa offri e come contattarti: in una pagina o fino a cinque, anche in inglese. Pronti per Google e per le ricerche con l’AI.'],
        ['Landing page', 'Una pagina sola per lanciare un servizio, un evento o una promozione e raccogliere contatti.'],
        ['Modifiche incluse tutto l’anno', 'Con la gestione annuale mi scrivi cosa cambiare e lo faccio io: testi, immagini, post, pagine. Più dominio, hosting e backup.'],
        ['Rifacimento del tuo sito', 'Hai un sito vecchio, lento o che non ti rappresenta più? Lo rifaccio tenendo quello che funziona.'],
        ['Prenotazioni online', 'I clienti chiedono disponibilità o prenotano dal sito, senza telefonate avanti e indietro.'],
        ['Strumenti su misura', 'Piccole applicazioni web per sostituire fogli Excel, appunti e passaggi fatti a mano.'],
      ],
    },
    pricingIndex: '03 / Prezzi',
    method: {
      eyebrow: '04 / Come funziona', title: <>Dal primo messaggio<br />al sito online.</>, text: 'Quattro passaggi, prezzo deciso prima e la prima demo pronta in 48 ore da quando ricevo testi e immagini.',
      steps: [
        ['Mi scrivi', 'Mi racconti la tua attività e cosa ti serve. Ti rispondo con una proposta e un prezzo chiaro.'],
        ['Mi mandi il materiale', 'Testi e immagini. Se non sai cosa preparare, ti dico io cosa serve sezione per sezione.'],
        ['Demo in 48 ore', 'Entro 48 ore dall’invio del materiale vedi la prima versione funzionante. La sistemiamo insieme.'],
        ['Online e sempre aggiornato', 'Pubblico il sito e, con la gestione annuale, ogni modifica ai contenuti la faccio io.'],
      ],
    },
    reasons: {
      eyebrow: '05 / Perché io', title: <>Cosa cambia<br /><em>in pratica.</em></>, text: 'Lavorare con un freelance vuol dire parlare direttamente con chi costruisce il tuo sito. Ecco cosa ti porti a casa.',
      items: [
        'Mi scrivi su WhatsApp e ti rispondo io, non un centralino.',
        'Prezzi fissi, decisi prima di iniziare. Niente sorprese.',
        'Prima demo funzionante in 48 ore dall’invio del materiale.',
        'Ogni sito è disegnato per te, non preso da un template.',
        'Perfetto da smartphone, da dove ti cerca la maggior parte delle persone.',
        'Dopo il lancio non sparisco: le modifiche ai contenuti sono incluse.',
      ],
    },
    about: { index: '06 / Chi sono', title: 'Sono Christian, web designer e sviluppatore a Trieste.', text: 'Mi occupo di tutto io: struttura, grafica, sviluppo, messa online e aggiornamenti. Lavoro con professionisti, studi e piccole attività in tutta Italia.', cta: 'Chi sono' },
  },
  en: {
    eyebrow: 'Freelance web designer & developer',
    title: <>Bespoke websites. <em>First demo in 48&nbsp;hours.</em></>,
    intro: <>I design and build websites for professionals and small businesses: clear, fast, flawless on smartphones and ready for Google. From €350, and once you’re live, I take care of the edits.</>,
    seeWork: 'See my work',
    quote: 'Get a quote',
    canvas: { top: 'DEMO IN 48 HOURS — FROM €350', side: 'DESIGN / DEVELOPMENT / LAUNCH', label: 'YOUR WEBSITE / 01', card: 'Bespoke, not a template', small: 'Annual care plan', big: 'Edits included' },
    meta: ['Trieste, Italy · Working remotely', 'Available for new projects', 'Scroll to explore'],
    introLabel: 'Approach',
    introIndex: '00 / In short',
    introLead: 'No agencies, no middlemen.',
    introText: 'You message me, I reply, and I’m the one who builds and updates your website.',
    projects: { eyebrow: '01 / Work', title: 'Work and demos.', text: 'Three websites already live for real clients and four demos you can open and try. Scroll sideways to see them all.', all: 'All projects' },
    services: {
      eyebrow: '02 / Services', title: <>What I can<br /><em>do for you.</em></>, text: 'Tell me what you need and I’ll propose exactly that. No unnecessary features to pad out the quote.', link: 'Services and pricing',
      items: [
        ['Websites for your business', 'Who you are, what you offer and how to reach you: on one page or up to five, in Italian and English. Ready for Google and for AI-powered search.'],
        ['Landing pages', 'A single page to launch a service, an event or a promotion and collect enquiries.'],
        ['Edits included all year', 'With the annual care plan, you tell me what to change and I do it: copy, images, posts, pages. Plus domain name, hosting and backups.'],
        ['Redesigning your website', 'Is your site outdated, slow or no longer a good fit? I’ll rebuild it and keep what works.'],
        ['Online booking', 'Clients check availability or book through your website, with no back-and-forth phone calls.'],
        ['Bespoke tools', 'Small web apps to replace spreadsheets, scattered notes and manual steps.'],
      ],
    },
    pricingIndex: '03 / Pricing',
    method: {
      eyebrow: '04 / How it works', title: <>From first message<br />to live website.</>, text: 'Four steps, a price agreed upfront and your first demo ready within 48 hours of receiving your copy and images.',
      steps: [
        ['You get in touch', 'Tell me about your business and what you need. I’ll reply with a proposal and a clear price.'],
        ['You send the material', 'Copy and images. If you’re not sure what to prepare, I’ll tell you what’s needed, section by section.'],
        ['Demo in 48 hours', 'Within 48 hours of receiving your material, you’ll see the first working version. We refine it together.'],
        ['Live and always up to date', 'I publish your website and, with the care plan, I handle every content edit.'],
      ],
    },
    reasons: {
      eyebrow: '05 / Why me', title: <>What it means<br /><em>in practice.</em></>, text: 'Working with a freelancer means talking directly to the person who builds your website. Here’s what you get.',
      items: [
        'Message me on WhatsApp and you’ll hear back from me, not a call centre.',
        'Fixed prices, agreed before we start. No surprises.',
        'First working demo within 48 hours of receiving your material.',
        'Every website is designed for you, not lifted from a template.',
        'Flawless on smartphones, where most people will look you up.',
        'I don’t disappear after launch: content edits are included.',
      ],
    },
    about: { index: '06 / About', title: 'I’m Christian, a web designer and developer based in Trieste.', text: 'I handle everything myself: structure, design, development, launch and updates. I work remotely with professionals, practices and small businesses.', cta: 'About me' },
  },
};

const n = (index: number) => String(index + 1).padStart(2, '0');

export function HomePage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <main>
      <section className="hero" id="home">
        <div className="hero-grid shell">
          <div className="hero-copy reveal is-visible">
            <p className="eyebrow"><span className="status-dot" /> {t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-accent" href={`#${sectionIds.projects[lang]}`}>{t.seeWork} <span aria-hidden="true">↓</span></a>
              <Link className="button button-ghost" href={href('contact', lang)}>{t.quote} <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="hero-canvas" aria-hidden="true">
            <div className="canvas-ruler ruler-top">{t.canvas.top}</div>
            <div className="canvas-ruler ruler-side">{t.canvas.side}</div>
            <div className="canvas-card canvas-card-primary"><span className="mini-label">{t.canvas.label}</span><strong>{t.canvas.card}</strong><div className="mini-lines"><i /><i /><i /></div></div>
            <div className="canvas-card canvas-card-secondary"><span>{t.canvas.small}</span><b>{t.canvas.big}</b></div>
            <div className="canvas-orbit"><span /></div><span className="canvas-cross cross-a">+</span><span className="canvas-cross cross-b">+</span>
          </div>
        </div>
        <div className="hero-meta shell"><span>{t.meta[0]}</span><span>{t.meta[1]}</span><span>{t.meta[2]} <b aria-hidden="true">↓</b></span></div>
      </section>

      <section className="intro-band" aria-label={t.introLabel}>
        <div className="shell intro-layout reveal"><p className="section-index">{t.introIndex}</p><p className="intro-statement">{t.introLead} <span>{t.introText}</span></p></div>
      </section>

      <section className="portfolio-section" id={sectionIds.projects[lang]}><div className="shell">
        <div className="section-heading reveal"><div><p className="eyebrow dark">{t.projects.eyebrow}</p><h2>{t.projects.title}</h2></div><p>{t.projects.text}</p></div>
        <ProjectGallery lang={lang} items={getProjects(lang)} layout="carousel" />
        <Link className="button button-dark section-cta" href={href('portfolio', lang)}>{t.projects.all} <span aria-hidden="true">↗</span></Link>
      </div></section>

      <Testimonials lang={lang} />

      <section className="services-section" id={sectionIds.services[lang]}><div className="shell services-layout">
        <div className="services-heading reveal"><p className="eyebrow">{t.services.eyebrow}</p><h2>{t.services.title}</h2><p>{t.services.text}</p><Link className="text-link light-link" href={href('services', lang)}>{t.services.link} <span aria-hidden="true">↗</span></Link></div>
        <div className="services-list">{t.services.items.map(([title, text], index) => <article className="service-row reveal" key={title}><span>{n(index)}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div>
      </div></section>

      <Pricing lang={lang} index={t.pricingIndex} showFaqLink />

      <section className="method-section shell" id={sectionIds.process[lang]}>
        <div className="section-heading reveal"><div><p className="eyebrow dark">{t.method.eyebrow}</p><h2>{t.method.title}</h2></div><p>{t.method.text}</p></div>
        <div className="method-grid">{t.method.steps.map(([title, text], index) => <article className="method-card reveal" key={title}><div className="method-card-top"><span>{n(index)}</span><div className="method-marker" aria-hidden="true" /></div><div className="method-card-copy"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="reasons-section"><div className="shell reasons-grid reveal">
        <div className="reasons-intro"><p className="eyebrow dark">{t.reasons.eyebrow}</p><h2>{t.reasons.title}</h2><p>{t.reasons.text}</p></div>
        <ol>{t.reasons.items.map((reason, index) => <li key={reason}><span>{n(index)}</span><p>{reason}</p></li>)}</ol>
      </div></section>

      <section className="about-preview shell"><div className="about-grid reveal"><p className="section-index">{t.about.index}</p><div><h2>{t.about.title}</h2><p>{t.about.text}</p><Link className="button button-dark" href={href('about', lang)}>{t.about.cta} <span aria-hidden="true">↗</span></Link></div><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div></div></section>
      <ContactBand lang={lang} />
    </main>
  );
}
