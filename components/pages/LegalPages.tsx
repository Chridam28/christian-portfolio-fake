import type { ReactNode } from 'react';
import Link from 'next/link';
import { CookiePreferencesButton } from '@/components/CookieConsent';
import { PageHero } from '@/components/PageHero';
import { siteConfig } from '@/data/site';
import { href, type Lang } from '@/lib/i18n';

const LAST_UPDATED = { it: 'Ultimo aggiornamento: 28 ottobre 2026', en: 'Last updated: 28 October 2026' };
const translationNotice = 'This is a courtesy translation. If there is any discrepancy, the Italian version prevails.';

type Section = { title: string; body: ReactNode };

function LegalBody({ sections, notice }: { sections: Section[]; notice?: { label: string; text: string } }) {
  return (
    <article className="legal-page shell">
      {notice && <div className="notice-box"><span>{notice.label}</span><p>{notice.text}</p></div>}
      {sections.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.body}
        </section>
      ))}
    </article>
  );
}

const mail = <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>;

const privacyIt: Section[] = [
  {
    title: '1. Titolare del trattamento',
    body: <p>Il titolare del trattamento è Christian D’Ambrosio, web designer e sviluppatore freelance con sede a Trieste, P.IVA {siteConfig.vat}. Per qualsiasi richiesta sui tuoi dati puoi scrivere a {mail}.</p>,
  },
  {
    title: '2. Quali dati tratto',
    body: <>
      <p><strong>Dati che mi invii tu.</strong> Il sito non ha moduli di contatto: se mi scrivi via email, WhatsApp, Instagram o mi chiami, tratto i dati che scegli di comunicarmi, come nome, indirizzo email, numero di telefono, il contenuto del messaggio ed eventuali testi, immagini o file relativi al progetto.</p>
      <p><strong>Dati tecnici di navigazione.</strong> Come qualsiasi sito, anche questo viene servito da un fornitore di hosting che registra automaticamente alcuni dati tecnici (indirizzo IP, tipo di browser, pagina richiesta, data e ora) per garantire il funzionamento e la sicurezza del servizio. Non uso questi dati per identificarti né per profilarti.</p>
      <p><strong>Statistiche di visita (solo con il tuo consenso).</strong> Se accetti i cookie statistici, uso Google Analytics per sapere in forma aggregata quali pagine vengono visitate, da quale tipo di dispositivo, da quale città o paese e quali pulsanti vengono usati (per esempio i clic su WhatsApp o sui progetti). Google Analytics 4 non memorizza l’indirizzo IP completo; non uso Google Signals né funzioni pubblicitarie e non combino questi dati con altre informazioni che ti riguardano.</p>
    </>,
  },
  {
    title: '3. Perché li tratto e su quale base',
    body: <ul>
      <li><strong>Rispondere alle tue richieste e preparare un preventivo</strong>: base giuridica è l’esecuzione di misure precontrattuali adottate su tua richiesta (art. 6, par. 1, lett. b del GDPR).</li>
      <li><strong>Realizzare e gestire il sito che mi commissioni</strong>, inclusa la gestione annuale: esecuzione del contratto (art. 6, par. 1, lett. b).</li>
      <li><strong>Adempiere agli obblighi fiscali e contabili</strong>, come la fatturazione: obbligo di legge (art. 6, par. 1, lett. c).</li>
      <li><strong>Garantire la sicurezza e il corretto funzionamento del sito</strong> tramite i dati tecnici dell’hosting: legittimo interesse del titolare (art. 6, par. 1, lett. f).</li>
      <li><strong>Capire come viene usato il sito e migliorarlo</strong> con le statistiche di Google Analytics: il tuo consenso (art. 6, par. 1, lett. a), che puoi revocare in qualsiasi momento da “Preferenze cookie” in fondo a ogni pagina.</li>
    </ul>,
  },
  {
    title: '4. Per quanto tempo li conservo',
    body: <ul>
      <li>Le richieste di contatto o di preventivo che non diventano un incarico vengono conservate per <strong>12 mesi</strong> dall’ultimo contatto e poi cancellate.</li>
      <li>I dati legati a un incarico vengono conservati per la durata del rapporto e, per i documenti contabili e fiscali, per <strong>10 anni</strong> come previsto dalla legge (art. 2220 del Codice civile).</li>
      <li>I dati tecnici di navigazione vengono conservati dal fornitore di hosting per il periodo limitato necessario alla sicurezza del servizio.</li>
      <li>Le statistiche di Google Analytics vengono conservate per <strong>14 mesi</strong> e poi cancellate automaticamente.</li>
    </ul>,
  },
  {
    title: '5. A chi possono essere comunicati',
    body: <>
      <p>I dati non vengono venduti né diffusi. Possono essere trattati, solo per le finalità indicate, da:</p>
      <ul>
        <li><strong>Netlify, Inc.</strong>, fornitore di hosting del sito, che agisce come responsabile del trattamento;</li>
        <li><strong>Google</strong>, fornitore del servizio email con cui ricevo i tuoi messaggi;</li>
        <li><strong>Google Ireland Limited</strong>, fornitore di Google Analytics, che agisce come responsabile del trattamento, solo se hai dato il consenso;</li>
        <li>il mio <strong>commercialista</strong>, per gli adempimenti fiscali in caso di incarico;</li>
        <li><strong>autorità pubbliche</strong>, solo se richiesto dalla legge.</li>
      </ul>
      <p>Se scegli di contattarmi tramite <strong>WhatsApp o Instagram</strong>, quei servizi sono gestiti da Meta Platforms, che tratta i dati come titolare autonomo secondo la propria informativa privacy.</p>
    </>,
  },
  {
    title: '6. Trasferimenti fuori dall’Unione europea',
    body: <p>Alcuni dei fornitori indicati (Netlify, Google, Meta) possono trattare dati negli Stati Uniti. In questi casi il trasferimento avviene sulla base della decisione di adeguatezza della Commissione europea (EU-U.S. Data Privacy Framework) oppure delle clausole contrattuali standard approvate dalla Commissione.</p>,
  },
  {
    title: '7. Conferimento dei dati',
    body: <p>Fornirmi i tuoi dati è facoltativo, ma senza un recapito non posso risponderti né preparare un preventivo. Per i dati necessari a un incarico, il mancato conferimento impedisce di concludere il contratto.</p>,
  },
  {
    title: '8. I tuoi diritti',
    body: <>
      <p>In qualsiasi momento puoi chiedere di accedere ai tuoi dati, correggerli, cancellarli, limitarne il trattamento, opporti al trattamento basato sul legittimo interesse o riceverli in un formato portabile (artt. 15–22 del GDPR). Basta scrivere a {mail}: ti rispondo entro un mese.</p>
      <p>Se ritieni che il trattamento violi la normativa, puoi presentare reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).</p>
    </>,
  },
  {
    title: '9. Decisioni automatizzate e cookie',
    body: <p>Non prendo decisioni basate unicamente su trattamenti automatizzati e non faccio profilazione. Il sito usa cookie statistici di Google Analytics solo se li accetti; non usa cookie pubblicitari o di profilazione. I dettagli sono nella <Link href={href('cookie', 'it')}>cookie policy</Link>.</p>,
  },
  {
    title: '10. Modifiche',
    body: <p>Questa informativa può essere aggiornata se cambiano i servizi usati o le modalità di trattamento. La data dell’ultimo aggiornamento è indicata in cima alla pagina.</p>,
  },
];

const privacyEn: Section[] = [
  {
    title: '1. Data controller',
    body: <p>The data controller is Christian D’Ambrosio, a freelance web designer and developer based in Trieste, Italy, VAT no. IT{siteConfig.vat}. For any request about your data, email {mail}.</p>,
  },
  {
    title: '2. What data I process',
    body: <>
      <p><strong>Data you send me.</strong> The website has no contact forms: if you get in touch by email, WhatsApp, Instagram or phone, I process the data you choose to share, such as your name, email address, phone number, the content of your message and any copy, images or files relating to your project.</p>
      <p><strong>Technical browsing data.</strong> Like any website, this one is served by a hosting provider that automatically logs some technical data (IP address, browser type, page requested, date and time) to keep the service running and secure. I do not use this data to identify or profile you.</p>
      <p><strong>Visit statistics (only with your consent).</strong> If you accept analytics cookies, I use Google Analytics to see, in aggregate form, which pages are visited, from which type of device, from which city or country, and which buttons are used (for example clicks on WhatsApp or on projects). Google Analytics 4 does not store full IP addresses; I do not use Google Signals or any advertising features, and I do not combine this data with any other information about you.</p>
    </>,
  },
  {
    title: '3. Why I process it and on what legal basis',
    body: <ul>
      <li><strong>Replying to your enquiries and preparing a quote</strong>: steps taken at your request prior to entering into a contract (Article 6(1)(b) GDPR).</li>
      <li><strong>Building and managing the website you commission</strong>, including the annual care plan: performance of a contract (Article 6(1)(b)).</li>
      <li><strong>Meeting tax and accounting obligations</strong>, such as invoicing: legal obligation (Article 6(1)(c)).</li>
      <li><strong>Keeping the website secure and working properly</strong> through the hosting provider’s technical data: legitimate interest (Article 6(1)(f)).</li>
      <li><strong>Understanding how the website is used and improving it</strong> through Google Analytics statistics: your consent (Article 6(1)(a)), which you can withdraw at any time from “Cookie preferences” at the bottom of every page.</li>
    </ul>,
  },
  {
    title: '4. How long I keep it',
    body: <ul>
      <li>Enquiries and quote requests that do not lead to a project are kept for <strong>12 months</strong> from the last contact and then deleted.</li>
      <li>Data relating to a project is kept for the duration of our working relationship and, for accounting and tax records, for <strong>10 years</strong> as required by Italian law (Article 2220 of the Civil Code).</li>
      <li>Technical browsing data is kept by the hosting provider for the limited period needed to keep the service secure.</li>
      <li>Google Analytics statistics are kept for <strong>14 months</strong> and then deleted automatically.</li>
    </ul>,
  },
  {
    title: '5. Who it may be shared with',
    body: <>
      <p>Your data is never sold or made public. It may be processed, solely for the purposes above, by:</p>
      <ul>
        <li><strong>Netlify, Inc.</strong>, the website’s hosting provider, acting as data processor;</li>
        <li><strong>Google</strong>, the email provider through which I receive your messages;</li>
        <li><strong>Google Ireland Limited</strong>, the provider of Google Analytics, acting as data processor, only if you have given consent;</li>
        <li>my <strong>accountant</strong>, for tax purposes if we work together;</li>
        <li><strong>public authorities</strong>, only where required by law.</li>
      </ul>
      <p>If you choose to contact me via <strong>WhatsApp or Instagram</strong>, those services are run by Meta Platforms, which processes data as an independent controller under its own privacy policy.</p>
    </>,
  },
  {
    title: '6. Transfers outside the European Union',
    body: <p>Some of the providers listed above (Netlify, Google, Meta) may process data in the United States. Any such transfer relies on the European Commission’s adequacy decision (EU-U.S. Data Privacy Framework) or on the standard contractual clauses approved by the Commission.</p>,
  },
  {
    title: '7. Providing your data',
    body: <p>Providing your data is optional, but without contact details I cannot reply or send you a quote. Where data is needed for a project, not providing it means we cannot enter into a contract.</p>,
  },
  {
    title: '8. Your rights',
    body: <>
      <p>At any time, you can ask to access, correct or erase your data, restrict its processing, object to processing based on legitimate interest, or receive it in a portable format (Articles 15–22 GDPR). Just email {mail} and I will reply within one month.</p>
      <p>If you believe your data is being processed unlawfully, you can lodge a complaint with the Italian Data Protection Authority, the Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">www.garanteprivacy.it</a>).</p>
    </>,
  },
  {
    title: '9. Automated decisions and cookies',
    body: <p>I do not make decisions based solely on automated processing and I do not carry out profiling. The website uses Google Analytics cookies only if you accept them; it uses no advertising or profiling cookies. See the <Link href={href('cookie', 'en')}>cookie policy</Link> for details.</p>,
  },
  {
    title: '10. Changes',
    body: <p>This notice may be updated if the services I use or the way data is processed change. The date of the latest update is shown at the top of the page.</p>,
  },
];

const cookieIt: Section[] = [
  {
    title: '1. In breve',
    body: <p>Il sito usa due tipi di strumenti: quelli tecnici, necessari a farlo funzionare e a ricordare la tua scelta sui cookie, e i cookie statistici di Google Analytics, che vengono attivati <strong>solo se li accetti</strong> dal banner. Nessun cookie pubblicitario o di profilazione.</p>,
  },
  {
    title: '2. Strumenti tecnici (sempre attivi)',
    body: <>
      <ul>
        <li><strong>cd-cookie-consent</strong> (memoria locale del browser): ricorda se hai accettato o rifiutato i cookie statistici, per non chiedertelo a ogni pagina. Dura <strong>6 mesi</strong>, poi ti viene chiesto di nuovo.</li>
      </ul>
      <p>Gli strumenti tecnici non richiedono il consenso, come previsto dalla normativa.</p>
    </>,
  },
  {
    title: '3. Cookie statistici (solo con consenso)',
    body: <>
      <p>Se accetti, il sito carica Google Analytics 4, fornito da Google Ireland Limited, per raccogliere statistiche aggregate sulle visite: pagine viste, tipo di dispositivo, città o paese di provenienza, pulsanti usati. Prima del tuo consenso il browser non contatta nessun server di Google.</p>
      <ul>
        <li><strong>_ga</strong>: distingue i visitatori in forma anonima. Durata: <strong>2 anni</strong>.</li>
        <li><strong>_ga_&lt;ID&gt;</strong>: mantiene lo stato della sessione. Durata: <strong>2 anni</strong>.</li>
      </ul>
      <p>Non uso Google Signals né funzioni pubblicitarie. I dati possono essere trattati da Google anche negli Stati Uniti, sulla base dell’EU-U.S. Data Privacy Framework. Maggiori informazioni: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">come Google usa i dati dei siti partner</a>.</p>
    </>,
  },
  {
    title: '4. Come cambiare scelta',
    body: <>
      <p>Puoi accettare o revocare il consenso in qualsiasi momento: se lo revochi, Google Analytics smette di funzionare e i suoi cookie vengono cancellati.</p>
      <p><CookiePreferencesButton lang="it" className="text-link" /></p>
      <p>Puoi anche cancellare o bloccare i cookie dalle impostazioni del tuo browser.</p>
    </>,
  },
  {
    title: '5. Font, risorse e link esterni',
    body: <p>Caratteri tipografici e immagini sono ospitati direttamente sul sito, quindi il browser non contatta servizi come Google Fonts. I link alle demo, ai siti dei clienti, a WhatsApp e a Instagram portano su siti esterni, che applicano le proprie informative. Per i dati personali vedi anche la <Link href={href('privacy', 'it')}>privacy policy</Link>.</p>,
  },
];

const cookieEn: Section[] = [
  {
    title: '1. In short',
    body: <p>The website uses two kinds of tools: technical ones, needed for it to work and to remember your cookie choice, and Google Analytics cookies, which are enabled <strong>only if you accept them</strong> in the banner. No advertising or profiling cookies.</p>,
  },
  {
    title: '2. Technical tools (always on)',
    body: <>
      <ul>
        <li><strong>cd-cookie-consent</strong> (browser local storage): remembers whether you accepted or rejected analytics cookies, so you are not asked on every page. It lasts <strong>6 months</strong>, after which you are asked again.</li>
      </ul>
      <p>Technical tools do not require consent under the applicable law.</p>
    </>,
  },
  {
    title: '3. Analytics cookies (only with consent)',
    body: <>
      <p>If you accept, the website loads Google Analytics 4, provided by Google Ireland Limited, to collect aggregate visit statistics: pages viewed, device type, city or country, buttons used. Before you consent, your browser does not contact any Google server.</p>
      <ul>
        <li><strong>_ga</strong>: tells visitors apart anonymously. Duration: <strong>2 years</strong>.</li>
        <li><strong>_ga_&lt;ID&gt;</strong>: keeps the session state. Duration: <strong>2 years</strong>.</li>
      </ul>
      <p>I do not use Google Signals or any advertising features. Google may also process the data in the United States, under the EU-U.S. Data Privacy Framework. More information: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">how Google uses data from partner sites</a>.</p>
    </>,
  },
  {
    title: '4. How to change your choice',
    body: <>
      <p>You can give or withdraw consent at any time: if you withdraw it, Google Analytics stops working and its cookies are deleted.</p>
      <p><CookiePreferencesButton lang="en" className="text-link" /></p>
      <p>You can also delete or block cookies in your browser settings.</p>
    </>,
  },
  {
    title: '5. Fonts, resources and external links',
    body: <p>Fonts and images are hosted on the website itself, so your browser does not contact services such as Google Fonts. Links to the demos, client websites, WhatsApp and Instagram take you to external websites, which apply their own policies. For personal data, see also the <Link href={href('privacy', 'en')}>privacy policy</Link>.</p>,
  },
];

export function PrivacyPage({ lang }: { lang: Lang }) {
  if (lang === 'en') {
    return <main><PageHero eyebrow="Notice / Privacy" title="Privacy policy." intro="How I handle the data you share when you contact me or browse this website." meta={LAST_UPDATED.en} /><LegalBody sections={privacyEn} notice={{ label: 'Translation', text: translationNotice }} /></main>;
  }
  return <main><PageHero eyebrow="Informativa / Privacy" title="Privacy policy." intro="Come tratto i dati che mi comunichi quando mi contatti o navighi su questo sito." meta={LAST_UPDATED.it} /><LegalBody sections={privacyIt} /></main>;
}

export function CookiePage({ lang }: { lang: Lang }) {
  if (lang === 'en') {
    return <main><PageHero eyebrow="Notice / Cookies" title="Cookie policy." intro="Which cookies this website uses, and how to change your choice at any time." meta={LAST_UPDATED.en} /><LegalBody sections={cookieEn} notice={{ label: 'Translation', text: translationNotice }} /></main>;
  }
  return <main><PageHero eyebrow="Informativa / Cookie" title="Cookie policy." intro="Quali cookie usa il sito e come cambiare scelta in qualsiasi momento." meta={LAST_UPDATED.it} /><LegalBody sections={cookieIt} /></main>;
}
