export const resumeData = {
  basics: {
    name: "Vijay Krishna",
    label: "Software Developer",
    email: "vijay74684@gmail.com",
    phone: "+91 8939604531",
    location: "Khagaria, Bihar, India",
    website: "https://vjaykrsna.github.io",
    profiles: [
      {
        network: "GitHub",
        username: "vjaykrsna",
        url: "https://github.com/vjaykrsna",
      },
      {
        network: "LinkedIn",
        username: "vjaykrsna",
        url: "https://linkedin.com/in/vjaykrsna",
      },
    ],
  },
  skills: [
    {
      category: "Languages",
      items: ["C++", "Python", "JavaScript (ES6+)", "Bash", "SQL"],
    },
    {
      category: "Web & Frameworks",
      items: ["React", "Node.js", "Express.js", "Tailwind CSS", "HTML5/CSS3", "Vite"],
    },
    {
      category: "AI & Databases",
      items: ["RAG Pipelines", "Gemini API", "ChromaDB", "MongoDB", "SQL"],
    },
    {
      category: "Tools & Systems",
      items: ["Git", "GitHub", "Linux (Fedora/GNOME)", "systemd", "REST APIs"],
    },
  ],
  projects: [
    {
      name: "LLM-Powered Telegram Bot for Community Support",
      tech: ["Python", "Gemini 2.5 Flash", "ChromaDB", "RAG Pipeline"],
      repo: "https://github.com/vjaykrsna/ragbot",
      bullets: [
        "Architected an AI-driven Telegram support bot using Gemini 2.5 Flash and ChromaDB vectors, resolving over 80% of recurring questions for a 10,000+ member learner community.",
        "Engineered an automated extraction and summarization pipeline that streams high-noise group chats into structured, context-aware knowledge bases with PII anonymization.",
      ],
    },
    {
      name: "GSConnect Mount Manager",
      tech: ["Bash", "systemd", "Linux", "GSConnect"],
      repo: "https://github.com/vjaykrsna/gsconnect-mount-manager",
      bullets: [
        "Created a systemd user service that automates Android device mounting over GSConnect, syncing GNOME bookmarks and exposing clean filesystem directories for internal, SD, and USB-OTG storage.",
        "Built automated health-check and self-recovery routines with zero-dependency gdbus integration, eliminating manual mounting scripts.",
      ],
    },
    {
      name: "AI-Powered Recipe Generator (VJ's Chef)",
      tech: ["React", "Node.js", "Gemini API", "Tailwind CSS"],
      link: "https://vjaykrsna.github.io/vjs-chef/",
      repo: "https://github.com/vjaykrsna/vjs-chef",
      bullets: [
        "Engineered a full-stack recipe explorer powered by Google Gemini API via a secured Node.js backend proxy with streaming markdown responses.",
        "Built modular UI primitives featuring keyboard navigation (roving tabindex), asynchronous state feedback, and accessible responsive styling.",
      ],
    },
    {
      name: "Consumer Inflation & Essentials Price Tracker",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      bullets: [
        "Analyzed multi-year essential commodity pricing across Indian metropolitan centers; engineered a custom CPI-lite weighted index to track localized inflation trends.",
        "Built automated data cleaning pipelines and city-wise visual dashboards revealing seasonal price spikes across staples (grains, dairy, cooking fuel).",
      ],
    },
  ],
  education: [
    {
      degree: "B.Tech in Information Technology",
      institution: "Oriental Institute of Science and Technology (RGPV)",
      location: "Bhopal, MP",
      timeframe: "2022 – 2025",
      details: "CGPA: 7.32",
    },
    {
      degree: "Diploma in Plastic Mould Technology",
      institution: "CIPET",
      location: "Chennai, TN",
      timeframe: "2019 – 2022",
      details: "Percentage: 84%",
    },
    {
      degree: "High School (10th)",
      institution: "Ramkrishna Children's Academy",
      location: "Begusarai, Bihar",
      timeframe: "2019",
      details: "Percentage: 69%",
    },
  ],
  experience: [
    {
      role: "Industrial Trainee",
      company: "Mahle Anand Filter System Pvt. Ltd.",
      location: "Chennai, TN",
      timeframe: "Jan 2022 – June 2022",
      bullets: [
        "Operated and monitored industrial injection moulding systems and performed baseline preventive maintenance.",
        "Collaborated cross-functionally across plant shifts to adhere to high-precision manufacturing quality benchmarks.",
      ],
    },
  ],
  certificates: [
    {
      title: "Problem Solving",
      issuer: "HackerRank",
    },
    {
      title: "Prompt Engineering for Developers",
      issuer: "DeepLearning.AI",
    },
  ],
};
