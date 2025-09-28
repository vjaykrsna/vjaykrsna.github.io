export default function HighlightsStrip({ items }) {
  return (
    <section className="space-y-6" aria-labelledby="highlights-title">
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="group flex h-full flex-col justify-between rounded-3xl border border-base-700 bg-gradient-to-br from-base-900 to-base-800 p-6 transition hover:-translate-y-1 hover:border-support-teal/40 hover:from-base-900 hover:to-base-700"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.4em] text-base-400">
              {item.eyebrow}
            </span>
            <div className="mt-4 space-y-3">
              <h3 className="text-xl font-semibold text-base-100">
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
