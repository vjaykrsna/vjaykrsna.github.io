export default function FocusAreas({ areas }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
      {areas.map((area) => (
        <article
          key={area.title}
          className="group rounded-2xl border border-base-700/80 bg-gradient-to-br from-base-800/95 via-base-800/82 to-base-900/92 p-5 shadow-[0_20px_60px_-50px_rgba(8,12,24,0.8)] ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-support-teal/35 hover:from-base-800/98 hover:to-base-800/88 sm:rounded-3xl sm:p-6"
        >
          <h3 className="text-lg font-semibold text-base-100 sm:text-xl">
            {area.title}
          </h3>
          <p className="mt-3 text-sm text-base-200">{area.description}</p>
          <ul className="mt-6 flex flex-wrap gap-2 text-xs text-support-teal">
            {area.items.map((item) => (
              <li
                key={item}
                className="rounded-full border border-support-teal/30 bg-support-teal/10 px-3 py-1 uppercase tracking-[0.2em]"
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
