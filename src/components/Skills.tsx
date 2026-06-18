import { skills } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import HorizontalFocusScroll from "./motion/HorizontalFocusScroll";
import { ProjectIcon } from "./svg/ProjectIcons";

export default function Skills() {
  return (
    <section className="overflow-hidden border-t border-border/40 bg-surface-raised/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="skills"
          label="Expertise"
          title="Skills & Tools"
          subtitle="Technologies behind every shipped product"
        />
      </div>

      <HorizontalFocusScroll hint="Swipe skills">
        {skills.map((group) => (
          <article
            key={group.category}
            className="gold-card group relative flex h-full min-h-[300px] flex-col overflow-hidden p-6 sm:min-h-[320px]"
          >
            {/* Decorative Gold Corners */}
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/15" />

            <div className="relative z-10 mb-5 flex items-center justify-between">
              <div className="text-accent/80 transition-transform duration-300 group-hover:scale-105 group-hover:text-accent">
                <ProjectIcon type={group.icon} className="h-10 w-10" />
              </div>
              <span className="font-label text-[10px] text-accent/85 sm:text-xs">
                {group.category}
              </span>
            </div>

            <h3 className="font-display relative z-10 mb-5 text-2xl text-white transition-colors duration-300 group-hover:text-accent">
              {group.category}
            </h3>

            <ul className="relative z-10 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-accent/15 bg-black/55 px-3 py-1 text-sm text-slate-300 transition-all duration-300 group-hover:border-accent/40 group-hover:text-accent"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </HorizontalFocusScroll>
    </section>
  );
}
