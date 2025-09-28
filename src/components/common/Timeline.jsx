export default function Timeline({ items }) {
  return (
    <ol className="relative ml-4 space-y-5 border-l border-base-700 sm:ml-6 lg:ml-10">
      {items.map((item) => {
        const summaryClass = [
          "text-sm text-base-200",
          item.summaryPreserveWhitespace ? "whitespace-pre-line" : "",
        ]
          .filter(Boolean)
          .join(" ");

        return (
          <li key={item.title} className="group relative pl-8 sm:pl-10">
            <div className="absolute left-0 top-8 h-3 w-3 -translate-x-1/2 rounded-full border border-support-teal/50 bg-base-900 transition group-hover:bg-support-teal" />
            <div className="space-y-3 rounded-2xl border border-base-800 bg-base-800/70 p-5 transition group-hover:border-support-teal/40 group-hover:bg-base-800/95">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold text-base-100">
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
