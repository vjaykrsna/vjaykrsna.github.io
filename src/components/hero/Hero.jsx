import SocialLink from "../common/SocialLink.jsx";
import InteractiveTerminal from "./InteractiveTerminal.jsx";

export default function Hero({ profileLinks, socialLinks }) {
  return (
    <section
      id="top"
      className="relative mx-auto my-6 w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-base-900/90 via-base-900/60 to-base-950/80 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm scroll-mt-28"
    >
      {/* Background Accent Gradients */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full bg-support-teal/5 blur-3xl"
        aria-hidden
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-[minmax(0,42%)_minmax(0,58%)] lg:gap-10">
        {/* Left Column: Personal Brand & Intro */}
        <div className="min-w-0 space-y-6 text-left">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>Software Developer · Bihar, India</span>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <h1 className="font-display text-3xl font-bold tracking-tight text-base-100 sm:text-4xl lg:text-[42px] leading-[1.15]">
              Engineering GenAI pipelines & Linux automation.
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-base-300 leading-relaxed">
              I’m{" "}
              <strong className="text-base-100 font-semibold">
                Vijay Krishna
              </strong>{" "}
              — specializing in vector RAG pipelines, Linux system services, and
              clean, high-performance web applications.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-xs sm:text-sm font-semibold text-base-900 transition hover:bg-accent-hover hover:shadow-glow active:scale-95"
            >
              Explore Projects
            </a>
            <a
              href={profileLinks.resume}
              target={
                profileLinks.resume.startsWith("#") ? undefined : "_blank"
              }
              rel={
                profileLinks.resume.startsWith("#") ? undefined : "noreferrer"
              }
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs sm:text-sm font-medium text-base-200 transition hover:bg-white/10 hover:border-white/25 active:scale-95"
            >
              View Resume
            </a>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            {socialLinks.map((link) => (
              <SocialLink
                key={`hero-${link.id}`}
                variant="pill"
                {...link}
                label={link.id === "email" ? "Copy Email" : link.label}
              />
            ))}
          </div>
        </div>

        {/* Right Column: Unified Interactive Terminal */}
        <div className="min-w-0 w-full">
          <InteractiveTerminal />
        </div>
      </div>
    </section>
  );
}
