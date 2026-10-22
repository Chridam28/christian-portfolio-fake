import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: '*', allow: '/', disallow: ['/privacy', '/cookie', '/en/privacy', '/en/cookies'] }, sitemap: `${siteConfig.canonicalUrl}/sitemap.xml` };
}
