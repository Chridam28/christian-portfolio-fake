import { pricing } from '@/data/pricing';
import { sectionIds, type Lang } from '@/lib/i18n';

export function Faq({ lang }: { lang: Lang }) {
  const { faqs } = pricing[lang];
  const t = lang === 'en'
    ? { eyebrow: 'Frequently asked questions', title: <>The answers,<br /><em>before you ask.</em></> }
    : { eyebrow: 'Domande frequenti', title: <>Le risposte<br /><em>prima di chiedere.</em></> };
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: lang,
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <section className="faq-section shell" id={sectionIds.faq[lang]} aria-labelledby="faq-title">
      <div className="faq-heading reveal">
        <p className="eyebrow dark">{t.eyebrow}</p>
        <h2 id="faq-title">{t.title}</h2>
      </div>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <details className="faq-item reveal" key={item.question} open={index === 0}>
            <summary><span>{String(index + 1).padStart(2, '0')}</span>{item.question}<b aria-hidden="true">+</b></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
    </section>
  );
}
