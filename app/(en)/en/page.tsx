import type { Metadata } from 'next';
import { HomePage } from '@/components/pages/HomePage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = { alternates: alternates('/', '/en/', 'en') };

export default function Home() {
  return <HomePage lang="en" />;
}
