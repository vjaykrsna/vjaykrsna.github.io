import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useMemo, useState } from "react";

import LogoMark from "../common/LogoMark.jsx";

export default function Header({ sections = [], activeSection = "top" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = useMemo(
    () =>
      sections.map(({ id, navLabel, title }) => ({
        id,
        label: navLabel ?? title,
      })),
    [sections],
  );

  const linkBaseClasses =
    "inline-flex items-center rounded-full px-3 py-1.5 text-xs font-medium transition sm:px-4 sm:text-sm";

  return (
    <header className="sticky top-3 z-40 mx-auto w-full max-w-6xl px-4 sm:top-4 sm:px-6 md:px-8 lg:px-10">
      <div className="relative">
        <div className="flex items-center justify-between rounded-full border border-base-700/70 bg-gradient-to-r from-base-900/92 via-base-800/86 to-base-900/92 px-2 py-2 shadow-[0_18px_45px_-30px_rgba(8,12,24,0.95)] ring-1 ring-white/5 backdrop-blur-md sm:px-3">
          <a
            href="#top"
            className="inline-flex items-center gap-2 rounded-full border border-base-700/80 bg-gradient-to-br from-base-800/90 to-base-900/85 px-2.5 py-1.5 text-xs font-semibold text-base-200 transition hover:border-support-teal/40 hover:text-base-100 sm:gap-3 sm:px-4 sm:py-2 sm:text-sm"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-base-900/80 text-accent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)] sm:h-8 sm:w-8">
              <LogoMark />
            </span>
            <span>Vijay Krishna</span>
          </a>
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`${linkBaseClasses} ${
                    isActive
                      ? "bg-gradient-to-r from-support-teal/20 to-accent/10 text-base-100 ring-1 ring-support-teal/35"
                      : "text-base-300 hover:bg-base-800/85 hover:text-base-100"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-base-700/80 bg-gradient-to-br from-base-800/90 to-base-900/85 p-2 text-base-300 transition hover:border-support-teal/40 hover:text-base-100 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            {isMenuOpen ? (
              <XMarkIcon className="h-5 w-5" aria-hidden />
            ) : (
              <Bars3Icon className="h-5 w-5" aria-hidden />
            )}
          </button>
        </div>
        {isMenuOpen ? (
          <div
            id="primary-navigation"
            className="absolute left-0 right-0 top-full z-20 mt-3 overflow-hidden rounded-2xl border border-base-700/80 bg-gradient-to-b from-base-900/95 to-base-800/92 p-3 shadow-[0_24px_40px_-32px_rgba(8,12,24,0.9)] ring-1 ring-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-1.5 text-sm">
              {navItems.map(({ id, label }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={`mobile-${id}`}
                    href={`#${id}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${linkBaseClasses} justify-center ${
                      isActive
                        ? "bg-gradient-to-r from-support-teal/20 to-accent/10 text-base-100 ring-1 ring-support-teal/35"
                        : "text-base-300 hover:bg-base-800/85 hover:text-base-100"
                    }`}
                  >
                    {label}
                  </a>
                );
              })}
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
