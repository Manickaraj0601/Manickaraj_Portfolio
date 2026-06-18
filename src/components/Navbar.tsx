import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navLinks, personal } from "../data/portfolio";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY;
      setScrolled(scrollPos > 40);
      setVisible(scrollPos > window.innerHeight * 0.45);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      } ${
        scrolled
          ? "border-b border-border/50 bg-surface/90 shadow-lg shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <motion.a
          href="#"
          className="font-display text-lg font-bold tracking-tight sm:text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-gradient">{personal.name.split(" ")[0]}</span>
          <span className="text-white/60">.</span>
        </motion.a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative px-4 py-2 text-sm text-muted transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-3/4" />
              </a>
            </li>
          ))}
        </ul>

        <motion.a
          href={`mailto:${personal.email}`}
          className="hidden items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-sm font-medium text-accent lg:inline-flex"
          whileHover={{ scale: 1.05, boxShadow: "0 0 24px rgba(212,175,55,0.25)" }}
          whileTap={{ scale: 0.95 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path d="M2 4l6 4 6-4M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          </svg>
          Hire Me
        </motion.a>

        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-accent/30 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-accent"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-5 bg-accent"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-5 bg-accent"
            />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-surface/95 backdrop-blur-2xl lg:hidden"
          >
            <motion.ul
              className="flex h-full flex-col items-center justify-center gap-6"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
                hidden: {},
              }}
            >
              {navLinks.map((link) => (
                <motion.li
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <a
                    href={link.href}
                    className="font-display text-2xl font-semibold text-white"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <a
                  href={`mailto:${personal.email}`}
                  className="mt-4 inline-flex rounded-full bg-accent px-8 py-3 font-semibold text-surface"
                  onClick={() => setOpen(false)}
                >
                  Get in touch
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
