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

Il test va eseguito dopo la build: controlla route obbligatorie, pagina 404 personalizzata, sitemap, robots, manifest, contatti diretti, link, ancore e risorse statiche locali.

## Configurazione

Copia `.env.example` in `.env.local` e configura:

- `NEXT_PUBLIC_SITE_URL`: dominio definitivo completo di `https://`;
- `NEXT_PUBLIC_VAT_NUMBER`.

Email, WhatsApp e Instagram sono centralizzati in `data/site.ts` e condivisi da pagina Contatti, footer e pulsante flottante.

## Lingue

Il sito è in italiano (radice) e inglese (`/en/`). Le pagine sono componenti condivisi in `components/pages/` che ricevono `lang`; i testi italiani dei progetti sono in `data/projects.ts`, quelli inglesi in `data/projects-en.ts`; prezzi e FAQ in `data/pricing.ts`. Le corrispondenze tra URL italiani e inglesi (usate dal selettore lingua, da hreflang e dalla sitemap) sono in `lib/i18n.ts`.

## Build, sicurezza e immagini

- `pnpm run build` esegue `next build` e poi `scripts/postbuild.mjs`, che imposta `lang="en"` nelle pagine inglesi e genera in `out/_headers` una Content Security Policy per pagina basata sugli hash degli script inline.
- I font (Inter Tight e Instrument Serif) sono scaricati in build da `next/font` e serviti dal dominio del sito: nessuna richiesta a Google dai visitatori.
- Ogni screenshot in `public/projects/` ha una versione `-720.webp` per telefoni e schede piccole; il loader in `lib/image-loader.ts` sceglie quella giusta. Se aggiungi un'immagine, crea anche la variante da 720 px.

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
- pagina Contatti basata su collegamenti diretti a WhatsApp, email e Instagram.

Prima della pubblicazione, crea su Netlify le variabili elencate in `.env.example` e collega il repository. Nessun servizio analytics è attivo: il codice emette solo eventi predisposti (`project_open`, `demo_open`, `external_site_click`, `whatsapp_click`) verso `dataLayer` se un sistema compatibile viene aggiunto in futuro.

Il sito non è stato pubblicato automaticamente.
