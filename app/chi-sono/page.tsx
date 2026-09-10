import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Chi sono',
  description: 'Christian D’Ambrosio, freelance web designer e developer a Trieste.',
  alternates: { canonical: '/chi-sono' },
};

export default function AboutPage() {
  return <main><PageHero eyebrow="Chi sono / Christian" title="Diretto nel rapporto. Meticoloso nel lavoro." intro="Sono un freelance con sede a Trieste. Progetto e sviluppo siti e piccoli strumenti digitali, seguendo in prima persona ogni fase." meta="Trieste · Disponibile in tutta Italia" /><section className="about-page shell"><div className="about-lead reveal"><p className="section-index">Un unico referente</p><h2>Il vantaggio non è sembrare grandi. È essere presenti.</h2></div><div className="about-copy reveal"><p>Quando mi affidi un progetto, parli con la stessa persona che organizza i contenuti, disegna l’interfaccia, sviluppa il sito e ne verifica il funzionamento.</p><p>Questo rende il lavoro più semplice da seguire: meno passaggi, decisioni più rapide e una responsabilità chiara. Il risultato non parte da un modello generico, ma dalla tua attività, dalle persone a cui ti rivolgi e da quello che il sito deve aiutarti a fare.</p><p>Lavoro con professionisti, attività locali, strutture ricettive e piccole organizzazioni. Posso occuparmi di una presenza web essenziale oppure affiancarla con prenotazioni, aree gestionali e funzioni personalizzate.</p></div><div className="values-panel reveal"><div className="about-signature" aria-hidden="true"><span>CD</span><i /></div><ul><li><span>01</span>Ascolto prima di proporre</li><li><span>02</span>Progetto per il mobile</li><li><span>03</span>Spiego le scelte</li><li><span>04</span>Rimango disponibile</li></ul></div></section><section className="working-area"><div className="shell"><p className="eyebrow">Ambiti / Esperienza</p><div className="working-grid">{['Professionisti sanitari', 'Consulenti e studi', 'Attività locali', 'Hospitality', 'Mondo animale', 'Sport e organizzazioni', 'Piccole imprese', 'Strumenti interni'].map((item, index) => <div className="reveal" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div></section><ContactBand /></main>;
}
