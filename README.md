# Portfolio — Christian D’Ambrosio

Portfolio multipagina, responsive e statico, realizzato con Next.js, React e TypeScript. Next genera file HTML statici nella cartella `out`, adatti a Netlify senza server applicativo. I contenuti dei progetti sono separati dai componenti e possono crescere senza modificare il layout.

## Avvio locale

Requisiti: Node.js 22 (ultima versione disponibile della major) e pnpm 11.19.0.

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Il sito è disponibile su `http://localhost:3000`.

## Controlli e build

```bash
pnpm run lint
pnpm run typecheck
pnpm run build
pnpm run test
```

Il test va eseguito dopo la build: controlla route obbligatorie, pagina 404 personalizzata, sitemap, robots, manifest, configurazione Netlify Forms, link, ancore e risorse statiche locali.

## Dati da sostituire

Copia `.env.example` in `.env.local` e configura:

- `NEXT_PUBLIC_SITE_URL`: dominio definitivo completo di `https://`;
- `NEXT_PUBLIC_CONTACT_EMAIL`;
- `NEXT_PUBLIC_CONTACT_PHONE`;
- `NEXT_PUBLIC_WHATSAPP_NUMBER`, con prefisso internazionale;
- `NEXT_PUBLIC_INSTAGRAM_URL`;
- `NEXT_PUBLIC_LINKEDIN_URL`;
- `NEXT_PUBLIC_VAT_NUMBER`.

Senza queste variabili il sito mostra intenzionalmente placeholder espliciti e non crea link di contatto non validi.

## Aggiungere un progetto

1. Aggiungi le immagini ottimizzate in `public/projects/`.
2. Apri `data/projects.ts` e duplica un oggetto esistente nell’array `projects`.
3. Assegna `id` e `slug` univoci, scegli `kind` (`real`, `demo`, `internal`) e `status` (`online`, `concept`, `in-development`).
4. Compila contenuti, categorie, servizi, immagini, ordine e tema. Usa `externalUrl` solo per indirizzi realmente pubblicati.
5. Esegui typecheck, build e test. La scheda progetto, le gallerie e i filtri vengono generati automaticamente.

La struttura supporta decine di elementi: portfolio e filtri leggono tutti dallo stesso file dati.

## Pubblicazione su Netlify

Il file `netlify.toml` è già configurato:

- comando di build: `pnpm run build`;
- cartella pubblicata: `out`;
- runtime Node.js 22;
- pnpm 11.19.0, fissato tramite il campo `packageManager`;
- export statico esplicito, senza Next.js Runtime lato server;
- intestazioni di sicurezza di base;
- modulo predisposto per Netlify Forms con honeypot.

Prima della pubblicazione, crea su Netlify le variabili elencate in `.env.example`, collega il repository e verifica l’email destinataria del form. Nessun servizio analytics è attivo: il codice emette solo eventi predisposti (`project_open`, `demo_open`, `external_site_click`, `whatsapp_click`, `form_open`, `form_submit`) verso `dataLayer` se un sistema compatibile viene aggiunto in futuro.

Il sito non è stato pubblicato automaticamente.
