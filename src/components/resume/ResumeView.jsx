import { useState, useEffect } from "react";
import { resumeData } from "../../data/resumeData.js";
import {
  PrinterIcon,
  CodeBracketIcon,
  ArrowLeftIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function ResumeView({ onBack }) {
  const [copied, setCopied] = useState(false);
  const { basics, skills, projects, education, experience, certificates } =
    resumeData;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyJson = () => {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard
        .writeText(JSON.stringify(resumeData, null, 2))
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch(() => {
          // Ignore or handle clipboard rejection gracefully
        });
    }
  };

  const handleBack = () => {
    if (onBack) {
      onBack();
    } else {
      window.history.replaceState(null, "", window.location.pathname);
      window.location.hash = "";
    }
  };

  useEffect(() => {
    // Dynamically set title so browser "Save as PDF" defaults to a clean filename
    const prevTitle = document.title;
    document.title = "Vijay_Krishna_Resume";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        handleBack();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.title = prevTitle;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onBack]);

  return (
    <div className="resume-screen-wrapper min-h-screen bg-base-950 py-6 sm:py-10 px-4 text-base-100 print:min-h-0 print:bg-white print:p-0 print:m-0">
      {/* Screen Control Bar (Hidden when printing/saving to PDF) */}
      <div className="mx-auto max-w-4xl mb-6 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <button
          type="button"
          onClick={handleBack}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-base-900/90 px-4 py-2 text-xs sm:text-sm font-medium text-base-200 transition hover:border-accent hover:text-accent shadow-md active:scale-95"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Back to Portfolio</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            type="button"
            onClick={handleCopyJson}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-base-900/90 px-4 py-2 text-xs sm:text-sm font-mono text-base-300 transition hover:border-sky-400 hover:text-sky-300 shadow-md active:scale-95"
            title="Copy machine-readable JSON representation"
          >
            {copied ? (
              <CheckIcon className="h-4 w-4 text-emerald-400" />
            ) : (
              <CodeBracketIcon className="h-4 w-4" />
            )}
            <span>{copied ? "JSON Copied!" : "Copy JSON"}</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2 text-xs sm:text-sm font-semibold text-base-900 transition hover:bg-accent-hover hover:shadow-glow active:scale-95"
          >
            <PrinterIcon className="h-4 w-4" />
            <span>Save / Download PDF</span>
          </button>
        </div>
      </div>

      {/* The Printable Resume Paper Container */}
      <main
        id="resume-sheet"
        className="mx-auto max-w-4xl bg-white text-neutral-900 p-8 sm:p-11 shadow-2xl sm:rounded-xl font-sans leading-normal print:max-w-none print:p-0 print:m-0 print:shadow-none print:rounded-none"
      >
        {/* Header */}
        <header className="border-b border-neutral-300 pb-3 text-center print:pb-2.5">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-950 uppercase font-display print:text-2xl">
            {basics.name}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-neutral-700 font-medium print:text-[11.5px]">
            {basics.label} · {basics.location}
          </p>

          {/* Contact & Profiles Bar */}
          <div className="mt-2 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-0.5 text-xs text-neutral-600 print:text-[11px]">
            <a
              href={`mailto:${basics.email}`}
              className="text-neutral-800 hover:text-blue-600 transition underline underline-offset-2"
            >
              {basics.email}
            </a>
            <span className="text-neutral-400 select-none">•</span>
            <a
              href={`tel:${basics.phone.replace(/[\s\-]/g, "")}`}
              className="text-neutral-800 hover:text-blue-600 transition underline underline-offset-2"
            >
              {basics.phone}
            </a>
            <span className="text-neutral-400 select-none">•</span>
            <a
              href={basics.website}
              target="_blank"
              rel="noreferrer"
              className="text-neutral-800 hover:text-blue-600 transition underline underline-offset-2"
            >
              Portfolio
            </a>
            {basics.profiles.map((profile) => (
              <span
                key={profile.network}
                className="inline-flex items-center gap-x-2.5"
              >
                <span className="text-neutral-400 select-none">•</span>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 hover:text-blue-600 transition underline underline-offset-2"
                >
                  {profile.network}: {profile.username}
                </a>
              </span>
            ))}
          </div>
        </header>

        <div className="mt-4 space-y-4 text-xs sm:text-sm text-neutral-800 print:mt-3 print:space-y-3 print:text-[11.5px]">
          {/* Technical Skills */}
          <section aria-labelledby="resume-skills-title">
            <h2
              id="resume-skills-title"
              className="border-b border-neutral-800 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-display print:text-[11.5px]"
            >
              Technical Skills
            </h2>
            <div className="mt-1.5 space-y-0.5 print:mt-1 print:space-y-0.5">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="flex flex-wrap text-xs sm:text-sm print:text-[11.5px] leading-snug"
                >
                  <span className="w-36 font-semibold text-neutral-950 flex-shrink-0 print:w-32">
                    {skillGroup.category}:
                  </span>
                  <span className="text-neutral-700 flex-1">
                    {skillGroup.items.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects */}
          <section aria-labelledby="resume-projects-title">
            <h2
              id="resume-projects-title"
              className="border-b border-neutral-800 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-display print:text-[11.5px]"
            >
              Featured Projects
            </h2>
            <div className="mt-2 space-y-3 print:mt-1.5 print:space-y-2">
              {projects.map((project) => (
                <div key={project.name} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                    <div className="font-semibold text-neutral-950">
                      {project.repo ? (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="hover:text-blue-600 hover:underline transition"
                        >
                          {project.name}
                        </a>
                      ) : (
                        project.name
                      )}
                      {project.tech && project.tech.length > 0 && (
                        <span className="font-normal text-neutral-600 ml-1.5 text-xs print:text-[10.5px]">
                          ({project.tech.join(", ")})
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs font-mono print:hidden">
                      {project.repo && (
                        <a
                          href={project.repo}
                          target="_blank"
                          rel="noreferrer"
                          className="text-neutral-700 hover:text-neutral-950 hover:underline font-semibold"
                        >
                          [GitHub]
                        </a>
                      )}
                    </div>
                  </div>

                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-neutral-700 text-xs sm:text-sm print:text-[11px] print:leading-[1.38]">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section aria-labelledby="resume-experience-title">
            <h2
              id="resume-experience-title"
              className="border-b border-neutral-800 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-display print:text-[11.5px]"
            >
              Experience
            </h2>
            <div className="mt-1.5 space-y-2 print:mt-1 print:space-y-1.5">
              {experience.map((exp) => (
                <div key={exp.company} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="font-semibold text-neutral-950">
                      {exp.role} ·{" "}
                      <span className="font-normal text-neutral-800">
                        {exp.company}
                      </span>
                    </span>
                    <span className="font-medium text-xs text-neutral-600 font-mono print:text-[10.5px]">
                      {exp.timeframe}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-0.5 print:text-[10.5px]">
                    {exp.location}
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4 text-neutral-700 text-xs sm:text-sm print:text-[11px] print:leading-[1.38]">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section aria-labelledby="resume-education-title">
            <h2
              id="resume-education-title"
              className="border-b border-neutral-800 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-display print:text-[11.5px]"
            >
              Education
            </h2>
            <div className="mt-1.5 space-y-1.5 print:mt-1 print:space-y-1">
              {education.map((edu) => (
                <div key={edu.degree} className="break-inside-avoid">
                  <div className="flex flex-wrap items-baseline justify-between">
                    <span className="font-semibold text-neutral-950">
                      {edu.degree}
                    </span>
                    <span className="font-medium text-xs text-neutral-600 font-mono print:text-[10.5px]">
                      {edu.timeframe}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-baseline justify-between text-xs text-neutral-600 mt-0.5 print:text-[10.5px]">
                    <span>
                      {edu.institution} · {edu.location}
                    </span>
                    <span className="font-medium text-neutral-700">
                      {edu.details}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certificates */}
          {certificates && certificates.length > 0 && (
            <section aria-labelledby="resume-certificates-title">
              <h2
                id="resume-certificates-title"
                className="border-b border-neutral-800 pb-0.5 text-xs font-bold uppercase tracking-wider text-neutral-900 font-display print:text-[11.5px]"
              >
                Certifications
              </h2>
              <div className="mt-1.5 text-xs sm:text-sm text-neutral-700 print:mt-1 print:text-[11px]">
                {certificates.map((cert, idx) => (
                  <span key={cert.title}>
                    <strong className="text-neutral-950 font-semibold">
                      {cert.title}
                    </strong>{" "}
                    ({cert.issuer})
                    {idx < certificates.length - 1 && (
                      <span className="mx-2 text-neutral-400 select-none">
                        •
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
