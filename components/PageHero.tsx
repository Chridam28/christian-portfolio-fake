type PageHeroProps = {
  eyebrow: string;
  title: string;
  intro: string;
  meta?: string;
};

export function PageHero({ eyebrow, title, intro, meta }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid reveal">
        <p className="eyebrow">{eyebrow}</p>
        <div>
          <h1>{title}</h1>
          <p>{intro}</p>
        </div>
        {meta && <p className="page-hero-meta">{meta}</p>}
      </div>
    </section>
  );
}
