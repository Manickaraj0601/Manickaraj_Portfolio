import { motion } from "framer-motion";
import { additionalProjects, keyProjects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import HorizontalFocusScroll from "./motion/HorizontalFocusScroll";
import { ProjectIcon } from "./svg/ProjectIcons";

type Project = {
  title: string;
  tech: string[];
  description: string;
  icon: string;
  featured?: boolean;
};

function ProjectCard({
  title,
  tech,
  description,
  icon,
  featured = false,
}: Project) {
  return (
    <article className="gold-card group relative flex h-full min-h-[320px] flex-col overflow-hidden p-6 sm:min-h-[340px]">
      {/* Decorative Gold Corners */}
      <div className="card-corner card-corner-tl" />
      <div className="card-corner card-corner-tr" />
      <div className="card-corner card-corner-bl" />
      <div className="card-corner card-corner-br" />

      {/* Hover Gold Mesh Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 to-gold/0 opacity-0 transition-opacity duration-500 group-hover:from-accent/5 group-hover:to-gold/5 group-hover:opacity-100" />

      <div className="relative z-10 mb-5 flex items-start justify-between gap-3">
        <div className="rounded-2xl border border-accent/20 bg-surface/80 p-3.5 text-accent/80 transition-all duration-300 group-hover:border-accent/60 group-hover:bg-accent/10 group-hover:text-accent">
          <ProjectIcon type={icon} className="h-9 w-9 sm:h-10 sm:w-10" />
        </div>
        {featured && (
          <span className="font-label rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] text-accent font-semibold tracking-wider uppercase sm:text-xs">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-display relative z-10 mb-3 text-xl leading-snug text-white transition-colors duration-300 group-hover:text-accent sm:text-2xl">
        {title}
      </h3>

      <p className="relative z-10 mb-6 flex-1 text-sm leading-relaxed text-muted transition-colors duration-300 group-hover:text-white/80">
        {description}
      </p>

      <div className="relative z-10 flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-accent/15 bg-black/40 px-2.5 py-1 text-xs text-muted transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

function ProjectRow({ title, projects }: { title: string; projects: Project[] }) {
  return (
    <div className="mb-14 last:mb-0">
      <motion.h3
        className="font-display mb-6 flex items-center gap-3 text-2xl text-white sm:text-3xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <span className="h-px w-10 bg-white/40" />
        {title}
      </motion.h3>
      <HorizontalFocusScroll hint="Swipe projects">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </HorizontalFocusScroll>
    </div>
  );
}

export default function Projects() {
  const featured = keyProjects.filter((p) => p.featured);
  const other = keyProjects.filter((p) => !p.featured);

  return (
    <section className="overflow-hidden border-t border-border/40 bg-surface-raised/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="projects"
          label="Projects"
          title="Selected Work"
          subtitle="Swipe through enterprise systems built for production"
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ProjectRow title="Key Projects" projects={featured} />
        <ProjectRow title="More Projects" projects={other} />
        <ProjectRow title="Additional Projects" projects={additionalProjects} />
      </div>
    </section>
  );
}
