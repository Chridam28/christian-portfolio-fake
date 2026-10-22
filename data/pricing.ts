export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  maintenance?: string;
  pitch: string;
  includes: string[];
  highlight?: boolean;
};

export const pricingPackages: PricingPackage[] = [
  {
    id: 'landing',
    name: 'Landing page',
    price: '350 €',
    priceNote: 'realizzazione',
    pitch: 'Una pagina sola, mirata: per lanciare un servizio, un evento o una promozione e raccogliere contatti.',
    includes: [
      'Design su misura, niente template',
      'Perfetta da smartphone',
      'Pulsanti WhatsApp, email o modulo di contatto',
      'Messa online inclusa',
    ],
  },
  {
    id: 'one-page',
    name: 'Sito one page',
    price: '500 €',
    priceNote: 'realizzazione',
    maintenance: '+ 500 €/anno di gestione con modifiche incluse',
    pitch: 'Tutta la tua attività in una pagina veloce e curata in ogni dettaglio. La scelta giusta per la maggior parte dei professionisti.',
    includes: [
      'Design su misura, pensato prima per lo smartphone',
      'SEO: impostato per farti trovare su Google',
      'GEO: ottimizzato per le risposte di ChatGPT, Gemini e degli assistenti AI',
      'Caricamento veloce e dati strutturati',
      'Contatti diretti: WhatsApp, email, telefono',
      'Informative privacy e cookie',
    ],
    highlight: true,
  },
  {
    id: 'multi-page',
    name: 'Sito multipagina',
    price: '1.000 €',
    priceNote: 'realizzazione',
    maintenance: '+ 500 €/anno di gestione con modifiche incluse',
    pitch: 'Fino a 5 pagine per raccontare servizi, studio e chi sei nel dettaglio. Anche in inglese.',
    includes: [
      'Tutto quello del sito one page',
      'Fino a 5 pagine complete',
      'Versione inglese con traduzione e localizzazione professionali',
      'SEO e GEO curati pagina per pagina',
    ],
  },
];

export const maintenanceIncludes = [
  'Dominio',
  'Hosting',
  'Backup',
  'Certificato di sicurezza (HTTPS)',
];

export const faqs: Array<{ question: string; answer: string }> = [
  {
    question: 'Quanto costa un sito?',
    answer: 'Una landing page costa 350 €. Un sito one page costa 500 € di realizzazione, un sito multipagina (fino a 5 pagine, anche in inglese) 1.000 €. Per one page e multipagina la gestione annuale è di 500 € e comprende dominio, hosting, backup, certificato di sicurezza e tutte le modifiche ai contenuti.',
  },
  {
    question: 'In quanto tempo è pronto?',
    answer: 'La prima demo funzionante è pronta in 48 ore da quando mi mandi testi e immagini. Da lì la sistemiamo insieme fino alla pubblicazione.',
  },
  {
    question: 'Posso chiedere modifiche dopo la pubblicazione?',
    answer: 'Sì, ed è il punto forte della gestione annuale: per tutto l’anno mi scrivi cosa cambiare e lo faccio io, senza costi extra. Testi, immagini, post, pagine già presenti: tutte le modifiche ai contenuti sono incluse. Solo i lavori grossi, come nuove funzioni o un rifacimento, li valutiamo a parte.',
  },
  {
    question: 'Cosa comprende la gestione annuale?',
    answer: 'Dominio, hosting, backup, certificato di sicurezza e tutte le modifiche ai contenuti del sito per un anno. In pratica non devi pensare a niente di tecnico: se qualcosa va cambiato, mi scrivi.',
  },
  {
    question: 'Cosa devo prepararti?',
    answer: 'Testi e immagini della tua attività. Se non sai da dove partire, ti dico io cosa serve sezione per sezione.',
  },
  {
    question: 'Mi troveranno su Google?',
    answer: 'Il sito nasce già ottimizzato per Google (SEO) e per le risposte degli assistenti AI come ChatGPT e Gemini (GEO). Nessuno onesto può garantire il primo posto, ma parti con basi tecniche solide.',
  },
  {
    question: 'Lavori solo a Trieste?',
    answer: 'No. Sono a Trieste ma lavoro con clienti in tutta Italia: ci sentiamo su WhatsApp, telefono o videochiamata.',
  },
  {
    question: 'E se mi serve qualcosa di più?',
    answer: 'Prenotazioni online, area riservata, piccoli gestionali o un rifacimento del sito che hai già: mi racconti cosa ti serve e ti preparo un preventivo su misura.',
  },
];
