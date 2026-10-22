import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { projectHref } from '@/lib/i18n';

export const dynamic = 'force-static';

const pages: Array<[string, string, number]> = [
  ['/', '/en/', 1],
  ['/servizi/', '/en/services/', 0.9],
  ['/portfolio/', '/en/portfolio/', 0.8],
  ['/chi-sono/', '/en/about/', 0.7],
  ['/contatti/', '/en/contact/', 0.7],
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.canonicalUrl;
  const lastModified = new Date('2026-10-22');
  const entry = (it: string, en: string, priority: number) => {
    const languages = { it: `${base}${it}`, en: `${base}${en}` };
    return [
      { url: `${base}${it}`, lastModified, priority, alternates: { languages } },
      { url: `${base}${en}`, lastModified, priority: Math.max(priority - 0.1, 0.1), alternates: { languages } },
    ];
  };
  return [
    ...pages.flatMap(([it, en, priority]) => entry(it, en, priority)),
    { url: `${base}/lavori/`, lastModified, priority: 0.5 },
    { url: `${base}/demo/`, lastModified, priority: 0.5 },
    ...projects.flatMap((project) => entry(projectHref(project.slug, 'it'), projectHref(project.slug, 'en'), project.kind === 'real' ? 0.8 : 0.6)),
  ];
}
