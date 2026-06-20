import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import { ProjectIcon } from "./svg/ProjectIcons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 70,
      damping: 15,
    },
  },
};

const badgeVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function Skills() {
  return (
    <section className="px-6 py-20 bg-[#050505] sm:px-12 md:px-16 lg:px-24 border-t border-border/40 relative">
      {/* Background radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(0,245,212,0.015)_0%,_transparent_60%)] pointer-events-none" />

      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="skills"
          label="Tech Stack"
          title="Skills & Tools"
          subtitle="Technologies and frameworks behind production-grade systems"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skills.map((group, groupIdx) => (
            <motion.article
              key={group.category}
              variants={cardVariants}
              className="glass-card rounded-[24px] p-6 relative overflow-hidden group flex flex-col justify-start min-h-[280px] hover:border-primary/20 transition-colors duration-300"
            >
              {/* Decorative Cyber Corners */}
              <div className="cyber-corner cyber-corner-tl" />
              <div className="cyber-corner cyber-corner-tr" />
              <div className="cyber-corner cyber-corner-bl" />
              <div className="cyber-corner cyber-corner-br" />

              {/* Glowing hover background mesh */}
              <div className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-[40px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${
                groupIdx % 2 === 0 ? "bg-primary" : "bg-secondary"
              }`} />

              <div className="relative z-10 mb-4 flex items-center justify-between">
                <div className={`transition-colors duration-300 ${
                  groupIdx % 2 === 0 ? "text-primary" : "text-secondary"
                }`}>
                  <ProjectIcon type={group.icon} className="h-9 w-9" />
                </div>
                <span className="font-label text-[9px] text-zinc-400 font-semibold tracking-wider">
                  {group.category}
                </span>
              </div>

              <h3 className="font-display relative z-10 mb-5 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
                {group.category}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2 mt-auto">
                {group.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={badgeVariants}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                      boxShadow: groupIdx % 2 === 0 
                        ? "0 4px 20px rgba(0, 245, 212, 0.2)"
                        : "0 4px 20px rgba(139, 92, 246, 0.2)"
                    }}
                    className={`rounded-xl border px-3 py-1.5 text-xs font-semibold select-none cursor-default transition-all duration-200 ${
                      groupIdx % 2 === 0 
                        ? "border-primary/10 bg-zinc-950/80 text-zinc-200 hover:border-primary/50 hover:text-primary" 
                        : "border-secondary/10 bg-zinc-950/80 text-zinc-200 hover:border-secondary/50 hover:text-secondary"
                    }`}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
