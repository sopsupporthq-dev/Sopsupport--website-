import { motion } from "framer-motion";
import {
  Globe,
  Search,
  UserCheck,
  Users,
  Star,
  Zap,
  BarChart2,
  Wrench,
} from "lucide-react";

const nodes = [
  { icon: Globe, label: "Website", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
  { icon: Search, label: "SEO", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30" },
  { icon: UserCheck, label: "Referral Forms", color: "text-teal-400", bg: "bg-teal-500/10 border-teal-500/30" },
  { icon: Users, label: "Caregiver Recruiting", color: "text-emerald-300", bg: "bg-emerald-400/10 border-emerald-400/30" },
  { icon: Star, label: "Reviews", color: "text-cyan-300", bg: "bg-cyan-400/10 border-cyan-400/30" },
  { icon: Zap, label: "Automation", color: "text-teal-300", bg: "bg-teal-400/10 border-teal-400/30" },
  { icon: BarChart2, label: "Analytics", color: "text-emerald-400", bg: "bg-emerald-500/10 border-emerald-500/30" },
  { icon: Wrench, label: "Support", color: "text-cyan-400", bg: "bg-cyan-500/10 border-cyan-500/30" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const nodeVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export function GrowthSystemSection() {
  return (
    <section id="growth-system" className="py-24 relative" data-testid="section-growth-system">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animated-bg-blob bg-teal-500 w-[500px] h-[500px] bottom-[-100px] left-[-100px] opacity-20" />
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
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">
              The Full System
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            More than a website.{" "}
            <span className="text-gradient">A digital growth system.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Every piece connects. Every system supports your growth.
          </p>
        </motion.div>

        <div className="relative">
          {/* Center hub */}
          <div className="flex items-center justify-center mb-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)] z-10 relative">
                <span className="text-xs font-bold text-white text-center leading-tight">SOP<br/>Support</span>
              </div>
              <div className="absolute inset-0 rounded-full bg-emerald-400/20 animate-ping" />
            </motion.div>
          </div>

          {/* Nodes grid */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-5"
          >
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                variants={nodeVariant}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(16,185,129,0.15)" }}
                className={`glass-panel rounded-2xl p-5 border ${node.bg} flex flex-col items-center gap-3 cursor-default group transition-all duration-300`}
                data-testid={`node-growth-${i}`}
              >
                <div className={`w-10 h-10 rounded-xl border flex items-center justify-center ${node.bg}`}>
                  <node.icon className={`w-5 h-5 ${node.color}`} />
                </div>
                <span className="text-sm font-semibold text-white text-center">{node.label}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${node.color.replace('text-', 'bg-')} opacity-70 group-hover:opacity-100 group-hover:animate-pulse`} />
              </motion.div>
            ))}
          </motion.div>

          {/* Connecting line */}
          <div className="mt-8 flex justify-center">
            <div className="h-px w-full max-w-2xl bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
