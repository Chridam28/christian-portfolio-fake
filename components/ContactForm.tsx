'use client';

import { FormEvent, useRef, useState } from 'react';
import { budgetRanges, contactProjectTypes } from '@/data/site';

type FormState = 'idle' | 'sending' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const opened = useRef(false);

  const signalOpen = () => {
    if (opened.current) return;
    opened.current = true;
    window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: { event: 'form_open' } }));
    window.dataLayer?.push({ event: 'form_open' });
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setState('sending');

    try {
      const formData = new FormData(form);
      const body = new URLSearchParams();
      formData.forEach((value, key) => body.append(key, String(value)));
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!response.ok) throw new Error('Invio non riuscito');
      setState('success');
      form.reset();
      window.dispatchEvent(new CustomEvent('portfolio:analytics', { detail: { event: 'form_submit' } }));
      window.dataLayer?.push({ event: 'form_submit' });
    } catch {
      setState('error');
    }
  }

  return (
    <form
      className="contact-form"
      name="richiesta-progetto"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="company-website"
      onFocus={signalOpen}
      onSubmit={handleSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="richiesta-progetto" />
      <p className="honeypot" aria-hidden="true">
        <label>Non compilare questo campo <input name="company-website" tabIndex={-1} autoComplete="off" /></label>
      </p>
      <div className="form-grid">
        <label>Nome e cognome <span>*</span><input name="nome" type="text" autoComplete="name" required /></label>
        <label>Attività <span>*</span><input name="attivita" type="text" autoComplete="organization" required /></label>
        <label>Email <span>*</span><input name="email" type="email" autoComplete="email" required /></label>
        <label>Telefono <small>facoltativo</small><input name="telefono" type="tel" autoComplete="tel" /></label>
        <label>Tipo di progetto <span>*</span>
          <select name="tipo-progetto" required defaultValue="">
            <option value="" disabled>Seleziona una voce</option>
            {contactProjectTypes.map((type) => <option key={type}>{type}</option>)}
          </select>
        </label>
        <label>Budget indicativo <small>facoltativo</small>
          <select name="budget" defaultValue="">
            <option value="" disabled>Seleziona una fascia</option>
            {budgetRanges.map((range) => <option key={range}>{range}</option>)}
          </select>
        </label>
        <label className="full-field">Messaggio <span>*</span><textarea name="messaggio" rows={7} required placeholder="Descrivi la tua attività, cosa vorresti realizzare e se hai già una scadenza in mente." /></label>
      </div>
      <label className="consent-field">
        <input type="checkbox" name="privacy" required />
        <span>Ho letto la <a href="/privacy">privacy policy</a> e acconsento al trattamento dei dati per ricevere una risposta. *</span>
      </label>
      <div className="form-submit-row">
        <button className="button button-accent" type="submit" disabled={state === 'sending'}>
          {state === 'sending' ? 'Invio in corso…' : 'Raccontami il tuo progetto'} <span aria-hidden="true">↗</span>
        </button>
        <p className={`form-status ${state}`} role="status" aria-live="polite">
          {state === 'success' && 'Grazie. Il messaggio è stato inviato correttamente.'}
          {state === 'error' && 'Non sono riuscito a inviare il messaggio. Riprova o usa uno dei contatti indicati.'}
        </p>
      </div>
    </form>
  );
}
