export default function PortfolioProjects({ projects }) {
  // Map span classes for bento layout
  const colSpans = [
    "lg:col-span-7",
    "lg:col-span-5",
    "lg:col-span-6",
    "lg:col-span-6",
  ];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      {projects.map((project, idx) => {
        const spanClass = colSpans[idx % colSpans.length] || "lg:col-span-6";

        return (
          <article
            key={project.id || project.name}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 via-base-900 to-base-950 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 ${spanClass}`}
          >
            <div className="space-y-5">
              {/* Category & Status Pill Bar */}
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                  {project.category}
                </span>
                {project.metrics && (
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-base-300">
                    {project.metrics}
                  </span>
                )}
              </div>

              {/* Title & Description */}
              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-base-100 group-hover:text-accent transition-colors">
                  <a
                    href={project.link || project.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <span>{project.name}</span>
                    <span className="text-base-500 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-base sm:text-lg">
                      ↗
                    </span>
                  </a>
                </h3>
                <p className="mt-2 text-sm sm:text-base text-base-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Architecture & Technical Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <div className="rounded-2xl border border-white/10 bg-base-950/70 p-4 font-sans text-xs">
                  <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-base-400 mb-2.5 flex items-center gap-1.5">
                    <span className="text-accent font-mono">❯</span>
                    <span>Key Architecture & Implementation</span>
                  </div>
                  <ul className="space-y-2 text-base-300">
                    {project.highlights.map((highlight, hIdx) => (
                      <li
                        key={hIdx}
                        className="flex items-start gap-2 leading-relaxed"
                      >
                        <span className="text-accent font-semibold flex-shrink-0 mt-0.5">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-base-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Links */}
            <div className="mt-8 flex flex-wrap items-center gap-4 pt-4 border-t border-white/5 text-sm font-semibold">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-accent transition hover:opacity-80 py-1"
                >
                  <span>Launch Live App</span>
                  <ArrowIcon />
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-base-400 transition hover:text-base-100 py-1"
                >
                  <span>View Repository</span>
                  <ArrowIcon />
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
