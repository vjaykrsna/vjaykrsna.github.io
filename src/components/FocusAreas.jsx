export default function FocusAreas({ areas }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {areas.map((area) => (
        <article
          key={area.title}
          className="rounded-3xl border border-base-700 bg-base-800 p-6 shadow-[0_20px_60px_-50px_rgba(8,12,24,0.8)] transition hover:-translate-y-1 hover:border-support-teal/40 hover:bg-base-800/95"
        >
          <h3 className="text-xl font-semibold text-base-100">{area.title}</h3>
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
