import SocialLink from "../common/SocialLink.jsx";

export default function Footer({ socialLinks }) {
  return (
    <footer className="flex flex-col items-center gap-6 border-t border-base-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-base-400">
        © {new Date().getFullYear()} Vijay Krishna • Built with care and plenty
        of late-night debugging
      </p>
      <nav className="flex flex-wrap gap-4 text-sm text-base-400">
        {socialLinks.map((link) => (
          <SocialLink key={`footer-${link.id}`} variant="text" {...link} />
        ))}
      </nav>
    </footer>
  );
}
