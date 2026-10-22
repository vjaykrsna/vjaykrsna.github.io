import { useState } from "react";
import { CheckIcon } from "@heroicons/react/24/outline";

export default function SocialLink({
  href,
  label,
  icon: Icon,
  variant = "pill",
}) {
  const [copied, setCopied] = useState(false);
  const isMail = href ? href.startsWith("mailto:") : false;
  const isExternal = href ? href.startsWith("http") || isMail : false;
  const emailAddress = isMail ? href.replace("mailto:", "") : "";

  const handleClick = (e) => {
    if (isMail) {
      if (navigator.clipboard?.writeText) {
        e.preventDefault();
        navigator.clipboard
          .writeText(emailAddress)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch(() => {
            window.location.href = href;
          });
      }
    }
  };

  const commonProps = {
    href,
    target: isExternal && !isMail ? "_blank" : undefined,
    rel: isExternal && !isMail ? "noreferrer" : undefined,
    "aria-label": isMail
      ? copied
        ? "Email copied to clipboard"
        : `Email: ${emailAddress}`
      : label,
    title: isMail
      ? copied
        ? "Copied to clipboard!"
        : "Click to copy email address"
      : undefined,
    onClick: isMail ? handleClick : undefined,
  };

  if (!href) {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-white/10 px-3.5 py-1.5 text-xs text-base-500 opacity-70">
        {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden /> : null}
        <span>{label}</span>
      </span>
    );
  }

  if (variant === "pill") {
    return (
      <a
        {...commonProps}
        className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs sm:text-sm font-medium transition active:scale-95 ${
          copied
            ? "border-emerald-500/50 bg-emerald-500/15 text-emerald-300"
            : "border-white/10 bg-white/5 text-base-200 hover:border-accent/40 hover:bg-white/10 hover:text-accent"
        }`}
      >
        {copied ? (
          <CheckIcon className="h-3.5 w-3.5 text-emerald-400" aria-hidden />
        ) : Icon ? (
          <Icon className="h-3.5 w-3.5 text-accent" aria-hidden />
        ) : null}
        <span>{copied ? "Copied!" : label}</span>
      </a>
    );
  }

  return (
    <a
      {...commonProps}
      className={`group inline-flex items-center gap-2 text-xs sm:text-sm transition ${
        copied
          ? "text-emerald-400 font-medium"
          : "text-base-300 hover:text-accent"
      }`}
    >
      {copied ? (
        <CheckIcon className="h-4 w-4 text-emerald-400" aria-hidden />
      ) : Icon ? (
        <Icon
          className="h-4 w-4 text-base-400 transition group-hover:text-accent"
          aria-hidden
        />
      ) : null}
      <span>{copied ? "Email Copied!" : label}</span>
    </a>
  );
}
