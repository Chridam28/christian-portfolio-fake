import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: { absolute: 'Christian D’Ambrosio — Freelance web designer in Trieste, Italy' },
  alternates: alternates('/', '/en/', 'en'),
};

export default function Home() {
  return <HomePage lang="en" />;
}
