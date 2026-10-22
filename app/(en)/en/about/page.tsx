import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'About',
  description: 'Christian D’Ambrosio, freelance web designer and developer based in Trieste, Italy. Websites for professionals and small businesses.',
  alternates: alternates('/chi-sono/', '/en/about/', 'en'),
};

export default function Page() {
  return <AboutPage lang="en" />;
}
