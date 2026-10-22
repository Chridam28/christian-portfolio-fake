import { ContactBand } from '@/components/ContactBand';
import { Faq } from '@/components/Faq';
import { PageHero } from '@/components/PageHero';
import { Pricing } from '@/components/Pricing';
import type { Lang } from '@/lib/i18n';

const copy = {
  it: {
    hero: { eyebrow: 'Servizi / Prezzi', title: 'Servizi e prezzi.', intro: 'Tre pacchetti a prezzo fisso, una gestione annuale con le modifiche incluse e soluzioni su misura quando ti serve qualcosa di più.', meta: 'Prima demo in 48 ore' },
    pricingIndex: '01 / Pacchetti',
    custom: { eyebrow: '02 / Su misura', title: <>Ti serve<br /><em>qualcosa di più?</em></>, text: 'Per questi lavori preparo un preventivo su misura: mi racconti cosa ti serve e ti dico costi e tempi prima di iniziare.' },
    offers: [
      ['Rifacimento del sito', 'Hai già un sito ma è vecchio, lento o non ti rappresenta più? Lo rifaccio da capo, tenendo quello che funziona e portando con me testi e contenuti.', ['Analisi di cosa non funziona', 'Nuova struttura e grafica', 'Trasferimento dei contenuti', 'Messa online']],
      ['Prenotazioni online', 'I clienti chiedono disponibilità, fissano un appuntamento o prenotano direttamente dal sito, senza telefonate avanti e indietro.', ['Richieste di disponibilità', 'Appuntamenti e consulenze', 'Aree riservate', 'Provato su ogni dispositivo']],
      ['Strumenti su misura', 'Piccole applicazioni web per sostituire fogli Excel, appunti e passaggi fatti a mano con qualcosa di semplice da usare.', ['Gestionali leggeri', 'Moduli e archivi', 'Pannelli per te o il tuo team', 'Crescono insieme alla tua attività']],
    ] as Array<[string, string, string[]]>,
  },
  en: {
    hero: { eyebrow: 'Services / Pricing', title: 'Services and pricing.', intro: 'Three fixed-price packages, an annual care plan with edits included, and bespoke solutions when you need something more.', meta: 'First demo within 48 hours' },
    pricingIndex: '01 / Packages',
    custom: { eyebrow: '02 / Bespoke work', title: <>Need<br /><em>something more?</em></>, text: 'For this kind of work I prepare a tailored quote: tell me what you need and I’ll give you costs and timing before we start.' },
    offers: [
      ['Website redesign', 'Already have a website that’s outdated, slow or no longer represents you? I’ll rebuild it from scratch, keeping what works and carrying over your copy and content.', ['Review of what isn’t working', 'New structure and design', 'Content migration', 'Launch']],
      ['Online booking', 'Clients check availability, book an appointment or make a reservation straight from your website, with no back-and-forth phone calls.', ['Availability requests', 'Appointments and consultations', 'Members’ areas', 'Tested on every device']],
      ['Bespoke tools', 'Small web apps that replace spreadsheets, notes and manual steps with something simple to use.', ['Lightweight management tools', 'Forms and records', 'Dashboards for you or your team', 'Built to grow with your business']],
    ] as Array<[string, string, string[]]>,
  },
};

export function ServicesPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <main>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} meta={t.hero.meta} />
      <Pricing lang={lang} index={t.pricingIndex} />
      <section className="offer-list shell">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow dark">{t.custom.eyebrow}</p>
            <h2>{t.custom.title}</h2>
          </div>
          <p>{t.custom.text}</p>
        </div>
        {t.offers.map(([title, text, items], index) => (
          <article className="offer-row reveal" key={title}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <h2>{title}</h2>
            <div>
              <p>{text}</p>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </article>
        ))}
      </section>
      <Faq lang={lang} />
      <ContactBand lang={lang} />
    </main>
  );
}
