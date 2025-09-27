export default function SectionHeading({ title, description, icon: Icon }) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-3 rounded-full border border-base-700 bg-base-800/80 px-3 py-1 text-xs uppercase tracking-[0.3em] text-base-400">
          <Icon className="h-4 w-4 text-accent" />
          <span>{title}</span>
        </div>
        <p className="max-w-2xl text-base text-base-300">{description}</p>
      </div>
    </header>
  );
}
