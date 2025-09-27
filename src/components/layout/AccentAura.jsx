export default function AccentAura() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full border border-accent/20" />
    </div>
  );
}
