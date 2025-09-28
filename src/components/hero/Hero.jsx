import Header from "../layout/Header.jsx";
import SocialLink from "../common/SocialLink.jsx";
import ProfileDataTerminal from "./ProfileDataTerminal.jsx";

export default function Hero({ profileLinks, socialLinks }) {
  return (
    <section
      id="top"
      className="relative mx-auto my-12 w-full max-w-[min(96rem,100vw-3rem)] overflow-hidden rounded-[2.75rem] border border-base-800/60 bg-[radial-gradient(circle_at_top_left,_hsla(48,96%,53%,0.08),transparent_60%)] shadow-[0_40px_120px_-80px_rgba(255,255,180,0.35)] backdrop-blur-sm sm:my-16 lg:my-20"
    >
      <div className="absolute inset-0 -z-10 bg-base-900/85" aria-hidden />
      <div className="relative flex min-h-[72vh] flex-col gap-12 px-6 py-16 sm:px-14 sm:py-20 lg:min-h-[78vh] xl:px-20">
        <Header />
        <div className="grid flex-1 items-center gap-12 md:grid-cols-[minmax(0,40%)_minmax(0,60%)] md:gap-16">
          <div className="space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-base-400">
                Software developer (GenAI curious) · Bihar
              </p>
              <h1 className="font-display text-[26px] font-semibold leading-tight text-base-100 sm:text-[38px] md:text-[50px]">
                Building meaningful things that help.
              </h1>
              <p className="mx-auto max-w-xl text-base text-base-200 md:mx-0">
                I’m Vijay Krishna — hacking on GenAI workflows, automating
                developer chores, and keeping the frontend playful when it helps
                the story land. Still charting the path, but shipping the
                commits in public.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a
                href={profileLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2 text-sm font-semibold text-base-900 transition hover:shadow-glow"
              >
                Download resume
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {socialLinks.map((link) => (
                <SocialLink key={`hero-${link.id}`} variant="pill" {...link} />
              ))}
            </div>
          </div>
          <div className="w-full md:ml-auto md:max-w-none">
            <ProfileDataTerminal />
          </div>
        </div>
      </div>
    </section>
  );
}
