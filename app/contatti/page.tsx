import type { Metadata } from 'next';
import { ContactIcon, type ContactChannel } from '@/components/ContactIcon';
import { PageHero } from '@/components/PageHero';
import { contactLinks, siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Scrivi a Christian D’Ambrosio su WhatsApp, email o Instagram per un preventivo: landing page, sito one page o multipagina. Prima demo in 48 ore.',
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
    description: 'Il modo più veloce: bastano due righe e ti rispondo.',
    href: contactLinks.whatsapp,
    external: true,
  },
  {
    channel: 'email',
    label: 'Email',
    title: 'Mandami una email',
    description: 'Comoda per mandarmi testi, immagini o il link al tuo sito attuale.',
    href: contactLinks.email,
    external: false,
  },
  {
    channel: 'instagram',
    label: 'Instagram',
    title: 'Contattami su Instagram',
    description: 'Se preferisci, scrivimi in direct.',
    href: contactLinks.instagram,
    external: true,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contatti / Preventivo"
        title="Scrivimi. Ti rispondo io."
        intro="Dimmi di cosa ti occupi e cosa ti serve: ti rispondo con una proposta e un prezzo chiaro, senza impegno."
        meta={siteConfig.responseTime}
      />

      <section className="contact-options shell" aria-labelledby="contact-options-title">
        <div className="contact-options-heading reveal">
          <p className="section-index">Contatto diretto</p>
          <div>
            <h2 id="contact-options-title">Scegli come preferisci.</h2>
            <p>WhatsApp è il più veloce, per email puoi allegare materiali. In ogni caso il messaggio arriva a me.</p>
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
            <p className="eyebrow">Cosa scrivermi</p>
            <h2>Bastano tre informazioni.</h2>
          </div>
          <ol>
            <li><span>01</span>Di cosa ti occupi e dove lavori.</li>
            <li><span>02</span>Cosa ti serve: landing page, sito one page, multipagina o altro.</li>
            <li><span>03</span>Se hai già un sito, dei testi o delle immagini da usare.</li>
          </ol>
        </div>
      </section>
    </main>
  );
}
