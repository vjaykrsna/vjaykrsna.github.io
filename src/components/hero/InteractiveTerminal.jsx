import { useState, useRef, useEffect } from "react";
import { profileInfo, profileLinks } from "../../data/profile.js";
import { projects } from "../../data/projects.js";

const QUICK_COMMANDS = [
  "help",
  "resume",
  "projects",
  "skills",
  "contact",
  "clear",
];

const techStackYamlLines = [
  { text: "developer: Vijay Krishna", color: "text-base-100 font-medium" },
  { text: "role: Software Developer", color: "text-sky-300 font-medium" },
  { text: "location: Bihar, India", color: "text-base-300" },
  { text: "status: Available for opportunities", color: "text-emerald-300" },
  { text: "", color: "" },
  { text: "core_stack:", color: "text-accent font-semibold" },
  {
    text: "  genai: [RAG Pipelines, ChromaDB, Gemini API]",
    color: "text-emerald-300",
  },
  {
    text: "  systems: [Linux, systemd, Bash, gdbus, Git]",
    color: "text-sky-300",
  },
  {
    text: "  frontend: [React, Tailwind CSS, Vite, HTML5/CSS3]",
    color: "text-amber-200",
  },
  {
    text: "  languages: [JavaScript (ES6+), Python, Bash, C++, SQL]",
    color: "text-base-200",
  },
  { text: "", color: "" },
  { text: "featured_work:", color: "text-accent font-semibold" },
  {
    text: "  - ragbot: Production support bot for 10k+ learners",
    color: "text-base-300",
  },
  {
    text: "  - gsconnect-mount: Systemd automation for GNOME",
    color: "text-base-300",
  },
  {
    text: "  - vjs-chef: AI recipe generator with streaming UI",
    color: "text-base-300",
  },
  {
    text: "  - tenzies: High-performance React micro-app",
    color: "text-base-300",
  },
];

const REVEAL_INTERVAL = 50; // ~750ms total animation

export default function InteractiveTerminal() {
  const [revealedCount, setRevealedCount] = useState(0);
  const [commandOutputs, setCommandOutputs] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [commandHistory, setCommandHistory] = useState([]);
  const [isCleared, setIsCleared] = useState(false);

  const terminalScrollRef = useRef(null);
  const inputRef = useRef(null);

  // Progressive reveal animation on initial load (~750ms total)
  useEffect(() => {
    if (isCleared) return;
    if (revealedCount >= techStackYamlLines.length) return;

    const timer = setTimeout(() => {
      setRevealedCount((prev) => Math.min(techStackYamlLines.length, prev + 1));
    }, REVEAL_INTERVAL);

    return () => clearTimeout(timer);
  }, [revealedCount, isCleared]);

  // Keep internal terminal scrolled to bottom when typing or executing commands
  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop =
        terminalScrollRef.current.scrollHeight;
    }
  }, [revealedCount, commandOutputs]);

  const runCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const [cmd, ...args] = trimmed.split(" ");
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") {
      setIsCleared(true);
      setRevealedCount(0);
      setCommandOutputs([]);
      setInputVal("");
      return;
    }

    if (lowerCmd === "reset") {
      setIsCleared(false);
      setRevealedCount(techStackYamlLines.length);
      setCommandOutputs([]);
      setInputVal("");
      return;
    }

    let outputElement = null;

    switch (lowerCmd) {
      case "cat": {
        const file = args[0]?.toLowerCase();
        if (
          !file ||
          file === "tech-stack.yml" ||
          file === "tech-stack.yaml" ||
          file === "stack.yml" ||
          file === "profile.yml"
        ) {
          outputElement = (
            <div className="space-y-0.5 pt-1 font-mono text-xs sm:text-sm">
              {techStackYamlLines.map((line, idx) => (
                <div key={`cat-line-${idx}`} className={line.color || "h-2"}>
                  {line.text}
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
            tech-stack.yml projects/ skills/ resume.json
          </p>
        );
        break;

      case "help":
        outputElement = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-base-300">
            <span className="text-accent font-semibold">
              Available commands:
            </span>
            <div className="grid grid-cols-[130px_1fr] gap-x-2 gap-y-1 pt-1">
              {[
                {
                  cmd: "cat tech-stack.yml",
                  desc: "Display stack specification",
                },
                { cmd: "projects", desc: "Highlighted engineering work" },
                { cmd: "skills", desc: "Core technical capabilities" },
                { cmd: "resume", desc: "Open ATS printable resume view" },
                { cmd: "contact", desc: "Email and social profiles" },
                { cmd: "ls", desc: "List workspace files" },
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
                  <span className="text-base-400">{desc}</span>
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case "skills":
      case "stack":
        outputElement = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Technical Toolbelt:</p>
            <p>
              <span className="text-sky-300">languages</span>:{" "}
              <span className="text-emerald-300">
                [&quot;JavaScript (ES6+)&quot;, &quot;Python&quot;,
                &quot;Bash&quot;, &quot;C++&quot;, &quot;SQL&quot;]
              </span>
            </p>
            <p>
              <span className="text-sky-300">genai</span>:{" "}
              <span className="text-emerald-300">
                [&quot;RAG Pipelines&quot;, &quot;ChromaDB&quot;, &quot;Gemini
                API&quot;]
              </span>
            </p>
            <p>
              <span className="text-sky-300">systems</span>:{" "}
              <span className="text-emerald-300">
                [&quot;Linux&quot;, &quot;systemd&quot;, &quot;Bash&quot;,
                &quot;gdbus&quot;, &quot;Git&quot;]
              </span>
            </p>
            <p>
              <span className="text-sky-300">frontend</span>:{" "}
              <span className="text-emerald-300">
                [&quot;React&quot;, &quot;Tailwind CSS&quot;, &quot;Vite&quot;,
                &quot;HTML5/CSS3&quot;]
              </span>
            </p>
          </div>
        );
        break;

      case "projects":
        outputElement = (
          <div className="space-y-1.5 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Featured Projects:</p>
            {projects.map((proj) => (
              <p key={proj.id || proj.name}>
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

      case "contact":
        outputElement = (
          <div className="space-y-1 text-xs sm:text-sm font-mono text-base-300">
            <p className="text-accent font-semibold">Contact Channels:</p>
            <p>
              email:{" "}
              <span className="text-emerald-300 font-mono">
                {profileInfo.email}
              </span>
            </p>
            <p>
              github:{" "}
              <a
                href={profileLinks.github}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-300 underline hover:text-accent"
              >
                {profileLinks.github.replace("https://", "")}
              </a>
            </p>
            <p>
              linkedin:{" "}
              <a
                href={profileLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-300 underline hover:text-accent"
              >
                {profileLinks.linkedin.replace("https://", "")}
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
            Navigating to ATS resume view...
          </p>
        );
        break;

      case "whoami":
        outputElement = (
          <p className="text-xs sm:text-sm font-mono text-emerald-400">
            guest@portfolio (Welcome! Explore projects or type &apos;help&apos;)
          </p>
        );
        break;

      default:
        outputElement = (
          <p className="text-xs sm:text-sm font-mono text-rose-400">
            Command not found: &apos;{trimmed}&apos;. Type{" "}
            <span className="text-accent">&apos;help&apos;</span>.
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
          historyIndex === -1
            ? commandHistory.length - 1
            : Math.max(0, historyIndex - 1);
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
      if ("cat tech-stack.yml".startsWith(current)) {
        setInputVal("cat tech-stack.yml");
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
      aria-label="Developer Interactive Terminal"
      className="group relative flex flex-col rounded-3xl border border-white/10 bg-base-900/85 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-accent/30"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-base-900/90 px-5 py-3 rounded-t-3xl">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5" aria-hidden>
            <span className="h-3 w-3 rounded-full bg-rose-400/80" />
            <span className="h-3 w-3 rounded-full bg-amber-300/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
          </div>
          <p className="font-mono text-xs text-base-400">vijay@fedora:~</p>
        </div>

        <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-base-500 hidden sm:inline">
          zsh · interactive
        </span>
      </div>

      {/* Terminal Window Body */}
      <div
        ref={terminalScrollRef}
        onClick={() => inputRef.current?.focus()}
        className="min-h-[340px] max-h-[440px] overflow-y-auto overflow-x-hidden hide-scrollbar px-4 sm:px-5 py-4 font-mono text-xs sm:text-sm leading-6 space-y-3 cursor-text"
      >
        {/* Initial Prompt & Animated Stack YAML */}
        {!isCleared && (
          <div className="space-y-1">
            <div className="text-base-400">
              <span className="text-accent font-semibold">❯</span> cat
              tech-stack.yml
            </div>
            <div className="space-y-0.5 pt-0.5">
              {techStackYamlLines.slice(0, revealedCount).map((line, idx) => (
                <div
                  key={`line-${idx}`}
                  className={`${line.color || "h-2"} break-words`}
                >
                  {line.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Command History Outputs */}
        {commandOutputs.map((item, idx) => (
          <div
            key={`cmd-output-${idx}`}
            className="space-y-1.5 pt-2 border-t border-white/5"
          >
            <div className="flex items-center gap-2 text-base-100">
              <span className="text-accent font-semibold select-none">❯</span>
              <span className="font-semibold text-base-100">{item.cmd}</span>
            </div>
            <div className="pl-3 py-1 border-l-2 border-white/10">
              {item.output}
            </div>
          </div>
        ))}

        {/* Live Active Input Line */}
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
              revealedCount < techStackYamlLines.length && !isCleared
                ? "Loading stack..."
                : "Type 'help' (Tab to autocomplete)..."
            }
            className="flex-1 bg-transparent text-base-100 outline-none placeholder:text-base-600 font-mono text-xs sm:text-sm"
          />
        </div>
      </div>

      {/* Quick Run Chips Bar */}
      <div className="flex items-center gap-1.5 border-t border-white/5 bg-base-950/60 px-5 py-2.5 rounded-b-3xl text-xs font-mono overflow-x-auto hide-scrollbar">
        <span className="text-base-500 mr-1 select-none flex-shrink-0">
          Quick:
        </span>
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
      </div>
    </section>
  );
}
