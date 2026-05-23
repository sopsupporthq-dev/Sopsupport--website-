import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export function FinalCTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden" data-testid="section-final-cta">
      {/* Rich gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-teal-950 to-cyan-950" />
        <div className="animated-bg-blob bg-emerald-500 w-[600px] h-[600px] top-[-200px] left-[10%] opacity-25" />
        <div className="animated-bg-blob bg-cyan-500 w-[500px] h-[500px] bottom-[-200px] right-[5%] opacity-20 animation-delay-2000" />
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0wIDU5LjVoNjBWMHptNTkuNSAwVjBIMHoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-60" />
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/80 uppercase tracking-wider">
              Free Growth Audit
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Your agency deserves a website
            <br />
            <span className="text-gradient">that works harder.</span>
          </h2>

          <p className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Book a free growth audit and see how SOP Support can improve your website,
            visibility, and digital systems — at no cost, with no obligation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold rounded-full bg-white text-emerald-900 shadow-[0_0_40px_rgba(255,255,255,0.25)] hover:shadow-[0_0_60px_rgba(255,255,255,0.35)] transition-all duration-300 no-default-hover-elevate"
              data-testid="link-schedule-consultation"
            >
              <Calendar className="w-5 h-5" />
              Schedule Free Consultation
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold rounded-full text-white border-2 border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all duration-300 no-default-hover-elevate"
              data-testid="link-contact-team"
            >
              Contact Our Team
              <ArrowRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
