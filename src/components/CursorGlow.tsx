import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const cx = useMotionValue(-200);
  const cy = useMotionValue(-200);
  const sx = useSpring(cx, { stiffness: 85, damping: 22 });
  const sy = useSpring(cy, { stiffness: 85, damping: 22 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cx.set(e.clientX);
      cy.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [cx, cy]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[5] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        left: sx,
        top: sy,
        background:
          "radial-gradient(circle, rgba(0, 245, 212, 0.07) 0%, rgba(139, 92, 246, 0.03) 50%, transparent 70%)",
      }}
      aria-hidden
    />
  );
}
