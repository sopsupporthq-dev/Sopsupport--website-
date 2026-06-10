"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Atmospheric background elements — each has a float animation duration and parallax depth
const GLOWS = [
  {
    cls: "w-[900px] h-[900px] top-[-350px] right-[-250px]",
    color: "rgba(16,185,129,0.08)",
    blur: 140,
    duration: 18,
    depth: 0.04,
  },
  {
    cls: "w-[700px] h-[700px] top-[25%] left-[-250px]",
    color: "rgba(6,182,212,0.06)",
    blur: 120,
    duration: 22,
    depth: 0.07,
  },
  {
    cls: "w-[900px] h-[500px] bottom-[-250px] left-[20%]",
    color: "rgba(34,197,94,0.05)",
    blur: 120,
    duration: 25,
    depth: 0.03,
  },
];

const SQUARES = [
  {
    top: "10%",
    left: "6%",
    size: 42,
    rot: 12,
    opacity: 0.04,
    duration: 14,
    depth: 0.12,
  },
  {
    top: "20%",
    right: "8%",
    size: 28,
    rot: -8,
    opacity: 0.03,
    duration: 18,
    depth: 0.18,
  },
  {
    top: "58%",
    left: "12%",
    size: 34,
    rot: 15,
    opacity: 0.03,
    duration: 16,
    depth: 0.10,
  },
  {
    top: "72%",
    right: "14%",
    size: 46,
    rot: -12,
    opacity: 0.03,
    duration: 20,
    depth: 0.14,
  },
];

const DOTS = [
  { top: "12%", left: "22%" },
  { top: "24%", right: "18%" },
  { top: "42%", left: "15%" },
  { top: "64%", right: "22%" },
  { top: "82%", left: "55%" },
];

const CROSSES = [
  { top:"7%",  right:"34%" }, { top:"18%", left:"51%" },
  { top:"47%", left:"5%"   }, { top:"68%", right:"5%" },
];

function AtmosphericBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef  = useRef<HTMLElement[]>([]);
  const rafRef       = useRef<number>(0);
  const scrollYRef   = useRef(0);
  const targetYRef   = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Collect all parallax elements
    elementsRef.current = Array.from(
      container.querySelectorAll<HTMLElement>("[data-depth]")
    );

    const onScroll = () => {
      targetYRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      scrollYRef.current += (targetYRef.current - scrollYRef.current) * 0.07;
      elementsRef.current.forEach((el) => {
        const depth  = parseFloat(el.dataset.depth ?? "0");
        const offset = -(scrollYRef.current * depth);
        // Preserve the element's own CSS transform (rotate) via a CSS variable
        el.style.setProperty("--px-offset", `${offset}px`);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

return (
  <div
    ref={containerRef}
    className="absolute inset-0 overflow-hidden pointer-events-none"
    aria-hidden="true"
    >
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage: `
        linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }}
      />

    {/* Radial glows */}
    {GLOWS.map((g, i) => (
      <div
        key={i}
        data-depth={g.depth}
        className={`absolute rounded-full ${g.cls}`}
        style={{
          background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          filter: `blur(${g.blur}px)`,
          animation: `heroFloat${(i % 4) + 1} ${g.duration}s ease-in-out infinite`,
          transform: "translateY(var(--px-offset, 0px))",
        }}
        />
    ))
    }
    
      {/* Scattered squares */}
      {SQUARES.map((s, i) => (
        <div
          key={i}
          data-depth={s.depth}
          className="absolute"
          style={{
            top:    s.top    ?? undefined,
            left:   s.left   ?? undefined,
            right:  (s as any).right ?? undefined,
            width:  s.size,
            height: s.size,
            borderRadius: 6,
            background: `rgba(0,200,90,${s.opacity})`,
            border: `1px solid rgba(0,220,100,${s.opacity + 0.04})`,
            animation: `heroSq${(i % 6) + 1} ${s.duration}s ease-in-out infinite`,
            transform: `rotate(${s.rot}deg) translateY(var(--px-offset, 0px))`,
          }}
        />
      ))}

      {/* Star dots */}
      {DOTS.map((d, i) => (
        <div
          key={i}
          data-depth={0.10 + (i % 5) * 0.03}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            top:   d.top   ?? undefined,
            left:  d.left  ?? undefined,
            right: (d as any).right ?? undefined,
            background: "rgba(180,255,200,0.35)",
            transform: "translateY(var(--px-offset, 0px))",
          }}
        />
      ))}

      {/* Crosshair accents */}
      {CROSSES.map((c, i) => (
        <div
          key={i}
          data-depth={0.14 + (i % 3) * 0.04}
          className="absolute"
          style={{
            top:   c.top   ?? undefined,
            right: (c as any).right ?? undefined,
            left:  (c as any).left  ?? undefined,
            width: 12,
            height: 12,
            transform: "translateY(var(--px-offset, 0px))",
          }}
        >
          <span className="absolute top-[5px] left-0 w-[12px] h-[1px] bg-emerald-500/20" />
          <span className="absolute top-0 left-[5px] w-[1px] h-[12px] bg-emerald-500/20" />
        </div>
      ))}

      {/* Keyframe styles */}
      <style>{`
        @keyframes heroFloat1 {
          0%,100% { translate: 0px 0px; }
          33%      { translate: -16px 20px; }
          66%      { translate: 12px -12px; }
        }
        @keyframes heroFloat2 {
          0%,100% { translate: 0px 0px; }
          40%      { translate: 20px -16px; }
          70%      { translate: -10px 14px; }
        }
        @keyframes heroFloat3 {
          0%,100% { translate: 0px 0px; }
          50%      { translate: 18px 10px; }
        }
        @keyframes heroFloat4 {
          0%,100% { translate: 0px 0px; }
          45%      { translate: -14px -18px; }
          80%      { translate: 10px 10px; }
        }
        @keyframes heroSq1 { 0%,100%{translate:0 0} 50%{translate:-8px 10px}  }
        @keyframes heroSq2 { 0%,100%{translate:0 0} 50%{translate:10px -8px}  }
        @keyframes heroSq3 { 0%,100%{translate:0 0} 50%{translate:-10px 6px}  }
        @keyframes heroSq4 { 0%,100%{translate:0 0} 50%{translate:8px 10px}   }
        @keyframes heroSq5 { 0%,100%{translate:0 0} 50%{translate:6px -10px}  }
        @keyframes heroSq6 { 0%,100%{translate:0 0} 50%{translate:-6px 8px}   }
      `}</style>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
    className="relative min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 flex items-center overflow-hidden"
    data-testid="section-hero"
    style={{
    background:
    "linear-gradient(180deg,#020617 0%,#041b17 45%,#020617 100%)",
    }}
    >

      {/* ── Atmospheric Background (replaces old orbs + grid) ── */}
      <AtmosphericBackground />

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 xl:gap-20 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
                Exclusively for Care Agencies
              </span>
            </div>

            <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.05] mb-6 text-white" data-testid="text-hero-headline">
              The Website & Digital Growth Partner for <br />
              <span className="text-gradient">Home Health, Hospice & Home Care</span> Agencies
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white mb-8 md:mb-10 leading-relaxed max-w-3xl" data-testid="text-hero-subheadline">
              We are the preeminent digital agency for home care and healthcare providers. We build original websites and also replace outdated ones with modern digital systems designed to build trust, improve local visibility, capture referrals, and support long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate"
                data-testid="link-book-audit-primary"
              >
                Book Your Free Growth Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                data-testid="link-explore-services"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>

          {/* Animated Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-2xl glass-panel rounded-2xl p-6 shadow-2xl shadow-emerald-900/20 border-white/10"
              data-testid="hero-dashboard-visual"
            >
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <h3 className="font-heading font-semibold text-lg text-white">Digital Growth System</h3>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Website Design",        status: "Live",      color: "bg-emerald-500", text: "text-emerald-400", pulse: false },
                  { label: "Professional Branding",  status: "Polished",  color: "bg-emerald-400", text: "text-emerald-300", pulse: false },
                  { label: "Mobile Responsive",      status: "Optimized", color: "bg-teal-400",    text: "text-teal-300",    pulse: false },
                  { label: "SEO Visibility",         status: "Improving", color: "bg-cyan-500",    text: "text-cyan-400",    pulse: true  },
                  { label: "Referral System",        status: "Active",    color: "bg-emerald-400", text: "text-emerald-300", pulse: true  },
                  { label: "Web & Digital Services", status: "Running",   color: "bg-cyan-400",    text: "text-cyan-300",    pulse: false },
                  { label: "Fast and Secure Hosting",status: "Online",    color: "bg-emerald-500", text: "text-emerald-400", pulse: true  },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/5"
                  >
                    <span className="text-sm font-medium text-white/80">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${row.text}`}>{row.status}</span>
                      <div className="relative flex h-2.5 w-2.5">
                        {row.pulse && (
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${row.color} opacity-75`} />
                        )}
                        <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${row.color}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
