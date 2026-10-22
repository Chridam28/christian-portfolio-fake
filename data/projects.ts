export type ProjectKind = 'real' | 'demo' | 'internal';
export type ProjectStatus = 'online' | 'concept' | 'in-development';
export type ProjectCategory =
  | 'professionisti'
  | 'hospitality'
  | 'sport'
  | 'strumenti-digitali';

export type Project = {
  id: string;
  slug: string;
  title: string;
  kind: ProjectKind;
  status: ProjectStatus;
  sector: string;
  year: string;
  shortDescription: string;
  fullDescription: string;
  problem: string;
  objectives: string[];
  solution: string;
  features: string[];
  services: string[];
  technologies: string[];
  desktopImages: string[];
  mobileImages: string[];
  externalUrl?: string;
  featured: boolean;
  order: number;
  theme: 'moss' | 'sage' | 'clay' | 'sand' | 'sky' | 'wine' | 'ink';
  testimonial?: { quote: string; author: string };
  categories: ProjectCategory[];
  typeLabel: string;
  scenarioLabel?: string;
  possibleCustomizations?: string[];
};

export const statusLabels: Record<ProjectStatus, string> = {
  online: 'Online',
  concept: 'Concept esplorabile',
  'in-development': 'In sviluppo',
};

export const kindLabels: Record<ProjectKind, string> = {
  real: 'Progetto pubblicato',
  demo: 'Demo interattiva',
  internal: 'Progetto interno',
};

export const projects: Project[] = ([
  {
    id: 'real-001',
    slug: 'federica-fadel',
    title: 'Federica Fadel',
    kind: 'real',
    status: 'online',
    sector: 'Psicologia',
    year: 'Online nel 2026',
    shortDescription: 'Sito per una psicologa di Trieste: chi è, di cosa si occupa e contatto diretto su WhatsApp in un tocco.',
    fullDescription: 'Sito professionale per la Dott.ssa Federica Fadel, psicologa a Trieste. In una sola pagina presenta chi è, le aree di intervento, il suo approccio e la formazione, con i contatti sempre a portata di mano.',
    problem: 'Spiegare temi delicati con calma e chiarezza, senza toni da vendita, e rendere semplice il primo contatto anche da smartphone.',
    objectives: [
      'Far capire subito chi è e come lavora',
      'Spiegare aree di intervento e modalità dei colloqui',
      'Rendere il contatto immediato, soprattutto da smartphone',
    ],
    solution: 'Una pagina divisa in sezioni chiare, con grandi immagini naturali, una tipografia elegante e pulsanti di contatto discreti ma sempre visibili. Da smartphone si scrive alla dottoressa con un tocco.',
    features: ['Navigazione a sezioni', 'Aree di intervento espandibili', 'Contatti WhatsApp, email e Instagram', 'Informative privacy e cookie'],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Sviluppo responsive', 'Configurazione SEO iniziale'],
    technologies: [],
    desktopImages: ['/projects/federica-fadel-desktop.png', '/projects/federica-fadel-detail.png'],
    mobileImages: ['/projects/federica-fadel-mobile.png'],
    externalUrl: 'https://fadelfederica.com/',
    featured: true,
    order: 1,
    theme: 'moss',
    categories: ['professionisti'],
    typeLabel: 'Sito professionale',
  },
  {
    id: 'real-002',
    slug: 'andrea-appierto',
    title: 'Andrea Appierto',
    kind: 'real',
    status: 'online',
    sector: 'Psicologia e sport',
    year: 'Online nel 2026',
    shortDescription: 'Sito per uno psicologo a Padova e online: tre aree di lavoro ben separate e contatto sempre a portata di mano.',
    fullDescription: 'Sito professionale per il Dott. Andrea Appierto, psicologo a Padova e online. Supporto psicologico, psicologia dello sport e formazione hanno ognuno la propria pagina, e il contatto è sempre visibile.',
    problem: 'Presentare tre ambiti di lavoro diversi senza confondere chi visita il sito, e portarlo in pochi passaggi a richiedere un primo colloquio.',
    objectives: [
      'Far distinguere al primo sguardo le tre aree di lavoro',
      'Trasmettere serietà e affidabilità',
      'Rendere facile informarsi e scrivere da smartphone',
    ],
    solution: 'Colori luminosi con un verde profondo, impaginazione asimmetrica e titoli netti. Ogni area di lavoro ha il suo percorso, mentre contatti e informazioni pratiche restano sempre facili da trovare.',
    features: ['Pagine dedicate alle aree di intervento', 'Curriculum professionale', 'Contatti WhatsApp, email e LinkedIn', 'Informative privacy e cookie'],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Sviluppo responsive', 'Configurazione SEO iniziale'],
    technologies: [],
    desktopImages: ['/projects/andrea-appierto-desktop.png', '/projects/andrea-appierto-detail.png'],
    mobileImages: ['/projects/andrea-appierto-mobile.png'],
    externalUrl: 'https://andreaappierto.com/',
    featured: true,
    order: 2,
    theme: 'sage',
    categories: ['professionisti', 'sport'],
    typeLabel: 'Sito professionale',
  },
  {
    id: 'demo-001',
    slug: 'casa-lume-boutique',
    title: 'Casa Lume — Boutique Rooms',
    kind: 'demo',
    status: 'concept',
    sector: 'Hospitality · Trieste',
    year: 'Demo 2026',
    shortDescription: 'Demo per un affittacamere a Trieste: camere, servizi, posizione e prenotazione diretta dal sito, senza passare dai portali.',
    fullDescription: 'Demo interattiva per Casa Lume, boutique rooms a Trieste. Mostra tre camere, i servizi inclusi, l’accoglienza e la posizione, con un percorso completo per controllare la disponibilità e prenotare direttamente.',
    problem: 'Mostrare come una piccola struttura può avere un sito tutto suo, curato quanto quello di un hotel, e ricevere richieste di soggiorno dirette.',
    objectives: ['Far venire voglia di soggiornare', 'Rendere chiari servizi e posizione', 'Portare a prenotare direttamente dal sito'],
    solution: 'Immagini grandi e luminose, una scheda dettagliata per ogni camera, un modulo per la disponibilità e un’area riservata per il gestore.',
    features: ['Presentazione di tre camere', 'Ricerca disponibilità', 'Prenotazione diretta', 'Servizi, posizione e area gestore'],
    services: ['Direzione visiva demo', 'Progettazione UX/UI', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/casa-lume-boutique-desktop.png'],
    mobileImages: [],
    externalUrl: 'https://democamere.netlify.app/',
    featured: true,
    order: 3,
    theme: 'sand',
    categories: ['hospitality'],
    typeLabel: 'Affittacamere · Boutique rooms',
    scenarioLabel: 'Demo interattiva · Boutique rooms a Trieste',
  },
  {
    id: 'demo-002',
    slug: 'casa-lume-dimora',
    title: 'Casa Lume — Dimora triestina',
    kind: 'demo',
    status: 'concept',
    sector: 'Hospitality · Trieste',
    year: 'Demo 2026',
    shortDescription: 'Seconda versione di Casa Lume, più calda e legata a Trieste: pietra carsica, bora e Adriatico, con camere e prenotazione diretta.',
    fullDescription: 'Demo interattiva per una dimora nel quartiere di Cavana, raccontata attraverso materiali locali, storia della casa e legame con Trieste. Include camere, dotazioni, posizione e verifica della disponibilità.',
    problem: 'Far emergere il carattere di una casa triestina senza perdere di vista le informazioni pratiche che servono a chi prenota.',
    objectives: ['Raccontare la casa e il territorio', 'Mostrare camere e dotazioni', 'Rendere semplice prenotare'],
    solution: 'Colori caldi, fotografie immersive e richiami a Carso, bora e Adriatico, insieme alle schede delle camere e alla prenotazione diretta.',
    features: ['Racconto del territorio', 'Presentazione delle camere', 'Ricerca disponibilità', 'Servizi, posizione e area gestore'],
    services: ['Direzione visiva demo', 'Progettazione UX/UI', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/casa-lume-dimora-desktop.png'],
    mobileImages: [],
    externalUrl: 'https://democamere2.netlify.app/',
    featured: true,
    order: 4,
    theme: 'clay',
    categories: ['hospitality'],
    typeLabel: 'Affittacamere · Dimora territoriale',
    scenarioLabel: 'Demo interattiva · Dimora triestina a Cavana',
  },
  {
    id: 'demo-003',
    slug: 'studio-legale-aurea',
    title: 'Studio Legale Aurea',
    kind: 'demo',
    status: 'concept',
    sector: 'Studio legale',
    year: 'Demo 2026',
    shortDescription: 'Demo per uno studio legale: aree di attività, prenotazione della consulenza e un assistente che guida il cliente al primo contatto.',
    fullDescription: 'Demo interattiva per uno studio legale moderno. Presenta lo studio, le aree di attività e il metodo di lavoro, con un assistente guidato e un modulo per richiedere una consulenza.',
    problem: 'Trasmettere competenza e riservatezza con parole semplici, e aiutare chi ha un problema legale a capire subito se lo studio fa per lui.',
    objectives: ['Spiegare con chiarezza di cosa si occupa lo studio', 'Raccontare come lavora', 'Ricevere richieste già complete delle informazioni utili'],
    solution: 'Un aspetto serio ma moderno, sezioni ampie e ordinate, un assistente che fa le domande giuste e un percorso guidato per prenotare.',
    features: ['Aree di attività', 'Metodo professionale', 'Assistente guidato interattivo', 'Prenotazione consulenza e contatti'],
    services: ['Direzione visiva demo', 'Progettazione UX/UI', 'Sviluppo interazioni'],
    technologies: [],
    desktopImages: ['/projects/studio-legale-aurea-desktop.png'],
    mobileImages: [],
    externalUrl: 'https://demostudiolegale.netlify.app/',
    featured: true,
    order: 5,
    theme: 'ink',
    categories: ['professionisti'],
    typeLabel: 'Sito professionale per studio legale',
    scenarioLabel: 'Demo interattiva · Studio legale',
  },
  {
    id: 'demo-004',
    slug: 'studio-nutrizione',
    title: 'Studio di Nutrizione',
    kind: 'demo',
    status: 'concept',
    sector: 'Nutrizione',
    year: 'Demo 2026',
    shortDescription: 'Demo per un nutrizionista: profilo, percorsi e prenotazione della prima consulenza in pochi passaggi.',
    fullDescription: 'Demo interattiva per uno studio di nutrizione: presenta il professionista e spiega in modo semplice servizi, educazione alimentare, controlli e percorsi personalizzati.',
    problem: 'Trasmettere competenza e vicinanza, spiegare i servizi senza sommergere di informazioni e rendere facile prenotare una consulenza.',
    objectives: ['Far capire come lavora il professionista', 'Mettere in ordine percorsi e servizi', 'Ricevere richieste di consulenza'],
    solution: 'Colori freschi, schede facili da leggere, pulsanti ben visibili e un modulo per il primo contatto.',
    features: ['Profilo professionale', 'Percorsi e servizi nutrizionali', 'Richiesta di consulenza', 'Contatti diretti'],
    services: ['Direzione visiva demo', 'Progettazione UX/UI', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/studio-nutrizione-desktop.png'],
    mobileImages: [],
    externalUrl: 'https://demo-nutrizionisti.netlify.app/',
    featured: true,
    order: 6,
    theme: 'sky',
    categories: ['professionisti'],
    typeLabel: 'Sito professionale per nutrizionisti',
    scenarioLabel: 'Demo interattiva · Studio di nutrizione',
  },
  {
    id: 'demo-005',
    slug: 'professionista-editoriale',
    title: 'Professionista Editoriale',
    kind: 'demo',
    status: 'concept',
    sector: 'Professionisti indipendenti',
    year: 'Demo 2026',
    shortDescription: 'Demo per un professionista che vuole un sito con più personalità: profilo, attività e appuntamenti in un’impaginazione originale.',
    fullDescription: 'Demo interattiva per chi non vuole il solito sito istituzionale. Mette al centro il ritratto, il profilo e le attività, e porta in modo naturale a fissare un appuntamento.',
    problem: 'Dare a un professionista un sito elegante e riconoscibile, che si adatta a servizi diversi e non sembra un template.',
    objectives: ['Far emergere personalità e credibilità', 'Spiegare attività e modalità di incontro', 'Portare con naturalezza al contatto'],
    solution: 'Impaginazione asimmetrica, caratteri eleganti, colori caldi, molto respiro e inviti al contatto inseriti nel racconto.',
    features: ['Profilo editoriale', 'Presentazione delle attività', 'Percorso di appuntamento', 'Contatti e modulo dimostrativo'],
    services: ['Direzione visiva demo', 'Progettazione UX/UI', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/professionista-editoriale-desktop.png'],
    mobileImages: [],
    externalUrl: 'https://demo-professionisti.netlify.app/',
    featured: true,
    order: 7,
    theme: 'wine',
    categories: ['professionisti'],
    typeLabel: 'Sito editoriale per professionisti',
    scenarioLabel: 'Demo interattiva · Professionista indipendente',
  },
] satisfies Project[]).sort((a, b) => a.order - b.order);

export const publishedProjects = projects.filter((project) => project.kind === 'real');
export const demoProjects = projects.filter((project) => project.kind !== 'real');

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
