import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from "../icons/SocialIcons.jsx";

export const profileLinks = {
  github: "https://github.com/vjaykrsna",
  linkedin: "https://www.linkedin.com/in/vjaykrsna/",
  email: "mailto:vijay74684@gmail.com",
  resume: "https://vjaykrsna.github.io/Vijay_Krishna_Resume.pdf",
};

export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: profileLinks.github,
    icon: GitHubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profileLinks.linkedin,
    icon: LinkedInIcon,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://instagram.com/vjaykrsna",
    icon: InstagramIcon,
  },
  {
    id: "x",
    label: "X (Twitter)",
    href: "https://x.com/vjaykrsna",
    icon: TwitterIcon,
  },
  { id: "email", label: "Email", href: profileLinks.email, icon: MailIcon },
];

export const profileInfo = {
  alias: "vjaykrsna",
  home: "Bihar",
  modes: ["software developer", "GenAI tinkerer"],
  shiplist: ["mini tools", "RAG bots", "frontend-for-fun"],
  email: profileLinks.email,
};
