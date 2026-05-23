import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Site-wide flowing background. Fixed behind all content.
 * - Soft moving gradient blobs (CSS keyframes via animated-bg-blob)
 * - SVG wave layers that drift on scroll for a "flowing" feel
 * - Subtle grid overlay
 */
export function FlowingBackground() {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const y3 = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base radial wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_oklch(0.24_0.05_170)_0%,_oklch(0.18_0.035_165)_55%,_oklch(0.14_0.03_165)_100%)]" />

      {/* Drifting color orbs */}
      <motion.div
        style={{ y: y1, rotate }}
        className="absolute -top-40 -left-32 w-[640px] h-[640px] rounded-full bg-emerald-500/25 blur-[150px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-[35%] -right-40 w-[560px] h-[560px] rounded-full bg-cyan-500/20 blur-[160px]"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-[-10%] left-[20%] w-[700px] h-[700px] rounded-full bg-teal-600/15 blur-[180px]"
      />

      {/* Flowing SVG wave bands */}
      <motion.svg
        style={{ y: y2 }}
        className="absolute inset-x-0 top-[20%] w-full h-[80vh] opacity-[0.18]"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="flow1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.17 158)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="flow2" x1="1" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="oklch(0.78 0.17 158)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.path
          fill="url(#flow1)"
          initial={{ d: "M0,320 C320,420 560,180 880,260 C1120,320 1280,220 1440,300 L1440,800 L0,800 Z" }}
          animate={{
            d: [
              "M0,320 C320,420 560,180 880,260 C1120,320 1280,220 1440,300 L1440,800 L0,800 Z",
              "M0,360 C320,260 560,420 880,340 C1120,260 1280,380 1440,280 L1440,800 L0,800 Z",
              "M0,320 C320,420 560,180 880,260 C1120,320 1280,220 1440,300 L1440,800 L0,800 Z",
            ],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          fill="url(#flow2)"
          initial={{ d: "M0,500 C260,440 540,580 820,500 C1080,420 1260,540 1440,460 L1440,800 L0,800 Z" }}
          animate={{
            d: [
              "M0,500 C260,440 540,580 820,500 C1080,420 1260,540 1440,460 L1440,800 L0,800 Z",
              "M0,460 C260,560 540,420 820,520 C1080,600 1260,460 1440,540 L1440,800 L0,800 Z",
              "M0,500 C260,440 540,580 820,500 C1080,420 1260,540 1440,460 L1440,800 L0,800 Z",
            ],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* Fine grid */}
      <div className="absolute inset-0 opacity-[0.07] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><path d=%22M0 39.5h40M39.5 0v40%22 stroke=%22white%22 stroke-width=%221%22 fill=%22none%22/></svg>')]" />
    </div>
  );
}

export default FlowingBackground;