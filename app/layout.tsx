import type { Metadata, Viewport } from 'next';
import { FloatingContacts } from '@/components/FloatingContacts';
import { PageTransition } from '@/components/PageTransition';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { siteConfig } from '@/data/site';
import './globals.css';

const metadataBase = new URL(siteConfig.canonicalUrl);

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: 'Christian D’Ambrosio — Web designer & developer freelance',
    template: '%s — Christian D’Ambrosio',
  },
  description: 'Siti web su misura per professionisti e piccole attività, da Trieste in tutta Italia. Da 350 €, prima demo in 48 ore, modifiche incluse con la gestione annuale.',
  applicationName: 'Christian D’Ambrosio',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    url: '/',
    siteName: 'Christian D’Ambrosio',
    title: 'Christian D’Ambrosio — Web designer & developer freelance',
    description: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Christian D’Ambrosio — Web designer e sviluppatore freelance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian D’Ambrosio — Web designer & developer freelance',
    description: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
    images: ['/og.png'],
  },
  icons: { icon: '/og.png', apple: '/og.png' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#101311',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteConfig.name,
  description: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
  url: siteConfig.canonicalUrl,
  areaServed: 'Italia',
  address: { '@type': 'PostalAddress', addressLocality: 'Trieste', addressCountry: 'IT' },
  founder: { '@type': 'Person', name: siteConfig.name, jobTitle: siteConfig.role },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-scroll-behavior="smooth">
      <body id="top">
        <a className="skip-link" href="#contenuto">Vai al contenuto</a>
        <SiteHeader />
        <div id="contenuto"><PageTransition>{children}</PageTransition></div>
        <SiteFooter />
        <FloatingContacts />
        <SiteEnhancements />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
