export default function Timeline({ items }) {
  return (
    <ol className="relative ml-2 space-y-4 border-l border-base-700 sm:ml-4 sm:space-y-5 lg:ml-8">
      {items.map((item) => {
        const summaryClass = [
          "text-sm text-base-200",
          item.summaryPreserveWhitespace ? "whitespace-pre-line" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={item.title} className="group relative pl-6 sm:pl-8">
            <div className="absolute left-0 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full border border-support-teal/50 bg-base-900 transition group-hover:bg-support-teal sm:top-8 sm:h-3 sm:w-3" />
            <div className="space-y-3 rounded-2xl border border-base-700/80 bg-gradient-to-br from-base-800/95 via-base-800/80 to-base-900/92 p-4 ring-1 ring-white/5 transition group-hover:border-support-teal/35 group-hover:from-base-800/98 group-hover:to-base-800/88 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-2 sm:items-baseline">
                <h3 className="text-lg font-semibold text-base-100 sm:text-xl">
                  {item.title}
                </h3>
                {item.timeframe ? (
                  <span className="text-xs uppercase tracking-[0.3em] text-support-teal/80">
                    {item.timeframe}
                  </span>
                ) : null}
              </div>
              {item.summary ? (
                <p className={summaryClass}>{item.summary}</p>
              ) : null}
              {Array.isArray(item.bullets) && item.bullets.length > 0 ? (
                <ul className="space-y-2 text-sm text-base-200">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={`${item.title}-bullet-${idx}`}
                      className="flex gap-2"
                    >
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-support-teal/70" />
                      <span>{bullet}</span>
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
