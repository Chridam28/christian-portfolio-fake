import type { Metadata } from 'next';
import { CookiePage } from '@/components/pages/LegalPages';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = { title: 'Cookie policy', robots: { index: false, follow: true }, alternates: alternates('/cookie/', '/en/cookies/', 'it') };

export default function Page() {
  return <CookiePage lang="it" />;
}
