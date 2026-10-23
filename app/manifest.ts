import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return { name: 'Christian D’Ambrosio — Portfolio', short_name: 'Christian D’Ambrosio', description: 'Siti web e strumenti digitali su misura.', start_url: '/', display: 'standalone', background_color: '#101311', theme_color: '#101311', lang: 'it', icons: [{ src: '/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: '/icon-512.png', sizes: '512x512', type: 'image/png' }] };
}
