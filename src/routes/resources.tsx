import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Download, ExternalLink, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { PageShell, CTASection } from "@/components/PageShell";
import { resources } from "@/data/resources"; // v2

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — SOP Support" },
      {
        name: "description",
        content: "Free guides, playbooks, checklists, and templates to help home health, hospice, and home care agencies improve websites, SEO, referrals, and recruitment.",
      },
    ],
  }),
  component: ResourcesPage,
});

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } }),
};

function ResourceCarousel() {
  const [active, setActive] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((next: number) => {
    setDir(next > active ? 1 : -1);
    setActive((next + resources.length) % resources.length);
  }, [active]);

  // Auto-advance
  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => go(active + 1), 6000);
    return () => clearTimeout(t);
  }, [active, paused, go]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(active + 1);
      if (e.key === "ArrowLeft") go(active - 1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [active, go]);

  const resource = resources[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main carousel card */}
      <div className="relative overflow-hidden rounded-3xl glass-panel border border-white/10 min-h-[420px]">
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={active}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="grid lg:grid-cols-[1fr_320px] gap-0"
          >
            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${resource.tagColor.split(" ").slice(1).join(" ")}`}>
                  <resource.icon className={`w-5 h-5 ${resource.tagColor.split(" ")[0]}`} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${resource.tagColor}`}>
                  {resource.type}
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
                {resource.title}
              </h2>
              <p className="text-base text-emerald-300/80 font-medium mb-5">
                {resource.subtitle}
              </p>
              <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-xl">
                {resource.description}
              </p>

              {/* Topics */}
              <ul className="space-y-2 mb-8">
                {resource.topics.map((t, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-white/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                    {t}
                  </li>
                ))}
              </ul>

              {/* Action buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={resource.pageRoute}
                  className="inline-flex items-center gap-2 h-11 px-7 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate"
                >
                  {resource.buttonText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href={resource.pdfPath}
                  download
                  className="inline-flex items-center gap-2 h-11 px-6 text-sm font-semibold rounded-full text-white/70 glass-panel border border-white/15 hover:border-emerald-400/40 hover:text-white transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>

            {/* Decorative right panel */}
            <div className="hidden lg:flex flex-col items-center justify-center p-8 border-l border-white/8 bg-white/[0.02] gap-6">
              <div className={`w-24 h-24 rounded-3xl flex items-center justify-center ${resource.tagColor.split(" ").slice(1).join(" ")} border`} style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <resource.icon className={`w-12 h-12 ${resource.tagColor.split(" ")[0]} opacity-60`} />
              </div>
              <div className="text-center">
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Resource</p>
                <p className="text-4xl font-bold text-white/10">{String(active + 1).padStart(2, "0")}</p>
                <p className="text-xs text-white/30 mt-1">of {resources.length}</p>
              </div>
              <a
                href={resource.pdfPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-emerald-400/70 hover:text-emerald-400 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View PDF
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next buttons */}
        <button
          onClick={() => go(active - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-panel border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-emerald-400/40 transition-all z-10"
          aria-label="Previous resource"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => go(active + 1)}
          className="absolute right-4 lg:right-[340px] top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass-panel border border-white/15 flex items-center justify-center text-white/50 hover:text-white hover:border-emerald-400/40 transition-all z-10"
          aria-label="Next resource"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="flex items-center gap-2 mt-5 justify-center">
        {resources.map((r, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
            className="group flex items-center gap-2"
            aria-label={`Go to resource ${i + 1}`}
          >
            <div className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-10 bg-emerald-400" : "w-4 bg-white/20 hover:bg-white/40"}`} />
          </button>
        ))}
      </div>

      {/* Thumbnail strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        {resources.map((r, i) => (
          <button
            key={i}
            onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
            className={`glass-panel rounded-xl p-4 text-left transition-all duration-200 border ${i === active ? "border-emerald-400/40 bg-emerald-500/5" : "border-white/8 hover:border-white/20"}`}
          >
            <div className="flex items-center gap-2 mb-2">
              <r.icon className={`w-4 h-4 ${r.tagColor.split(" ")[0]}`} />
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider">{r.type}</span>
            </div>
            <p className={`text-xs font-semibold leading-snug ${i === active ? "text-white" : "text-white/55"}`}>
              {r.title}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function ResourcesPage() {
  const matches = useMatches();
  const isChildRoute = matches.some(
    (m) => m.routeId !== "/resources" && m.routeId.startsWith("/resources/")
  );

  if (isChildRoute) {
    return <Outlet />;
  }

  return (
    <PageShell
      eyebrow="Resources"
      title={<>Free guides for <span className="text-gradient">care agency owners</span></>}
      subtitle="Practical website, SEO, referral, and recruitment resources created for home health, hospice, and home care agencies."
    >
      <ResourceCarousel />
      <CTASection
        title="Want these tailored to your agency?"
        body="Book a call and we'll review your current website, visibility, referral flow, and digital systems — at no cost, with no obligation."
      />
    </PageShell>
  );
}
