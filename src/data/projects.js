export const projects = [
  {
    id: "ragbot",
    name: "Modular RAG Telegram Bot",
    description:
      "Production-ready support bot for a 10k+ learner community, streaming high-noise chat logs into a RAG pipeline with ChromaDB vectors and Gemini-powered contextual responses.",
    tags: ["Python", "Gemini API", "ChromaDB", "RAG", "Telegram"],
    link: null,
    repo: "https://github.com/vjaykrsna/ragbot",
    category: "GenAI & Systems",
    metrics: "10,000+ Community Members",
    highlights: [
      "Vector search pipeline powered by ChromaDB embeddings and Google Gemini for zero-shot context retrieval.",
      "High-noise chat stream extraction with regex sanitization and PII anonymization before embedding.",
      "Resolves 80%+ of recurring developer and setup queries without human moderator intervention.",
    ],
  },
  {
    id: "vjs-chef",
    name: "AI-Powered Recipe Generator (VJ's Chef)",
    description:
      "Full-stack recipe explorer powered by Google Gemini API via a secured Node.js proxy with streaming markdown responses and accessible UI primitives.",
    tags: ["React", "Node.js", "Gemini API", "Tailwind CSS"],
    link: "https://vjaykrsna.github.io/vjs-chef/",
    repo: "https://github.com/vjaykrsna/vjs-chef",
    category: "Frontend & AI Systems",
    metrics: "Live Full-Stack App",
    highlights: [
      "Secured Node.js proxy managing API tokens, streaming responses, and structured prompt validation.",
      "Accessible roving tabindex keyboard navigation and step-by-step cooking focus mode.",
      "Bespoke UI primitives built with Tailwind CSS without relying on heavyweight component libraries.",
    ],
  },
  {
    id: "gsconnect",
    name: "GSConnect Mount Manager",
    description:
      "Systemd user service automating Android device mounting over GSConnect, syncing GNOME bookmarks and exposing clean filesystem directories for internal, SD, and USB storage.",
    tags: ["Bash", "Linux", "systemd", "gdbus"],
    link: null,
    repo: "https://github.com/vjaykrsna/gsconnect-mount-manager",
    category: "Linux & Automation",
    metrics: "Production Daily Driver",
    highlights: [
      "Zero-dependency gdbus integration detecting device connection and disconnection signals.",
      "Auto-mounts internal storage, micro-SD, and USB-OTG partitions into native GNOME bookmarks.",
      "Automated self-recovery and daemon watchdog eliminating manual mounting scripts.",
    ],
  },
  {
    id: "tenzies",
    name: "Tenzies React Game",
    description:
      "High-performance React dice game featuring customized micro-interactions, persistent best-score local storage, and responsive state synchronization.",
    tags: ["React", "JavaScript (ES6+)", "State Management", "Tailwind CSS"],
    link: "https://vjaykrsna.github.io/tenzies/",
    repo: "https://github.com/vjaykrsna/tenzies",
    category: "React & State Management",
    metrics: "Playable Micro-App",
    highlights: [
      "Clean modular state architecture with decoupled roll, freeze, and triumph game loops.",
      "Persistent session scoring with browser localStorage and keyboard accessibility.",
      "Fluid micro-animations and celebratory win states maintaining 60fps across mobile and desktop.",
    ],
  },
];
