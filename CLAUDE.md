# Christian D’Ambrosio — portfolio

Sito personale di Christian D’Ambrosio, web designer e sviluppatore freelance a Trieste (e traduttore professionista).
Online su https://christiandambrosio.com (hosting Netlify, progetto `sitoportfolio`).

## Come si lavora su questo repo

- Rispondi a Christian in **italiano**, in modo diretto e concreto, senza gergo tecnico superfluo.
- Ogni modifica va su un **ramo nuovo creato da `main`** e diventa una **pull request**; Christian la controlla sull'anteprima Netlify (`deploy-preview-<n>--sitoportfolio.netlify.app`) e la unisce lui. Non fare push su `main`.
- Messaggi di commit e titoli delle PR in italiano.
- Christian è traduttore: la versione inglese va curata con attenzione, in **inglese britannico** (organise, enquiry, care plan). Niente "bespoke": usa "custom".

## Stack

- Next.js 16 con export statico (`output: 'export'`, `trailingSlash`), React 19, TypeScript, pnpm.
- `pnpm run build` = `next build` + `scripts/postbuild.mjs` (imposta `lang="en"` sulle pagine inglesi e scrive in `out/_headers` una Content-Security-Policy per pagina basata sugli hash degli script inline).
- `pnpm test` (dopo la build) = `scripts/validate-site.mjs`: route obbligatorie, 404, sitemap, robots, manifest, link, ancore e risorse.
- Se aggiungi un servizio esterno (script, font, API), aggiorna la CSP in `scripts/postbuild.mjs`, altrimenti il browser lo blocca.

## Struttura

- `app/(it)` sono le pagine italiane alla radice, `app/(en)/en` quelle inglesi. I contenuti delle pagine sono componenti condivisi in `components/pages/*` che ricevono `lang`.
- `lib/i18n.ts` contiene percorsi IT/EN, `translatePath`, hreflang e id delle sezioni.
- `data/site.ts` contiene nome, contatti (email, WhatsApp, Instagram), P.IVA `09207350720`, `canonicalUrl` (https://christiandambrosio.com) e `gaMeasurementId` (`G-YT071467EH`).
- `data/projects.ts` contiene i progetti in italiano; `data/projects-en.ts` contiene i testi inglesi, uniti per slug con `getProjects(lang)` / `getProject(slug, lang)`.
- `data/pricing.ts` contiene pacchetti, condizioni di pagamento, gestione annuale e FAQ (IT/EN).
- `components/pages/LegalPages.tsx` contiene privacy e cookie policy (IT/EN).

## Offerta (non cambiare senza chiedere)

- Landing page 350 €; sito one page 500 € + 500 €/anno; sito multipagina (fino a 5 pagine, con inglese) 1.000 € + 500 €/anno.
- La gestione annuale comprende dominio, hosting, backup, HTTPS e **tutte le modifiche ai contenuti** (da mettere in evidenza); i lavori grossi si preventivano a parte.
- Prima demo funzionante entro 48 ore dall'invio di testi e immagini.
- Pagamento per intero solo all'accettazione della demo, oppure in 3 rate.

## Immagini dei progetti

- In `public/projects/` ogni screenshot esiste in tre misure: `NOME.webp` (desktop 2880×2000 o mobile 780×1688), `NOME-1440.webp` e `NOME-720.webp`. `lib/image-loader.ts` sceglie la misura e aggiunge `?v=2`, perché `/projects/*` ha una cache immutabile di un anno. Se sostituisci un'immagine, incrementa `VERSION`.
- **College Life Italia: non mostrare mai nomi di atlete** in nessuno screenshot.
- Le recensioni sono state tolte: si rimettono solo quando Christian avrà testimonianze vere.

## Statistiche e cookie

- Google Analytics 4 si carica **solo dopo il consenso** (`lib/analytics.ts`, `components/CookieConsent.tsx`). "Accetta" e "Rifiuta" hanno lo stesso peso, la X equivale a rifiutare, la scelta dura 6 mesi, e "Preferenze cookie" nel footer permette di cambiarla.
- Gli eventi vengono tracciati in `components/SiteEnhancements.tsx`: `generate_lead` (WhatsApp, email, telefono, Instagram), `visit_project_site`, `select_content`, `cta_click`, `filter_portfolio`, `carousel_navigate`, `faq_open`, `language_switch`, `contact_menu_open`, `menu_open`, `scroll_depth`, `section_view`.
- Se cambiano gli strumenti usati, aggiorna privacy e cookie policy.

## Da non toccare

- `public/google01038b8d25fafa30.html`: è la verifica di Google Search Console e non va cancellato.

## Lavori aperti / idee già discusse

- **SEO:** titoli più descrittivi per le pagine interne e le schede progetto; dati strutturati più ricchi (Person con `sameAs`, prezzi e offerte, CreativeWork per i progetti, BreadcrumbList); togliere il `Disallow` di privacy e cookie da `robots.txt` (hanno già `noindex`) e dare alla privacy una descrizione propria; eventuale `llms.txt`.
- **UX:**
  - testi minimi a 12 px (molte etichette sono tra 9 e 11 px);
  - contrasto della frase in arancione trasparente nella fascia "In breve", del testo introduttivo di "Cosa cambia in pratica" e dei titoli del footer;
  - aree cliccabili di almeno 44 px nel footer, su "Dettagli progetto" e su "Torna su";
  - il pulsante contatti fisso copre il testo su mobile;
  - nelle card dei progetti, dare più peso alla scheda che al link esterno;
  - home lunga su mobile.
- **Fuori dal sito, a carico di Christian:**
  - in Search Console, inviare `sitemap.xml`;
  - creare il Google Business Profile;
  - ottenere un link "Sito realizzato da Christian D’Ambrosio" sui siti dei clienti (fadelfederica.com, andreaappierto.com, rostercollegelifeitalia.com);
  - in GA4, impostare la conservazione dei dati a 14 mesi e segnare `generate_lead` come evento chiave.
