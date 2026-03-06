import SocialLink from "../common/SocialLink.jsx";
import ProfileDataTerminal from "./ProfileDataTerminal.jsx";

export default function Hero({ profileLinks, socialLinks }) {
  return (
    <section
      id="top"
      className="relative mx-auto mt-3 w-full max-w-6xl overflow-hidden rounded-2xl border border-base-700/55 bg-[radial-gradient(circle_at_top_left,_hsla(48,96%,53%,0.12),transparent_56%),radial-gradient(circle_at_bottom_right,_hsla(172,45%,54%,0.12),transparent_52%)] shadow-[0_42px_120px_-78px_rgba(255,255,190,0.35)] ring-1 ring-white/5 backdrop-blur-sm sm:mt-4 sm:rounded-3xl lg:mt-5"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-base-800/85 via-base-900/85 to-base-900/92" aria-hidden />
      <div className="relative flex flex-col gap-7 px-4 py-8 sm:gap-10 sm:px-6 sm:py-10 md:px-8 lg:min-h-[72vh] lg:gap-14 lg:px-10 lg:py-14">
        <div className="grid flex-1 items-start gap-7 sm:gap-10 lg:grid-cols-[minmax(0,46%)_minmax(0,54%)] lg:items-center lg:gap-12">
          <div className="w-full lg:max-w-none">
            <ProfileDataTerminal />
          </div>
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
            <div className="space-y-4">
              <p className="text-sm tracking-[0.2em] text-base-400">
                DevOps Engineer (GenAI Enthusiast) · Bihar
              </p>
              <h1 className="font-display text-[29px] font-semibold leading-tight text-base-100 sm:text-[38px] md:text-[46px] xl:text-[50px]">
                Building meaningful things that help.
              </h1>
              <p className="mx-auto max-w-xl text-sm text-base-200/95 sm:text-base lg:mx-0">
                I’m Vijay Krishna — hacking on GenAI workflows, automating
                developer chores, and keeping the frontend playful when it helps
                the story land. Still charting the path, but shipping the
                commits in public.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start">
              <a
                href={profileLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-accent px-6 py-2 text-sm font-semibold text-base-900 ring-1 ring-white/5 transition hover:shadow-glow"
              >
                Download resume
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              {socialLinks.map((link) => (
                <SocialLink key={`hero-${link.id}`} variant="pill" {...link} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
