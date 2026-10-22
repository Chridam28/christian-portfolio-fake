import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Chi sono',
  description: 'Christian D’Ambrosio, web designer e sviluppatore freelance a Trieste. Siti per professionisti e piccole attività in tutta Italia.',
  alternates: { canonical: '/chi-sono' },
};

export default function AboutPage() {
  return <main><PageHero eyebrow="Chi sono / Christian" title="Ciao, sono Christian." intro="Web designer e sviluppatore freelance a Trieste. Creo siti per professionisti e piccole attività in tutta Italia, e me ne occupo dall’inizio alla fine." meta="Trieste · Clienti in tutta Italia" /><section className="about-page shell"><div className="about-lead reveal"><p className="section-index">Come lavoro</p><h2>Parli con me. Dal primo messaggio agli aggiornamenti.</h2></div><div className="about-copy reveal"><p>Quando mi affidi il tuo sito non passi da un commerciale a un grafico a un programmatore: sono sempre io. Organizzo i contenuti, disegno le pagine, sviluppo il sito, lo metto online e lo aggiorno.</p><p>In pratica vuol dire risposte veloci, decisioni prese in fretta e nessun rimpallo: se qualcosa va cambiato, sai a chi scrivere. E con la gestione annuale le modifiche ai contenuti sono già incluse.</p><p>Lavoro con psicologi, studi professionali, strutture ricettive e piccole attività. Posso farti un sito semplice e veloce oppure aggiungere prenotazioni online, aree riservate e strumenti su misura.</p></div><div className="values-panel reveal"><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div><ul><li><span>01</span>Ti ascolto prima di proporti qualcosa</li><li><span>02</span>Progetto prima per lo smartphone</li><li><span>03</span>Ti spiego ogni scelta in parole semplici</li><li><span>04</span>Dopo il lancio resto a disposizione</li></ul></div></section><section className="working-area"><div className="shell"><p className="eyebrow">Con chi lavoro</p><div className="working-grid">{['Professionisti sanitari', 'Consulenti e studi', 'Attività locali', 'Hospitality', 'Mondo animale', 'Sport e organizzazioni', 'Piccole imprese', 'Strumenti interni'].map((item, index) => <div className="reveal" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div></section><ContactBand /></main>;
}
