import Link from 'next/link';
import { href, type Lang } from '@/lib/i18n';

export function ContactBand({ lang }: { lang: Lang }) {
  const t = lang === 'en'
    ? { index: 'Free, no-obligation quote', title: <>Need a website?<br /><em>Let’s talk.</em></>, text: 'Tell me in a couple of lines what you do and what you need: I’ll get back to you with a proposal and a price. Your first demo is ready within 48 hours of receiving your copy and images.', cta: 'Get in touch' }
    : { index: 'Preventivo senza impegno', title: <>Ti serve un sito?<br /><em>Scrivimi.</em></>, text: 'Raccontami in due righe di cosa ti occupi e cosa ti serve: ti rispondo con una proposta e un prezzo. La prima demo è pronta in 48 ore da quando mi mandi testi e immagini.', cta: 'Scrivimi ora' };
  return (
    <section className="contact-band">
      <div className="shell contact-band-grid reveal">
        <p className="section-index">{t.index}</p>
        <div>
          <h2>{t.title}</h2>
          <p>{t.text}</p>
          <Link className="button button-accent" href={href('contact', lang)}>{t.cta} <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  );
}
