import { techMarquee } from "../data/portfolio";

export default function TechMarquee() {
  const items = [...techMarquee, ...techMarquee];

  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-surface-raised py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface-raised to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface-raised to-transparent" />
      <div className="flex w-max animate-marquee gap-10 sm:gap-14">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex shrink-0 items-center gap-3 text-sm text-neutral-500 sm:text-base"
          >
            <span className="font-display text-lg text-white italic">{tech}</span>
            <span className="h-1 w-1 rounded-full bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}
