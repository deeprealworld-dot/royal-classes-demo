export function SectionSkeleton({
  variant = "cards",
  label,
}: {
  variant?: "hero" | "split" | "cards" | "compact";
  label?: string;
}) {
  const cards = variant === "cards" ? 8 : variant === "compact" ? 4 : 0;

  return (
    <section
      className={`section-skeleton section-skeleton-${variant}`}
      aria-label={label ?? "Loading section"}
      aria-busy="true"
    >
      <div className="shell section-skeleton-inner">
        {variant === "hero" && (
          <>
            <div className="skeleton-copy">
              <span className="skeleton-line skeleton-kicker" />
              <span className="skeleton-line skeleton-title" />
              <span className="skeleton-line skeleton-title skeleton-title-short" />
              <span className="skeleton-line skeleton-text" />
              <span className="skeleton-line skeleton-text skeleton-text-short" />
              <div className="skeleton-actions"><span /><span /></div>
            </div>
            <span className="skeleton-media" />
          </>
        )}

        {variant === "split" && (
          <>
            <span className="skeleton-media skeleton-media-wide" />
            <div className="skeleton-copy">
              <span className="skeleton-line skeleton-kicker" />
              <span className="skeleton-line skeleton-heading" />
              <span className="skeleton-line skeleton-text" />
              <span className="skeleton-line skeleton-text" />
              <span className="skeleton-line skeleton-text skeleton-text-short" />
            </div>
          </>
        )}

        {(variant === "cards" || variant === "compact") && (
          <>
            <div className="skeleton-section-heading">
              <span className="skeleton-line skeleton-kicker" />
              <span className="skeleton-line skeleton-heading" />
              <span className="skeleton-line skeleton-text skeleton-text-short" />
            </div>
            <div className="skeleton-card-grid">
              {Array.from({ length: cards }, (_, index) => (
                <span className="skeleton-card" key={index}>
                  <i /><b /><em /><em />
                </span>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export function RouteSectionLoader() {
  return (
    <main className="route-section-loader">
      <div className="route-header-skeleton" aria-hidden="true">
        <div className="shell"><span /><span /><span /></div>
      </div>
      <SectionSkeleton variant="hero" label="Loading introduction" />
      <SectionSkeleton variant="split" label="Loading information" />
      <SectionSkeleton variant="cards" label="Loading programmes" />
      <SectionSkeleton variant="compact" label="Loading details" />
    </main>
  );
}
