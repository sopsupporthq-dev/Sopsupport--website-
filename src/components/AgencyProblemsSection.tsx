import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const problems = [
  "Referral partners do not see a professional online presence and hesitate to send clients.",
  "Families cannot understand your services quickly — and leave before making contact.",
  "Your agency does not rank well locally, so potential clients find your competitors first.",
  "Caregiver applicants visit your site and don't apply — your recruiting flow isn't converting.",
  "Manual follow-ups waste staff time and slow down your intake and response process.",
  "Website traffic is not turning into real inquiries — visitors come and leave with no action.",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function AgencyProblemsSection() {
  return (
    <section id="problems" className="py-24 relative overflow-hidden" data-testid="section-problems">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-amber-500/10 border border-amber-500/20">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-xs font-medium text-amber-300 uppercase tracking-wider">
              Common Agency Challenges
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 max-w-3xl mx-auto">
            If your website is outdated, your agency may be{" "}
            <span className="text-amber-400">losing trust before the first call.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -4 }}
              className="glass-panel rounded-2xl p-6 border-amber-500/10 group hover:border-amber-500/25 transition-all duration-300"
              data-testid={`card-problem-${i}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mt-0.5">
                  <span className="text-xs font-bold text-amber-400">{i + 1}</span>
                </div>
                <p className="text-sm font-medium text-white/80 leading-relaxed">{problem}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
