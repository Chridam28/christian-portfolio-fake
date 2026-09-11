import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { PageHero } from '@/components/PageHero';
import { isConfigured, siteConfig, whatsappUrl } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Racconta il tuo progetto a Christian D’Ambrosio e richiedi un primo confronto.',
  alternates: { canonical: '/contatti' },
};

export default function ContactPage() {
  const hasEmail = isConfigured(siteConfig.email);
  const hasWhatsapp = isConfigured(siteConfig.whatsapp);

  return <main><PageHero eyebrow="Contatti / Iniziamo" title="Raccontami cosa vorresti costruire." intro="Non serve avere già tutte le risposte. Dimmi chi sei, cosa ti serve e dove senti che il progetto si è fermato." meta={siteConfig.responseTime} /><section className="contact-page shell"><div className="contact-aside reveal"><p className="section-index">Contatto diretto</p><h2>Una richiesta,<br />nessun rimbalzo.</h2><p>Leggo e rispondo io. Se il progetto è adatto al mio lavoro, fissiamo un confronto per chiarire priorità, tempi e prossimi passi.</p><dl><div><dt>Email</dt><dd className={hasEmail ? '' : 'placeholder-value'}>{hasEmail ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : siteConfig.email}</dd></div><div><dt>WhatsApp</dt><dd className={hasWhatsapp ? '' : 'placeholder-value'}>{hasWhatsapp ? <a href={whatsappUrl(siteConfig.whatsapp)} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click">{siteConfig.whatsapp}</a> : siteConfig.whatsapp}</dd></div><div><dt>Disponibilità</dt><dd>Trieste · Da remoto in tutta Italia</dd></div></dl>{(!hasEmail || !hasWhatsapp) && <p className="placeholder-note">I recapiti definitivi non erano presenti nei materiali e vanno inseriti prima della pubblicazione.</p>}</div><div className="form-panel reveal"><ContactForm /></div></section></main>;
}
