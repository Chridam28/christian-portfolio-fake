'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ContactIcon } from '@/components/ContactIcon';
import { contactLinks } from '@/data/site';

export function FloatingContacts() {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click" onClick={() => setIsOpen(false)}>
            <ContactIcon channel="whatsapp" />
            <span><strong>WhatsApp</strong><small>Scrivimi un messaggio</small></span>
          </a>
          <a href={contactLinks.email} onClick={() => setIsOpen(false)}>
            <ContactIcon channel="email" />
            <span><strong>Email</strong><small>Invia una richiesta</small></span>
          </a>
          <a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            <ContactIcon channel="instagram" />
            <span><strong>Instagram</strong><small>Apri il profilo</small></span>
          </a>
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
        <ContactIcon channel="whatsapp" />
        <span>Contatti</span>
      </button>
    </div>
  );
}
