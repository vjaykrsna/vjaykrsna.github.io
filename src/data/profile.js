import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  MailIcon,
} from "../icons/SocialIcons.jsx";

export const profileLinks = {
  github: "https://github.com/vjaykrsna",
  linkedin: "https://linkedin.com/in/vjaykrsna",
  email: "mailto:vijay74684@gmail.com",
  resume: "#resume",
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
  {
    id: "email",
    label: "Email",
    href: profileLinks.email,
    icon: MailIcon,
  },
];

export const profileInfo = {
  name: "Vijay Krishna",
  location: "Bihar, India",
  role: "Software Developer",
  email: "vijay74684@gmail.com",
};
