import { motion } from "framer-motion";

const orbitItems = ["React", "Node.js", "C#", "SQL", "API"];

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: 12 + (i * 19) % 76,
  y: 8 + (i * 27) % 84,
  delay: i * 0.12,
}));

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden>
      <div className="absolute inset-0 rounded-full bg-accent/[0.03] blur-3xl" />

      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute inset-0 rounded-full border border-accent/[0.08]"
          style={{ margin: `${ring * 13}%` }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{
            duration: 3.5 + ring,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ring * 0.35,
          }}
        />
      ))}

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute h-1 w-1 rounded-full bg-accent/60"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ opacity: [0.1, 0.5, 0.1], y: [0, -10, 0] }}
          transition={{
            duration: 2.8 + (p.id % 4) * 0.5,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 400">
        <motion.circle
          cx="200"
          cy="200"
          r="128"
          fill="none"
          stroke="rgba(212,175,55,0.15)"
          strokeWidth="1"
          strokeDasharray="5 9"
          animate={{ rotate: 360 }}
          style={{ transformOrigin: "200px 200px" }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36"
          animate={{ rotate: [0, 6, 0, -6, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="absolute inset-0 border border-accent/30 bg-accent/5"
            animate={{
              borderRadius: ["30%", "50%", "30%"],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border border-accent/20 bg-black/80 backdrop-blur-md"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3.5, repeat: Infinity }}
          />
          <motion.span
            className="font-display relative z-10 text-5xl text-accent"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            M
          </motion.span>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {orbitItems.map((label, i) => {
          const angle = (360 / orbitItems.length) * i;
          return (
            <div
              key={label}
              className="absolute left-1/2 top-1/2"
              style={{ transform: `rotate(${angle}deg) translateY(-132px)` }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="inline-flex rounded-full border border-accent/25 bg-black/90 px-3.5 py-1.5 text-xs font-medium text-accent shadow-xl backdrop-blur-md sm:text-sm">
                  {label}
                </span>
              </motion.div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
