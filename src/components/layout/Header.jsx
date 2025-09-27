export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <a
        href="#top"
  className="inline-flex items-center gap-3 rounded-full border border-base-800/70 bg-base-900/60 px-4 py-2 text-sm font-semibold text-base-200 transition hover:border-support-teal/50 hover:text-base-100"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 font-display text-base-100">
          VK
        </span>
        <span>Vijay Krishna</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm text-base-400 md:flex">
        <a className="transition hover:text-base-100" href="#projects">
          Work
        </a>
        <a className="transition hover:text-base-100" href="#experience">
          Experience
        </a>
        <a className="transition hover:text-base-100" href="#focus">
          Focus
        </a>
      </nav>
    </header>
  );
}
