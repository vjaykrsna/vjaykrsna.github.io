import { profileInfo } from "../../data/profile.js";

import { useEffect, useState } from "react";

const indentClasses = ["pl-0", "pl-6", "pl-12"];

const tokenClasses = {
  keyword: "text-accent",
  variable: "text-base-100",
  operator: "text-base-400",
  bracket: "text-base-500",
  property: "text-sky-300",
  string: "text-emerald-300",
  punctuation: "text-base-500",
  comment: "text-base-500 italic",
};

const REVEAL_INTERVAL = 120;

const lines = [
  {
    indent: 0,
    tokens: [
      { type: "keyword", value: "class" },
      { type: "variable", value: " VijayKrishna" },
      { type: "bracket", value: " {" },
    ],
  },
  {
    indent: 1,
    tokens: [
      { type: "property", value: "constructor" },
      { type: "punctuation", value: "() {" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "variable", value: "this.alias" },
      { type: "operator", value: " = " },
      { type: "string", value: `"${profileInfo.alias}"` },
      { type: "punctuation", value: ";" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "variable", value: "this.home" },
      { type: "operator", value: " = " },
      { type: "string", value: `"${profileInfo.home}"` },
      { type: "punctuation", value: ";" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "variable", value: "this.modes" },
      { type: "operator", value: " = " },
      { type: "bracket", value: "[" },
      { type: "string", value: '"software developer"' },
      { type: "punctuation", value: ", " },
      { type: "string", value: '"GenAI tinkerer"' },
      { type: "punctuation", value: "]" },
      { type: "punctuation", value: ";" },
    ],
  },
  {
    indent: 1,
    tokens: [{ type: "punctuation", value: "}" }],
  },
  {
    indent: 1,
    tokens: [
      { type: "property", value: "shiplist" },
      { type: "punctuation", value: "() {" },
    ],
  },
  {
    indent: 2,
    tokens: [
      { type: "keyword", value: "return" },
      { type: "operator", value: " [" },
      ...profileInfo.shiplist.flatMap((item, i, arr) => [
        { type: "string", value: `"${item}"` },
        ...(i < arr.length - 1 ? [{ type: "punctuation", value: ", " }] : []),
      ]),
      { type: "operator", value: " ];" },
    ],
  },
  {
    indent: 1,
    tokens: [{ type: "punctuation", value: "}" }],
  },
  {
    indent: 1,
    tokens: [{ type: "comment", value: `// ping: ${profileInfo.email}` }],
  },
  {
    indent: 0,
    tokens: [{ type: "punctuation", value: "};" }],
  },
];

export default function ProfileDataTerminal() {
  const totalLines = lines.length;
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= totalLines) {
      return undefined;
    }

    const timeoutId = setTimeout(() => {
      setVisibleLines((prev) => Math.min(totalLines, prev + 1));
    }, REVEAL_INTERVAL);

    return () => clearTimeout(timeoutId);
  }, [visibleLines, totalLines]);

  const displayedLines = lines.slice(0, visibleLines);
  const isBooting = displayedLines.length === 0;

  return (
    <section
      aria-labelledby="profile-terminal-title"
      className="rounded-3xl border border-white/5 bg-gradient-to-b from-base-900/75 to-base-900/55 p-2 ring-1 ring-white/[0.03] backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-3 overflow-hidden rounded-2xl border border-white/5 bg-base-900/78 px-3 py-3 sm:gap-4 sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <p className="font-mono text-[10px] text-base-500 sm:text-xs">
            vijay@portfolio:~$ g++ about.cpp && ./a.out
          </p>
        </div>
        <div className="hidden text-xs uppercase tracking-[0.3em] text-base-600 sm:block">
          Profile snapshot
        </div>
      </div>
      <div className="mt-2 overflow-hidden rounded-2xl border border-white/5 bg-base-900/52 px-3 py-3 sm:px-5 sm:py-4">
        <div id="profile-terminal-title" className="sr-only">
          Terminal style profile summary
        </div>
        <div className="space-y-1">
          {isBooting ? (
            <div className="font-mono text-sm uppercase tracking-[0.3em] text-base-500/80">
              booting session...
            </div>
          ) : (
            displayedLines.map((line, idx) => (
              <div
                key={`terminal-line-${idx}`}
                className={`font-mono text-[13px] leading-6 text-base-200 sm:text-sm ${
                  indentClasses[line.indent] ?? "pl-0"
                }`}
              >
                {line.tokens.map((token, tokenIdx) => (
                  <span
                    key={`token-${idx}-${tokenIdx}`}
                    className={tokenClasses[token.type] ?? "text-base-200"}
                  >
                    {token.value}
                  </span>
                ))}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
