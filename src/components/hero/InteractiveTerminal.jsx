import { useState, useRef, useEffect } from "react";
import { profileInfo, profileLinks } from "../../data/profile.js";
import { projects } from "../../data/projects.js";

const QUICK_COMMANDS = ["help", "resume", "projects", "skills", "bio", "contact", "clear"];

const codeLines = [
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
      { type: "bracket", value: "]" },
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

const tokenClasses = {
  keyword: "text-accent font-semibold",
  variable: "text-base-100",
  operator: "text-base-400",
  bracket: "text-base-500",
  property: "text-sky-300 font-medium",
  string: "text-emerald-300",
  punctuation: "text-base-500",
  comment: "text-base-400 italic",
};

const indentClasses = ["pl-0", "pl-4 sm:pl-5", "pl-8 sm:pl-10"];
const REVEAL_INTERVAL = 80;

export default function InteractiveTerminal() {
  const [revealedCodeCount, setRevealedCodeCount] = useState(0);
  const [commandOutputs, setCommandOutputs] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isCleared, setIsCleared] = useState(false);

  const terminalScrollRef = useRef(null);
  const inputRef = useRef(null);

  // Progressive print reveal animation on initial load
  useEffect(() => {
    if (isCleared) return;
    if (revealedCodeCount >= codeLines.length) return;

    const timer = setTimeout(() => {
      setRevealedCodeCount((prev) => Math.min(codeLines.length, prev + 1));
    }, REVEAL_INTERVAL);

    return () => clearTimeout(timer);
  }, [revealedCodeCount, isCleared]);

  // Keep internal terminal scrolled to bottom when typing/running commands, WITHOUT scrolling page
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = terminalScrollRef.current.scrollHeight;
    }
  }, [revealedCodeCount, commandOutputs]);

  const runCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const [cmd, ...args] = trimmed.split(" ");
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") {
      setIsCleared(true);
      setRevealedCodeCount(0);
      setCommandOutputs([]);
      setInputVal("");
      return;
    }

    if (lowerCmd === "reset") {
      setIsCleared(false);
      setRevealedCodeCount(codeLines.length);
      setCommandOutputs([]);
      setInputVal("");
      return;
    }

    let outputElement = null;

    switch (lowerCmd) {
      case "cat": {
        const file = args[0]?.toLowerCase();
        if (!file || file === "profile.js" || file === "profile" || file === "profile.ts") {
          outputElement = (
            <div className="space-y-0.5 pt-1">
              {codeLines.map((line, idx) => (
                <div
                  key={`cat-line-${idx}`}
                  className={`font-mono text-xs sm:text-sm text-base-200 ${
                    indentClasses[line.indent] ?? "pl-0"
                  }`}
                >
                  {line.tokens.map((token, tokenIdx) => (
                    <span
                      key={`cat-token-${idx}-${tokenIdx}`}
                      className={tokenClasses[token.type] ?? "text-base-200"}
                    >
                      {token.value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          );
        } else {
          outputElement = (
            <p className="text-xs sm:text-sm font-mono text-rose-400">
              cat: {args[0]}: No such file or directory
            </p>
          );
        }
        break;
      }

      case "ls":
        outputElement = (
          <p className="text-xs sm:text-sm font-mono text-sky-300">
            profile.js   projects/   skills/   resume.pdf
          </p>
        );
        break;

      case "help":
        outputElement = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-base-300">
            <span className="text-accent font-semibold">Available commands (click or type):</span>
            <div className="grid grid-cols-[120px_1fr] gap-x-2 gap-y-1.5 pt-1">
              {[
                { cmd: "cat profile.js", desc: "Display profile source code" },
                { cmd: "resume", desc: "View & export ATS resume" },
                { cmd: "bio", desc: "About me & core focus" },
                { cmd: "projects", desc: "Highlighted work & repositories" },
                { cmd: "skills", desc: "Tech stack & engineering toolbelt" },
                { cmd: "contact", desc: "Email & social profiles" },
                { cmd: "ls", desc: "List environment files" },
                { cmd: "clear", desc: "Clear terminal buffer" },
              ].map(({ cmd, desc }) => (
                <div key={cmd} className="contents">
                  <button
                    type="button"
                    onClick={() => runCommand(cmd)}
                    className="text-left text-sky-300 hover:text-accent hover:underline font-mono focus:outline-none"
                  >
                    {cmd}
                  </button>
                  <span className="text-base-300">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "bio":
      case "about":
        outputElement = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-base-300">
            <p>
              <span className="text-sky-300">developer</span>:{" "}
              <span className="text-emerald-300">&quot;Vijay Krishna&quot;</span>
            </p>
            <p>
              <span className="text-sky-300">location</span>:{" "}
              <span className="text-emerald-300">&quot;{profileInfo.home}&quot;</span>
            </p>
            <p>
              <span className="text-sky-300">mission</span>:{" "}
              <span className="text-emerald-300">&quot;Hacking on GenAI pipelines, developer automation & modern frontends.&quot;</span>
            </p>
          </div>
        );
        break;

      case "projects":
        outputElement = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Highlighted Projects:</p>
            {projects.map((proj) => (
              <p key={proj.name}>
                • <span className="text-sky-300 font-medium">{proj.name}</span>:{" "}
                <span className="text-base-400">{proj.description}</span>{" "}
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline hover:opacity-80 mr-1.5"
                  >
                    [live]
                  </a>
                )}
                {proj.repo && (
                  <a
                    href={proj.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-accent underline hover:opacity-80"
                  >
                    [repo]
                  </a>
                )}
              </p>
            ))}
          </div>
        );
        break;

      case "skills":
      case "stack":
        outputElement = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Technical Toolbelt:</p>
            <p><span className="text-sky-300">languages</span>: <span className="text-emerald-300">[&quot;JavaScript&quot;, &quot;Python&quot;, &quot;Bash&quot;, &quot;HTML/CSS&quot;]</span></p>
            <p><span className="text-sky-300">genai</span>: <span className="text-emerald-300">[&quot;RAG Pipelines&quot;, &quot;ChromaDB&quot;, &quot;Gemini API&quot;]</span></p>
            <p><span className="text-sky-300">frontend</span>: <span className="text-emerald-300">[&quot;React&quot;, &quot;Tailwind CSS&quot;, &quot;Vite&quot;]</span></p>
            <p><span className="text-sky-300">systems</span>: <span className="text-emerald-300">[&quot;Linux / GNOME&quot;, &quot;systemd&quot;, &quot;Git&quot;]</span></p>
          </div>
        );
        break;

      case "contact":
        outputElement = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Contact Channels:</p>
            <p>
              email:{" "}
              <a href={profileLinks.email} className="text-emerald-300 underline hover:text-accent">
                {profileInfo.email.replace("mailto:", "")}
              </a>
            </p>
            <p>
              github:{" "}
              <a href={profileLinks.github} target="_blank" rel="noreferrer" className="text-emerald-300 underline hover:text-accent">
                {profileLinks.github.replace("https://", "")}
              </a>
            </p>
            <p>
              linkedin:{" "}
              <a href={profileLinks.linkedin} target="_blank" rel="noreferrer" className="text-emerald-300 underline hover:text-accent">
                {profileLinks.linkedin.replace("https://www.", "").replace("https://", "")}
              </a>
            </p>
          </div>
        );
        break;

      case "resume":
      case "cv":
        window.location.hash = "resume";
        outputElement = (
          <p className="text-xs sm:text-sm font-mono text-emerald-400">
            Navigating to printable ATS resume view...
          </p>
        );
        break;

      case "whoami":
        outputElement = <p className="text-xs sm:text-sm font-mono text-emerald-400">guest@portfolio (Welcome! Feel free to poke around)</p>;
        break;

      case "sudo":
        outputElement = <p className="text-xs sm:text-sm font-mono text-rose-400">Permission denied: Vijay is root user.</p>;
        break;

      case "echo":
        outputElement = <p className="text-xs sm:text-sm font-mono text-base-200">{args.join(" ")}</p>;
        break;

      default:
        outputElement = (
          <p className="text-xs sm:text-sm font-mono text-rose-400">
            Command not found: &apos;{trimmed}&apos;. Type <span className="text-accent">&apos;help&apos;</span>.
          </p>
        );
    }

    setCommandOutputs((prev) => [
      ...prev,
      { cmd: trimmed, output: outputElement },
    ]);
    setInputVal("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIndex);
        setInputVal(commandHistory[nextIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIndex = historyIndex + 1;
        if (nextIndex < commandHistory.length) {
          setHistoryIndex(nextIndex);
          setInputVal(commandHistory[nextIndex]);
        } else {
          setHistoryIndex(-1);
          setInputVal("");
        }
      }
    } else if (e.key === "Tab") {
      e.preventDefault();
      const current = inputVal.toLowerCase().trim();
      if (!current) return;
      if ("cat profile.js".startsWith(current)) {
        setInputVal("cat profile.js");
        return;
      }
      const match = QUICK_COMMANDS.find((c) => c.startsWith(current));
      if (match) {
        setInputVal(match);
      }
    }
  };

  return (
    <section
      aria-labelledby="profile-terminal-title"
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-base-900/85 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent/30"
    >
      {/* Window Header with Traffic Lights & Active File Indicator */}
      <div className="flex items-center justify-between border-b border-white/10 bg-base-900/90 px-5 py-3 rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <p className="font-mono text-xs text-base-400">
            vijay@fedora:~
          </p>
        </div>

        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-base-500">
          zsh · interactive
        </span>
      </div>

      {/* Unified Terminal Window Body */}
      <div
        ref={terminalScrollRef}
        onClick={() => inputRef.current?.focus()}
        className="min-h-[340px] max-h-[440px] overflow-y-auto hide-scrollbar px-5 py-4 font-mono text-xs sm:text-sm leading-6 space-y-3 cursor-text"
      >
        <div id="profile-terminal-title" className="sr-only">
          Developer Terminal with Profile and Live Command Input
        </div>

        {/* 1. Initial Prompt & Animated Profile Code */}
        {!isCleared && (
          <div className="space-y-1.5">
            <div className="text-base-400">
              <span className="text-accent">❯</span> cat profile.js
            </div>
            <div className="space-y-0.5 pt-0.5">
              {codeLines.slice(0, revealedCodeCount).map((line, idx) => (
                <div
                  key={`code-line-${idx}`}
                  className={`font-mono text-xs sm:text-sm text-base-200 ${
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
              ))}
            </div>
          </div>
        )}

        {/* 2. Interactive Command History Outputs */}
        {commandOutputs.map((item, idx) => (
          <div key={`cmd-output-${idx}`} className="space-y-1.5 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 text-base-100">
              <span className="text-accent font-semibold select-none">❯</span>
              <span className="font-semibold text-base-100">{item.cmd}</span>
            </div>
            <div className="pl-3 py-1 border-l-2 border-white/10">
              {item.output}
            </div>
          </div>
        ))}

        {/* 3. Live Active Input Line */}
        <div className="flex items-center gap-2 pt-2">
          <span className="text-accent font-semibold select-none">❯</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            aria-label="Terminal command input"
            spellCheck={false}
            autoCapitalize="none"
            placeholder={
              revealedCodeCount < codeLines.length && !isCleared
                ? "Booting profile..."
                : "Type 'help' (Tab to autocomplete)..."
            }
            className="flex-1 bg-transparent text-base-100 outline-none placeholder:text-base-600 font-mono text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Quick Run Chips (Clean single-line bar with zero wasted space) */}
      <div className="flex items-center gap-1.5 border-t border-white/5 bg-base-950/60 px-5 py-2.5 rounded-b-3xl text-xs font-mono overflow-x-auto hide-scrollbar">
        <span className="text-base-500 mr-1 select-none flex-shrink-0">Quick:</span>
        {QUICK_COMMANDS.map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              runCommand(cmd);
            }}
            className="flex-shrink-0 rounded-md border border-white/10 bg-white/5 px-2.5 py-0.5 text-base-300 transition hover:border-accent hover:text-accent active:scale-95"
          >
            {cmd}
          </button>
        ))}
        <span className="text-[11px] text-base-500 hidden sm:inline ml-auto select-none">
          Tab ⇥ complete · ↑↓ history
        </span>
      </div>
    </section>
  );
}
