import { SiteChrome } from '@/components/SiteChrome';

export default function ItalianLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <SiteChrome lang="it">{children}</SiteChrome>;
}
