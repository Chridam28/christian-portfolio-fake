import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/pages/PortfolioPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Siti online e demo interattive per psicologi, studi professionali, sport e strutture ricettive.',
  alternates: alternates('/portfolio/', '/en/portfolio/', 'it'),
};

export default function Page() {
  return <PortfolioPage lang="it" />;
}
