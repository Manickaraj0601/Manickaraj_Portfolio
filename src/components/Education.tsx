import { motion } from "framer-motion";
import { education, languages } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SequentialReveal from "./motion/SequentialReveal";
import TiltCard from "./motion/TiltCard";

const cards = [
  ...education.map((item) => ({
    key: item.degree,
    title: item.degree,
    subtitle: item.institution,
    icon: "degree" as const,
  })),
  {
    key: "languages",
    title: "Languages",
    subtitle: languages.join(" · "),
    icon: "lang" as const,
  },
];

function DegreeIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <path
        d="M24 4L8 13v12c0 9 7 16 16 18 9-2 16-9 16-18V13L24 4z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M17 24l5 5 10-10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LangIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden>
      <circle cx="24" cy="24" r="17" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M7 24h34M24 7a17 17 0 000 34M24 7a17 17 0 010 34"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.6"
      />
    </svg>
  );
}

function EducationCard({
  title,
  subtitle,
  icon,
}: {
  title: string;
  subtitle: string;
  icon: "degree" | "lang";
}) {
  return (
    <TiltCard intensity={10} className="h-full">
      <motion.article
        className="gold-card group relative flex h-full min-h-[260px] flex-col items-center justify-center p-8 text-center sm:min-h-[280px]"
        whileHover={{
          borderColor: "rgba(212,175,55,0.5)",
          boxShadow: "0 0 35px -5px rgba(212,175,55,0.22)",
        }}
        transition={{ duration: 0.4 }}
      >
        {/* Decorative Gold Corners */}
        <div className="card-corner card-corner-tl" />
        <div className="card-corner card-corner-tr" />
        <div className="card-corner card-corner-bl" />
        <div className="card-corner card-corner-br" />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent/[0.04] to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />

        <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-accent/25 bg-black/60 text-accent transition-all duration-400 group-hover:border-accent/60 group-hover:bg-accent/10">
          {icon === "degree" ? <DegreeIcon /> : <LangIcon />}
        </div>

        <h3 className="font-display relative max-w-[220px] text-xl leading-snug text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl">
          {title}
        </h3>
        <p className="relative mt-3 max-w-[240px] text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
          {subtitle}
        </p>

        <motion.span
          className="absolute bottom-5 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-accent"
          initial={{ width: 0 }}
          whileHover={{ width: 48 }}
          transition={{ duration: 0.35 }}
        />
      </motion.article>
    </TiltCard>
  );
}

export default function Education() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(212,175,55,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.02) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 50%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="education"
          label="Education"
          title="Academic Background"
          subtitle="Move cursor across — cards appear one by one"
        />

        <SequentialReveal className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {cards.map((item) => (
            <EducationCard
              key={item.key}
              title={item.title}
              subtitle={item.subtitle}
              icon={item.icon}
            />
          ))}
        </SequentialReveal>
      </div>
    </section>
  );
}
