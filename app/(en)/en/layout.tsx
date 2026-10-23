import type { Metadata } from 'next';
import { SiteChrome } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: {
    default: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    template: '%s — Christian D’Ambrosio',
  },
  description: 'Custom websites for professionals and small businesses, designed and built in Trieste, Italy. From €350, first demo within 48 hours, edits included with the annual care plan.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['it_IT'],
    url: '/en/',
    siteName: 'Christian D’Ambrosio',
    title: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    description: 'Custom websites for professionals and small businesses. From €350, first demo within 48 hours.',
    images: [{ url: '/og-en.png', width: 1200, height: 630, alt: 'Christian D’Ambrosio — Freelance web designer and developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    description: 'Custom websites for professionals and small businesses. From €350, first demo within 48 hours.',
    images: ['/og-en.png'],
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome lang="en">{children}</SiteChrome>;
}
