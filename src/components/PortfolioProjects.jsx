import { useState } from "react";

export default function PortfolioProjects({ projects }) {
  // Interactive mini-game preview for Tenzies card
  const [dice, setDice] = useState([
    { val: 5, held: true },
    { val: 5, held: true },
    { val: 5, held: true },
    { val: 2, held: false },
    { val: 5, held: true },
  ]);
  const [rollCount, setRollCount] = useState(8);

  const rollDice = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDice((prev) =>
      prev.map((d) => (d.held ? d : { ...d, val: Math.floor(Math.random() * 6) + 1 }))
    );
    setRollCount((c) => c + 1);
  };

  const toggleHold = (idx, e) => {
    e.preventDefault();
    e.stopPropagation();
    setDice((prev) =>
      prev.map((d, i) => (i === idx ? { ...d, held: !d.held } : d))
    );
  };

  // Map projects by key or name for custom bento treatment
  const ragProject = projects.find((p) => p.name.includes("RAG")) || projects[0];
  const chefProject = projects.find((p) => p.name.includes("Chef")) || projects[2];
  const gsConnectProject = projects.find((p) => p.name.includes("GSConnect")) || projects[1];
  const tenziesProject = projects.find((p) => p.name.includes("Tenzies")) || projects[3];

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
      {/* 1. Flagship: Modular RAG Bot (lg:col-span-7) */}
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 via-base-900 to-base-950 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 lg:col-span-7">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-300">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Flagship · GenAI & Systems
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-base-300">
              10k+ Learners
            </span>
          </div>

          <div>
            <h3>
              <a
                href={ragProject.link || ragProject.repo}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl font-bold text-base-100 group-hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                {ragProject.name}
                <span className="text-base-500 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-lg">↗</span>
              </a>
            </h3>
            <p className="mt-2 text-sm sm:text-base text-base-300 leading-relaxed">
              {ragProject.description}
            </p>
          </div>

          {/* Architectural Pipeline Mockup */}
          <div className="rounded-2xl border border-white/10 bg-base-950/80 p-4 font-mono text-xs">
            <div className="text-[11px] font-semibold uppercase tracking-wider text-base-400 mb-2">
              Architecture Flow:
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs text-base-300">
              <span className="rounded bg-white/5 px-2 py-1 text-base-200 border border-white/10">User Query</span>
              <span className="text-accent">→</span>
              <span className="rounded bg-white/5 px-2 py-1 text-base-200 border border-white/10">Anonymizer</span>
              <span className="text-accent">→</span>
              <span className="rounded bg-sky-500/10 px-2 py-1 text-sky-300 border border-sky-500/30">ChromaDB Embeddings</span>
              <span className="text-accent">→</span>
              <span className="rounded bg-amber-500/10 px-2 py-1 text-amber-300 border border-amber-500/30">Gemini LLM</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {ragProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-base-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 pt-4 border-t border-white/5 text-sm font-semibold">
          {ragProject.repo && (
            <a
              href={ragProject.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent transition hover:opacity-80 py-1"
            >
              View Repository
              <ArrowIcon />
            </a>
          )}
        </div>
      </article>

      {/* 2. Flagship: VJ's Chef (lg:col-span-5) */}
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 via-base-900 to-base-950 p-6 sm:p-8 shadow-2xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 lg:col-span-5">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Frontend & UI Primitives
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[11px] text-base-300">
              Live App
            </span>
          </div>

          <div>
            <h3>
              <a
                href={chefProject.link || chefProject.repo}
                target="_blank"
                rel="noreferrer"
                className="font-display text-2xl font-bold text-base-100 group-hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                {chefProject.name}
                <span className="text-base-500 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-lg">↗</span>
              </a>
            </h3>
            <p className="mt-2 text-sm sm:text-base text-base-300 leading-relaxed">
              {chefProject.description}
            </p>
          </div>

          {/* Interactive UI Mockup Card */}
          <div className="rounded-2xl border border-white/10 bg-base-950/80 p-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2 text-xs">
              <span className="font-semibold text-base-200">🍳 Cooking Session</span>
              <span className="font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded text-[11px]">
                Focus Mode: ON
              </span>
            </div>
            <div className="flex items-center justify-between text-xs text-base-400">
              <span>Step 2/5: Simmer sauce</span>
              <div className="flex gap-1.5 font-mono text-[10px]">
                <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5">J Next</kbd>
                <kbd className="rounded border border-white/20 bg-white/5 px-1.5 py-0.5">K Prev</kbd>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {chefProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-base-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center gap-4 pt-4 border-t border-white/5 text-sm font-semibold">
          {chefProject.link && (
            <a
              href={chefProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent transition hover:opacity-80 py-1"
            >
              Launch Live App
              <ArrowIcon />
            </a>
          )}
          {chefProject.repo && (
            <a
              href={chefProject.repo}
              target="_blank"
              rel="noreferrer"
              className="text-base-400 transition hover:text-base-100 text-xs sm:text-sm py-1"
            >
              Source Code
            </a>
          )}
        </div>
      </article>

      {/* 3. System Utility: GSConnect Mount Manager (lg:col-span-6) */}
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 lg:col-span-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
              Linux & Automation
            </span>
            <span className="font-mono text-xs text-base-400">systemd · bash</span>
          </div>

          <div>
            <h3>
              <a
                href={gsConnectProject.link || gsConnectProject.repo}
                target="_blank"
                rel="noreferrer"
                className="font-display text-xl font-bold text-base-100 group-hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                {gsConnectProject.name}
                <span className="text-base-500 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-lg">↗</span>
              </a>
            </h3>
            <p className="mt-2 text-sm text-base-300 leading-relaxed">
              {gsConnectProject.description}
            </p>
          </div>

          {/* Terminal Daemon Preview with Live Pulse Beacon */}
          <div className="rounded-xl border border-white/10 bg-base-950/90 p-3 font-mono text-[11px] text-base-300">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <p className="text-emerald-400 font-semibold">gsconnect-mount.service - active (running)</p>
            </div>
            <p className="text-base-500 mt-1 pl-4">Mounted: /run/user/1000/gvfs/mtp → ~/Storage</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {gsConnectProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-base-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 pt-3 border-t border-white/5 text-sm font-semibold">
          {gsConnectProject.repo && (
            <a
              href={gsConnectProject.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent transition hover:opacity-80 py-1"
            >
              View on GitHub
              <ArrowIcon />
            </a>
          )}
        </div>
      </article>

      {/* 4. Interactive App: Tenzies (lg:col-span-6) */}
      <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 lg:col-span-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-300">
              Interactive Game
            </span>
            <span className="font-mono text-xs text-base-400">React · State</span>
          </div>

          <div>
            <h3>
              <a
                href={tenziesProject.link || tenziesProject.repo}
                target="_blank"
                rel="noreferrer"
                className="font-display text-xl font-bold text-base-100 group-hover:text-accent transition-colors inline-flex items-center gap-2"
              >
                {tenziesProject.name}
                <span className="text-base-500 group-hover:text-accent group-hover:translate-x-0.5 transition-all text-lg">↗</span>
              </a>
            </h3>
            <p className="mt-2 text-sm text-base-300 leading-relaxed">
              {tenziesProject.description}
            </p>
          </div>

          {/* Interactive Dice & State Preview */}
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-base-950/90 p-3 text-xs select-none">
            <div className="flex items-center gap-1.5 font-bold">
              {dice.map((die, idx) => (
                <button
                  key={`die-${idx}`}
                  type="button"
                  onClick={(e) => toggleHold(idx, e)}
                  title={die.held ? "Held! Click to unfreeze" : "Click to freeze die"}
                  className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-mono transition-all duration-150 active:scale-90 ${
                    die.held
                      ? "border border-accent/50 bg-accent/15 text-accent shadow-sm"
                      : "border border-white/10 bg-white/5 text-base-300 hover:border-white/30"
                  }`}
                >
                  {die.val}
                </button>
              ))}
              <button
                type="button"
                onClick={rollDice}
                className="ml-1 rounded-md border border-purple-500/30 bg-purple-500/10 px-2 py-1 text-[11px] font-mono text-purple-300 transition hover:bg-purple-500/20 active:scale-95"
              >
                Roll ⚅
              </button>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">
              Rolls: {rollCount} · Held: {dice.filter((d) => d.held).length}
            </span>
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {tenziesProject.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-base-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4 pt-3 border-t border-white/5 text-sm font-semibold">
          {tenziesProject.link && (
            <a
              href={tenziesProject.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent transition hover:opacity-80 py-1"
            >
              Play Live
              <ArrowIcon />
            </a>
          )}
          {tenziesProject.repo && (
            <a
              href={tenziesProject.repo}
              target="_blank"
              rel="noreferrer"
              className="text-base-400 transition hover:text-base-100 text-xs sm:text-sm py-1"
            >
              Source Code
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="h-4 w-4 transition-transform group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        d="M5 12h14M13 5l7 7-7 7"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}
