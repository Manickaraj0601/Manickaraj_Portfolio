import { motion } from "framer-motion";

const images = [
  { src: "/images/dashboard.webp", alt: "Walaa Insurance Analytics Dashboard", label: "Analytics Dashboard" },
  { src: "/images/app.webp", alt: "Walaa Insurance Policy Mobile Interface", label: "Policy Mobile Portal" },
  { src: "/images/network.webp", alt: "Centralized API & Database Integrations Map", label: "Centralized API Integrations" },
];

export default function ImageMarquee() {
  // Triple the items to ensure seamless loop
  const marqueeItems = [...images, ...images, ...images];

  return (
    <section className="relative overflow-hidden border-y border-zinc-800 bg-[#070708] py-16">
      {/* Background Grid Pattern Accent */}
      <div className="absolute inset-0 opacity-[0.08]" aria-hidden>
        <div className="absolute inset-0 bg-grid" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#050505] to-transparent sm:w-48" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#050505] to-transparent sm:w-48" />

      <div className="mx-auto max-w-7xl px-4 pb-8 text-center sm:px-6 lg:px-8">
        <span className="font-label text-[10px] tracking-widest text-primary font-semibold uppercase">Showcase</span>
        <h2 className="font-display mt-2 text-3xl font-bold text-white sm:text-4xl">
          Visualizing <span className="text-gradient-cyber italic">System Architecture</span>
        </h2>
      </div>

      <div className="flex w-max animate-scroll-left gap-8 px-4 py-4">
        {marqueeItems.map((item, i) => (
          <div
            key={`${item.src}-${i}`}
            className="group relative shrink-0 overflow-hidden rounded-[24px] border border-white/5 bg-zinc-950/80 p-2.5 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(0,245,212,0.1)] hover:scale-[1.02]"
            style={{ width: "min(85vw, 340px)" }}
          >
            {/* Cyber corners */}
            <div className="cyber-corner cyber-corner-tl" />
            <div className="cyber-corner cyber-corner-tr" />
            <div className="cyber-corner cyber-corner-bl" />
            <div className="cyber-corner cyber-corner-br" />

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-zinc-900">
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
                <p className="font-display text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {item.label}
                </p>
                <p className="text-[9px] text-zinc-400 tracking-wide uppercase font-semibold">
                  Walaa Client Portal
                </p>
              </div>
              <motion.span
                className="h-2 w-2 rounded-full bg-primary"
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
