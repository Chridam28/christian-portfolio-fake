import type { Metadata } from 'next';
import { ContactIcon, type ContactChannel } from '@/components/ContactIcon';
import { PageHero } from '@/components/PageHero';
import { contactLinks, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Contatta Christian D’Ambrosio via WhatsApp, email o Instagram per parlare del tuo prossimo progetto web.',
  alternates: { canonical: '/contatti' },
};

const contactOptions: Array<{
  channel: ContactChannel;
  label: string;
  title: string;
  description: string;
  href: string;
  external: boolean;
}> = [
  {
    channel: 'whatsapp',
    label: 'WhatsApp',
    title: 'Scrivimi su WhatsApp',
    description: 'Il modo più rapido per raccontarmi la tua idea.',
    href: contactLinks.whatsapp,
    external: true,
  },
  {
    channel: 'email',
    label: 'Email',
    title: 'Mandami una email',
    description: 'Ideale per inviarmi un brief, materiali o maggiori dettagli.',
    href: contactLinks.email,
    external: false,
  },
  {
    channel: 'instagram',
    label: 'Instagram',
    title: 'Contattami su Instagram',
    description: 'Scopri i miei lavori e scrivimi direttamente.',
    href: contactLinks.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contatti / Iniziamo"
        title="Parliamo del tuo prossimo progetto."
        intro="Raccontami cosa vuoi realizzare, migliorare o portare online. Ti rispondo generalmente entro poche ore."
        meta={siteConfig.responseTime}
      />

      <section className="contact-options shell" aria-labelledby="contact-options-title">
        <div className="contact-options-heading reveal">
          <p className="section-index">Contatto diretto</p>
          <div>
            <h2 id="contact-options-title">Scegli il canale più comodo per te.</h2>
            <p>Ogni messaggio arriva direttamente a me, senza passaggi intermedi.</p>
          </div>
        </div>
        <div className="contact-channel-grid">
          {contactOptions.map((option, index) => (
            <a
              className={`contact-channel contact-channel-${option.channel} reveal`}
              href={option.href}
              target={option.external ? '_blank' : undefined}
              rel={option.external ? 'noopener noreferrer' : undefined}
              aria-label={`${option.title}${option.external ? ' (si apre in una nuova scheda)' : ''}`}
              data-analytics={option.channel === 'whatsapp' ? 'whatsapp_click' : undefined}
              key={option.channel}
            >
              <span className="contact-channel-top"><span>0{index + 1}</span><ContactIcon channel={option.channel} /></span>
              <span className="contact-channel-copy">
                <small>{option.label}</small>
                <strong>{option.title}</strong>
                <span>{option.description}</span>
              </span>
              <span className="contact-channel-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="contact-start-section">
        <div className="shell contact-start-grid reveal">
          <div>
            <p className="eyebrow">Da dove possiamo partire</p>
            <h2>Non serve avere già tutto definito.</h2>
          </div>
          <ol>
            <li><span>01</span>Raccontami di cosa ti occupi.</li>
            <li><span>02</span>Spiegami cosa vorresti ottenere.</li>
            <li><span>03</span>Indicami se possiedi già un sito o dei materiali.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
