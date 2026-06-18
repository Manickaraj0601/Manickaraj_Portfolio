import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll animations mapping
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -30]);

  // Rotations for ambient travel rings
  const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const rotateCounter = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.7], [0.35, 0]);

  // Huge name behind the portrait
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.12]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [0.08, 0]);
  const textLetterSpacing = useTransform(scrollYProgress, [0, 0.8], ["0.1em", "0.22em"]);

  // Details translation
  const detailsY = useTransform(scrollYProgress, [0, 0.6], [0, 50]);
  const detailsOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Scroll indicator
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full h-[150vh] bg-black"
    >
      {/* Sticky container that keeps everything centered while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-black select-none">
        
        {/* Subtle premium gold radial light in the background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06)_0%,_transparent_65%)] pointer-events-none" />

        {/* Huge background text */}
        <motion.h1
          style={{
            scale: textScale,
            opacity: textOpacity,
            letterSpacing: textLetterSpacing,
            y,
          }}
          className="absolute font-display text-[13vw] font-bold text-accent uppercase tracking-widest pointer-events-none select-none text-center leading-none z-0"
        >
          Manickaraj
        </motion.h1>

        {/* Double rotating golden travel orbit rings */}
        <motion.div
          style={{
            rotate: rotateClockwise,
            opacity: ringOpacity,
          }}
          className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] rounded-full border border-accent/20 border-dashed pointer-events-none z-10"
        />
        <motion.div
          style={{
            rotate: rotateCounter,
            opacity: ringOpacity,
          }}
          className="absolute w-[310px] h-[310px] sm:w-[460px] sm:h-[460px] md:w-[650px] md:h-[650px] rounded-full border border-accent/8 pointer-events-none z-10"
        />

        {/* Central portrait frame */}
        <motion.div
          style={{
            scale,
            opacity,
            y,
          }}
          className="relative z-20 w-[240px] h-[240px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] flex items-center justify-center pointer-events-none"
        >
          <img
            src="/images/portrait.png"
            alt="Manickaraj Portrait"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(212,175,55,0.18)]"
          />
        </motion.div>

        {/* Subtitle & details below the image */}
        <motion.div
          style={{
            opacity: detailsOpacity,
            y: detailsY,
          }}
          className="absolute bottom-24 left-0 right-0 z-30 flex flex-col items-center text-center px-4"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient font-light mb-2">
            Full-Stack Developer
          </h2>
          <p className="font-label text-[9px] sm:text-xs tracking-[0.25em] text-muted max-w-md">
            Node.js • React • ASP.NET • SQL Server
          </p>
        </motion.div>

        {/* Elegant scroll prompt */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-label text-[9px] tracking-[0.2em] opacity-80">Scroll to Explore</span>
          <div className="w-5 h-8 border border-muted/30 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 bg-accent rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
