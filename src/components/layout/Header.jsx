import LogoMark from "../common/LogoMark.jsx";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a
        href="#top"
        className="inline-flex items-center gap-3 rounded-full border border-base-800/70 bg-base-800 px-4 py-2 text-sm font-semibold text-base-200 transition hover:border-support-teal/50 hover:text-base-100"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-base-900/80 text-accent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <LogoMark />
        </span>
        <span>Vijay Krishna</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-base-400 md:flex">
        <a className="border-b border-base-600/70 pb-1 transition hover:border-support-teal hover:text-base-100" href="#projects">
          Work
        </a>
        <a className="border-b border-base-600/70 pb-1 transition hover:border-support-teal hover:text-base-100" href="#experience">
          Experience
        </a>
        <a className="border-b border-base-600/70 pb-1 transition hover:border-support-teal hover:text-base-100" href="#education">
          Education
        </a>
        <a className="border-b border-base-600/70 pb-1 transition hover:border-support-teal hover:text-base-100" href="#focus">
          Focus
        </a>
      </nav>
    </header>
  );
}
