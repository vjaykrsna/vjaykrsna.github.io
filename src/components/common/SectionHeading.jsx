export default function SectionHeading({ title, heading, description, icon: Icon }) {
  return (
    <header className="space-y-3">
      {/* Category Eyebrow Pill */}
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono uppercase tracking-wider text-accent">
        {Icon ? <Icon className="h-3.5 w-3.5 text-accent" aria-hidden /> : null}
        <span>{title}</span>
      </div>

      {/* Prominent Semantic Heading */}
      <h2 className="font-display text-2xl font-bold tracking-tight text-base-100 sm:text-3xl">
        {heading || title}
      </h2>

      {/* Description */}
      {description ? (
        <p className="max-w-2xl text-sm sm:text-base text-base-300 leading-relaxed">
          {description}
        </p>
      ) : null}
    </header>
  );
}
