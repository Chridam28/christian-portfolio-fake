import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/pages/PortfolioPage';
import { alternates } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Live websites and interactive demos for psychologists, professional practices, sport and hospitality.',
  alternates: alternates('/portfolio/', '/en/portfolio/', 'en'),
};

export default function Page() {
  return <PortfolioPage lang="en" />;
}
