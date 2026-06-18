import { motion } from "framer-motion";
import { personal } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <motion.p
          className="text-center text-xs text-muted sm:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          &copy; {year}{" "}
          <span className="text-gradient font-semibold">{personal.name}</span>
          . Crafted with React &amp; Motion.
        </motion.p>

        <motion.a
          href="#"
          className="group flex items-center gap-2 text-xs text-muted transition-colors hover:text-accent sm:text-sm"
          whileHover={{ y: -2 }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Back to top
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform group-hover:-translate-y-1"
            aria-hidden
          >
            <path d="M7 11V3M3 7l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.a>
      </div>
    </footer>
  );
}
