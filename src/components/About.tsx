import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SlideInCard from "./motion/SlideInCard";
import HorizontalFocusScroll from "./motion/HorizontalFocusScroll";
import TiltCard from "./motion/TiltCard";

const quickInfo = [
  { label: "Role", value: personal.title },
  { label: "Location", value: personal.location },
  { label: "Experience", value: "3+ Years Production" },
  { label: "Domain", value: "Insurance & Enterprise" },
];

export default function About() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          id="about"
          label="About"
          title="Who I Am"
          subtitle="Passionate about building production-grade enterprise solutions"
        />

        <SlideInCard className="mb-10">
          <TiltCard>
          <div className="gold-card p-7 sm:p-10">
            {/* Decorative Gold Corners */}
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <p className="font-display text-xl leading-relaxed text-slate-200 sm:text-2xl sm:leading-relaxed">
              {personal.summary}
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {["Insurance Tech", "REST APIs", "Full-Stack", "Enterprise"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-accent/25 bg-accent/5 px-4 py-1.5 text-sm text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          </TiltCard>
        </SlideInCard>

        <HorizontalFocusScroll hint="Swipe details">
          {quickInfo.map((item) => (
            <div
              key={item.label}
              className="gold-card group flex h-full min-h-[160px] flex-col justify-center p-6 sm:min-h-[180px]"
            >
              {/* Decorative Gold Corners */}
              <div className="card-corner card-corner-tl" />
              <div className="card-corner card-corner-tr" />
              <div className="card-corner card-corner-bl" />
              <div className="card-corner card-corner-br" />

              <p className="font-label mb-2 text-xs text-accent/80">{item.label}</p>
              <p className="font-display text-2xl text-white transition-colors duration-300 group-hover:text-accent sm:text-3xl">{item.value}</p>
            </div>
          ))}
        </HorizontalFocusScroll>
      </div>
    </section>
  );
}
