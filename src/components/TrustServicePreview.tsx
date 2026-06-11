import { motion } from "framer-motion";
import {
  ShieldCheck,
  MessageSquareText,
  MapPin,
  UserPlus,
  Workflow,
  Handshake,
  ArrowUpRight,
  Star,
  BadgeCheck,
} from "lucide-react";
import { ScrollFade } from "@/components/ScrollFade";

export function TrustServicePreview() {
  return (
    <section className="relative py-20 md:py-28" data-testid="section-what-we-build">
      {/* Subtle grid backdrop with emerald/cyan tint */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.09] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2244%22 height=%2244%22><path d=%22M0 43.5h44M43.5 0v44%22 stroke=%22white%22 stroke-width=%221%22 fill=%22none%22/></svg>')]"
      />
      {/* Emerald/cyan radial wash to color the grid */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.10),transparent_70%)]" />
      {/* Top + bottom fade overlays to blend with neighboring sections */}

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        {/* Tagline replacing the trust strip */}
        <ScrollFade className="text-center mb-20 md:mb-24" travel={30}>
          <p className="text-2xl md:text-4xl font-heading font-semibold text-white leading-tight tracking-tight">
            Professional websites. <span className="text-white leading-tight tracking-tight">Trusted results.</span>
            <br className="hidden md:block" />
            <span className="text-gradient"> We build on credibility.</span>
          </p>
        </ScrollFade>

        {/* Heading */}
        <ScrollFade className="max-w-2xl mb-12 md:mb-16" travel={30}>
          <span className="inline-block px-3 py-1 mb-5 text-[11px] font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
            What we build
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Every piece, engineered for a <span className="text-gradient">specific outcome.</span>
          </h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Not just bells and whistles - a system designed to earn trust, generate
            referrals, drive calls, and support caregivers for your agency.            
          </p>
        </ScrollFade>

        {/* Outcome bento — varied shapes, no uniform cards */}
        <OutcomeGrid />
      </div>
    </section>
  );
}

type Outcome = {
  eyebrow: string;
  title: string;
  body: string;
  Icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  span: string;
  tone: "hero" | "glass" | "outline" | "dark" | "accent";
};

const OUTCOMES: Outcome[] = [
  {
    eyebrow: "Credibility",
    title: "Built to improve website credibility",
    body: "A modern, professional site helps referral partners and families trust your agency before the first call.",
    Icon: ShieldCheck,
    span: "md:col-span-4 md:row-span-2",
    tone: "hero",
  },
  {
    eyebrow: "Inquiries",
    title: "Designed to increase qualified inquiries",
    body: "Clear messaging, strong CTAs (Call To Action) and conversion-focused layouts turn visitors into contacts.",
    Icon: MessageSquareText,
    span: "md:col-span-2 md:row-span-1",
    tone: "accent",
  },
  {
    eyebrow: "Visibility",
    title: "Structured for local search visibility",
    body: "Optimized pages and local SEO help your agency appear in the searches that matter most.",
    Icon: MapPin,
    span: "md:col-span-2 md:row-span-1",
    tone: "dark",
  },
  {
    eyebrow: "Recruitment",
    title: "Created to improve caregiver recruitment flow",
    body: "Dedicated recruitment pages and funnels attract and convert more caregiver applicants online.",
    Icon: UserPlus,
    span: "md:col-span-3 md:row-span-1",
    tone: "glass",
  },
  {
    eyebrow: "Automation",
    title: "Built to reduce manual follow-up tasks",
    body: "AI workflows and automation let your team spend less time on repetitive outreach.",
    Icon: Workflow,
    span: "md:col-span-3 md:row-span-1",
    tone: "outline",
  },
  {
    eyebrow: "Partners",
    title: "Strengthens referral partner relationships",
    body: "A professional digital presence gives referral partners the confidence to send clients your way — consistently.",
    Icon: Handshake,
    span: "md:col-span-6 md:row-span-1",
    tone: "accent",
  },
];

function toneClasses(tone: Outcome["tone"]) {
  switch (tone) {
    case "hero":
      return "border-emerald-400/15 bg-gradient-to-br from-emerald-500/10 via-emerald-500/[0.03] to-cyan-500/[0.07]";
    case "accent":
      return "border-white/[0.07] bg-gradient-to-br from-cyan-500/[0.08] via-transparent to-emerald-500/[0.05]";
    case "dark":
      return "border-white/[0.07] bg-black/15 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.09),transparent_60%)]";
    case "outline":
      return "border-emerald-400/10 bg-transparent";
    case "glass":
    default:
      return "border-white/[0.07] bg-white/[0.025] backdrop-blur-sm";
  }
}

function OutcomeGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(180px,auto)] gap-4 md:gap-5">
      {OUTCOMES.map((o, i) => {
        const isHero = o.tone === "hero";
        return (
          <motion.article
            key={o.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            className={`group relative ${o.span} rounded-3xl overflow-hidden border ${toneClasses(
              o.tone,
            )} p-6 md:p-7 flex flex-col`}
          >
            {/* decorative glows */}
            {isHero && (
              <>
                <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-emerald-400/12 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-24 -left-10 w-64 h-64 rounded-full bg-cyan-400/[0.08] blur-3xl pointer-events-none" />
              </>
            )}

            <div className="flex items-start justify-between gap-4">
              <div
                className={`flex items-center justify-center rounded-xl ${
                  isHero ? "w-14 h-14" : "w-11 h-11"
                } bg-gradient-to-br from-emerald-500/25 to-cyan-500/15 border border-white/10`}
              >
                <o.Icon
                  className={`${isHero ? "w-7 h-7" : "w-5 h-5"} text-emerald-300`}
                  strokeWidth={1.6}
                />
              </div>
              <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/40">
                {o.eyebrow}
              </span>
            </div>

            {/* Mini credibility visualization for the hero tile */}
            {isHero && <CredibilityVisual />}

            <div className={`relative ${isHero ? "mt-auto pt-10" : "mt-5"}`}>
              <h3
                className={`font-heading font-bold text-white leading-tight ${
                  isHero ? "text-2xl md:text-4xl" : "text-lg md:text-xl"
                }`}
              >
                {isHero ? (
                  <>
                    Built to improve <span className="text-gradient">website credibility.</span>
                  </>
                ) : (
                  o.title
                )}
              </h3>
              <p
                className={`text-white/65 leading-relaxed ${
                  isHero ? "mt-3 max-w-md text-sm md:text-base" : "mt-2 text-sm"
                }`}
              >
                {o.body}
              </p>
            </div>

            <ArrowUpRight className="absolute top-5 right-5 w-4 h-4 text-white/20 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
          </motion.article>
        );
      })}
    </div>
  );
}

export default TrustServicePreview;

function CredibilityVisual() {
  return (
    <div className="relative mt-6 rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-4 overflow-hidden">
      {/* faux browser chrome */}
      <div className="flex items-center gap-1.5 mb-3">
        <span className="w-2 h-2 rounded-full bg-red-400/60" />
        <span className="w-2 h-2 rounded-full bg-yellow-400/60" />
        <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
        <div className="ml-3 h-4 flex-1 rounded-full bg-white/5 border border-white/10" />
      </div>

      {/* agency card mock */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500/40 to-cyan-500/30 border border-white/10 flex items-center justify-center">
          <BadgeCheck className="w-5 h-5 text-emerald-200" strokeWidth={1.8} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="h-2 w-24 rounded-full bg-white/30 mb-1.5" />
          <div className="h-1.5 w-36 rounded-full bg-white/10" />
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-semibold tracking-wider uppercase text-emerald-300 px-2 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10">
          Verified
        </span>
      </div>

      {/* rating + trust pills */}
      <div className="mt-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-0.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} className="w-3.5 h-3.5 fill-emerald-300 text-emerald-300" />
          ))}
          <span className="ml-2 text-[11px] text-white/60">4.9 · 128 reviews</span>
        </div>
        <div className="hidden md:flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">HIPAA-aware</span>
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">Licensed</span>
        </div>
      </div>

      {/* decorative glow */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />
    </div>
  );
}
