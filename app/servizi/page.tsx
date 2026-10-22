import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { Faq } from '@/components/Faq';
import { PageHero } from '@/components/PageHero';
import { Pricing } from '@/components/Pricing';

export const metadata: Metadata = {
  title: 'Servizi e prezzi',
  description: 'Landing page 350 €, sito one page 500 €, sito multipagina 1.000 €. Gestione annuale con tutte le modifiche ai contenuti incluse. Prima demo in 48 ore.',
  alternates: { canonical: '/servizi' },
};

const offers = [
  ['01', 'Rifacimento del sito', 'Hai già un sito ma è vecchio, lento o non ti rappresenta più? Lo rifaccio da capo, tenendo quello che funziona e portando con me testi e contenuti.', ['Analisi di cosa non funziona', 'Nuova struttura e grafica', 'Trasferimento dei contenuti', 'Messa online']],
  ['02', 'Prenotazioni online', 'I clienti chiedono disponibilità, fissano un appuntamento o prenotano direttamente dal sito, senza telefonate avanti e indietro.', ['Richieste di disponibilità', 'Appuntamenti e consulenze', 'Aree riservate', 'Provato su ogni dispositivo']],
  ['03', 'Strumenti su misura', 'Piccole applicazioni web per sostituire fogli Excel, appunti e passaggi fatti a mano con qualcosa di semplice da usare.', ['Gestionali leggeri', 'Moduli e archivi', 'Pannelli per te o il tuo team', 'Crescono insieme alla tua attività']],
];

export default function ServicesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Servizi / Prezzi"
        title="Servizi e prezzi."
        intro="Tre pacchetti a prezzo fisso, una gestione annuale con le modifiche incluse e soluzioni su misura quando ti serve qualcosa di più."
        meta="Prima demo in 48 ore"
      />
      <Pricing index="01 / Pacchetti" />
      <section className="offer-list shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">02 / Su misura</p>
            <h2>Ti serve<br /><em>qualcosa di più?</em></h2>
          </div>
          <p>Per questi lavori preparo un preventivo su misura: mi racconti cosa ti serve e ti dico costi e tempi prima di iniziare.</p>
        </div>
        {offers.map(([number, title, copy, items]) => (
          <article className="offer-row reveal" key={number as string}>
            <span>{number as string}</span>
            <h2>{title as string}</h2>
            <div>
              <p>{copy as string}</p>
              <ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <Faq />
      <ContactBand />
    </main>
  );
}
