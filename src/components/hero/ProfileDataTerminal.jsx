import { profileInfo } from "../../data/profile.js";

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
  return (
    <section
      aria-labelledby="profile-terminal-title"
      className="rounded-3xl border border-base-800/70 bg-base-900/70 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between gap-4 border-b border-base-800/70 bg-base-900/70 px-5 py-3">
        <div className="flex items-center gap-1" aria-hidden>
          <span className="h-3 w-3 rounded-full bg-rose-400/80" />
          <span className="h-3 w-3 rounded-full bg-amber-300/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
        </div>
        <p className="font-mono text-xs text-base-500">
          vijay@portfolio:~$ g++ about.cpp && ./a.out
        </p>
        <div className="hidden text-xs uppercase tracking-[0.3em] text-base-600 sm:block">
          Profile snapshot
        </div>
      </div>
      <div className="overflow-x-auto px-5 py-5">
        <div id="profile-terminal-title" className="sr-only">
          Terminal style profile summary
        </div>
        <div className="space-y-1">
          {lines.map((line, idx) => (
            <div
              key={`terminal-line-${idx}`}
              className={`font-mono text-sm leading-6 text-base-200 ${indentClasses[line.indent] ?? "pl-0"}`}
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
          ))}
        </div>
      </div>
    </section>
  );
}
