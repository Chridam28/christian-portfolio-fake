import type { Metadata, Viewport } from 'next';
import { Instrument_Serif, Inter_Tight } from 'next/font/google';
import { SiteEnhancements } from '@/components/SiteEnhancements';
import { siteConfig } from '@/data/site';
import './globals.css';

const sans = Inter_Tight({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const serif = Instrument_Serif({
  subsets: ['latin', 'latin-ext'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.canonicalUrl),
  title: {
    default: 'Christian D’Ambrosio — Web designer freelance a Trieste',
    template: '%s — Christian D’Ambrosio',
  },
  description: 'Siti web su misura per professionisti e piccole attività, da Trieste in tutta Italia. Da 350 €, prima demo in 48 ore, modifiche incluse con la gestione annuale.',
  applicationName: 'Christian D’Ambrosio',
  openGraph: {
    type: 'website',
    locale: 'it_IT',
    alternateLocale: ['en_GB'],
    url: '/',
    siteName: 'Christian D’Ambrosio',
    title: 'Christian D’Ambrosio — Web designer freelance a Trieste',
    description: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Christian D’Ambrosio — Web designer e sviluppatore freelance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian D’Ambrosio — Web designer freelance a Trieste',
    description: 'Siti web su misura per professionisti e piccole attività. Da 350 €, prima demo in 48 ore.',
    images: ['/og.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#101311',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it" data-scroll-behavior="smooth" className={`${sans.variable} ${serif.variable}`}>
      <body id="top">
        {children}
        <SiteEnhancements />
      </body>
    </html>
  );
}
