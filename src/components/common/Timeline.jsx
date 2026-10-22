export default function Timeline({ items }) {
  return (
    <ol className="relative ml-3 space-y-6 border-l border-white/10 sm:ml-5 lg:ml-8">
      {items.map((item) => {
        const summaryClass = [
          "text-sm text-base-300 leading-relaxed",
          item.summaryPreserveWhitespace ? "whitespace-pre-line" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={item.title} className="group relative pl-7 sm:pl-9">
            {/* Timeline Dot Indicator */}
            <div className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-white/20 bg-base-950 transition-all duration-200 group-hover:scale-125 group-hover:border-accent group-hover:bg-accent" />

            <div className="space-y-3.5 rounded-2xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-5 sm:p-6 shadow-xl transition-all duration-300 group-hover:border-accent/40 group-hover:-translate-y-0.5">
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <h3 className="font-display text-lg sm:text-xl font-bold text-base-100 group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.timeframe ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-xs text-accent">
                    {item.timeframe}
                  </span>
                ) : null}
              </div>

              {item.summary ? (
                <p className={summaryClass}>{item.summary}</p>
              ) : null}

              {Array.isArray(item.bullets) && item.bullets.length > 0 ? (
                <ul className="space-y-2 text-sm text-base-300">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={`${item.title}-bullet-${idx}`}
                      className="flex items-start gap-2.5"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent/70" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
