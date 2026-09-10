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
  online: 'Progetto reale · Online',
  concept: 'Concept demo',
  'in-development': 'In sviluppo',
};

export const kindLabels: Record<ProjectKind, string> = {
  real: 'Lavoro reale',
  demo: 'Demo',
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
    slug: 'casa-mira',
    title: 'Casa Mira',
    kind: 'demo',
    status: 'concept',
    sector: 'Hospitality',
    year: 'Concept 2026',
    shortDescription: 'Affittacamere contemporaneo, minimale e orientato alla prenotazione diretta.',
    fullDescription: 'Concept per una piccola struttura ricettiva che desidera presentare camere, atmosfera e informazioni essenziali con un’identità contemporanea.',
    problem: 'Scenario ipotetico: ridurre la dipendenza da pagine generiche dei portali e creare un punto di contatto proprietario semplice da consultare.',
    objectives: ['Valorizzare gli spazi', 'Chiarire servizi e posizione', 'Portare alla richiesta di disponibilità'],
    solution: 'Una vetrina essenziale con galleria immersiva, schede camera, servizi, mappa e richiesta disponibilità in primo piano.',
    features: ['Galleria camere', 'Richiesta disponibilità', 'Mappa e servizi', 'Contatto rapido'],
    services: ['Concept UX/UI', 'Prototipo responsive'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: true,
    order: 3,
    theme: 'sand',
    categories: ['hospitality'],
    typeLabel: 'Demo affittacamere minimale',
    scenarioLabel: 'Scenario ipotetico · Affittacamere indipendente',
    possibleCustomizations: ['Motore di prenotazione', 'Multilingua', 'Sincronizzazione calendari'],
  },
  {
    id: 'demo-002',
    slug: 'riva-14',
    title: 'Riva 14',
    kind: 'demo',
    status: 'concept',
    sector: 'Hospitality · Trieste',
    year: 'Concept 2026',
    shortDescription: 'Un racconto caldo e materico per un’ospitalità ispirata al Carso e al mare.',
    fullDescription: 'Concept per un affittacamere triestino dal carattere rustico contemporaneo, pensato per legare gli interni al territorio.',
    problem: 'Scenario ipotetico: trasformare un alloggio con forte personalità in un’esperienza digitale coerente e riconoscibile.',
    objectives: ['Raccontare atmosfera e territorio', 'Mostrare camere e dotazioni', 'Semplificare la richiesta di soggiorno'],
    solution: 'Layout editoriale, palette minerale e dettagli narrativi dedicati a quartiere, consigli locali e accoglienza.',
    features: ['Racconto del territorio', 'Camere e dotazioni', 'Guida locale', 'Richiesta soggiorno'],
    services: ['Concept UX/UI', 'Prototipo responsive'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: false,
    order: 4,
    theme: 'clay',
    categories: ['hospitality'],
    typeLabel: 'Demo affittacamere rustica',
    scenarioLabel: 'Scenario ipotetico · Ospitalità a Trieste',
    possibleCustomizations: ['Calendario disponibilità', 'Newsletter', 'Itinerari personalizzati'],
  },
  {
    id: 'demo-003',
    slug: 'stayflow',
    title: 'Stayflow',
    kind: 'demo',
    status: 'in-development',
    sector: 'Hospitality · Strumento digitale',
    year: 'In sviluppo',
    shortDescription: 'Prenotazione immediata e area gestore in un unico flusso dimostrativo.',
    fullDescription: 'Prototipo in sviluppo per mostrare come sito pubblico e piccola area gestionale possano lavorare insieme.',
    problem: 'Scenario ipotetico: raccogliere prenotazioni dirette e gestire disponibilità e richieste senza moltiplicare gli strumenti.',
    objectives: ['Ridurre i passaggi nella prenotazione', 'Centralizzare richieste e disponibilità', 'Offrire un pannello semplice al gestore'],
    solution: 'Un flusso di prenotazione compatto collegato a un’area riservata con calendario, richieste e stato degli alloggi.',
    features: ['Prenotazione diretta', 'Calendario', 'Area gestore', 'Gestione richieste'],
    services: ['Progettazione prodotto', 'Sviluppo prototipo'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: true,
    order: 5,
    theme: 'sky',
    categories: ['hospitality', 'strumenti-digitali'],
    typeLabel: 'Demo prenotazione e area gestore',
    scenarioLabel: 'Scenario ipotetico · Piccola struttura ricettiva',
    possibleCustomizations: ['Pagamenti online', 'Channel manager', 'Messaggi automatici'],
  },
  {
    id: 'internal-001',
    slug: 'turno',
    title: 'Turno',
    kind: 'internal',
    status: 'in-development',
    sector: 'Hospitality · Operations',
    year: 'In sviluppo',
    shortDescription: 'Un piccolo strumento per coordinare pulizie, alloggi e cambi ospite.',
    fullDescription: 'Progetto interno in sviluppo dedicato alla gestione operativa delle pulizie per piccole strutture e property manager.',
    problem: 'Scenario ipotetico: sostituire chat sparse e fogli condivisi con una vista unica dei cambi e delle attività da completare.',
    objectives: ['Assegnare i turni', 'Vedere priorità e stato', 'Ridurre incomprensioni operative'],
    solution: 'Una dashboard essenziale, pensata prima per smartphone, con calendario, checklist e aggiornamenti di stato.',
    features: ['Pianificazione turni', 'Checklist per alloggio', 'Stati di avanzamento', 'Vista mobile'],
    services: ['Product design', 'Sviluppo web app'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: true,
    order: 6,
    theme: 'wine',
    categories: ['hospitality', 'strumenti-digitali'],
    typeLabel: 'Strumento gestione pulizie',
    scenarioLabel: 'Progetto interno · Gestione operativa',
    possibleCustomizations: ['Notifiche', 'Ruoli e permessi', 'Report anomalie'],
  },
  {
    id: 'demo-004',
    slug: 'legame',
    title: 'Legame',
    kind: 'demo',
    status: 'concept',
    sector: 'Professionista cinofila',
    year: 'Concept 2026',
    shortDescription: 'Percorsi, approccio e contatto per un’addestratrice cinofila indipendente.',
    fullDescription: 'Concept per una professionista del mondo animale che lavora con percorsi individuali e attività di gruppo.',
    problem: 'Scenario ipotetico: spiegare un metodo personale e aiutare le persone a scegliere il percorso più adatto per il proprio cane.',
    objectives: ['Comunicare metodo e valori', 'Organizzare i percorsi', 'Facilitare una prima richiesta'],
    solution: 'Una presenza calda ma rigorosa con percorsi chiari, calendario attività e un questionario iniziale.',
    features: ['Schede percorso', 'Calendario attività', 'Questionario iniziale', 'FAQ'],
    services: ['Concept UX/UI', 'Prototipo responsive'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: true,
    order: 7,
    theme: 'moss',
    categories: ['professionisti'],
    typeLabel: 'Demo professionista cinofila',
    scenarioLabel: 'Scenario ipotetico · Professionista del mondo animale',
    possibleCustomizations: ['Prenotazioni lezioni', 'Area materiali', 'Pagamenti'],
  },
  {
    id: 'demo-005',
    slug: 'quadro',
    title: 'Quadro',
    kind: 'demo',
    status: 'concept',
    sector: 'Studio commercialista',
    year: 'Pianificato',
    shortDescription: 'Concept pianificato per uno studio che vuole rendere servizi e scadenze più comprensibili.',
    fullDescription: 'Scheda predisposta per una futura demo dedicata a commercialisti e studi di consulenza.',
    problem: 'Scenario ipotetico da approfondire in fase di concept.',
    objectives: ['Presentare i servizi', 'Organizzare risorse utili', 'Semplificare il contatto'],
    solution: 'Direzione da definire: la demo non è ancora disponibile.',
    features: ['Area servizi', 'Scadenze', 'Risorse', 'Contatto'],
    services: ['Concept pianificato'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: false,
    order: 8,
    theme: 'ink',
    categories: ['professionisti'],
    typeLabel: 'Demo futura per commercialisti',
    scenarioLabel: 'Bozza non pubblicata',
  },
  {
    id: 'demo-006',
    slug: 'voce-chiara',
    title: 'Voce Chiara',
    kind: 'demo',
    status: 'concept',
    sector: 'Logopedia',
    year: 'Pianificato',
    shortDescription: 'Concept pianificato per presentare percorsi logopedici con semplicità e sensibilità.',
    fullDescription: 'Scheda predisposta per una futura demo dedicata a logopedisti e professionisti sanitari.',
    problem: 'Scenario ipotetico da approfondire in fase di concept.',
    objectives: ['Orientare famiglie e adulti', 'Presentare i percorsi', 'Rendere semplice il primo contatto'],
    solution: 'Direzione da definire: la demo non è ancora disponibile.',
    features: ['Aree di intervento', 'Percorsi', 'FAQ', 'Contatto'],
    services: ['Concept pianificato'],
    technologies: [],
    desktopImages: [],
    mobileImages: [],
    featured: false,
    order: 9,
    theme: 'sage',
    categories: ['professionisti'],
    typeLabel: 'Demo futura per logopedisti',
    scenarioLabel: 'Bozza non pubblicata',
  },
] satisfies Project[]).sort((a, b) => a.order - b.order);

export const realProjects = projects.filter((project) => project.kind === 'real');
export const demoProjects = projects.filter((project) => project.kind !== 'real');

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
