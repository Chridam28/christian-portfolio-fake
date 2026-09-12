'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [sourcePath, setSourcePath] = useState<string | null>(null);
  const pendingHref = useRef<string | null>(null);
  const sourcePathRef = useRef<string | null>(null);
  const navigationStarted = useRef(false);
  const isCovering = sourcePath !== null && sourcePath === pathname;
  const isRevealing = sourcePath !== null && sourcePath !== pathname;

  const clearTransition = useCallback(() => {
    pendingHref.current = null;
    sourcePathRef.current = null;
    navigationStarted.current = false;
    setSourcePath(null);
  }, []);

  const continueNavigation = useCallback(() => {
    if (navigationStarted.current) return;
    const href = pendingHref.current;
    if (!href) {
      clearTransition();
      return;
    }

    navigationStarted.current = true;
    router.push(href);
  }, [clearTransition, router]);

  useEffect(() => {
    const handleInternalNavigation = (event: MouseEvent) => {
      if (
        event.defaultPrevented
        || event.button !== 0
        || event.metaKey
        || event.ctrlKey
        || event.shiftKey
        || event.altKey
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (
        !anchor
        || anchor.hasAttribute('download')
        || (anchor.target && anchor.target !== '_self')
        || anchor.getAttribute('rel')?.split(/\s+/).includes('external')
      ) return;

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);
      if (
        destination.origin !== current.origin
        || (destination.pathname === current.pathname && destination.search === current.search)
      ) return;

      event.preventDefault();
      pendingHref.current = `${destination.pathname}${destination.search}${destination.hash}`;

      if (sourcePathRef.current) return;
      navigationStarted.current = false;
      sourcePathRef.current = pathname;
      setSourcePath(pathname);
    };

    document.addEventListener('click', handleInternalNavigation, true);
    return () => document.removeEventListener('click', handleInternalNavigation, true);
  }, [pathname]);

  useEffect(() => {
    if (!isCovering) return;
    const navigationFallback = window.setTimeout(continueNavigation, 260);
    const visibilityFallback = window.setTimeout(clearTransition, 1200);
    return () => {
      window.clearTimeout(navigationFallback);
      window.clearTimeout(visibilityFallback);
    };
  }, [clearTransition, continueNavigation, isCovering]);

  useEffect(() => {
    if (!isRevealing) return;
    const visibilityFallback = window.setTimeout(clearTransition, 600);
    return () => window.clearTimeout(visibilityFallback);
  }, [clearTransition, isRevealing]);

  const handleOverlayTransitionEnd = useCallback((event: React.TransitionEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target || event.propertyName !== 'opacity') return;
    if (isCovering) continueNavigation();
    if (isRevealing) clearTransition();
  }, [clearTransition, continueNavigation, isCovering, isRevealing]);

  const overlayClassName = [
    'page-transition-overlay',
    isCovering ? 'page-transition-overlay--covering' : '',
    isRevealing ? 'page-transition-overlay--revealing' : '',
  ].filter(Boolean).join(' ');

  return (
    <>
      <div className="page-transition-content" key={pathname}>{children}</div>
      <div className={overlayClassName} aria-hidden="true" onTransitionEnd={handleOverlayTransitionEnd} />
    </>
  );
}
