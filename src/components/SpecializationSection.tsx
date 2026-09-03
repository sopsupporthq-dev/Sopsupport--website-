import { motion } from "framer-motion";
import { Heart, Home, Users } from "lucide-react";

export function SpecializationSection() {
  const badges = [
    { icon: Heart, label: "Home Health Agencies" },
    { icon: Home, label: "Hospice Providers" },
    { icon: Users, label: "Home Care Companies" },
  ];

  return (
    <section id="specialization" className="py-24 relative" data-testid="section-specialization">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Preeminent statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-2xl px-8 py-6 border-emerald-500/25 mb-12 max-w-2xl mx-auto"
          >
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            We do not build websites{" "}
            <span className="text-gradient">for everyone.</span>
          </h2>
          <p className="text-lg text-white/70 leading-relaxed mb-12 max-w-2xl mx-auto">
            SOP Support focuses on one market: home health, hospice, and home care agencies.
            That means every page, message, Call to Action (CTA), form, SEO plan, and automation system is
            created around the way care agencies actually grow.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="flex items-center gap-2 px-6 py-3 rounded-full glass-panel border-emerald-500/30 cursor-default"
                data-testid={`badge-specialty-${i}`}
              >
                <badge.icon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm font-semibold text-white">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
