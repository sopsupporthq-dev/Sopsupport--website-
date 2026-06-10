"use client";

import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// Variant definitions
// Add a new key here to create a new page theme.
// ─────────────────────────────────────────────
const VARIANTS = {

  // Home page — rich atmospheric, many elements
  home: {
    glows: [
      {
        pos: { top:"-250px", right:"-180px" },
        w:700,
        h:700,
        color:"rgba(0,180,80,0.10)",     // Emerald
        blur:140,
        duration:18,
        depth:0.04,
      },
      {
        pos: { top:"30vh", left:"-200px" },
        w:600,
        h:600,
        color:"rgba(0,120,255,0.06)",    // Deep blue
        blur:120,
        duration:22,
        depth:0.07,
              },
      {
        pos: { top:"75vh", left:"20%" },
        w:800,
        h:400,
        color:"rgba(0,220,120,0.06)",    // Bright emerald
        blur:120,
        duration:25,
        depth:0.03,
      },
      {
        pos: { top:"105vh", left:"40%" },
        w:900,
        h:900,
        color:"rgba(0,120,255,0.05)",
        blur:280,
        duration:24,
        depth:0.04,
      },      
      {
        pos: { top:"140vh", right:"-100px" },
        w:500,
        h:500,
        color:"rgba(0,120,220,0.05)",    // Secondary blue
        blur:100,
        duration:20,
        depth:0.05,
      },
      {
        pos: { bottom:"0px", left:"10%" },
        w:700,
        h:300,
        color:"rgba(0,190,90,0.06)",     // Green anchor
        blur:110,
        duration:16,
        depth:0.04,
      },
    
    ],
    squares: [
      { top:"7vh",   left:"2.5%", size:58, rot:12,  opacity:0.06, duration:11, depth:0.12 },
      { top:"4vh",   left:"17%",  size:32, rot:-8,  opacity:0.04, duration:14, depth:0.22 },
      { top:"3vh",   right:"21%", size:76, rot:20,  opacity:0.05, duration:12, depth:0.09 },
      { top:"12vh",  right:"7%",  size:22, rot:5,   opacity:0.07, duration:7,  depth:0.25 },
      { top:"28vh",  left:"6%",   size:48, rot:-15, opacity:0.04, duration:16, depth:0.15 },
      { top:"22vh",  left:"42%",  size:16, rot:30,  opacity:0.08, duration:9,  depth:0.20 },
      { top:"55vh",  right:"3%",  size:42, rot:-22, opacity:0.05, duration:12, depth:0.11 },
      { top:"70vh",  left:"11%",  size:26, rot:18,  opacity:0.05, duration:13, depth:0.19 },
      { top:"95vh",  right:"17%", size:62, rot:-10, opacity:0.04, duration:10, depth:0.08 },
      { top:"115vh", left:"47%",  size:18, rot:40,  opacity:0.06, duration:8,  depth:0.24 },
      { top:"135vh", left:"5%",   size:36, rot:-5,  opacity:0.04, duration:17, depth:0.13 },
      { top:"150vh", right:"7%",  size:50, rot:16,  opacity:0.05, duration:11, depth:0.17 },
      { top:"170vh", left:"25%",  size:40, rot:-12, opacity:0.05, duration:13, depth:0.14 },
      { top:"190vh", right:"30%", size:28, rot:8,   opacity:0.06, duration:10, depth:0.20 },
      { top:"210vh", left:"8%",   size:55, rot:-20, opacity:0.04, duration:12, depth:0.09 },
      { top:"230vh", right:"12%", size:34, rot:25,  opacity:0.05, duration:9,  depth:0.16 },
    ],
    dots: [
      { top:"6vh",   left:"24%"  }, { top:"9vh",   left:"54%"  },
      { top:"15vh",  right:"29%" }, { top:"30vh",  left:"21%"  },
      { top:"45vh",  right:"11%" }, { top:"60vh",  left:"33%"  },
      { top:"80vh",  right:"24%" }, { top:"100vh", left:"59%"  },
      { top:"120vh", right:"39%" }, { top:"140vh", left:"15%"  },
      { top:"160vh", right:"45%" }, { top:"180vh", left:"70%"  },
      { top:"200vh", right:"20%" }, { top:"220vh", left:"40%"  },
    ],
    crosses: [
      { top:"7vh",   right:"34%" }, { top:"18vh",  left:"51%"  },
      { top:"50vh",  left:"5%"   }, { top:"90vh",  right:"5%"  },
      { top:"130vh", left:"30%"  }, { top:"170vh", right:"22%" },
    ],
  },

  // Interior/shell pages — calmer, fewer elements
  default: {
    glows: [
      { pos: { top:"-250px",  right:"-180px" }, w:700, h:700, color:"rgba(16,185,129,0.08)", blur:260, duration:18, depth:0.04 },
      { pos: { top:"30vh",    left:"-200px"  }, w:600, h:600, color:"rgba(0,120,255,0.06)",  blur:240, duration:22, depth:0.07 },
      { pos: { top:"75vh",    left:"20%" }, w:800, h:400, color:"rgba(34,197,94,0.05)",  blur:260, duration:25, depth:0.03 },
      { pos: { top:"140vh",   right:"-100px" }, w:500, h:500, color:"rgba(0,180,80,0.06)",  blur:220, duration:20, depth:0.05 },
      { pos: { bottom:"0px",  left:"10%" }, w:700, h:300, color:"rgba(0,200,90,0.05)",   blur:240, duration:16, depth:0.04 },
    ],
    squares: [
      { top:"10vh",  left:"6%",   size:42, rot:12,  opacity:0.04, duration:14, depth:0.12 },
      { top:"20vh",  right:"8%",  size:28, rot:-8,  opacity:0.03, duration:18, depth:0.18 },
      { top:"55vh",  left:"12%",  size:34, rot:15,  opacity:0.03, duration:16, depth:0.10 },
      { top:"75vh",  right:"14%", size:46, rot:-12, opacity:0.03, duration:20, depth:0.14 },
      { top:"110vh", left:"40%",  size:30, rot:22,  opacity:0.03, duration:15, depth:0.11 },
      { top:"140vh", right:"25%", size:38, rot:-18, opacity:0.03, duration:19, depth:0.13 },
    ],
    dots: [
      { top:"12vh",  left:"22%"  }, { top:"24vh", right:"18%" },
      { top:"42vh",  left:"15%"  }, { top:"64vh", right:"22%" },
      { top:"85vh",  left:"55%"  }, { top:"110vh",right:"40%" },
      { top:"135vh", left:"30%"  }, { top:"160vh",right:"15%" },
    ],
    crosses: [
      { top:"7vh",   right:"34%" }, { top:"18vh", left:"51%"  },
      { top:"47vh",  left:"5%"   }, { top:"68vh", right:"5%"  },
      { top:"120vh", left:"45%"  },
    ],
  },

} satisfies Record<string, VariantConfig>;

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
interface GlowItem    { pos: Record<string,string>; w:number; h:number; color:string; blur:number; duration:number; depth:number; }
interface SquareItem  { top:string; left?:string; right?:string; size:number; rot:number; opacity:number; duration:number; depth:number; }
interface DotItem     { top:string; left?:string; right?:string; }
interface CrossItem   { top:string; left?:string; right?:string; }
interface VariantConfig { glows:GlowItem[]; squares:SquareItem[]; dots:DotItem[]; crosses:CrossItem[]; }

export type BgVariant = keyof typeof VARIANTS;

// ─────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────
export function AtmosphericBackground({ variant = "default" }: { variant?: BgVariant }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef       = useRef<number>(0);
  const scrollYRef   = useRef(0);
  const targetYRef   = useRef(0);

  const cfg = VARIANTS[variant];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>("[data-depth]"));

    const onScroll = () => { targetYRef.current = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () => {
      scrollYRef.current += (targetYRef.current - scrollYRef.current) * 0.07;
      elements.forEach((el) => {
        const depth  = parseFloat(el.dataset.depth ?? "0");
        const offset = -(scrollYRef.current * depth);
        el.style.setProperty("--px-offset", `${offset}px`);
      });
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [variant]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      style={{ position:"fixed", inset:0, zIndex:0, pointerEvents:"none", overflow:"hidden" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.018]"
        style={{
          backgroundImage:`
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)`,
          backgroundSize:"80px 80px",
        }}
      />

      {/* Glows */}
      {cfg.glows.map((g, i) => (
        <div
          key={i}
          data-depth={g.depth}
          className="absolute rounded-full"
          style={{
            ...g.pos,
            width:  g.w,
            height: g.h,
            background: `radial-gradient(circle, ${g.color} 0%, transparent 70%)`,
            filter: `blur(${g.blur}px)`,
            animation: `bgFloat${(i % 4) + 1} ${g.duration}s ease-in-out infinite`,
            transform: "translateY(var(--px-offset, 0px))",
          }}
        />
      ))}

      {/* Squares */}
      {cfg.squares.map((s, i) => (
        <div
          key={i}
          data-depth={s.depth}
          className="absolute"
          style={{
            top:    s.top,
            left:   s.left  ?? undefined,
            right:  s.right ?? undefined,
            width:  s.size,
            height: s.size,
            borderRadius: 6,
            background: `rgba(0,200,90,${s.opacity})`,
            border: `1px solid rgba(0,220,100,${s.opacity + 0.04})`,
            animation: `bgSq${(i % 6) + 1} ${s.duration}s ease-in-out infinite`,
            transform: `rotate(${s.rot}deg) translateY(var(--px-offset, 0px))`,
          }}
        />
      ))}

      {/* Dots */}
      {cfg.dots.map((d, i) => (
        <div
          key={i}
          data-depth={0.10 + (i % 5) * 0.03}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            top:   d.top,
            left:  d.left  ?? undefined,
            right: d.right ?? undefined,
            background: "rgba(180,255,200,0.35)",
            transform: "translateY(var(--px-offset, 0px))",
          }}
        />
      ))}

      {/* Crosshairs */}
      {cfg.crosses.map((c, i) => (
        <div
          key={i}
          data-depth={0.14 + (i % 3) * 0.04}
          className="absolute"
          style={{
            top:   c.top,
            right: c.right ?? undefined,
            left:  c.left  ?? undefined,
            width: 12, height: 12,
            transform: "translateY(var(--px-offset, 0px))",
          }}
        >
          <span className="absolute top-[5px] left-0 w-[12px] h-[1px] bg-emerald-500/20" />
          <span className="absolute top-0 left-[5px] w-[1px] h-[12px] bg-emerald-500/20" />
        </div>
      ))}

      <style>{`
        @keyframes bgFloat1 { 0%,100%{translate:0px 0px} 33%{translate:-16px 20px} 66%{translate:12px -12px} }
        @keyframes bgFloat2 { 0%,100%{translate:0px 0px} 40%{translate:20px -16px} 70%{translate:-10px 14px} }
        @keyframes bgFloat3 { 0%,100%{translate:0px 0px} 50%{translate:18px 10px}  }
        @keyframes bgFloat4 { 0%,100%{translate:0px 0px} 45%{translate:-14px -18px} 80%{translate:10px 10px} }
        @keyframes bgSq1 { 0%,100%{translate:0 0} 50%{translate:-8px 10px}  }
        @keyframes bgSq2 { 0%,100%{translate:0 0} 50%{translate:10px -8px}  }
        @keyframes bgSq3 { 0%,100%{translate:0 0} 50%{translate:-10px 6px}  }
        @keyframes bgSq4 { 0%,100%{translate:0 0} 50%{translate:8px 10px}   }
        @keyframes bgSq5 { 0%,100%{translate:0 0} 50%{translate:6px -10px}  }
        @keyframes bgSq6 { 0%,100%{translate:0 0} 50%{translate:-6px 8px}   }
      `}</style>
    </div>
  );
}
