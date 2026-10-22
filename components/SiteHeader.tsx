import Link from 'next/link';
import { navigation, siteConfig } from '@/data/site';
import { href, type Lang } from '@/lib/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';

export function SiteHeader({ lang }: { lang: Lang }) {
  const items = navigation(lang);
  const t = lang === 'en'
    ? { home: 'Christian D’Ambrosio, home', main: 'Main navigation', mobile: 'Mobile navigation', cta: 'Get a quote', contact: 'Contact', menu: 'Menu' }
    : { home: 'Christian D’Ambrosio, home', main: 'Navigazione principale', mobile: 'Navigazione mobile', cta: 'Preventivo', contact: 'Contatti', menu: 'Menu' };

  return (
    <header className="site-header shell">
      <Link className="wordmark" href={href('home', lang)} aria-label={t.home}>
        <span className="wordmark-name">{siteConfig.name}</span>
        <span className="wordmark-role">{siteConfig.role[lang]}</span>
      </Link>
      <nav className="desktop-nav" aria-label={t.main}>
        {items.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="header-cta desktop-cta" href={href('contact', lang)}>{t.cta} <span aria-hidden="true">↗</span></Link>
        <LanguageSwitcher lang={lang} />
        <details className="mobile-menu">
          <summary>{t.menu} <span aria-hidden="true">+</span></summary>
          <nav aria-label={t.mobile}>
            {items.map((item, index) => (
              <Link key={item.href} href={item.href}><span>0{index + 1}</span>{item.label}</Link>
            ))}
            <Link href={href('contact', lang)}><span>{String(items.length + 1).padStart(2, '0')}</span>{t.contact}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
