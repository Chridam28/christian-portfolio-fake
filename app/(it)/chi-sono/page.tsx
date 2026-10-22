import type { Metadata } from 'next';
import { AboutPage } from '@/components/pages/AboutPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Chi sono',
  description: 'Christian D’Ambrosio, web designer e sviluppatore freelance a Trieste. Siti per professionisti e piccole attività in tutta Italia.',
  alternates: alternates('/chi-sono/', '/en/about/', 'it'),
};

export default function Page() {
  return <AboutPage lang="it" />;
}
