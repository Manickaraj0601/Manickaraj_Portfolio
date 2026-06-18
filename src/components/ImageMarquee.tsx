import { motion } from "framer-motion";

const images = [
  { src: "/images/dashboard.png", alt: "Walaa Insurance Analytics Dashboard", label: "Analytics Dashboard" },
  { src: "/images/app.png", alt: "Walaa Insurance Policy Mobile Interface", label: "Policy Mobile Portal" },
  { src: "/images/network.png", alt: "Centralized API & Database Integrations Map", label: "Centralized API Integrations" },
];

export default function ImageMarquee() {
  // Triple the items to ensure seamless loop on all screen sizes
  const marqueeItems = [...images, ...images, ...images];

  return (
    <section className="relative overflow-hidden border-y border-accent/10 bg-surface-raised py-16">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-surface to-transparent sm:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-surface to-transparent sm:w-48" />

      <div className="mx-auto max-w-7xl px-4 pb-8 text-center sm:px-6 lg:px-8">
        <span className="font-label text-xs tracking-widest text-accent font-semibold uppercase">Showcase</span>
        <h2 className="font-display mt-2 text-3xl leading-snug text-white sm:text-4xl">
          Visualizing <span className="text-gradient italic">System Architecture</span>
        </h2>
      </div>

      <div className="flex w-max animate-scroll-left gap-8 px-4 py-4">
        {marqueeItems.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="group relative shrink-0 overflow-hidden rounded-2xl border border-accent/20 bg-black/60 p-2.5 transition-all duration-500 hover:border-accent/60 hover:shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:scale-[1.03]"
            style={{ width: "min(85vw, 340px)" }}
          >
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-neutral-900">
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </div>

            <div className="mt-4 flex items-center justify-between px-2">
              <div>
                <p className="font-display text-lg text-white group-hover:text-accent transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-[10px] text-muted tracking-wide uppercase font-semibold">
                  Walaa Client Portal
                </p>
              </div>
              <motion.span
                className="h-2 w-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2, delay: (i % 3) * 0.4 }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
