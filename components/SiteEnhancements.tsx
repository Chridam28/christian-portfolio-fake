'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { track } from '@/lib/analytics';

/** Where on the page an element sits, sent with events so reports show which CTA worked. */
function locationOf(element: Element) {
  if (element.closest('.floating-contact')) return 'floating_button';
  if (element.closest('header')) return 'header';
  if (element.closest('footer')) return 'footer';
  if (element.closest('.cookie-banner')) return 'cookie_banner';
  const section = element.closest<HTMLElement>('section');
  if (!section) return 'page';
  return section.id || section.className.split(' ')[0] || 'section';
}

const labelOf = (element: Element) => (element.getAttribute('aria-label') || element.textContent || '').replace(/[↗↓↑→←]/g, '').replace(/\s+/g, ' ').trim().slice(0, 80);

function contactMethod(url: URL) {
  if (url.protocol === 'mailto:') return 'email';
  if (url.protocol === 'tel:') return 'phone';
  if (/(^|\.)wa\.me$|whatsapp\.com$/.test(url.hostname)) return 'whatsapp';
  if (/instagram\.com$/.test(url.hostname)) return 'instagram';
  return null;
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

    const onClick = (event: Event) => {
      const target = event.target as Element;
      const menuLink = target.closest<HTMLAnchorElement>('.mobile-menu a');
      menuLink?.closest<HTMLDetailsElement>('details')?.removeAttribute('open');

      const button = target.closest<HTMLButtonElement>('button');
      if (button) {
        if (button.closest('.filter-bar')) track('filter_portfolio', { filter: labelOf(button) });
        else if (button.closest('.carousel-controls')) track('carousel_navigate', { direction: button === button.parentElement?.firstElementChild ? 'previous' : 'next' });
        else if (button.classList.contains('floating-contact-trigger') && button.getAttribute('aria-expanded') === 'false') track('contact_menu_open');
        return;
      }

      const link = target.closest<HTMLAnchorElement>('a[href]');
      if (!link) return;
      const url = new URL(link.href, window.location.href);
      const location = locationOf(link);
      const method = contactMethod(url);

      if (method) {
        // Key event: someone started a conversation.
        track('generate_lead', { method, location, page_path: window.location.pathname });
        return;
      }
      if (link.closest('.lang-switch')) {
        track('language_switch', { language: link.hreflang || labelOf(link) });
        return;
      }
      if (url.origin !== window.location.origin) {
        const project = link.closest<HTMLElement>('[data-project]')?.dataset.project;
        if (project || link.dataset.analytics === 'external_site_click') {
          // Demos live on *.netlify.app; client sites on their own domains.
          track('visit_project_site', { project, project_type: url.hostname.endsWith('.netlify.app') ? 'demo' : 'live', link_domain: url.hostname, location });
        }
        return; // other outbound links are recorded by GA's enhanced measurement
      }
      const projectMatch = url.pathname.match(/^\/(?:en\/projects|progetti)\/([^/]+)/);
      if (projectMatch && projectMatch[1] !== window.location.pathname.split('/').filter(Boolean).pop()) {
        track('select_content', { content_type: 'project', item_id: projectMatch[1], location });
        return;
      }
      if (/^\/(contatti|en\/contact)\/?$/.test(url.pathname)) {
        track('cta_click', { cta: 'contact', label: labelOf(link), location });
        return;
      }
      if (link.classList.contains('button') || link.classList.contains('text-link') || link.classList.contains('header-cta')) {
        track('cta_click', { cta: url.pathname + url.hash, label: labelOf(link), location });
      }
    };

    // FAQ answers and the mobile menu are <details>; the toggle event does not bubble, so listen in capture.
    const onToggle = (event: Event) => {
      const details = event.target as HTMLDetailsElement;
      if (!details.open) return;
      if (details.classList.contains('faq-item')) track('faq_open', { question: labelOf(details.querySelector('summary') ?? details) });
      else if (details.classList.contains('mobile-menu')) track('menu_open');
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('click', onClick);
    document.addEventListener('toggle', onToggle, true);
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('click', onClick);
      document.removeEventListener('toggle', onToggle, true);
    };
  }, []);

  // Per page: how far people scroll and which key sections (pricing, process, FAQ, contact) they actually see.
  useEffect(() => {
    const reached = new Set<number>();
    const marks = [25, 50, 75, 100];
    const onScroll = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      if (available <= 0) return;
      const percent = Math.round((window.scrollY / available) * 100);
      marks.forEach((mark) => {
        if (percent >= mark && !reached.has(mark)) {
          reached.add(mark);
          track('scroll_depth', { percent: mark, page_path: window.location.pathname });
        }
      });
    };

    const keySections = document.querySelectorAll<HTMLElement>('main section[id], .pricing-section, .faq-section, .contact-band');
    const seen = new Set<string>();
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const name = element.id || element.className.split(' ')[0];
        if (seen.has(name)) return;
        seen.add(name);
        track('section_view', { section: name, page_path: window.location.pathname });
        sectionObserver.unobserve(element);
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    keySections.forEach((section) => sectionObserver.observe(section));

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      sectionObserver.disconnect();
    };
  }, [pathname]);

  return <div className="scroll-progress" aria-hidden="true" />;
}
