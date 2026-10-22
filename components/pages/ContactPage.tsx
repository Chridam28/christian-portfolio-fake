import { ContactIcon, type ContactChannel } from '@/components/ContactIcon';
import { PageHero } from '@/components/PageHero';
import { contactLinks, siteConfig } from '@/data/site';
import type { Lang } from '@/lib/i18n';

const copy = {
  it: {
    hero: { eyebrow: 'Contatti / Preventivo', title: 'Scrivimi. Ti rispondo io.', intro: 'Dimmi di cosa ti occupi e cosa ti serve: ti rispondo con una proposta e un prezzo chiaro, senza impegno.' },
    index: 'Contatto diretto',
    title: 'Scegli come preferisci.',
    text: 'WhatsApp è il più veloce, per email puoi allegare materiali. In ogni caso il messaggio arriva a me.',
    newTab: 'si apre in una nuova scheda',
    channels: {
      whatsapp: { title: 'Scrivimi su WhatsApp', description: 'Il modo più veloce: bastano due righe e ti rispondo.' },
      email: { title: 'Mandami una email', description: 'Comoda per mandarmi testi, immagini o il link al tuo sito attuale.' },
      instagram: { title: 'Contattami su Instagram', description: 'Se preferisci, scrivimi in direct.' },
    },
    startEyebrow: 'Cosa scrivermi',
    startTitle: 'Bastano tre informazioni.',
    steps: ['Di cosa ti occupi e dove lavori.', 'Cosa ti serve: landing page, sito one page, multipagina o altro.', 'Se hai già un sito, dei testi o delle immagini da usare.'],
  },
  en: {
    hero: { eyebrow: 'Contact / Quote', title: 'Message me. I’ll reply myself.', intro: 'Tell me what you do and what you need: I’ll get back to you with a proposal and a clear price, with no obligation.' },
    index: 'Direct contact',
    title: 'Choose what suits you.',
    text: 'WhatsApp is the quickest; email is handy for sending files. Either way, your message comes straight to me.',
    newTab: 'opens in a new tab',
    channels: {
      whatsapp: { title: 'Message me on WhatsApp', description: 'The quickest way: a couple of lines and I’ll get back to you.' },
      email: { title: 'Send me an email', description: 'Handy for sending copy, images or a link to your current website.' },
      instagram: { title: 'Find me on Instagram', description: 'If you prefer, send me a direct message.' },
    },
    startEyebrow: 'What to tell me',
    startTitle: 'Three things are enough.',
    steps: ['What you do and where you’re based.', 'What you need: a landing page, a one-page or multi-page website, or something else.', 'Whether you already have a website, copy or images to use.'],
  },
};

export function ContactPage({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const links = contactLinks(lang);
  const options: Array<{ channel: ContactChannel; label: string; href: string; external: boolean }> = [
    { channel: 'whatsapp', label: 'WhatsApp', href: links.whatsapp, external: true },
    { channel: 'email', label: 'Email', href: links.email, external: false },
    { channel: 'instagram', label: 'Instagram', href: links.instagram, external: true },
  ];

  return (
    <main>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} meta={siteConfig.responseTime[lang]} />

      <section className="contact-options shell" aria-labelledby="contact-options-title">
        <div className="contact-options-heading reveal">
          <p className="section-index">{t.index}</p>
          <div>
            <h2 id="contact-options-title">{t.title}</h2>
            <p>{t.text}</p>
          </div>
        </div>
        <div className="contact-channel-grid">
          {options.map((option, index) => {
            const channel = t.channels[option.channel];
            return (
              <a
                className={`contact-channel contact-channel-${option.channel} reveal`}
                href={option.href}
                target={option.external ? '_blank' : undefined}
                rel={option.external ? 'noopener noreferrer' : undefined}
                aria-label={`${channel.title}${option.external ? ` (${t.newTab})` : ''}`}
                data-analytics={option.channel === 'whatsapp' ? 'whatsapp_click' : undefined}
                key={option.channel}
              >
                <span className="contact-channel-top"><span>0{index + 1}</span><ContactIcon channel={option.channel} /></span>
                <span className="contact-channel-copy">
                  <small>{option.label}</small>
                  <strong>{channel.title}</strong>
                  <span>{channel.description}</span>
                </span>
                <span className="contact-channel-arrow" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      </section>

      <section className="contact-start-section">
        <div className="shell contact-start-grid reveal">
          <div>
            <p className="eyebrow">{t.startEyebrow}</p>
            <h2>{t.startTitle}</h2>
          </div>
          <ol>
            {t.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}
          </ol>
        </div>
      </section>
    </main>
  );
}
