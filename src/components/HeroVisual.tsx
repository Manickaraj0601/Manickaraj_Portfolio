import { motion } from "framer-motion";

const orbitItems = ["React.js", "Node.js", "Express", "MySQL", "REST API"];

const particles = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  x: 12 + (i * 19) % 76,
  y: 8 + (i * 27) % 84,
  delay: i * 0.12,
}));

export default function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]" aria-hidden>
      {/* Background radial glow */}
      <div className="absolute inset-0 rounded-full bg-primary/[0.02] blur-3xl" />

      {/* Orbit Rings - styled with cyan/purple borders */}
      {[1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className={`absolute inset-0 rounded-full border ${
            ring % 2 === 0 ? "border-secondary/10" : "border-primary/10"
          }`}
          style={{ margin: `${ring * 12}%` }}
          animate={{ scale: [1, 1.04, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{
            duration: 4 + ring,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ring * 0.4,
          }}
        />
      ))}

      {/* Twinkling ambient particle stars */}
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className={`absolute h-1 w-1 rounded-full ${
            p.id % 2 === 0 ? "bg-primary/50" : "bg-secondary/50"
          }`}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ opacity: [0.15, 0.6, 0.15], y: [0, -8, 0] }}
          transition={{
            duration: 3 + (p.id % 4) * 0.5,
            repeat: Infinity,
            delay: p.delay,
          }}
        />
      ))}

      {/* Central Cyber Core Badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36"
          animate={{ rotate: [0, 5, 0, -5, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Outer morphed neon ring */}
          <motion.div
            className="absolute inset-0 border border-primary/30 bg-primary/5"
            animate={{
              borderRadius: ["40% 60% 70% 30% / 40% 50% 60% 50%", "70% 30% 52% 48% / 60% 40% 60% 40%", "40% 60% 70% 30% / 40% 50% 60% 50%"],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          />
          {/* Inner glass layer */}
          <motion.div
            className="absolute inset-4 rounded-full border border-secondary/20 bg-zinc-950/80 backdrop-blur-md"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Center glowing letter */}
          <motion.span
            className="font-display relative z-10 text-5xl font-bold text-gradient-cyber"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            M
          </motion.span>
        </motion.div>
      </div>

      {/* Orbiting Tech Badges */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
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
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <span className="inline-flex rounded-full border border-primary/20 bg-zinc-950/90 px-3.5 py-1.5 text-xs font-semibold text-primary shadow-lg backdrop-blur-md">
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
