import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import SlideInCard from "./motion/SlideInCard";
import TiltCard from "./motion/TiltCard";

const quickInfo = [
  { label: "Role", value: personal.title, highlight: true },
  { label: "Location", value: personal.location, highlight: false },
  { label: "Experience", value: "3+ Years Production", highlight: true },
  { label: "Focus", value: "REST APIs & Web Apps", highlight: false },
];

export default function About() {
  return (
    <section className="px-6 py-20 sm:px-12 md:px-16 lg:px-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading
          id="about"
          label="About"
          title="Who I Am"
          subtitle="Passionate about building production-grade full stack solutions"
        />

        <SlideInCard className="mb-8">
          <TiltCard>
            <div className="glass-card rounded-[24px] p-7 sm:p-10 relative overflow-hidden group">
              {/* Decorative Cyber Corners */}
              <div className="cyber-corner cyber-corner-tl" />
              <div className="cyber-corner cyber-corner-tr" />
              <div className="cyber-corner cyber-corner-bl" />
              <div className="cyber-corner cyber-corner-br" />

              <p className="font-display text-lg leading-relaxed text-zinc-100 sm:text-xl sm:leading-relaxed max-w-4xl">
                {personal.summary}
              </p>
              
              <div className="mt-8 flex flex-wrap gap-2.5">
                {["REST APIs", "Node.js", "React.js", "Express.js", "MySQL", "JavaScript"].map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded-full border px-4 py-1.5 text-xs font-semibold ${
                      i % 2 === 0 
                        ? "border-primary/20 bg-primary/5 text-primary" 
                        : "border-secondary/20 bg-secondary/5 text-secondary"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </TiltCard>
        </SlideInCard>

        {/* 4-column quick info grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {quickInfo.map((item) => (
            <div
              key={item.label}
              className="glass-card rounded-2xl group flex flex-col justify-center p-6 min-h-[140px] relative transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(0,245,212,0.05)]"
            >
              {/* Decorative Cyber Corners */}
              <div className="cyber-corner cyber-corner-tl" />
              <div className="cyber-corner cyber-corner-tr" />
              <div className="cyber-corner cyber-corner-bl" />
              <div className="cyber-corner cyber-corner-br" />

              <p className="font-label mb-2 text-[10px] text-zinc-400 font-semibold tracking-wider">{item.label}</p>
              <p className={`font-display text-xl sm:text-2xl transition-colors duration-300 leading-tight ${
                item.highlight ? "text-primary" : "text-white"
              }`}>
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
