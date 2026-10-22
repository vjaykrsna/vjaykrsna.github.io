export default function HighlightsStrip({ items }) {
  return (
    <section className="space-y-6" aria-labelledby="highlights-title">
      <div className="flex items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent">
          <span>Snapshot</span>
        </div>
        <div
          className="h-px flex-1 bg-gradient-to-r from-white/10 via-white/5 to-transparent"
          aria-hidden
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-6 shadow-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
          >
            <div>
              <span className="inline-block rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
                {item.eyebrow}
              </span>
              <h3 className="mt-3 font-display text-lg font-bold text-base-100 group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-base-300 leading-relaxed">
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
