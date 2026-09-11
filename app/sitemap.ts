import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/portfolio', '/lavori', '/demo', '/servizi', '/chi-sono', '/contatti', '/privacy', '/cookie'];
  return [
    ...routes.map((route) => ({ url: `${siteConfig.canonicalUrl}${route}`, lastModified: new Date('2026-09-11'), changeFrequency: route === '' ? 'monthly' as const : 'yearly' as const, priority: route === '' ? 1 : 0.7 })),
    ...projects.map((project) => ({ url: `${siteConfig.canonicalUrl}/progetti/${project.slug}`, lastModified: new Date('2026-09-11'), changeFrequency: 'yearly' as const, priority: project.kind === 'real' ? 0.9 : 0.6 })),
  ];
}
