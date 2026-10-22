import {
  CommandLineIcon,
  CpuChipIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const iconMap = {
  "Applied AI": CpuChipIcon,
  "Frontend Craft": PaintBrushIcon,
  "Automation & Tooling": CommandLineIcon,
};

export default function FocusAreas({ areas }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {areas.map((area) => {
        const Icon = iconMap[area.title] || CpuChipIcon;
        return (
          <article
            key={area.title}
            className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-br from-base-900 to-base-950 p-6 sm:p-7 shadow-xl transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent transition group-hover:scale-105 group-hover:border-accent/30">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Active Focus
                </span>
              </div>

              <div>
                <h3 className="font-display text-xl font-bold text-base-100 group-hover:text-accent transition-colors">
                  {area.title}
                </h3>
                <p className="mt-2 text-sm text-base-300 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-base-400 block mb-2.5">
                Core Tooling:
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {area.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-white/10 bg-base-800/80 px-2.5 py-1 text-xs font-mono text-base-200 transition hover:border-accent/50 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        );
      })}
    </div>
  );
}
