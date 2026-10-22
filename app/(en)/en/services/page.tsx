import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Services and pricing',
  description: 'Landing page €350, one-page website €500, multi-page website €1,000. Annual care plan with every content edit included. First demo within 48 hours.',
  alternates: alternates('/servizi/', '/en/services/', 'en'),
};

export default function Page() {
  return <ServicesPage lang="en" />;
}
