'use client';

/**
 * Static-export image loader: project screenshots ship in two sizes,
 * the original (up to 1440px) and a "-720" version for phones and small cards.
 */
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith('/projects/') || !src.endsWith('.webp')) return src;
  return width <= 720 ? src.replace(/\.webp$/, '-720.webp') : src;
}
