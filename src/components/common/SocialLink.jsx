export default function SocialLink({
  href,
  label,
  icon: Icon,
  variant = "pill",
}) {
  const isExternal = href ? href.startsWith("http") : false;
  const commonProps = {
    href,
    target: isExternal ? "_blank" : undefined,
    rel: isExternal ? "noreferrer" : undefined,
    "aria-label": label,
  };

  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-base-700/40 px-4 py-2 text-sm text-base-500 opacity-70">
        {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
        <span>{label}</span>
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <a
        {...commonProps}
        className="inline-flex items-center gap-2 rounded-full border border-base-700/60 bg-base-800/50 px-4 py-2 text-sm font-medium text-base-100 transition hover:border-accent/50 hover:bg-base-700/70 hover:text-accent"
      >
        {Icon ? <Icon className="h-4 w-4 text-accent" aria-hidden /> : null}
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a
      {...commonProps}
      className="group inline-flex items-center gap-2 text-sm text-base-400 transition hover:text-accent"
    >
      {Icon ? (
        <Icon
          className="h-4 w-4 text-accent transition group-hover:text-accent"
          aria-hidden
        />
      ) : null}
      <span>{label}</span>
    </a>
  );
}
