import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: Props) {
  const hidden =
    direction === "left"
      ? { opacity: 0, x: -50 }
      : direction === "right"
        ? { opacity: 0, x: 50 }
        : direction === "scale"
          ? { opacity: 0, scale: 0.92 }
          : { opacity: 0, y: 40 };

  const visible =
    direction === "left" || direction === "right"
      ? { opacity: 1, x: 0 }
      : direction === "scale"
        ? { opacity: 1, scale: 1 }
        : { opacity: 1, y: 0 };

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
