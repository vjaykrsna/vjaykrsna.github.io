import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const sections = [
  {
    id: "projects",
    title: "Recent Work",
    navLabel: "Work",
    description:
      "A running log of scrappy experiments—from AI helpers to shell scripts—that taught me something new.",
    icon: SparklesIcon,
  },
  {
    id: "experience",
    title: "Experience",
    navLabel: "Experience",
    description:
      "Notes on the freelance gigs, collaborations, and self-driven work that shaped my approach.",
    icon: BriefcaseIcon,
  },
  {
    id: "education",
    title: "Education",
    navLabel: "Education",
    description:
      "Degrees and programs that set the foundation for how I build and learn today.",
    icon: AcademicCapIcon,
  },
  {
    id: "focus",
    title: "What I'm Focusing On",
    navLabel: "Focus",
    description:
      "Topics currently on my learning list—mostly frontend fundamentals and the tooling around them.",
    icon: ChartBarIcon,
  },
];
