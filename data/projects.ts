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
    shortDescription: 'Una presenza digitale raccolta e autorevole, costruita attorno all’ascolto e alla relazione.',
    fullDescription: 'Sito professionale per la Dott.ssa Federica Fadel, psicologa a Trieste. Il progetto presenta il profilo, le aree di intervento, l’approccio, gli studi e i canali di contatto in un percorso visivo coerente e misurato.',
    problem: 'Dare ordine a informazioni professionali delicate e aiutare chi visita il sito a orientarsi con calma, senza sovraccarico e senza un tono commerciale invadente.',
    objectives: [
      'Presentare con chiarezza profilo e approccio',
      'Rendere accessibili aree di intervento e modalità di consulto',
      'Offrire canali di contatto immediati anche da smartphone',
    ],
    solution: 'Una pagina editoriale scandita da sezioni tematiche, grandi immagini naturali, tipografia elegante e call to action discrete. La versione mobile conserva gerarchia e leggibilità con un accesso rapido al contatto.',
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
    shortDescription: 'Un sito chiaro e misurato che organizza profilo, aree di intervento e contatto.',
    fullDescription: 'Sito professionale per il Dott. Andrea Appierto, psicologo a Padova e online. La struttura distingue supporto psicologico, psicologia dello sport e formazione, mantenendo sempre visibile la possibilità di contatto.',
    problem: 'Raccontare competenze trasversali senza frammentare l’esperienza e rendere semplice il passaggio dall’informazione a un primo colloquio.',
    objectives: [
      'Distinguere con immediatezza le tre aree professionali',
      'Costruire una presenza personale sobria e affidabile',
      'Ottimizzare consultazione e contatto da mobile',
    ],
    solution: 'Un sistema visivo luminoso, con verde profondo, composizione asimmetrica e gerarchie nette. Le aree di attività sono presentate come percorsi separati, mentre contatti e informazioni pratiche rimangono facili da raggiungere.',
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
    shortDescription: 'Una boutique room contemporanea raccontata attraverso luce, atmosfera e immagini immersive. Camere, servizi, posizione e prenotazione diretta accompagnano verso la richiesta di soggiorno.',
    fullDescription: 'Demo interattiva per Casa Lume, boutique rooms a Trieste. La homepage presenta tre camere, i servizi inclusi, l’esperienza di accoglienza e la posizione, con un percorso completo per verificare la disponibilità e avviare una prenotazione diretta.',
    problem: 'Mostrare come una piccola struttura ricettiva possa costruire una presenza proprietaria contemporanea e trasformare la scoperta delle camere in una richiesta di soggiorno semplice.',
    objectives: ['Valorizzare camere e atmosfera', 'Rendere leggibili servizi e posizione', 'Facilitare disponibilità e prenotazione diretta'],
    solution: 'Un impianto editoriale luminoso con immagini ampie, schede camera dettagliate, form disponibilità e accesso dimostrativo all’area gestore.',
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
    shortDescription: 'Una declinazione materica e territoriale dell’ospitalità triestina, ispirata a pietra carsica, bora e Adriatico. Il racconto della casa si unisce a camere, servizi e prenotazione diretta.',
    fullDescription: 'Demo interattiva per una dimora nel quartiere di Cavana, costruita attorno a materiali locali, storia della casa e rapporto con Trieste. La struttura integra camere, dotazioni, posizione e verifica della disponibilità.',
    problem: 'Tradurre il carattere rustico contemporaneo di una dimora triestina in un’esperienza digitale riconoscibile, senza perdere chiarezza nelle informazioni utili al soggiorno.',
    objectives: ['Raccontare atmosfera e territorio', 'Mostrare camere e dotazioni', 'Semplificare la richiesta di soggiorno'],
    solution: 'Una composizione calda e materica con fotografie immersive, riferimenti a Carso, bora e Adriatico, schede camera e prenotazione diretta.',
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
    shortDescription: 'Un’esperienza autorevole e contemporanea per presentare studio, aree di attività e metodo. Prenotazione della consulenza e assistente guidato rendono il primo contatto più ordinato.',
    fullDescription: 'Demo interattiva per uno studio legale moderno. La pagina organizza profilo, aree di attività e metodo, affiancandoli a un assistente guidato e a un modulo dimostrativo per richiedere una consulenza.',
    problem: 'Comunicare competenza e riservatezza con un linguaggio accessibile, aiutando il visitatore a orientarsi prima della richiesta di appuntamento.',
    objectives: ['Presentare le aree di attività con chiarezza', 'Spiegare il metodo dello studio', 'Qualificare e semplificare il primo contatto'],
    solution: 'Un’interfaccia istituzionale e contemporanea con sezioni ampie, gerarchie nette, assistente interattivo e percorso di prenotazione strutturato.',
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
    shortDescription: 'Una presenza luminosa e rassicurante per raccontare profilo, percorsi nutrizionali e metodo professionale. Servizi, prenotazione e contatti accompagnano con chiarezza verso una prima consulenza.',
    fullDescription: 'Demo interattiva per uno studio di nutrizione, pensata per valorizzare il profilo professionale e rendere comprensibili servizi, educazione alimentare, controlli e percorsi personalizzati.',
    problem: 'Trasmettere competenza e vicinanza in un ambito sanitario, organizzando l’offerta senza sovraccaricare il visitatore e facilitando la richiesta di consulenza.',
    objectives: ['Presentare il metodo con autorevolezza', 'Organizzare i percorsi nutrizionali', 'Favorire richieste di contatto qualificate'],
    solution: 'Un sistema visivo fresco e controllato con card leggibili, inviti all’azione evidenti e un modulo dimostrativo per il primo contatto.',
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
    shortDescription: 'Un concept editoriale, caldo e asimmetrico per un professionista indipendente. Profilo, attività, modalità di incontro e contatti costruiscono una presenza più narrativa e distintiva.',
    fullDescription: 'Demo interattiva per mostrare una direzione meno istituzionale e più autoriale. La composizione valorizza il ritratto, il profilo, le attività e il percorso verso appuntamento e contatto.',
    problem: 'Offrire a un professionista una presenza digitale elegante e riconoscibile, capace di adattarsi a servizi diversi senza assumere l’aspetto di un template standard.',
    objectives: ['Far emergere personalità e credibilità', 'Presentare attività e modalità di incontro', 'Guidare con chiarezza verso il contatto'],
    solution: 'Un layout narrativo e asimmetrico con tipografia serif, palette calda, grandi spazi e call to action integrate nel racconto.',
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
