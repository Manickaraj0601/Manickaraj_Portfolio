import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  intensity?: number;
};

export default function TiltCard({
  children,
  className = "",
  intensity = 14,
}: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const hovering = useMotionValue(0);

  const spring = { stiffness: 120, damping: 18, mass: 0.4 };

  const rotateX = useSpring(
    useTransform(y, [-0.5, 0.5], [intensity, -intensity]),
    spring,
  );
  const rotateY = useSpring(
    useTransform(x, [-0.5, 0.5], [-intensity, intensity]),
    spring,
  );

  const glare = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(212, 175, 55, 0.18), transparent 60%)`;
  const glareOpacity = useSpring(hovering, { stiffness: 200, damping: 25 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    hovering.set(1);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
    hovering.set(0);
  }

  return (
    <motion.div
      className={`tilt-wrap relative ${className}`}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.98 }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
        style={{ background: glare, opacity: glareOpacity }}
      />
      <div style={{ transform: "translateZ(24px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
