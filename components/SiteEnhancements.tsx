'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

declare global {
  interface Window { dataLayer?: Array<Record<string, unknown>> }
}

export function SiteEnhancements() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('motion-ready');
    const progress = document.querySelector<HTMLElement>('.scroll-progress');
    const onScroll = () => {
      if (!progress) return;
      const available = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${available > 0 ? window.scrollY / available : 0})`;
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    const trackClick = (event: Event) => {
      const menuLink = (event.target as Element).closest<HTMLAnchorElement>('.mobile-menu a');
      menuLink?.closest<HTMLDetailsElement>('details')?.removeAttribute('open');

      const target = (event.target as Element).closest<HTMLElement>('[data-analytics]');
      if (!target) return;
      const name = target.dataset.analytics;
      if (!name) return;
      const detail = { event: name, project: target.dataset.project };
      window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail }));
      window.dataLayer?.push(detail);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', trackClick);
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', trackClick);
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
