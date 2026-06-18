import { motion } from "framer-motion";

type Props = {
  text: string;
  className?: string;
  delay?: number;
  splitBy?: "char" | "word";
};

export default function AnimatedText({
  text,
  className = "",
  delay = 0,
  splitBy = "char",
}: Props) {
  const parts =
    splitBy === "word" ? text.split(" ") : Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: splitBy === "word" ? 0.08 : 0.03, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 30, rotateX: -40 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <motion.span
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      style={{ perspective: 800 }}
    >
      {parts.map((part, i) => (
        <motion.span
          key={`${part}-${i}`}
          variants={child}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {splitBy === "word" ? (
            <>
              {part}
              {i < parts.length - 1 ? "\u00A0" : ""}
            </>
          ) : part === " " ? (
            "\u00A0"
          ) : (
            part
          )}
        </motion.span>
      ))}
    </motion.span>
  );
}
