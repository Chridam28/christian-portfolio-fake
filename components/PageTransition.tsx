'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  const router = useRouter();
  const [exitingPath, setExitingPath] = useState<string | null>(null);
  const pendingHref = useRef<string | null>(null);
  const isExiting = useRef(false);

  useEffect(() => {
    pendingHref.current = null;
    isExiting.current = false;
  }, [pathname]);

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

      if (isExiting.current) return;
      isExiting.current = true;
      setExitingPath(pathname);
    };

    document.addEventListener('click', handleInternalNavigation, true);
    return () => document.removeEventListener('click', handleInternalNavigation, true);
  }, [pathname]);

  const completeNavigation = useCallback((event: React.AnimationEvent<HTMLDivElement>) => {
    if (event.currentTarget !== event.target || event.animationName !== 'page-content-out') return;
    const href = pendingHref.current;
    if (href) router.push(href);
  }, [router]);

  return (
    <div
      className={`page-transition${exitingPath === pathname ? ' page-transition--exiting' : ''}`}
      key={pathname}
      onAnimationEnd={completeNavigation}
    >
      {children}
    </div>
  );
}
