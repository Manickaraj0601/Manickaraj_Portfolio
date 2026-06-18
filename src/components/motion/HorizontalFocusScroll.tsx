import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import TiltCard from "./TiltCard";

type Props = {
  children: ReactNode[];
  hint?: string;
};

export default function HorizontalFocusScroll({
  children,
  hint = "Swipe to explore",
}: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateActive = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const center = el.scrollLeft + el.clientWidth / 2;
    let closest = 0;
    let minDist = Infinity;

    Array.from(el.children).forEach((card, i) => {
      const node = card as HTMLElement;
      const cardCenter = node.offsetLeft + node.offsetWidth / 2;
      const dist = Math.abs(center - cardCenter);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });

    setActiveIndex(closest);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    updateActive();

    return () => {
      el.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, [updateActive, children.length]);

  return (
    <div className="relative">
      <p className="mb-4 flex items-center gap-2 text-xs tracking-wide text-muted sm:hidden">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path d="M2 8h12M10 5l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {hint}
      </p>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-surface to-transparent sm:w-16" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-surface to-transparent sm:w-16" />

      <div
        ref={scrollRef}
        className="scrollbar-hide -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-[7.5vw] pb-6 pt-2 sm:-mx-6 sm:gap-6 sm:px-[max(1.5rem,calc((100%-380px)/2))]"
      >
        {children.map((child, i) => (
          <motion.div
            key={i}
            className="group relative snap-center shrink-0"
            style={{ width: "min(85vw, 380px)" }}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.06,
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1] as const,
            }}
            animate={{
              scale: activeIndex === i ? 1 : 0.94,
              opacity: activeIndex === i ? 1 : 0.45,
            }}
          >
            <TiltCard className="relative h-full">
              <div
                className={`h-full rounded-2xl transition-all duration-700 ease-out ${
                  activeIndex === i
                    ? "shadow-2xl shadow-accent/10 ring-1 ring-accent/30"
                    : "ring-1 ring-white/5"
                }`}
              >
                {child}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-3 flex justify-center gap-2">
        {children.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to card ${i + 1}`}
            className={`h-1 rounded-full transition-all duration-500 ${
              activeIndex === i ? "w-8 bg-accent" : "w-1.5 bg-neutral-700"
            }`}
            onClick={() => {
              const el = scrollRef.current?.children[i] as HTMLElement | undefined;
              el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
            }}
          />
        ))}
      </div>
    </div>
  );
}
