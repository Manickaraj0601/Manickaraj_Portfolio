import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { additionalProjects, keyProjects } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

// Interactive 3D tilt image mockup component
function ProjectImageMockup({ image, title }: { image: string; title: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // rotation boundaries
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-10, 10]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    setHovered(false);
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-zinc-950 border border-white/5 transition-all duration-300 hover:shadow-[0_0_35px_rgba(0,245,212,0.15)] group cursor-pointer"
    >
      {/* Glowing border line */}
      <div className="absolute inset-0 rounded-[24px] border border-primary/10 group-hover:border-primary/40 transition-colors duration-500 z-20 pointer-events-none" />

      {/* Mockup Image */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-750 brightness-[0.8] group-hover:brightness-100 z-10"
      />

      {/* Internal interactive radial overlay */}
      {hovered && (
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(0,245,212,0.12)_0%,_transparent_70%)] pointer-events-none" />
      )}
    </motion.div>
  );
}

// Interactive showcase grid card for secondary projects
function ProjectGridCard({ title, tech, description, image, demoUrl, githubUrl, year, status }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX / width);
    y.set(mouseY / height);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full aspect-[4/3] rounded-[24px] overflow-hidden bg-zinc-950 border border-white/5 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] group cursor-pointer"
    >
      {/* Glow border */}
      <div className="absolute inset-0 rounded-[24px] border border-secondary/15 group-hover:border-secondary/40 transition-colors duration-500 z-30 pointer-events-none" />

      {/* Screenshot mock */}
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103 brightness-[0.7] group-hover:brightness-[0.25] z-10"
      />

      {/* Grid Content overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent z-20 transition-all duration-300">
        
        {/* Title details */}
        <div className="transform group-hover:-translate-y-2 transition-transform duration-300">
          <div className="flex gap-2 items-center mb-1.5">
            <span className="text-[9px] border border-white/10 px-1.5 py-0.5 rounded text-zinc-400 font-semibold">{year}</span>
            <span className="text-[9px] border border-secondary/20 bg-secondary/5 px-1.5 py-0.5 rounded text-secondary font-semibold">{status}</span>
          </div>
          <h4 className="font-display text-xl text-white font-bold leading-tight">
            {title}
          </h4>
        </div>

        {/* Hover disclosure content */}
        <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden flex flex-col gap-3 mt-2">
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed font-sans">
            {description}
          </p>

          <div className="flex flex-wrap gap-1">
            {tech.map((t: string) => (
              <span key={t} className="text-[9px] bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 rounded-full font-medium">
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-2 pt-1.5">
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 text-[11px] font-semibold text-center bg-secondary text-white rounded-lg hover:bg-secondary-dim transition-colors"
            >
              👁 Preview
            </a>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-1.5 text-[11px] font-semibold text-center border border-white/10 text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Code
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = keyProjects.filter((p) => p.featured);
  const other = keyProjects.filter((p) => !p.featured);

  return (
    <section className="px-6 py-20 bg-[#050505] sm:px-12 md:px-16 lg:px-24 border-t border-border/40 relative">
      {/* Background light glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.015)_0%,_transparent_65%)] pointer-events-none" />

      <div className="mx-auto max-w-[1440px]">
        
        <SectionHeading
          id="projects"
          label="Featured Projects"
          title="Selected Work"
          subtitle="Explore enterprise web portals and APIs designed for high reliability"
        />

        {/* Featured Projects - Alternating Layout */}
        <div className="flex flex-col gap-24 mt-16">
          {featured.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* 3D Mockup Container */}
                <div className="w-full lg:w-1/2">
                  <ProjectImageMockup image={project.image} title={project.title} />
                </div>

                {/* Info details column */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center items-start">
                  
                  {/* Meta Badges */}
                  <div className="flex gap-2 items-center mb-4">
                    <span className="text-[10px] border border-white/10 px-2 py-0.5 rounded text-zinc-400 font-semibold tracking-wider">
                      {project.year}
                    </span>
                    <span className="text-[10px] border border-primary/20 bg-primary/5 px-2 py-0.5 rounded text-primary font-semibold tracking-wider uppercase">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl sm:text-4xl text-white font-bold leading-tight tracking-tight mb-4">
                    {project.title}
                  </h3>

                  {/* 2-line Description */}
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6 font-sans line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-zinc-900 border border-white/5 text-zinc-300 px-3 py-1 rounded-full font-medium transition-colors hover:border-primary/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Icon action buttons */}
                  <div className="flex gap-4 items-center">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-primary text-black px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/5 hover:shadow-primary/10 transition-shadow"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>👁 Preview</span>
                    </motion.a>

                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-2.5 text-xs sm:text-sm font-semibold flex items-center gap-2 text-white transition-colors"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span> Code</span>
                    </motion.a>
                  </div>

                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Secondary Grid Showcase */}
        {other.length > 0 && (
          <div className="mt-32">
            <h4 className="font-display text-2xl text-white font-bold mb-8 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-secondary" />
              Additional Work
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {other.map((project) => (
                <ProjectGridCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        )}

        {/* Additional Projects Showcase */}
        {additionalProjects.length > 0 && (
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {additionalProjects.map((project) => (
                <ProjectGridCard key={project.title} {...project} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
