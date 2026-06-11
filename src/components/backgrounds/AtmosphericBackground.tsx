"use client";

import { useEffect, useRef } from "react";

const VARIANTS = {

  home: {
    glows: [
      // Top-left — deep navy blue
      { pos: { top: "-100px", left: "-150px" },    w: 600, h: 600, color: "rgba(30,58,138,0.55)",   blur: 120, duration: 13, depth: 0.05 },
      // Top-right — cyan-teal
      { pos: { top: "-80px",  right: "-100px" },   w: 500, h: 500, color: "rgba(6,182,212,0.18)",   blur: 100, duration: 11, depth: 0.07 },
      // Mid-left — indigo-blue
      { pos: { top: "30vh",   left: "-120px" },    w: 480, h: 480, color: "rgba(49,46,129,0.40)",   blur: 110, duration: 15, depth: 0.09 },
      // Mid-right — emerald
      { pos: { top: "35vh",   right: "-80px" },    w: 420, h: 420, color: "rgba(16,185,129,0.14)",  blur: 90,  duration: 12, depth: 0.11 },
      // Center — subtle blue spread
      { pos: { top: "50vh",   left: "30%" },       w: 700, h: 320, color: "rgba(37,99,235,0.10)",   blur: 130, duration: 18, depth: 0.04 },
      // Lower-left — navy
      { pos: { top: "90vh",   left: "-100px" },    w: 520, h: 520, color: "rgba(30,58,138,0.35)",   blur: 110, duration: 14, depth: 0.08 },
      // Lower-right — cyan
      { pos: { top: "100vh",  right: "-80px" },    w: 400, h: 400, color: "rgba(6,182,212,0.12)",   blur: 90,  duration: 10, depth: 0.13 },
      // Deep — emerald-teal
      { pos: { top: "150vh",  left: "15%" },       w: 600, h: 280, color: "rgba(13,148,136,0.12)",  blur: 110, duration: 20, depth: 0.05 },
      // Deep right — indigo
      { pos: { top: "160vh",  right: "-60px" },    w: 440, h: 440, color: "rgba(67,56,202,0.25)",   blur: 100, duration: 16, depth: 0.09 },
      // Bottom floor — blue-green blend
      { pos: { bottom: "0px", left: "20%" },       w: 700, h: 260, color: "rgba(6,182,212,0.09)",   blur: 120, duration: 22, depth: 0.04 },
    ],
    squares: [
      { top:"8vh",   left:"3%",    size:52,  rot:12,  o:0.05, dur:12, depth:0.13 },
      { top:"5vh",   left:"19%",   size:28,  rot:-8,  o:0.04, dur:15, depth:0.21 },
      { top:"4vh",   right:"22%",  size:70,  rot:20,  o:0.04, dur:13, depth:0.08 },
      { top:"13vh",  right:"8%",   size:20,  rot:5,   o:0.06, dur:8,  depth:0.24 },
      { top:"27vh",  left:"7%",    size:44,  rot:-15, o:0.04, dur:17, depth:0.14 },
      { top:"23vh",  left:"44%",   size:15,  rot:30,  o:0.07, dur:10, depth:0.19 },
      { top:"52vh",  right:"3%",   size:38,  rot:-22, o:0.04, dur:13, depth:0.10 },
      { top:"68vh",  left:"10%",   size:24,  rot:18,  o:0.04, dur:14, depth:0.18 },
      { top:"92vh",  right:"18%",  size:58,  rot:-10, o:0.03, dur:11, depth:0.07 },
      { top:"112vh", left:"48%",   size:16,  rot:40,  o:0.05, dur:9,  depth:0.22 },
      { top:"132vh", left:"5%",    size:34,  rot:-5,  o:0.04, dur:18, depth:0.12 },
      { top:"148vh", right:"7%",   size:46,  rot:16,  o:0.04, dur:12, depth:0.16 },
      { top:"168vh", left:"26%",   size:38,  rot:-12, o:0.04, dur:14, depth:0.13 },
      { top:"188vh", right:"31%",  size:26,  rot:8,   o:0.05, dur:11, depth:0.19 },
      { top:"215vh", left:"9%",    size:50,  rot:-20, o:0.04, dur:13, depth:0.08 },
    ],
    dots: [
      { top:"7vh",   left:"25%"   }, { top:"10vh",  left:"56%"   },
      { top:"16vh",  right:"30%"  }, { top:"31vh",  left:"22%"   },
      { top:"44vh",  right:"12%"  }, { top:"59vh",  left:"34%"   },
      { top:"78vh",  right:"25%"  }, { top:"98vh",  left:"60%"   },
      { top:"118vh", right:"40%"  }, { top:"138vh", left:"16%"   },
      { top:"158vh", right:"46%"  }, { top:"178vh", left:"71%"   },
      { top:"198vh", right:"21%"  }, { top:"218vh", left:"41%"   },
    ],
    crosses: [
      { top:"8vh",   right:"35%"  }, { top:"19vh",  left:"52%"   },
      { top:"48vh",  left:"6%"    }, { top:"88vh",  right:"6%"   },
      { top:"128vh", left:"32%"   }, { top:"168vh", right:"23%"  },
    ],
  },

  default: {
    glows: [
      { pos: { top: "-180px",  left: "-120px"  }, w: 580, h: 580, color: "rgba(30,58,138,0.45)",   blur: 130, duration: 18, depth: 0.04 },
      { pos: { top: "-100px",  right: "-120px" }, w: 500, h: 500, color: "rgba(6,182,212,0.14)",   blur: 110, duration: 14, depth: 0.06 },
      { pos: { top: "35vh",    left: "-150px"  }, w: 500, h: 500, color: "rgba(49,46,129,0.30)",   blur: 110, duration: 22, depth: 0.07 },
      { pos: { top: "40vh",    right: "-80px"  }, w: 420, h: 420, color: "rgba(16,185,129,0.11)",  blur: 90,  duration: 16, depth: 0.09 },
      { pos: { top: "80vh",    left: "20%"     }, w: 640, h: 280, color: "rgba(37,99,235,0.08)",   blur: 120, duration: 26, depth: 0.03 },
      { pos: { top: "130vh",   right: "-80px"  }, w: 440, h: 440, color: "rgba(67,56,202,0.20)",   blur: 100, duration: 20, depth: 0.05 },
      { pos: { bottom: "0px",  left: "12%"     }, w: 660, h: 260, color: "rgba(6,182,212,0.08)",   blur: 110, duration: 16, depth: 0.04 },
    ],
    squares: [
      { top:"11vh",  left:"6%",    size:40, rot:12,  o:0.04, dur:15, depth:0.11 },
      { top:"21vh",  right:"9%",   size:26, rot:-8,  o:0.03, dur:19, depth:0.17 },
      { top:"54vh",  left:"13%",   size:32, rot:15,  o:0.03, dur:17, depth:0.09 },
      { top:"74vh",  right:"15%",  size:44, rot:-12, o:0.03, dur:21, depth:0.13 },
      { top:"108vh", left:"41%",   size:28, rot:22,  o:0.03, dur:16, depth:0.10 },
      { top:"138vh", right:"26%",  size:36, rot:-18, o:0.03, dur:20, depth:0.12 },
    ],
    dots: [
      { top:"13vh",  left:"23%"   }, { top:"25vh",  right:"19%"  },
      { top:"43vh",  left:"16%"   }, { top:"65vh",  right:"23%"  },
      { top:"86vh",  left:"56%"   }, { top:"111vh", right:"41%"  },
      { top:"136vh", left:"31%"   }, { top:"161vh", right:"16%"  },
    ],
    crosses: [
      { top:"8vh",   right:"35%"  }, { top:"19vh",  left:"52%"   },
      { top:"48vh",  left:"6%"    }, { top:"69vh",  right:"6%"   },
      { top:"121vh", left:"46%"   },
    ],
  },

} satisfies Record<string, VariantConfig>;

interface GlowItem   { pos: Record<string,string>; w:number; h:number; color:string; blur:number; duration:number; depth:number }
interface SquareItem { top:string; left?:string; right?:string; size:number; rot:number; o:number; dur:number; depth:number }
interface PosItem    { top:string; left?:string; right?:string }
interface VariantConfig { glows:GlowItem[]; squares:SquareItem[]; dots:PosItem[]; crosses:PosItem[] }

export type BgVariant = keyof typeof VARIANTS;

export function AtmosphericBackground({ variant = "default" }: { variant?: BgVariant }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const scrollYRef   = useRef(0);
  const targetYRef   = useRef(0);
  const cfg = VARIANTS[variant];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const els = Array.from(container.querySelectorAll<HTMLElement>("[data-depth]"));
    const onScroll = () => { targetYRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });
    const tick = () => {
      scrollYRef.current += (targetYRef.current - scrollYRef.current) * 0.07;
      els.forEach(el => {
        const offset = -(scrollYRef.current * parseFloat(el.dataset.depth ?? "0"));
        el.style.setProperty("--px", `${offset}px`);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafRef.current); };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}
    >
      {/* Very subtle grid */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.015,
          backgroundImage: `linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glows */}
      {cfg.glows.map((g, i) => (
        <div key={i} data-depth={g.depth} className="absolute rounded-full" style={{
          ...g.pos, width: g.w, height: g.h,
          background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
          filter: `blur(${g.blur}px)`,
          animation: `bgGlow${(i % 4) + 1} ${g.duration}s ease-in-out infinite`,
          transform: "translateY(var(--px, 0px))",
        }} />
      ))}

      {/* Squares */}
      {cfg.squares.map((s, i) => (
        <div key={i} data-depth={s.depth} className="absolute" style={{
          top: s.top, left: s.left, right: s.right,
          width: s.size, height: s.size, borderRadius: 5,
          background: `rgba(0,200,100,${s.o})`,
          border: `1px solid rgba(0,220,110,${s.o + 0.04})`,
          animation: `bgSq${(i % 6) + 1} ${s.dur}s ease-in-out infinite`,
          transform: `rotate(${s.rot}deg) translateY(var(--px, 0px))`,
        }} />
      ))}

      {/* Star dots */}
      {cfg.dots.map((d, i) => (
        <div key={i} data-depth={0.10 + (i % 5) * 0.03}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{ top:d.top, left:d.left, right:d.right, background:"rgba(180,220,255,0.4)", transform:"translateY(var(--px,0px))" }}
        />
      ))}

      {/* Crosshairs */}
      {cfg.crosses.map((c, i) => (
        <div key={i} data-depth={0.13 + (i % 3) * 0.04}
          className="absolute" style={{ top:c.top, left:c.left, right:c.right, width:12, height:12, transform:"translateY(var(--px,0px))" }}
        >
          <span className="absolute top-[5px] left-0 w-[12px] h-px bg-cyan-400/20" />
          <span className="absolute top-0 left-[5px] w-px h-[12px] bg-cyan-400/20" />
        </div>
      ))}


      {/* Fade to black toward footer */}
      <div
        className="fixed bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: "340px", background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.88) 100%)", zIndex: 1 }}
      />
      <style>{`
        @keyframes bgGlow1 { 0%,100%{translate:0px 0px} 33%{translate:-18px 22px} 66%{translate:14px -14px} }
        @keyframes bgGlow2 { 0%,100%{translate:0px 0px} 40%{translate:22px -18px} 70%{translate:-12px 16px} }
        @keyframes bgGlow3 { 0%,100%{translate:0px 0px} 50%{translate:20px 12px}  }
        @keyframes bgGlow4 { 0%,100%{translate:0px 0px} 45%{translate:-16px -20px} 80%{translate:12px 12px} }
        @keyframes bgSq1   { 0%,100%{translate:0 0} 50%{translate:-8px 10px}  }
        @keyframes bgSq2   { 0%,100%{translate:0 0} 50%{translate:10px -8px}  }
        @keyframes bgSq3   { 0%,100%{translate:0 0} 50%{translate:-10px 6px}  }
        @keyframes bgSq4   { 0%,100%{translate:0 0} 50%{translate:8px 10px}   }
        @keyframes bgSq5   { 0%,100%{translate:0 0} 50%{translate:6px -10px}  }
        @keyframes bgSq6   { 0%,100%{translate:0 0} 50%{translate:-6px 8px}   }
      `}</style>
    </div>
  );
}
