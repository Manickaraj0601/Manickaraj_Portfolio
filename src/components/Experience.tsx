import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SlideInCard from "./motion/SlideInCard";

export default function Experience() {
  return (
    <section className="px-6 py-20 bg-[#050505] sm:px-12 md:px-16 lg:px-24 border-t border-border/40 relative">
      {/* Background light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,245,212,0.01)_0%,_transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="experience"
          label="Experience"
          title="Work Journey"
          subtitle="Building full stack web systems and robust REST APIs at scale"
        />

        <SlideInCard className="mb-10">
          <div className="glass-card rounded-[24px] flex flex-col gap-6 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9 relative overflow-hidden group">
            {/* Cyber Corners */}
            <div className="cyber-corner cyber-corner-tl" />
            <div className="cyber-corner cyber-corner-tr" />
            <div className="cyber-corner cyber-corner-bl" />
            <div className="cyber-corner cyber-corner-br" />

            <div>
              <h3 className="font-display text-3xl font-bold text-white sm:text-4xl">{experience.role}</h3>
              <p className="mt-2 text-lg text-primary font-medium">{experience.company}</p>
            </div>
            
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-5 py-2.5 text-sm text-primary font-semibold font-label">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <rect x="1.5" y="2.5" width="13" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" />
                <path d="M1.5 6.5h13M5 1.5v2M11 1.5v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {experience.period}
            </span>
          </div>
        </SlideInCard>

        {/* Highlights listed in a sleek grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experience.highlights.map((item, i) => (
            <motion.article
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="glass-card rounded-[20px] group flex flex-col justify-between p-6 min-h-[160px] relative hover:border-primary/20 transition-all duration-300"
            >
              {/* Cyber Corners */}
              <div className="cyber-corner cyber-corner-tl" />
              <div className="cyber-corner cyber-corner-tr" />
              <div className="cyber-corner cyber-corner-bl" />
              <div className="cyber-corner cyber-corner-br" />

              <span className="font-display text-4xl font-bold leading-none text-primary/20 transition-colors duration-300 group-hover:text-primary">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm leading-relaxed text-zinc-300 mt-4 transition-colors duration-300 group-hover:text-white sm:text-base font-sans">{item}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
