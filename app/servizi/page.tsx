import type { Metadata } from 'next';
import { ContactBand } from '@/components/ContactBand';
import { PageHero } from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Servizi',
  description: 'Siti web, landing page, restyling, prenotazioni, web app, manutenzione e SEO iniziale.',
  alternates: { canonical: '/servizi' },
};

const offers = [
  ['01', 'Siti web professionali', 'Per professionisti e piccole attività che hanno bisogno di presentarsi con autorevolezza e rendere semplice il contatto.', ['Architettura dei contenuti', 'Design su misura', 'Sviluppo responsive', 'Messa online']],
  ['02', 'Landing page', 'Per concentrare l’attenzione su un servizio, un lancio o una campagna con un percorso breve e leggibile.', ['Gerarchia del messaggio', 'Design focalizzato', 'Modulo o CTA', 'Misurazione predisposta']],
  ['03', 'Restyling', 'Per siti datati, difficili da usare o non più coerenti con l’attività, mantenendo ciò che ha ancora valore.', ['Audit essenziale', 'Nuova struttura', 'Sistema visivo', 'Migrazione concordata']],
  ['04', 'Prenotazioni e funzioni', 'Per integrare richieste di disponibilità, appuntamenti, aree riservate o flussi specifici nel sito.', ['Analisi del flusso', 'Prototipazione', 'Sviluppo personalizzato', 'Test su dispositivi']],
  ['05', 'Strumenti digitali', 'Per sostituire passaggi manuali e fogli sparsi con una piccola web app costruita attorno al processo reale.', ['Mappatura attività', 'Interfaccia operativa', 'Sviluppo web', 'Evoluzione per fasi']],
  ['06', 'Manutenzione e aggiornamenti', 'Per mantenere il sito curato, sicuro e aggiornato anche dopo la pubblicazione.', ['Aggiornamenti contenuti', 'Controlli periodici', 'Piccoli miglioramenti', 'Supporto diretto']],
  ['07', 'SEO iniziale e indicizzazione', 'Per consegnare pagine tecnicamente ordinate e comprensibili ai motori di ricerca, senza promesse di posizionamento.', ['Metadata', 'Sitemap e robots', 'Dati strutturati', 'Indicizzazione iniziale']],
];

export default function ServicesPage() {
  return <main><PageHero eyebrow="Servizi / Su misura" title="Tecnologia proporzionata alle persone." intro="Un sito non deve avere tutto. Deve avere le cose giuste, disposte bene e realizzate per durare." meta="Un referente unico per tutto il progetto" /><section className="offer-list shell">{offers.map(([number, title, copy, items]) => <article className="offer-row reveal" key={number as string}><span>{number as string}</span><h2>{title as string}</h2><div><p>{copy as string}</p><ul>{(items as string[]).map((item) => <li key={item}>{item}</li>)}</ul></div></article>)}</section><section className="scope-note"><div className="shell reveal"><p className="section-index">Come definisco il lavoro</p><h2>Prima il risultato utile.<br /><em>Poi gli strumenti.</em></h2><p>Nel preventivo trovi obiettivi, attività incluse, fasi, revisioni e costi. Se una funzione non serve davvero, preferisco dirlo prima di costruirla.</p></div></section><ContactBand /></main>;
}
