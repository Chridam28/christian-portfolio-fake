import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Servizi e prezzi',
  description: 'Landing page 350 €, sito one page 500 €, sito multipagina 1.000 €. Gestione annuale con tutte le modifiche ai contenuti incluse. Prima demo in 48 ore.',
  alternates: alternates('/servizi/', '/en/services/', 'it'),
};

export default function Page() {
  return <ServicesPage lang="it" />;
}
