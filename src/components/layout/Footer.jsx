import SocialLink from "../common/SocialLink.jsx";

export default function Footer({ socialLinks }) {
  return (
    <footer className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row text-xs sm:text-sm">
      <div className="flex flex-col sm:flex-row items-center gap-2 text-base-400 text-center sm:text-left">
        <span>© {new Date().getFullYear()} Vijay Krishna.</span>
        <span className="hidden sm:inline">·</span>
        <span>Crafted with intentionality & code.</span>
      </div>

      <div className="flex items-center gap-6">
        <nav className="flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <SocialLink key={`footer-${link.id}`} variant="text" {...link} />
          ))}
        </nav>

        <a
          href="#top"
          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-base-400 transition hover:border-accent hover:text-accent"
          aria-label="Back to top"
        >
          ↑ Top
        </a>
      </div>
    </footer>
  );
}
