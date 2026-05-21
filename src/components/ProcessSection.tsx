import { motion } from "framer-motion";
import { ClipboardList, Map, PenTool, Rocket, LifeBuoy } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Free Growth Audit",
    desc: "We review your current website, visibility, and digital systems to identify opportunities",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy & Website Plan",
    desc: "We build a custom roadmap for your agency's digital growth and online presence",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design & Build",
    desc: "We create your modern website and digital systems tailored for care agencies",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Optimization",
    desc: "We go live and optimize for performance, local rankings, and conversions",
  },
  {
    icon: LifeBuoy,
    number: "05",
    title: "Ongoing Support",
    desc: "We continue improving your systems every month with unlimited requests",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 relative overflow-hidden" data-testid="section-process">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animated-bg-blob bg-emerald-600 w-[400px] h-[400px] top-0 right-[-100px] opacity-15" />
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
              Our Process
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How we work{" "}
            <span className="text-gradient">with your agency</span>
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:flex items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.title} className="flex-1 relative" data-testid={`step-process-${i}`}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-gradient-to-r from-emerald-500/60 via-cyan-500/40 to-emerald-500/60 z-0" />
              )}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                {/* Step circle */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 flex items-center justify-center mb-5 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                  <step.icon className="w-6 h-6 text-emerald-400" />
                </div>

                <span className="text-xs font-bold text-emerald-500 tracking-widest mb-2">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{step.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="flex flex-col gap-6 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="flex items-start gap-5 glass-panel rounded-2xl p-5"
              data-testid={`step-process-mobile-${i}`}
            >
              <div className="w-12 h-12 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <step.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-500 tracking-widest">{step.number}</span>
                <h3 className="text-sm font-bold text-white mt-1 mb-1">{step.title}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
