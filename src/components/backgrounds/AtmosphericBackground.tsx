"use client";

import { useEffect, useRef } from "react";

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

export function AtmosphericBackground() {
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
