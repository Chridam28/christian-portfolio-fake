'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { isConfigured, siteConfig, whatsappUrl } from '@/data/site';

const whatsappMessage = 'Ciao Christian, vorrei parlarti di un progetto.';

function MessageIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5.5 5.75h13v9.5h-7.25L7 18.5v-3.25H5.5z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4.5 6.5h15v11h-15z" />
      <path d="m5 7 7 5.5L19 7" />
    </svg>
  );
}

export function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const hasWhatsapp = isConfigured(siteConfig.whatsapp);
  const hasEmail = isConfigured(siteConfig.email);
  const whatsappHref = hasWhatsapp
    ? `${whatsappUrl(siteConfig.whatsapp)}?text=${encodeURIComponent(whatsappMessage)}`
    : undefined;

  useEffect(() => {
    if (!isOpen) return;

    const closeFromOutside = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeFromKeyboard = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    document.addEventListener('pointerdown', closeFromOutside);
    document.addEventListener('keydown', closeFromKeyboard);
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    return () => {
      document.removeEventListener('pointerdown', closeFromOutside);
      document.removeEventListener('keydown', closeFromKeyboard);
    };
  }, [isOpen]);

  return (
    <div className={`floating-contact${isOpen ? ' is-open' : ''}`} ref={containerRef}>
      {isOpen && (
        <div className="floating-contact-menu" id={menuId} ref={menuRef} role="group" aria-label="Scegli come contattarmi">
          {whatsappHref ? (
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics="whatsapp_click"
              onClick={() => setIsOpen(false)}
            >
              <MessageIcon />
              <span><strong>WhatsApp</strong><small>Scrivimi un messaggio</small></span>
            </a>
          ) : (
            <span className="contact-option-disabled" aria-disabled="true">
              <MessageIcon />
              <span><strong>WhatsApp</strong><small>Contatto da configurare</small></span>
            </span>
          )}
          {hasEmail ? (
            <a href={`mailto:${siteConfig.email}`} onClick={() => setIsOpen(false)}>
              <EmailIcon />
              <span><strong>Email</strong><small>Invia una richiesta</small></span>
            </a>
          ) : (
            <span className="contact-option-disabled" aria-disabled="true">
              <EmailIcon />
              <span><strong>Email</strong><small>Contatto da configurare</small></span>
            </span>
          )}
        </div>
      )}
      <button
        ref={triggerRef}
        className="floating-contact-trigger"
        type="button"
        aria-label={isOpen ? 'Chiudi il menu contatti' : 'Apri il menu contatti'}
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <MessageIcon />
        <span>Contatti</span>
      </button>
    </div>
  );
}
