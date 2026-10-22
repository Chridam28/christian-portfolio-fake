import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Contatti',
  description: 'Scrivi a Christian D’Ambrosio su WhatsApp, email o Instagram per un preventivo: landing page, sito one page o multipagina. Prima demo in 48 ore.',
  alternates: alternates('/contatti/', '/en/contact/', 'it'),
};

export default function Page() {
  return <ContactPage lang="it" />;
}
