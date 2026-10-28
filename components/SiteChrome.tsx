import { CookieConsent } from '@/components/CookieConsent';
import { FloatingContacts } from '@/components/FloatingContacts';
import { HtmlLang } from '@/components/HtmlLang';
import { PageTransition } from '@/components/PageTransition';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/data/site';
import { href, type Lang } from '@/lib/i18n';

const descriptions: Record<Lang, string> = {
  it: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
  en: 'Custom websites for professionals and small businesses. From €350, first demo within 48 hours.',
};

export function SiteChrome({ lang, children }: Readonly<{ lang: Lang; children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: siteConfig.name,
    description: descriptions[lang],
    url: `${siteConfig.canonicalUrl}${href('home', lang)}`,
    inLanguage: lang,
    areaServed: 'IT',
    knowsLanguage: ['it', 'en'],
    address: { '@type': 'PostalAddress', addressLocality: 'Trieste', addressCountry: 'IT' },
    vatID: `IT${siteConfig.vat}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    founder: { '@type': 'Person', name: siteConfig.name, jobTitle: siteConfig.role[lang] },
  };

  return (
    <div className="site-chrome" lang={lang}>
      <HtmlLang lang={lang} />
      <a className="skip-link" href="#contenuto">{lang === 'en' ? 'Skip to content' : 'Vai al contenuto'}</a>
      <SiteHeader lang={lang} />
      <div id="contenuto"><PageTransition>{children}</PageTransition></div>
      <SiteFooter lang={lang} />
      <FloatingContacts lang={lang} />
      <CookieConsent lang={lang} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
