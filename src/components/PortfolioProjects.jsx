export default function PortfolioProjects({ projects }) {
  return (
    <div className="relative">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex flex-col justify-between rounded-2xl border border-base-700/80 bg-gradient-to-br from-base-800/95 via-base-800/82 to-base-900/92 p-5 shadow-[0_24px_60px_-50px_rgba(8,12,24,0.8)] ring-1 ring-white/5 transition hover:-translate-y-1 hover:border-support-teal/35 hover:from-base-800/98 hover:to-base-800/88 sm:rounded-3xl sm:p-6 lg:p-8"
          >
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl font-semibold text-base-100 sm:text-2xl">
                {project.name}
              </h3>
              <p className="text-sm text-base-200">{project.description}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs text-support-teal sm:mt-6">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-support-teal/30 bg-support-teal/10 px-3 py-1 uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm font-medium sm:mt-8">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-accent transition hover:gap-3"
                >
                  View live
                  <ArrowIcon />
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-base-400 transition hover:text-accent"
                >
                  Source code
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4"
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
