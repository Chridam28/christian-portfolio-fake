'use client';

/**
 * Static-export image loader. Each project screenshot ships in three sizes:
 * NAME-720.webp (phones, small cards), NAME-1440.webp (cards on retina, laptops)
 * and NAME.webp (full resolution, up to 2880px, for large previews on retina screens).
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith('/projects/') || !src.endsWith('.webp')) return src;
  if (width <= 720) return src.replace(/\.webp$/, '-720.webp');
  if (width <= 1440) return src.replace(/\.webp$/, '-1440.webp');
  return src;
}
