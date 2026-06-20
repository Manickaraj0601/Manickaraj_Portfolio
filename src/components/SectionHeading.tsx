import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";

type Props = {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ id, label, title, subtitle }: Props) {
  return (
    <Reveal className="mb-10 sm:mb-14">
      <div id={id} className="scroll-mt-28">
        <motion.p
          className="font-label mb-3 flex items-center gap-3 text-xs text-white/50 sm:text-sm font-semibold"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <span className="h-px w-10 bg-primary/30" />
          {label}
        </motion.p>
        <h2 className="font-display text-4xl leading-[1.1] text-white sm:text-5xl lg:text-6xl font-bold">
          {title.split(" ").map((word, i, arr) => (
            <span key={i}>
              {i === arr.length - 1 ? (
                <span className="text-gradient-cyber italic"> {word}</span>
              ) : (
                <>{word} </>
              )}
            </span>
          ))}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted font-sans">{subtitle}</p>
        )}
        <div className="h-[2px] bg-gradient-to-r from-primary to-secondary mt-7 w-28 rounded-full" />
      </div>
    </Reveal>
  );
}
