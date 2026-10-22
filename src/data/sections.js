import {
  AcademicCapIcon,
  BriefcaseIcon,
  ChartBarIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

export const sections = [
  {
    id: "projects",
    title: "Featured Projects",
    heading: "Featured Engineering Work",
    navLabel: "Work",
    description:
      "Production-ready GenAI vector pipelines, Linux system automation, and responsive React applications.",
    icon: SparklesIcon,
  },
  {
    id: "experience",
    title: "Experience",
    heading: "Professional Work History",
    navLabel: "Experience",
    description:
      "Industrial engineering and preventive maintenance experience in precision manufacturing.",
    icon: BriefcaseIcon,
  },
  {
    id: "education",
    title: "Education",
    heading: "Academic Foundation",
    navLabel: "Education",
    description:
      "Academic foundation in Information Technology and manufacturing engineering.",
    icon: AcademicCapIcon,
  },
  {
    id: "focus",
    title: "Focus Areas",
    heading: "Core Domains & Technical Tooling",
    navLabel: "Focus",
    description:
      "Core engineering domains, modern frameworks, and system tools currently guiding my work.",
    icon: ChartBarIcon,
  },
];
