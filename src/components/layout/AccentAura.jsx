export default function AccentAura() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-24 top-8 h-56 w-56 rounded-full bg-accent/10 blur-3xl sm:-left-28 sm:h-72 sm:w-72 lg:-left-32 lg:top-10 lg:h-96 lg:w-96 lg:bg-accent/12" />
      <div className="absolute -right-10 top-1/3 h-44 w-44 rounded-full bg-support-teal/10 blur-3xl sm:right-4 sm:h-56 sm:w-56 lg:h-72 lg:w-72" />
      <div className="absolute -right-12 bottom-14 h-44 w-44 rounded-full bg-accent/6 blur-3xl sm:right-0 sm:bottom-20 sm:h-60 sm:w-60 lg:h-72 lg:w-72" />
      <div className="absolute left-[30%] top-1/2 h-24 w-24 -translate-y-1/2 rounded-full border border-accent/15 sm:h-28 sm:w-28 lg:h-32 lg:w-32 lg:border-accent/20" />
      <div className="absolute left-[52%] top-[18%] h-16 w-16 rounded-full border border-support-teal/20 sm:h-20 sm:w-20" />
    </div>
  );
}
