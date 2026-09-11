import Link from 'next/link';
import { contactLinks, navigation, siteConfig } from '@/data/site';

export function SiteFooter() {
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
          <a href={contactLinks.email}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click">WhatsApp</a>
          <span>Trieste · Italia</span>
        </div>
        <div>
          <p className="footer-label">Note</p>
          <Link href="/privacy">Privacy policy</Link>
          <Link href="/cookie">Cookie policy</Link>
          <a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
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
