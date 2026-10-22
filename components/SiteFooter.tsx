import Link from 'next/link';
import { contactLinks, navigation, siteConfig } from '@/data/site';
import { href, type Lang } from '@/lib/i18n';

export function SiteFooter({ lang }: { lang: Lang }) {
  const links = contactLinks(lang);
  const t = lang === 'en'
    ? { tagline: 'Bespoke websites for professionals and small businesses. First demo within 48 hours, edits included.', explore: 'Explore', contact: 'Contact', info: 'Info', location: 'Trieste · Italy', vat: 'VAT no.', top: 'Back to top', contactPage: 'Contact' }
    : { tagline: 'Siti web su misura per professionisti e piccole attività. Prima demo in 48 ore, modifiche incluse.', explore: 'Esplora', contact: 'Contatti', info: 'Info', location: 'Trieste · Italia', vat: 'P.IVA', top: 'Torna su', contactPage: 'Contatti' };

  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Link className="footer-mark" href={href('home', lang)}>Christian<br />D’Ambrosio</Link>
          <p>{t.tagline}</p>
        </div>
        <div>
          <p className="footer-label">{t.explore}</p>
          {navigation(lang).map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href={href('contact', lang)}>{t.contactPage}</Link>
        </div>
        <div>
          <p className="footer-label">{t.contact}</p>
          <a href={links.email}>{siteConfig.email}</a>
          <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}>{siteConfig.phone}</a>
          <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click">WhatsApp</a>
          <span>{t.location}</span>
        </div>
        <div>
          <p className="footer-label">{t.info}</p>
          <Link href={href('privacy', lang)}>Privacy policy</Link>
          <Link href={href('cookie', lang)}>Cookie policy</Link>
          <a href={links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <span>{t.vat} {siteConfig.vat}</span>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© {new Date().getFullYear()} Christian D’Ambrosio</span>
        <a href="#top">{t.top} <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
