import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Message Christian D’Ambrosio on WhatsApp, by email or on Instagram for a quote: landing page, one-page or multi-page website. First demo within 48 hours.',
  alternates: alternates('/contatti/', '/en/contact/', 'en'),
};

export default function Page() {
  return <ContactPage lang="en" />;
}
