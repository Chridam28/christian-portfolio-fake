'use client';

// Bump when screenshots are replaced: /projects/* is served with an immutable
// one-year cache, so a new query string forces browsers to fetch the new files.
const VERSION = '2';

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith('/projects/') || !src.endsWith('.webp')) return src;
  let file = src;
  if (width <= 720) file = src.replace(/\.webp$/, '-720.webp');
  else if (width <= 1440) file = src.replace(/\.webp$/, '-1440.webp');
  return `${file}?v=${VERSION}`;
}
