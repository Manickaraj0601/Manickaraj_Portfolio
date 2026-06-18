import { motion } from "framer-motion";
import { personal } from "../data/portfolio";
import SectionHeading from "./SectionHeading";
import HorizontalFocusScroll from "./motion/HorizontalFocusScroll";

const contactLinks = [
  {
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
    icon: "M4 6l8 5 8-5M4 6h16v12H4V6z",
  },
  {
    label: "Phone",
    value: personal.phone,
    href: `tel:${personal.phone.replace(/\s/g, "")}`,
    icon: "M6.5 4h3l1 4-2 1.5a11 11 0 005 5L16 12.5l4 1v3a1.5 1.5 0 01-1.5 1.5C8 18 6 16 6 8.5A1.5 1.5 0 017.5 7",
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: personal.linkedin,
    icon: "M6 6h3v12H6V6zm1.5-4.5a2 2 0 110 4 2 2 0 010-4zM11 6h3v1.7c.5-.9 1.6-1.7 3.2-1.7 3.4 0 4 2.2 4 5.1V18h-3v-5.2c0-1.2 0-2.8-1.7-2.8-1.8 0-2.1 1.4-2.1 2.9V18h-3V6z",
  },
  {
    label: "Location",
    value: personal.location,
    href: "#about",
    icon: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z",
  },
];

export default function Contact() {
  return (
    <section className="relative overflow-hidden border-t border-border/40 bg-surface-raised/50 py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="contact"
          label="Contact"
          title="Let's Connect"
          subtitle="Open to full-time roles and challenging projects"
        />
      </div>

      <HorizontalFocusScroll hint="Swipe contact">
        {contactLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.label === "LinkedIn" ? "_blank" : undefined}
            rel={link.label === "LinkedIn" ? "noopener noreferrer" : undefined}
            className="gold-card group flex h-full min-h-[200px] flex-col items-center justify-center p-7 text-center"
          >
            {/* Decorative Gold Corners */}
            <div className="card-corner card-corner-tl" />
            <div className="card-corner card-corner-tr" />
            <div className="card-corner card-corner-bl" />
            <div className="card-corner card-corner-br" />

            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-black/50 text-accent transition-all group-hover:border-accent/60 group-hover:bg-accent/10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                <path d={link.icon} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-label text-xs text-accent/80">{link.label}</span>
            <span className="font-display mt-2 text-xl text-white group-hover:text-accent transition-colors duration-300">{link.value}</span>
          </a>
        ))}
      </HorizontalFocusScroll>

      <motion.div
        className="relative mt-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={`mailto:${personal.email}`}
          className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-accent to-gold px-9 py-4 text-sm font-semibold text-black shadow-lg shadow-accent/15 sm:text-base"
          whileHover={{ scale: 1.04, boxShadow: "0 16px 48px rgba(212,175,55,0.3)" }}
          whileTap={{ scale: 0.98 }}
        >
          Send me an email
        </motion.a>
      </motion.div>
    </section>
  );
}
