import { motion } from "framer-motion";
import { Globe, Search, UserCheck, Wrench } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design",
    desc: "Built specifically for care agencies — not generic templates. Modern, fast, and conversion-ready.",
  },
  {
    icon: Search,
    title: "SEO & Local Visibility",
    desc: "Help families and referral partners find your agency first in local searches.",
  },
  {
    icon: UserCheck,
    title: "Referral Systems",
    desc: "Capture and follow up with referral partners automatically through purpose-built lead forms.",
  },
  {
    icon: Wrench,
    title: "Website Support",
    desc: "Ongoing updates, performance optimization, and technical support — so you never go it alone.",
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

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden" data-testid="section-services">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animated-bg-blob bg-emerald-600 w-[600px] h-[600px] top-[10%] right-[-150px] opacity-20" />
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
              Our Services
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything your agency needs{" "}
            <span className="text-gradient">to grow online</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardVariant}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(16,185,129,0.15)" }}
              className="glass-panel rounded-2xl p-6 border-white/10 cursor-default group transition-all duration-300"
              data-testid={`card-service-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                <service.icon className="w-5 h-5 text-emerald-400" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-sm text-white/55 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
