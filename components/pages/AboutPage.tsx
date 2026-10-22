import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';
import type { Lang } from '@/lib/i18n';

const copy = {
  it: {
    hero: { eyebrow: 'Chi sono / Christian', title: 'Ciao, sono Christian.', intro: 'Web designer e sviluppatore freelance a Trieste. Creo siti per professionisti e piccole attività in tutta Italia, e me ne occupo dall’inizio alla fine.', meta: 'Trieste · Clienti in tutta Italia' },
    index: 'Come lavoro',
    lead: 'Parli con me. Dal primo messaggio agli aggiornamenti.',
    paragraphs: [
      'Quando mi affidi il tuo sito non passi da un commerciale a un grafico a un programmatore: sono sempre io. Organizzo i contenuti, disegno le pagine, sviluppo il sito, lo metto online e lo aggiorno.',
      'In pratica vuol dire risposte veloci, decisioni prese in fretta e nessun rimpallo: se qualcosa va cambiato, sai a chi scrivere. E con la gestione annuale le modifiche ai contenuti sono già incluse.',
      'Lavoro con psicologi, studi professionali, strutture ricettive e piccole attività. Posso farti un sito semplice e veloce oppure aggiungere prenotazioni online, aree riservate e strumenti su misura.',
    ],
    values: ['Ti ascolto prima di proporti qualcosa', 'Progetto prima per lo smartphone', 'Ti spiego ogni scelta in parole semplici', 'Dopo il lancio resto a disposizione'],
    areasTitle: 'Con chi lavoro',
    areas: ['Professionisti sanitari', 'Consulenti e studi', 'Attività locali', 'Hospitality', 'Mondo animale', 'Sport e organizzazioni', 'Piccole imprese', 'Strumenti interni'],
  },
  en: {
    hero: { eyebrow: 'About / Christian', title: 'Hi, I’m Christian.', intro: 'Freelance web designer and developer based in Trieste, Italy. I build websites for professionals and small businesses and look after them from start to finish.', meta: 'Trieste, Italy · Working remotely' },
    index: 'How I work',
    lead: 'You talk to me. From the first message to every update.',
    paragraphs: [
      'When you trust me with your website, you’re not passed from a salesperson to a designer to a developer: it’s always me. I organise the content, design the pages, build the site, take it live and keep it up to date.',
      'In practice, that means quick answers, fast decisions and no passing the buck: if something needs changing, you know who to message. And with the annual care plan, content edits are already included.',
      'I work with psychologists, professional practices, guest houses and small businesses. I can build you a simple, fast website or add online booking, members’ areas and bespoke tools.',
    ],
    values: ['I listen before I propose anything', 'I design for smartphones first', 'I explain every choice in plain language', 'I’m still here after launch'],
    areasTitle: 'Who I work with',
    areas: ['Healthcare professionals', 'Consultants and practices', 'Local businesses', 'Hospitality', 'Pets and animal care', 'Sport and organisations', 'Small businesses', 'Internal tools'],
  },
};

export function AboutPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <main>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} meta={t.hero.meta} />
      <section className="about-page shell">
        <div className="about-lead reveal"><p className="section-index">{t.index}</p><h2>{t.lead}</h2></div>
        <div className="about-copy reveal">{t.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        <div className="values-panel reveal"><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div><ul>{t.values.map((value, index) => <li key={value}><span>{String(index + 1).padStart(2, '0')}</span>{value}</li>)}</ul></div>
      </section>
      <section className="working-area"><div className="shell"><p className="eyebrow">{t.areasTitle}</p><div className="working-grid">{t.areas.map((item, index) => <div className="reveal" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div></section>
      <ContactBand lang={lang} />
    </main>
  );
}
