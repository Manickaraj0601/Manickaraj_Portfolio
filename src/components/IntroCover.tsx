import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function IntroCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Scroll animations mapping
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.82]);
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -35]);

  // Rotations for ambient cyan/purple rings
  const rotateClockwise = useTransform(scrollYProgress, [0, 1], [0, 75]);
  const rotateCounter = useTransform(scrollYProgress, [0, 1], [0, -75]);
  const ringOpacity = useTransform(scrollYProgress, [0, 0.7], [0.4, 0]);

  // Huge name behind the portrait - styled with Space Grotesk
  const textScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.15]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.65], [0.08, 0]);
  const textLetterSpacing = useTransform(scrollYProgress, [0, 0.8], ["0.1em", "0.25em"]);

  // Details translation
  const detailsY = useTransform(scrollYProgress, [0, 0.6], [0, 50]);
  const detailsOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Scroll indicator
  const indicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  return (
    <div
      ref={containerRef}
      className="relative z-30 w-full h-[140vh] bg-[#050505]"
    >
      {/* Sticky container that keeps everything centered while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-[#050505] select-none">
        
        {/* Subtle premium cyan/purple radial lights in the background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,245,212,0.06)_0%,_transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(139,92,246,0.03)_0%,_transparent_60%)] pointer-events-none" />

        {/* Huge background text - Space Grotesk */}
        <motion.h1
          style={{
            scale: textScale,
            opacity: textOpacity,
            letterSpacing: textLetterSpacing,
            y,
          }}
          className="absolute font-display text-[12vw] font-bold text-primary uppercase tracking-widest pointer-events-none select-none text-center leading-none z-0"
        >
          MANICK RAJ
        </motion.h1>

        {/* Double rotating cyber orbit rings */}
        <motion.div
          style={{
            rotate: rotateClockwise,
            opacity: ringOpacity,
          }}
          className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] md:w-[600px] md:h-[600px] rounded-full border border-primary/20 border-dashed pointer-events-none z-10"
        />
        <motion.div
          style={{
            rotate: rotateCounter,
            opacity: ringOpacity,
          }}
          className="absolute w-[310px] h-[310px] sm:w-[460px] sm:h-[460px] md:w-[650px] md:h-[650px] rounded-full border border-secondary/15 pointer-events-none z-10"
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
            src="/images/portrait.webp"
            alt="Manick Raj Portrait"
            loading="lazy"
            className="w-full h-full object-contain filter drop-shadow-[0_0_40px_rgba(0,245,212,0.18)]"
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
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient-cyber font-semibold mb-2">
            Full Stack Developer
          </h2>
          <p className="font-label text-[9px] sm:text-xs tracking-[0.25em] text-muted max-w-md">
            Node.js • Express.js • React.js • MySQL • REST APIs
          </p>
        </motion.div>

        {/* Elegant scroll prompt */}
        <motion.div
          style={{ opacity: indicatorOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-label text-[9px] tracking-[0.2em] opacity-80">Scroll to Explore</span>
          <div className="w-5 h-8 border border-muted/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}
