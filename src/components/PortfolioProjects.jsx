import { projects as projectList } from "../data/projects.js";

export default function PortfolioProjects({ projects = projectList }) {
  return (
    <div className="relative">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-visible py-2 pb-6 hide-scrollbar">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group flex min-w-[280px] flex-1 flex-col justify-between rounded-3xl border border-base-700 bg-base-800 p-8 shadow-[0_24px_60px_-50px_rgba(8,12,24,0.8)] transition hover:-translate-y-1 hover:border-support-teal/40 hover:bg-base-800/95 sm:min-w-[320px] xl:min-w-[360px] xl:flex-none xl:w-[360px] snap-start"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-base-100">
                {project.name}
              </h3>
              <p className="text-sm text-base-200">{project.description}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2 text-xs text-support-teal">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-support-teal/30 bg-support-teal/10 px-3 py-1 uppercase tracking-[0.2em]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-4 text-sm font-medium">
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
                  {project.link ? "View code" : "View repo"}
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
