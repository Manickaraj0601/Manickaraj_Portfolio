import { motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode[];
  className?: string;
};

export default function SequentialReveal({ children, className = "" }: Props) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(0);
  const [inView, setInView] = useState(false);

  const revealUpTo = useCallback(
    (index: number) => {
      setRevealed((prev) => Math.max(prev, index + 1));
    },
    [],
  );

  useEffect(() => {
    const el = zoneRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.35 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timers = children.map((_, i) =>
      window.setTimeout(() => revealUpTo(i), 180 + i * 220),
    );
    return () => timers.forEach(clearTimeout);
  }, [inView, children.length, revealUpTo]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = zoneRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const col = Math.floor((x / rect.width) * children.length);
    const index = Math.min(children.length - 1, Math.max(0, col));
    revealUpTo(index);
  };

  return (
    <div
      ref={zoneRef}
      className={className}
      onMouseMove={handleMouseMove}
    >
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.82, y: 24 }}
          animate={
            i < revealed
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.82, y: 24 }
          }
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1] as const,
          }}
          onMouseEnter={() => revealUpTo(i)}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
