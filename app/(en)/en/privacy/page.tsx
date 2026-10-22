import type { Metadata } from 'next';
import { PrivacyPage } from '@/components/pages/LegalPages';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = { title: 'Privacy policy', robots: { index: false, follow: true }, alternates: alternates('/privacy/', '/en/privacy/', 'en') };

export default function Page() {
  return <PrivacyPage lang="en" />;
}
