import type { Lang } from '@/lib/i18n';

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

export type Faq = { question: string; answer: string };

type PricingContent = { packages: PricingPackage[]; payment: { title: string; text: string }; maintenanceIncludes: string[]; faqs: Faq[] };

const it: PricingContent = {
  packages: [
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
  ],
  payment: {
    title: 'Paghi solo se la demo ti convince.',
    text: 'Nessun anticipo: il costo di realizzazione si paga per intero solo all’accettazione della demo operativa, quando hai visto il tuo sito funzionante. Se preferisci, puoi dividerlo in 3 rate.',
  },
  maintenanceIncludes: ['Dominio', 'Hosting', 'Backup', 'Certificato di sicurezza (HTTPS)'],
  faqs: [
    {
      question: 'Quanto costa un sito?',
      answer: 'Una landing page costa 350 €. Un sito one page costa 500 € di realizzazione, un sito multipagina (fino a 5 pagine, anche in inglese) 1.000 €. Per one page e multipagina la gestione annuale è di 500 € e comprende dominio, hosting, backup, certificato di sicurezza e tutte le modifiche ai contenuti.',
    },
    {
      question: 'Quando e come si paga?',
      answer: 'Non chiedo anticipi: il costo di realizzazione si paga per intero solo quando accetti la demo operativa, cioè dopo aver visto il tuo sito funzionante e averlo approvato. Se preferisci, puoi dividere l’importo in 3 rate.',
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
  ],
};

const en: PricingContent = {
  packages: [
    {
      id: 'landing',
      name: 'Landing page',
      price: '€350',
      priceNote: 'one-off',
      pitch: 'A single, focused page to launch a service, an event or a promotion and collect enquiries.',
      includes: [
        'Custom design, no templates',
        'Flawless on smartphones',
        'WhatsApp, email or contact form buttons',
        'Publishing included',
      ],
    },
    {
      id: 'one-page',
      name: 'One-page website',
      price: '€500',
      priceNote: 'one-off',
      maintenance: '+ €500/year care plan, edits included',
      pitch: 'Your whole business on one fast page, polished down to the last detail. The right choice for most professionals.',
      includes: [
        'Custom design, built mobile-first',
        'SEO: set up so people find you on Google',
        'GEO: optimised for answers from ChatGPT, Gemini and other AI assistants',
        'Fast loading and structured data',
        'Direct contact: WhatsApp, email, phone',
        'Privacy and cookie notices',
      ],
      highlight: true,
    },
    {
      id: 'multi-page',
      name: 'Multi-page website',
      price: '€1,000',
      priceNote: 'one-off',
      maintenance: '+ €500/year care plan, edits included',
      pitch: 'Up to five pages to present your services, your practice and yourself in depth, in Italian and English.',
      includes: [
        'Everything in the one-page website',
        'Up to five complete pages',
        'English version with professional translation and localisation',
        'Page-by-page SEO and GEO',
      ],
    },
  ],
  payment: {
    title: 'You only pay if you’re happy with the demo.',
    text: 'No deposit: the build cost is paid in full only when you approve the working demo, once you’ve seen your website up and running. If you prefer, you can split it into three instalments.',
  },
  maintenanceIncludes: ['Domain name', 'Hosting', 'Backups', 'SSL certificate (HTTPS)'],
  faqs: [
    {
      question: 'How much does a website cost?',
      answer: 'A landing page costs €350. A one-page website costs €500 to build and a multi-page website (up to five pages, in Italian and English) €1,000. For one-page and multi-page websites the annual care plan is €500 and covers the domain name, hosting, backups, the SSL certificate and every content edit you need.',
    },
    {
      question: 'When and how do I pay?',
      answer: 'There’s no upfront deposit: the build cost is paid in full only when you approve the working demo, after you’ve seen your website up and running and signed it off. If you prefer, you can split the amount into three instalments.',
    },
    {
      question: 'How long does it take?',
      answer: 'The first working demo is ready within 48 hours of receiving your copy and images. From there, we refine it together until it goes live.',
    },
    {
      question: 'Can I ask for changes after launch?',
      answer: 'Yes, and that’s the whole point of the care plan: all year round, you tell me what to change and I take care of it at no extra cost. Copy, images, posts, existing pages: every content edit is included. Only major work, such as new features or a redesign, is quoted separately.',
    },
    {
      question: 'What does the annual care plan include?',
      answer: 'Domain name, hosting, backups, the SSL certificate and every content edit for a full year. In short, you never have to deal with anything technical: if something needs changing, just message me.',
    },
    {
      question: 'What do I need to send you?',
      answer: 'Copy and images for your business. If you’re not sure where to start, I’ll tell you exactly what’s needed, section by section.',
    },
    {
      question: 'Will people find me on Google?',
      answer: 'Your website is built from day one for Google (SEO) and for answers from AI assistants such as ChatGPT and Gemini (GEO). No one can honestly guarantee the top spot, but you start on solid technical foundations.',
    },
    {
      question: 'Do you only work in Trieste?',
      answer: 'No. I’m based in Trieste, but I work with clients remotely: we can talk on WhatsApp, by phone or on a video call.',
    },
    {
      question: 'What if I need something more?',
      answer: 'Online booking, a members’ area, a simple management tool or a redesign of your current site: tell me what you need and I’ll prepare a tailored quote.',
    },
  ],
};

export const pricing: Record<Lang, PricingContent> = { it, en };
