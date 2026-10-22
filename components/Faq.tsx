import { faqs } from '@/data/pricing';

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export function Faq() {
  return (
    <section className="faq-section shell" id="faq" aria-labelledby="faq-title">
      <div className="faq-heading reveal">
        <p className="eyebrow dark">Domande frequenti</p>
        <h2 id="faq-title">Le risposte<br /><em>prima di chiedere.</em></h2>
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
