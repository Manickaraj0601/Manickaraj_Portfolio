import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SlideInCard from "./motion/SlideInCard";
import HorizontalFocusScroll from "./motion/HorizontalFocusScroll";

export default function Experience() {
  return (
    <section className="overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="experience"
          label="Experience"
          title="Work Journey"
          subtitle="Building enterprise insurance solutions at scale"
        />

        <SlideInCard className="mb-10">
          <div className="gold-card flex flex-col gap-4 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
            {/* Decorative Gold Corners */}
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <div>
              <h3 className="font-display text-3xl text-white sm:text-4xl">{experience.role}</h3>
              <p className="mt-2 text-lg text-accent font-medium">{experience.company}</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-5 py-2.5 text-sm text-accent">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="1.5" y="2.5" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1" />
                <path d="M1.5 6.5h13M5 1.5v2M11 1.5v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
              </svg>
              {experience.period}
            </span>
          </div>
        </SlideInCard>
      </div>

      <HorizontalFocusScroll hint="Swipe highlights">
        {experience.highlights.map((item, i) => (
          <motion.article
            key={item}
            className="gold-card group flex h-full min-h-[200px] flex-col justify-between p-6 sm:min-h-[220px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.55 }}
          >
            {/* Decorative Gold Corners */}
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <span className="font-display text-5xl leading-none text-accent/20 transition-colors duration-300 group-hover:text-accent/60">
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="text-sm leading-relaxed text-slate-300 transition-colors duration-300 group-hover:text-white sm:text-base">{item}</p>
          </motion.article>
        ))}
      </HorizontalFocusScroll>
    </section>
  );
}
