import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Website Design",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    title: "10 Website Features Every Home Care Agency Needs",
    desc: "Discover the essential pages, forms, and elements that help care agencies convert visitors into clients and referral partners.",
  },
  {
    tag: "SEO",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    title: "How Home Health Agencies Can Improve Local SEO",
    desc: "A practical guide to improving your local search rankings and showing up when families search for care services near them.",
  },
  {
    tag: "Recruiting",
    tagColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    title: "Why Caregiver Recruitment Pages Matter",
    desc: "Learn how a dedicated recruitment page and funnel can dramatically improve caregiver applicant quality and volume.",
  },
  {
    tag: "Automation",
    tagColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    title: "AI Automation Ideas for Care Agency Owners",
    desc: "Explore practical ways AI workflows can reduce manual tasks, speed up follow-ups, and improve your intake process.",
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

export function ResourcesSection() {
  return (
    <section id="resources" className="py-24 relative overflow-hidden" data-testid="section-resources">
      <div className="absolute inset-0 pointer-events-none">
        <div className="animated-bg-blob bg-emerald-600 w-[450px] h-[450px] bottom-[-100px] right-[-100px] opacity-15" />
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
              Resources
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Resources for{" "}
            <span className="text-gradient">care agency growth</span>
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {articles.map((article, i) => (
            <motion.div
              key={i}
              variants={cardVariant}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(16,185,129,0.12)" }}
              className="glass-panel rounded-2xl p-7 border-white/10 group cursor-pointer transition-all duration-300"
              data-testid={`card-resource-${i}`}
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${article.tagColor} mb-5`}>
                {article.tag}
              </span>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug group-hover:text-emerald-100 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm text-white/55 leading-relaxed mb-5">{article.desc}</p>
              <div className="flex items-center gap-1 text-sm font-semibold text-emerald-400 group-hover:text-emerald-300 transition-colors" data-testid={`link-read-article-${i}`}>
                Read Article
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
