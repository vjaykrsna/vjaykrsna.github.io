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
    "border-b border-transparent pb-1 transition hover:border-support-teal hover:text-base-100";

  return (
    <header className="relative flex items-center justify-between">
      <a
        href="#top"
        className="inline-flex items-center gap-3 rounded-full border border-base-800/70 bg-base-800 px-4 py-2 text-sm font-semibold text-base-200 transition hover:border-support-teal/50 hover:text-base-100"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-base-900/80 text-accent shadow-[inset_0_0_0_1px_rgba(255,255,255,0.04)]">
          <LogoMark />
        </span>
        <span>Vijay Krishna</span>
      </a>
      <nav className="hidden items-center gap-6 text-sm lg:flex">
        {navItems.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`${linkBaseClasses} ${
                isActive ? "border-support-teal text-base-100" : "text-base-400"
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
        className="inline-flex items-center justify-center rounded-full border border-base-800/70 bg-base-800 p-2 text-base-300 transition hover:border-support-teal/50 hover:text-base-100 lg:hidden"
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
      {isMenuOpen ? (
        <div
          id="primary-navigation"
          className="absolute left-0 right-0 top-full z-20 mt-4 overflow-hidden rounded-3xl border border-base-800/70 bg-base-900/95 p-4 shadow-[0_24px_40px_-32px_rgba(8,12,24,0.9)] lg:hidden"
        >
          <div className="flex flex-col gap-2 text-sm">
            {navItems.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <a
                  key={`mobile-${id}`}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${linkBaseClasses} ${
                    isActive
                      ? "border-support-teal text-base-100"
                      : "text-base-300"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
