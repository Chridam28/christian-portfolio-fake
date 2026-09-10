import Link from 'next/link';
import { isConfigured, navigation, siteConfig, whatsappUrl } from '@/data/site';

export function SiteFooter() {
  const hasEmail = isConfigured(siteConfig.email);
  const hasPhone = isConfigured(siteConfig.phone);
  const hasWhatsapp = isConfigured(siteConfig.whatsapp);
  const hasInstagram = isConfigured(siteConfig.instagram);
  const hasLinkedin = isConfigured(siteConfig.linkedin);

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-mark" href="/">Christian<br />D’Ambrosio</Link>
          <p>Siti web e strumenti digitali su misura per professionisti e piccole attività.</p>
        </div>
        <div>
          <p className="footer-label">Esplora</p>
          {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contatti">Contatti</Link>
        </div>
        <div>
          <p className="footer-label">Contatti</p>
          {hasEmail ? <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> : <span className="placeholder-value">{siteConfig.email}</span>}
          {hasPhone ? <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a> : <span className="placeholder-value">{siteConfig.phone}</span>}
          {hasWhatsapp && <a href={whatsappUrl(siteConfig.whatsapp)} target="_blank" rel="noreferrer" data-analytics="whatsapp_click">WhatsApp</a>}
          <span>Trieste · Italia</span>
        </div>
        <div>
          <p className="footer-label">Note</p>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/cookie">Cookie policy</Link>
          {hasInstagram && <a href={siteConfig.instagram} target="_blank" rel="noreferrer">Instagram</a>}
          {hasLinkedin && <a href={siteConfig.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <span>P.IVA {siteConfig.vat}</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Christian D’Ambrosio</span>
        <a href="#top">Torna su <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
