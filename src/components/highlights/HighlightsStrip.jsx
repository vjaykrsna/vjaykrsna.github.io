export default function HighlightsStrip({ items }) {
  return (
    <section className="space-y-5 sm:space-y-6" aria-labelledby="highlights-title">
      <div className="flex items-center justify-between gap-4">
        <h2
          id="highlights-title"
          className="text-sm uppercase tracking-[0.4em] text-support-teal"
        >
          Snapshot
        </h2>
        <div
          className="h-px flex-1 bg-gradient-to-r from-base-700 via-base-800 to-transparent"
          aria-hidden
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {items.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col justify-between rounded-2xl border border-base-700/80 bg-gradient-to-br from-base-800/92 via-base-800/80 to-base-900/92 p-5 ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-support-teal/35 hover:from-base-800/95 hover:to-base-700/90 sm:rounded-3xl sm:p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-base-400">
              {item.eyebrow}
            </span>
            <div className="mt-4 space-y-3">
              <h3 className="text-lg font-semibold text-base-100 sm:text-xl">
                {item.title}
              </h3>
              <p className="text-sm text-base-200">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
