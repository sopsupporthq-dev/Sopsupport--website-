import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, MapPin, UserCog, Clock, Handshake } from "lucide-react";

const results = [
  {
    icon: ShieldCheck,
    headline: "Built to improve website credibility",
    desc: "A modern, professional site helps referral partners and families trust your agency before the first call.",
  },
  {
    icon: TrendingUp,
    headline: "Designed to increase qualified inquiries",
    desc: "Clear messaging, strong call to action (CTAs), and conversion-focused layouts help turn visitors into contacts.",
  },
  {
    icon: MapPin,
    headline: "Structured to support better local search visibility",
    desc: "Optimized pages and local SEO strategies help your agency appear in searches that matter most.",
  },
  {
    icon: UserCog,
    headline: "Created to improve caregiver recruitment flow",
    desc: "Dedicated recruitment pages and funnels help attract and convert more caregiver applicants online.",
  },
  {
    icon: Clock,
    headline: "Built to reduce manual follow-up tasks",
    desc: "AI workflows and automation systems help your team spend less time on repetitive outreach.",
  },
  {
    icon: Handshake,
    headline: "Designed to strengthen referral partner relationships",
    desc: "A professional digital presence gives referral partners the confidence to send clients your way consistently.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ResultsSection() {
  return (
    <section id="results" className="py-24 relative overflow-hidden" data-testid="section-results">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animated-bg-blob bg-cyan-600 w-[500px] h-[500px] top-[-100px] left-[10%] opacity-15" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-emerald-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">
              What We Build For
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Built to support{" "}
            <span className="text-gradient">your agency's growth</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {results.map((result, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16,185,129,0.12)" }}
              className="glass-panel rounded-2xl p-7 border-white/10 group transition-all duration-300"
              data-testid={`card-result-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                <result.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-bold text-white mb-3">{result.headline}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{result.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
