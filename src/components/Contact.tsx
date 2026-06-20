import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: personal.linkedin,
    icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z M2 9h4v12H2z M4 2a2 2 0 110 4 2 2 0 010-4z",
  },
  {
    label: "Location",
    value: personal.location,
    href: "#about",
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-[#050505] py-20 px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Background neon glows */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-[1440px]">
        <SectionHeading
          id="contact"
          label="Contact"
          title="Let's Connect"
          subtitle="Open to full-time opportunities and technical collaborations"
        />

        {/* 4-column responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {contactLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === "LinkedIn" ? "_blank" : undefined}
              rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="glass-card rounded-[24px] group flex flex-col items-center justify-center p-8 text-center relative overflow-hidden transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_24px_rgba(0,245,212,0.08)]"
            >
              {/* Cyber Corners */}
              <div className="cyber-corner cyber-corner-tl" />
              <div className="cyber-corner cyber-corner-tr" />
              <div className="cyber-corner cyber-corner-bl" />
              <div className="cyber-corner cyber-corner-br" />

              <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border bg-zinc-950/80 transition-all ${
                idx % 2 === 0
                  ? "border-primary/20 text-primary group-hover:border-primary/60 group-hover:bg-primary/10"
                  : "border-secondary/20 text-secondary group-hover:border-secondary/60 group-hover:bg-secondary/10"
              }`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                  <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              
              <span className="font-label text-[10px] text-zinc-400 font-semibold tracking-wider">{link.label}</span>
              <span className="font-display mt-2 text-lg text-white group-hover:text-primary transition-colors duration-300 font-bold">{link.value}</span>
            </a>
          ))}
        </div>

        {/* Dynamic call to action button */}
        <motion.div
          className="relative mt-12 text-center"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary to-secondary px-9 py-4 text-sm font-semibold text-black shadow-lg hover:shadow-primary/10 transition-shadow sm:text-base font-sans"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
          >
            Send Me An Email
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
