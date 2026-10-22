'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ContactIcon } from '@/components/ContactIcon';
import { contactLinks as getContactLinks } from '@/data/site';
import type { Lang } from '@/lib/i18n';

const copy = {
  it: { group: 'Scegli come contattarmi', whatsapp: 'Scrivimi un messaggio', email: 'Invia una richiesta', instagram: 'Apri il profilo', close: 'Chiudi il menu contatti', open: 'Apri il menu contatti', label: 'Contatti' },
  en: { group: 'Choose how to contact me', whatsapp: 'Send me a message', email: 'Send an enquiry', instagram: 'Open my profile', close: 'Close the contact menu', open: 'Open the contact menu', label: 'Contact' },
};

export function FloatingContacts({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const contactLinks = getContactLinks(lang);
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
        <div className="floating-contact-menu" id={menuId} ref={menuRef} role="group" aria-label={t.group}>
          <a href={contactLinks.whatsapp} target="_blank" rel="noopener noreferrer" data-analytics="whatsapp_click" onClick={() => setIsOpen(false)}>
            <ContactIcon channel="whatsapp" />
            <span><strong>WhatsApp</strong><small>{t.whatsapp}</small></span>
          </a>
          <a href={contactLinks.email} onClick={() => setIsOpen(false)}>
            <ContactIcon channel="email" />
            <span><strong>Email</strong><small>{t.email}</small></span>
          </a>
          <a href={contactLinks.instagram} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
            <ContactIcon channel="instagram" />
            <span><strong>Instagram</strong><small>{t.instagram}</small></span>
          </a>
        </div>
      )}
      <button
        ref={triggerRef}
        className="floating-contact-trigger"
        type="button"
        aria-label={isOpen ? t.close : t.open}
        aria-controls={menuId}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <ContactIcon channel="whatsapp" />
        <span>{t.label}</span>
      </button>
    </div>
  );
}
