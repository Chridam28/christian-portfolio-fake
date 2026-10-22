export type ProjectKind = 'real' | 'demo' | 'internal';
export type ProjectStatus = 'online' | 'concept' | 'in-development';
export type ProjectCategory =
  | 'professionisti'
  | 'hospitality'
  | 'sport'
  | 'strumenti-digitali';

export type ProjectHighlight = { title: string; text: string };

export type ProjectTestimonial = {
  quote: string;
  author: string;
  role: string;
  /** true = testo provvisorio, da sostituire con la testimonianza reale prima della pubblicazione */
  placeholder?: boolean;
};

export type ProjectVariant = {
  label: string;
  title: string;
  description: string;
  image: string;
  externalUrl: string;
  features: string[];
};

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
  solutionTitle: string;
  solution: string;
  features: string[];
  highlights: ProjectHighlight[];
  services: string[];
  technologies: string[];
  desktopImages: string[];
  mobileImages: string[];
  galleryTitle?: string;
  mobileTitle?: string;
  mobileText?: string;
  externalUrl?: string;
  featured: boolean;
  order: number;
  theme: 'moss' | 'sage' | 'clay' | 'sand' | 'sky' | 'wine' | 'ink';
  testimonial?: ProjectTestimonial;
  variant?: ProjectVariant;
  categories: ProjectCategory[];
  typeLabel: string;
  scenarioLabel?: string;
  possibleCustomizations?: string[];
};

export const statusLabels: Record<ProjectStatus, string> = {
  online: 'Online',
  concept: 'Demo navigabile',
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
    shortDescription: 'Sito per una psicologa a Trieste e Conegliano: chi è, come lavora e contatto diretto su WhatsApp in un tocco.',
    fullDescription: 'Sito one page per la Dott.ssa Federica Fadel, psicologa specializzata in psicoterapia psicoanalitica, che riceve a Trieste e a Conegliano. Racconta il suo percorso, i motivi per cui ci si può rivolgere a lei, il suo approccio e come si svolgono i colloqui, in studio e online.',
    problem: 'Federica voleva un sito che somigliasse al suo modo di lavorare: calmo, accogliente, senza toni da vendita. Chi arriva sta spesso attraversando un momento difficile e deve capire in pochi secondi se può fidarsi e come fare il primo passo.',
    objectives: [
      'Far capire subito chi è e come lavora',
      'Spiegare motivi di consultazione e modalità dei colloqui',
      'Rendere il primo contatto semplice, soprattutto da smartphone',
    ],
    solutionTitle: 'Una pagina che si legge con calma.',
    solution: 'Un’unica pagina divisa in tappe: chi è, i motivi di consultazione, l’approccio, lo studio e il contatto. Le foto di boschi e luce naturale danno respiro, i testi lunghi si aprono solo per chi vuole approfondire e il pulsante «Prenota un colloquio» resta sempre a portata di mano, senza mai essere invadente.',
    features: [
      'Cinque motivi di consultazione con approfondimento',
      'Colloqui in italiano, inglese e tedesco',
      'Due studi, Trieste e Conegliano, più colloqui online',
      'Contatto diretto su WhatsApp, email e Instagram',
    ],
    highlights: [
      { title: 'Approfondisce solo chi vuole', text: 'Ogni sezione mostra prima l’essenziale. «Leggi di più» apre percorso, formazione e approccio, così la pagina resta leggera per chi cerca solo come contattarla.' },
      { title: 'Due studi, zero dubbi', text: 'Trieste, in via Valdirivo, e Conegliano con indirizzi e indicazioni pratiche, più la possibilità di colloqui online dopo il primo incontro in presenza.' },
      { title: 'Nessun banner cookie', text: 'Niente analytics né profilazione: chi visita il sito non viene accolto da un pop-up e i suoi dati restano suoi. Un dettaglio che, per una psicologa, conta.' },
    ],
    services: ['Direzione visiva', 'Testi organizzati per sezioni', 'Sviluppo responsive', 'SEO iniziale', 'Privacy e cookie'],
    technologies: [],
    desktopImages: ['/projects/federica-fadel-desktop.webp', '/projects/federica-fadel-detail.webp'],
    mobileImages: ['/projects/federica-fadel-mobile.webp'],
    galleryTitle: 'L’approccio e lo studio, raccontati senza fretta.',
    mobileTitle: 'Il primo passo, da telefono.',
    mobileText: 'Molte persone cercano uno psicologo dal telefono, spesso la sera. Da smartphone il menu si riduce all’essenziale e WhatsApp è a un tocco: scrivere un messaggio è più facile che fare una telefonata.',
    externalUrl: 'https://fadelfederica.com/',
    featured: true,
    order: 1,
    theme: 'moss',
    testimonial: {
      quote: 'Avevo paura di un sito freddo, da clinica. Christian ha capito al primo incontro il tono che cercavo e me l’ha restituito in ogni dettaglio. Chi mi scrive oggi mi dice che si è sentito accolto già leggendo la pagina. E quando devo cambiare qualcosa gli mando un messaggio: è fatto in giornata.',
      author: 'Dott.ssa Federica Fadel',
      role: 'Psicologa, Trieste e Conegliano',
      placeholder: true,
    },
    categories: ['professionisti'],
    typeLabel: 'Sito one page',
  },
  {
    id: 'real-002',
    slug: 'andrea-appierto',
    title: 'Andrea Appierto',
    kind: 'real',
    status: 'online',
    sector: 'Psicologia e sport',
    year: 'Online nel 2026',
    shortDescription: 'Sito per uno psicologo a Padova e online: clinica, sport e formazione ben separati e primo colloquio a un clic.',
    fullDescription: 'Sito per il Dott. Andrea Appierto, psicologo, psicoterapeuta in formazione e psicologo dello sport, con studio a Padova e sedute online. Home, pagina sulle aree di intervento, curriculum e contatti, con lo studio su Google Maps e gli orari sempre visibili.',
    problem: 'Andrea lavora con adolescenti, adulti, atleti e professionisti, su tre fronti diversi: supporto psicologico, psicologia dello sport e formazione. Serviva un sito che non mescolasse tutto e portasse ognuno, in pochi passaggi, alla parte che lo riguarda.',
    objectives: [
      'Far distinguere al primo sguardo le tre aree di lavoro',
      'Trasmettere serietà con un curriculum consultabile',
      'Rendere facile scrivere o arrivare in studio',
    ],
    solutionTitle: 'Tre strade chiare, un solo contatto.',
    solution: 'In home tre schede con icone disegnate presentano le tre aree, ognuna con il suo approfondimento nella pagina dedicata. Il curriculum ha una pagina sua per chi vuole verificare la formazione. Contatti, indirizzo dello studio, orari e WhatsApp con messaggio già scritto sono raccolti in un unico punto, raggiungibile da ogni pagina.',
    features: [
      'Tre aree con approfondimento dedicato',
      'Pagina curriculum',
      'Studio su Google Maps e orari',
      'WhatsApp ed email con messaggio già pronto',
    ],
    highlights: [
      { title: 'Un professionista, tre pubblici', text: 'L’atleta trova subito psicologia dello sport e mental coaching, chi cerca aiuto il supporto psicologico, scuole e società la formazione. Nessuno deve leggere ciò che non gli serve.' },
      { title: 'Messaggi già scritti', text: 'WhatsApp ed email si aprono con un testo pronto: a chi vuole un primo colloquio basta premere invio. Meno passaggi, più contatti.' },
      { title: 'Tutto per arrivare in studio', text: 'Indirizzo in Piazza de Gasperi con link a Google Maps, orari dal lunedì al venerdì, telefono, Instagram e LinkedIn nello stesso blocco.' },
    ],
    services: ['Direzione visiva', 'Architettura delle pagine', 'Sviluppo responsive', 'SEO iniziale', 'Privacy e cookie'],
    technologies: [],
    desktopImages: ['/projects/andrea-appierto-desktop.webp', '/projects/andrea-appierto-detail.webp'],
    mobileImages: ['/projects/andrea-appierto-mobile.webp'],
    galleryTitle: 'Le tre aree di lavoro, fianco a fianco.',
    mobileTitle: 'Dal telefono al primo colloquio.',
    mobileText: 'Menu compatto, schede leggibili e un pulsante «Contattami» sempre visibile in basso: da smartphone si arriva a scrivere ad Andrea in pochi tocchi.',
    externalUrl: 'https://andreaappierto.com/',
    featured: true,
    order: 2,
    theme: 'sage',
    testimonial: {
      quote: 'Mi occupo di tre cose molto diverse e temevo un sito confuso. Christian le ha messe in fila in modo semplice e pulito: ora chi mi contatta arriva sapendo già quale percorso gli interessa. Sempre disponibile, veloce e chiaro su tempi e costi fin dal primo giorno.',
      author: 'Dott. Andrea Appierto',
      role: 'Psicologo e psicologo dello sport, Padova',
      placeholder: true,
    },
    categories: ['professionisti', 'sport'],
    typeLabel: 'Sito multipagina',
  },
  {
    id: 'real-003',
    slug: 'college-life-italia',
    title: 'College Life Italia',
    kind: 'real',
    status: 'online',
    sector: 'Sport e college USA',
    year: 'Online nel 2026',
    shortDescription: 'Piattaforma in inglese per gli allenatori dei college americani: roster di atleti italiani con filtri, schede, video e confronto.',
    fullDescription: 'Sito su misura per College Life Italia, che dal 2013 accompagna studenti-atleti italiani verso college e università negli Stati Uniti. È pensato per gli allenatori americani: sfogliano i roster di basket, nuoto e pallavolo, aprono la scheda di ogni atleta, guardano i video, salvano e confrontano i profili e contattano direttamente il manager dello sport.',
    problem: 'Gli allenatori dei college ricevono ogni giorno decine di profili. Serviva uno strumento che facesse risparmiare loro tempo: trovare in pochi clic gli atleti giusti per ruolo, livello e disponibilità, e arrivare subito alla persona che può rispondere.',
    objectives: [
      'Far trovare agli allenatori l’atleta giusto in pochi clic',
      'Presentare ogni atleta con dati e video verificabili',
      'Portare le richieste direttamente al manager dello sport',
    ],
    solutionTitle: 'Un roster che si usa come uno strumento di lavoro.',
    solution: 'Il cuore del sito è il roster: si sceglie la squadra, maschile o femminile, per sport, poi si filtra per ruolo, livello previsto negli Stati Uniti e disponibilità, si cerca per nome e si passa dalla vista a schede a quella a elenco. Ogni atleta ha una pagina con dati sportivi e accademici, valutazioni dei titoli di studio e video. Gli allenatori salvano i profili, ne confrontano fino a tre e inviano una richiesta che arriva al manager giusto.',
    features: [
      'Roster filtrabile per ruolo, livello e disponibilità',
      'Pagina atleta con dati, valutazioni e video',
      'Salva e confronta fino a tre atleti',
      'Richieste smistate per sport al manager giusto',
    ],
    highlights: [
      { title: 'Filtri pensati per i coach', text: 'Ruolo, livello previsto negli USA, stato (disponibile, impegnato, in corso), ricerca per nome e ordinamento: si arriva al profilo giusto senza scorrere decine di schede.' },
      { title: 'Salva e confronta', text: 'Gli allenatori salvano gli atleti che li interessano e ne mettono fino a tre dello stesso roster fianco a fianco. Salvati e Confronta restano sempre a portata, anche da telefono.' },
      { title: 'Video che rispettano la privacy', text: 'I filmati di YouTube, highlight e partita intera, si caricano solo quando l’allenatore lo chiede, con un avviso chiaro: nessun dato inviato a Google senza una scelta esplicita.' },
      { title: 'Richieste già ordinate', text: 'Il modulo «Tell Us Your Roster Needs» raccoglie sport, ruolo, livello e requisiti accademici e sportivi. La richiesta arriva al manager dello sport ed è archiviata anche in un foglio interno.' },
      { title: 'Contatti a un tocco', text: 'Una pagina per i coach con il manager di ogni sport: salvataggio del contatto in rubrica, WhatsApp ed email con messaggio già scritto per l’atleta o il roster che si sta guardando.' },
      { title: 'Risultati che si vedono', text: 'La pagina Track Record mostra i collocamenti selezionati per sport, con le università di destinazione, e i numeri dell’agenzia dal 2013 a oggi.' },
    ],
    services: ['Progettazione UX/UI', 'Sviluppo su misura', 'Filtri, preferiti e confronto', 'Moduli e smistamento richieste', 'Privacy e cookie'],
    technologies: [],
    desktopImages: ['/projects/college-life-italia-desktop.webp', '/projects/college-life-italia-detail.webp'],
    mobileImages: ['/projects/college-life-italia-mobile.webp'],
    galleryTitle: 'Il roster: filtri, schede e azioni rapide.',
    mobileTitle: 'Il roster in tasca.',
    mobileText: 'Molti allenatori guardano i profili in trasferta o tra un allenamento e l’altro. Da smartphone schede e video restano leggibili, e Salvati e Confronta sono fissi in basso, a portata di pollice.',
    externalUrl: 'https://rostercollegelifeitalia.com/',
    featured: true,
    order: 3,
    theme: 'ink',
    categories: ['sport', 'strumenti-digitali'],
    typeLabel: 'Piattaforma web su misura',
  },
  {
    id: 'demo-001',
    slug: 'casa-lume',
    title: 'Casa Lume',
    kind: 'demo',
    status: 'concept',
    sector: 'Hospitality · Trieste',
    year: 'Demo 2026',
    shortDescription: 'Demo per un affittacamere a Trieste: sito per gli ospiti con prenotazione diretta e gestionale per arrivi, calendario e tariffe. In due varianti grafiche.',
    fullDescription: 'Demo interattiva per Casa Lume, tre camere in un palazzo storico di Trieste. Gli ospiti scoprono camere, servizi e posizione e verificano la disponibilità; il gestore ha un’area riservata con gli arrivi del giorno, il calendario, le prenotazioni e le tariffe.',
    problem: 'Le piccole strutture dipendono dai portali e dalle loro commissioni. L’idea è mostrare come tre camere possano avere un sito tutto loro, curato come quello di un hotel, che porta prenotazioni dirette e si gestisce senza fatica.',
    objectives: ['Far venire voglia di soggiornare', 'Portare a prenotare direttamente dal sito', 'Semplificare la gestione quotidiana'],
    solutionTitle: 'Il sito per gli ospiti, il gestionale per te.',
    solution: 'Per gli ospiti: foto luminose, tre camere con metri quadri, letto e prezzo a notte, servizi, distanze a piedi da Piazza Unità e dalla stazione, e il modulo per date e ospiti subito sotto l’apertura. Per il gestore: una pagina «Oggi» con arrivi, partenze e camere da preparare, il calendario mensile, l’elenco prenotazioni con filtri e le impostazioni per conferme automatiche e notifiche email.',
    features: ['Tre camere con prezzo a notte', 'Verifica disponibilità e prenotazione diretta', 'Area gestore: arrivi, calendario, prenotazioni', 'Tariffe allineate tra gestionale e sito'],
    highlights: [
      { title: 'Prenotare al primo sguardo', text: 'Date e numero di ospiti si scelgono appena aperto il sito, con l’invito a prenotare direttamente alla tariffa migliore invece che sui portali.' },
      { title: 'La giornata in una schermata', text: 'Arrivi con orario, partenze e camere da preparare: il gestore apre l’area riservata e sa subito cosa lo aspetta.' },
      { title: 'Calendario sotto controllo', text: 'Prenotazioni dirette e manuali in colori diversi, blocco delle date e nuova prenotazione in un clic, anche per chi telefona.' },
    ],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Sito + area gestore', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/casa-lume-boutique-desktop.webp'],
    mobileImages: [],
    externalUrl: 'https://democamere.netlify.app/',
    featured: true,
    order: 4,
    theme: 'sand',
    variant: {
      label: 'Variante 02 · Dimora triestina',
      title: 'La stessa casa, un altro carattere.',
      description: 'Stessa struttura, stesse funzioni, racconto diverso: una casa di pietra nel quartiere di Cavana, costruita attorno a Carso, bora e Adriatico, con la storia di famiglia dei padroni di casa e, nell’area gestore, la pianificazione di pulizie e riassetti. Dimostra come lo stesso progetto possa cambiare tono per adattarsi alla tua struttura.',
      image: '/projects/casa-lume-dimora-desktop.webp',
      externalUrl: 'https://democamere2.netlify.app/',
      features: ['Racconto del territorio: Carso, bora, Adriatico', 'Storia dei padroni di casa con galleria', 'Pulizie e riassetti con piano settimanale', 'Calendario anche in vista elenco'],
    },
    categories: ['hospitality'],
    typeLabel: 'Affittacamere · Sito + gestionale',
    scenarioLabel: 'Demo interattiva · Boutique rooms a Trieste',
    possibleCustomizations: ['Numero di camere e foto', 'Lingue per gli ospiti stranieri', 'Email automatiche agli ospiti', 'Colori e stile della struttura'],
  },
  {
    id: 'demo-003',
    slug: 'studio-legale-aurea',
    title: 'Studio Legale Aurea',
    kind: 'demo',
    status: 'concept',
    sector: 'Studio legale',
    year: 'Demo 2026',
    shortDescription: 'Demo per uno studio legale: sei aree di attività, un assistente che orienta il cliente e una richiesta di consulenza che arriva già completa.',
    fullDescription: 'Demo interattiva per uno studio legale. Presenta lo studio, sei aree di attività (civile, lavoro, famiglia, impresa, immobiliare e stragiudiziale), un metodo in quattro passaggi e un assistente guidato che accompagna il visitatore fino al modulo di prenotazione.',
    problem: 'Chi cerca un avvocato spesso non sa nemmeno come si chiama il suo problema. E lo studio riceve telefonate ed email incomplete, che richiedono altri scambi prima di poter fissare un appuntamento.',
    objectives: ['Far riconoscere al cliente il proprio caso', 'Ricevere richieste già complete', 'Trasmettere serietà senza freddezza'],
    solutionTitle: 'Un assistente che fa le domande giuste.',
    solution: 'L’assistente chiede l’area di interesse, l’urgenza e come si preferisce essere ricontattati, poi precompila il modulo. Lì il cliente sceglie la modalità (in studio, videochiamata o telefono), la data e la fascia oraria, indica l’urgenza e descrive in breve la situazione. Allo studio arriva una richiesta già ordinata.',
    features: ['Sei aree di attività spiegate in chiaro', 'Assistente guidato con precompilazione', 'Appuntamento in studio, video o telefono', 'Urgenza e fascia oraria nella richiesta'],
    highlights: [
      { title: 'Parole semplici', text: 'Ogni area elenca casi concreti, come separazioni, licenziamenti, recupero crediti o locazioni, così il cliente si riconosce senza conoscere il linguaggio giuridico.' },
      { title: 'Meno telefonate inutili', text: 'Area, urgenza, modalità, data e descrizione arrivano insieme: lo studio sa di cosa si tratta prima ancora di richiamare.' },
      { title: 'Sempre a portata', text: 'Un piccolo assistente rapido resta disponibile in ogni punto della pagina, per chi decide di scrivere a metà lettura.' },
    ],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Assistente interattivo', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/studio-legale-aurea-desktop.webp'],
    mobileImages: [],
    externalUrl: 'https://demostudiolegale.netlify.app/',
    featured: true,
    order: 5,
    theme: 'ink',
    categories: ['professionisti'],
    typeLabel: 'Sito per studio legale',
    scenarioLabel: 'Demo interattiva · Studio legale',
    possibleCustomizations: ['Nomi e foto degli avvocati', 'Aree di attività dello studio', 'Invio richieste a email o gestionale', 'Più sedi'],
  },
  {
    id: 'demo-004',
    slug: 'studio-nutrizione',
    title: 'Studio di Nutrizione',
    kind: 'demo',
    status: 'concept',
    sector: 'Nutrizione',
    year: 'Demo 2026',
    shortDescription: 'Demo per un nutrizionista: quattro percorsi spiegati in chiaro e richiesta della prima consulenza con giorno e fascia oraria.',
    fullDescription: 'Demo interattiva per uno studio di nutrizione. Presenta il professionista, quattro percorsi (prima consulenza, educazione alimentare, supporto in fasi specifiche, controlli e follow-up) e un modulo di prenotazione, con contatto diretto per telefono, email e WhatsApp.',
    problem: 'Chi cerca un nutrizionista vuole capire subito come funziona il primo incontro e quanto impegno richiede il percorso. Troppe informazioni tecniche allontanano, troppo poche non danno fiducia.',
    objectives: ['Spiegare i percorsi senza tecnicismi', 'Rendere facile prenotare la prima consulenza', 'Dare un’immagine professionale e vicina'],
    solutionTitle: 'Percorsi chiari, prenotazione in tre passi.',
    solution: 'Quattro schede spiegano i percorsi con parole di tutti i giorni. Il modulo chiede solo il necessario: tipo di richiesta (prima consulenza, controllo, percorso personalizzato), giorno preferito e fascia oraria, mattina, pomeriggio o sera. In apertura una scheda segnala subito che la prima consulenza è disponibile.',
    features: ['Quattro percorsi spiegati in chiaro', 'Prenotazione con giorno e fascia oraria', 'Chiamata, email e WhatsApp diretti', 'Conferma immediata dopo l’invio'],
    highlights: [
      { title: 'Il primo incontro, spiegato', text: 'Colloquio, anamnesi alimentare e impostazione del percorso: chi prenota sa cosa aspettarsi e arriva più tranquillo.' },
      { title: 'Fasce orarie, non orari', text: 'Mattina, pomeriggio o sera: più facile per il cliente, più ordine nell’agenda dello studio.' },
      { title: 'Tre modi per scrivere', text: 'Telefono, email con oggetto già compilato e WhatsApp, sempre visibili nella sezione contatti.' },
    ],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Modulo di prenotazione', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/studio-nutrizione-desktop.webp'],
    mobileImages: [],
    externalUrl: 'https://demo-nutrizionisti.netlify.app/',
    featured: true,
    order: 6,
    theme: 'sky',
    categories: ['professionisti'],
    typeLabel: 'Sito per nutrizionisti',
    scenarioLabel: 'Demo interattiva · Studio di nutrizione',
    possibleCustomizations: ['Foto e profilo del professionista', 'Percorsi e prezzi', 'Collegamento a un calendario online', 'Sezione ricette o articoli'],
  },
  {
    id: 'demo-005',
    slug: 'professionista-editoriale',
    title: 'Professionista Editoriale',
    kind: 'demo',
    status: 'concept',
    sector: 'Professionisti indipendenti',
    year: 'Demo 2026',
    shortDescription: 'Demo per un professionista che vuole un sito con più personalità: ritratto in primo piano, impaginazione da rivista e appuntamenti in tre passi.',
    fullDescription: 'Demo interattiva per chi riceve su appuntamento: consulenti, coach, terapeuti, professionisti indipendenti. Mette al centro il ritratto e la persona, presenta tre modalità di incontro (individuale, consulenza orientativa e online) e spiega in tre passi come fissare un appuntamento.',
    problem: 'Molti siti di professionisti si somigliano tutti. Questa demo mostra un’alternativa per chi vuole distinguersi: più personale, più narrativa, senza perdere chiarezza su come prenotare.',
    objectives: ['Far emergere la persona prima del servizio', 'Spiegare attività e modalità di incontro', 'Portare con naturalezza all’appuntamento'],
    solutionTitle: 'Un sito che si sfoglia come una rivista.',
    solution: 'Titoli in carattere serif, impaginazione asimmetrica, grande ritratto in apertura e colori caldi. Le attività sono numerate come i capitoli di un articolo e la sezione «Come funziona» spiega in tre passaggi richiesta, disponibilità e conferma. Il modulo si può collegare a un calendario online come Calendly.',
    features: ['Ritratto e profilo in primo piano', 'Tre modalità di incontro', 'Prenotazione spiegata in tre passaggi', 'Modulo di contatto'],
    highlights: [
      { title: 'La persona prima del servizio', text: 'Il ritratto apre il sito: chi arriva vede subito con chi parlerà, e la fiducia nasce prima ancora di leggere.' },
      { title: 'Prenotare senza dubbi', text: 'Richiesta, disponibilità, conferma: tre passaggi spiegati prima del modulo, così nessuno si blocca a metà.' },
      { title: 'Pronto per il calendario', text: 'La prenotazione si può collegare a Calendly o a un altro sistema online, per ricevere appuntamenti senza scambi di messaggi.' },
    ],
    services: ['Direzione visiva', 'Progettazione UX/UI', 'Sviluppo responsive'],
    technologies: [],
    desktopImages: ['/projects/professionista-editoriale-desktop.webp'],
    mobileImages: [],
    externalUrl: 'https://demo-professionisti.netlify.app/',
    featured: true,
    order: 7,
    theme: 'wine',
    categories: ['professionisti'],
    typeLabel: 'Sito editoriale per professionisti',
    scenarioLabel: 'Demo interattiva · Professionista indipendente',
    possibleCustomizations: ['Palette e caratteri', 'Servizi e modalità di incontro', 'Calendario online integrato', 'Sezione articoli o pubblicazioni'],
  },
] satisfies Project[]).sort((a, b) => a.order - b.order);

export const publishedProjects = projects.filter((project) => project.kind === 'real');
export const demoProjects = projects.filter((project) => project.kind !== 'real');
export const testimonials = projects.flatMap((project) => (project.testimonial ? [{ ...project.testimonial, slug: project.slug }] : []));

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
