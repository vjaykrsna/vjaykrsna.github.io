import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMemo, useState, useRef, useEffect } from "react";
import LogoMark from "../common/LogoMark.jsx";
import { profileLinks } from "../../data/profile.js";

export default function Header({ sections = [], activeSection = "top" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    // Lock background scroll on mobile while drawer is active
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = useMemo(
    () =>
      sections.map(({ id, navLabel, title }) => ({
        id,
        label: navLabel ?? title,
      })),
    [sections],
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-3 sm:top-4 left-0 right-0 z-50 mx-auto w-full max-w-5xl px-4 sm:px-6 pointer-events-none"
    >
      <div className="flex items-center justify-between rounded-full border border-white/10 bg-base-950/85 px-4 py-2.5 shadow-glass backdrop-blur-md pointer-events-auto">
        {/* Brand Link */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2.5 rounded-full text-sm font-semibold text-base-100 transition hover:text-accent"
        >
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full bg-base-900 border text-accent transition ${
              activeSection === "top"
                ? "border-accent/60 shadow-glow"
                : "border-white/10 group-hover:border-accent/40"
            }`}
          >
            <LogoMark className="h-4 w-4" />
          </span>
          <span className="tracking-tight">Vijay Krishna</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`rounded-full px-3.5 py-1.5 transition-all duration-200 ${
                  isActive
                    ? "bg-white/10 text-accent font-semibold shadow-sm"
                    : "text-base-300 hover:text-base-100 hover:bg-white/5"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href={profileLinks.resume}
            target={profileLinks.resume.startsWith("#") ? undefined : "_blank"}
            rel={profileLinks.resume.startsWith("#") ? undefined : "noreferrer"}
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-base-900 transition hover:bg-accent-hover hover:shadow-glow active:scale-95"
          >
            Resume
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-base-900 p-2 text-base-300 transition hover:text-base-100 hover:border-white/20 md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls={isMenuOpen ? "mobile-nav" : undefined}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-4 w-4" aria-hidden />
            ) : (
              <Bars3Icon className="h-4 w-4" aria-hidden />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm pointer-events-auto md:hidden -z-10"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav"
            className="mt-2 overflow-hidden rounded-2xl border border-white/10 bg-base-950/95 p-4 shadow-2xl backdrop-blur-xl md:hidden pointer-events-auto animate-drawer-enter"
          >
            <div className="flex flex-col gap-1.5 text-sm font-medium">
              {navItems.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={`mobile-${id}`}
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`rounded-xl px-3.5 py-2 transition ${
                      isActive
                        ? "bg-white/10 text-accent font-semibold"
                        : "text-base-300 hover:text-base-100 hover:bg-white/5"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
              <a
                href={profileLinks.resume}
                target={
                  profileLinks.resume.startsWith("#") ? undefined : "_blank"
                }
                rel={
                  profileLinks.resume.startsWith("#") ? undefined : "noreferrer"
                }
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 text-center rounded-xl bg-accent py-2 text-xs font-semibold text-base-900 transition hover:bg-accent-hover"
              >
                View Resume
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
