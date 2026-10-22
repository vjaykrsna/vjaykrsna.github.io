export default function AccentAura() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Top subtle warm aura */}
      <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/5 blur-[120px]" />
      {/* Side subtle tint */}
      <div className="absolute top-1/3 -right-40 h-[450px] w-[500px] rounded-full bg-white/[0.02] blur-[100px]" />
      <div className="absolute bottom-10 -left-40 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-[100px]" />
    </div>
  );
}
