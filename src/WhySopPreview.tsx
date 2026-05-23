import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Stethoscope, Sparkles, Gauge, CheckCircle2 } from "lucide-react";
import { ScrollFade } from "@/components/ScrollFade";

const pillars = [
  {
    icon: Stethoscope,
    title: "Care-only focus",
    body: "We work exclusively with home health, hospice and home care — no generic agency playbooks.",
  },
  {
    icon: Sparkles,
    title: "Premium craft",
    body: "Original, modern websites built to outclass the templates your competitors are using.",
  },
  {
    icon: Gauge,
    title: "Systems that compound",
    body: "SEO, automation and recruitment funnels designed to keep producing month after month.",
  },
];

const proof = [
  "Built for HIPAA-aware care brands",
  "Replaces 4–5 vendors with one team",
  "Launch in weeks, not quarters",
];

export function WhySopPreview() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-[-100px] w-[500px] h-[500px] rounded-full bg-teal-500/15 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left intro */}
          <ScrollFade className="lg:col-span-5" travel={30}>
            <span className="inline-block px-3 py-1 mb-5 text-[11px] font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
              Why SOP Support
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              The partner care agencies <span className="text-gradient">actually trust</span> with their digital growth.
            </h2>
            <p className="mt-5 text-white/60 leading-relaxed">
              Most agencies hand you a template, a hosting bill and a shrug. We hand you
              a living growth system — owned by your brand, tuned to your market, built
              to compound.
            </p>

            <ul className="mt-8 space-y-3">
              {proof.map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/75">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/why-us"
              className="inline-flex items-center gap-2 mt-10 h-12 px-7 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide no-default-hover-elevate"
            >
              See the full case
              <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollFade>

          {/* Right pillars stack */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-panel rounded-2xl p-6 md:p-7 flex gap-5 items-start hover:border-emerald-400/40 transition-colors group ${
                  i === 1 ? "lg:ml-8" : i === 2 ? "lg:ml-16" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/25 to-cyan-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <p.icon className="w-5 h-5 text-emerald-300" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-lg">
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 mt-1.5 leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySopPreview;