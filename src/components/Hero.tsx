import { motion } from "framer-motion";
import { personal, stats } from "../data/portfolio";
import AnimatedText from "./motion/AnimatedText";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-24 lg:px-8">
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-accent">Available for opportunities</span>
          </motion.div>

          <p className="mb-3 text-base text-muted sm:text-lg">
            <AnimatedText text="Hello, I'm" delay={0.15} />
          </p>

          <h1 className="font-display mb-4 text-[2.75rem] leading-[1.05] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            <AnimatedText text={personal.name} delay={0.35} />
          </h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mb-6 text-2xl italic sm:text-3xl lg:text-4xl"
          >
            <span className="text-gradient">{personal.title}</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05, duration: 0.6 }}
            className="mb-9 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
          >
            Building scalable REST APIs, enterprise insurance platforms, and
            responsive web applications with Node.js, React, ASP.NET &amp; SQL Server.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="flex flex-wrap gap-3 sm:gap-4"
          >
            <motion.a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-accent to-gold px-7 py-3.5 text-sm font-semibold text-black sm:px-9 shadow-lg shadow-accent/10"
              whileHover={{ scale: 1.03, boxShadow: "0 12px 40px rgba(212,175,55,0.25)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-accent/40 px-7 py-3.5 text-sm font-semibold text-accent sm:px-9"
              whileHover={{ scale: 1.03, borderColor: "rgba(212,175,55,0.9)", backgroundColor: "rgba(212,175,55,0.05)" }}
              whileTap={{ scale: 0.98 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 + i * 0.08 }}
              >
                <p className="font-display text-3xl text-gradient sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-xs leading-snug text-muted sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] as const }}
          className="relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2 }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-label text-[10px]">Scroll</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            <path d="M9 3v12M5 10l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
