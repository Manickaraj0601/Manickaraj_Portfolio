export default function BackgroundMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-black" aria-hidden>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* Cyber Glowing Orbs */}
      <div className="absolute -top-[20%] -right-[10%] h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] rounded-full bg-primary/[0.04] blur-[150px] animate-pulse-glow" />
      <div className="absolute -bottom-[20%] -left-[10%] h-[600px] w-[600px] sm:h-[800px] sm:w-[800px] rounded-full bg-secondary/[0.04] blur-[150px] animate-pulse-glow" style={{ animationDelay: "2.5s" }} />
    </div>
  );
}
