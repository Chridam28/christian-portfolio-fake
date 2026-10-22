import type { Metadata } from 'next';
import { SiteChrome } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: {
    default: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    template: '%s — Christian D’Ambrosio',
  },
  description: 'Bespoke websites for professionals and small businesses, designed and built in Trieste, Italy. From €350, first demo within 48 hours, edits included with the annual care plan.',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    alternateLocale: ['it_IT'],
    url: '/en/',
    siteName: 'Christian D’Ambrosio',
    title: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    description: 'Bespoke websites for professionals and small businesses. From €350, first demo within 48 hours.',
    images: [{ url: '/og.png', width: 1730, height: 909, alt: 'Christian D’Ambrosio — Freelance web designer and developer' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy',
    description: 'Bespoke websites for professionals and small businesses. From €350, first demo within 48 hours.',
    images: ['/og.png'],
  },
};

export default function EnglishLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome lang="en">{children}</SiteChrome>;
}
