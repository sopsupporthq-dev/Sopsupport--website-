import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Linkedin, Code2, Brain, Cloud, Globe, Quote } from "lucide-react";

const skills = [
  { icon: Globe, label: "Web Solutions" },
  { icon: Brain, label: "Generative AI" },
  { icon: Code2, label: "Full-Stack Dev" },
  { icon: Cloud, label: "Cloud Deployment" },
];

export default function MeetOurTeam() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Page heading */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 text-xs font-semibold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              The People Behind the Platform
            </span>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white mb-5 leading-tight">
              Meet Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
              Built by specialists who live at the intersection of technology, automation, and care-industry growth.
            </p>
          </motion.div>

          {/* Team member card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-panel rounded-3xl p-10 md:p-14 mb-14 border border-white/10 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col md:flex-row items-start gap-10">
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg shadow-emerald-900/40">
                  <span className="text-4xl font-extrabold text-white select-none">BL</span>
                </div>
                <div className="mt-4 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs text-emerald-400 font-medium">Active</span>
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <h2 className="font-heading text-3xl font-extrabold text-white">Binil Lejy</h2>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white/30 hover:text-emerald-400 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-emerald-400 font-semibold text-sm uppercase tracking-widest mb-6">
                  Technical Lead – AI & Web Solutions
                </p>
                <p className="text-white/65 leading-relaxed text-base mb-8 max-w-2xl">
                  Binil Lejy is a Technical Lead specializing in AI-powered web solutions, full-stack development,
                  backend integration, and cloud deployment. With a background in MCA Generative AI, he focuses on
                  building modern, scalable, and automation-ready digital systems that help businesses improve their
                  online presence and operational efficiency.
                </p>

                {/* Skill chips */}
                <div className="flex flex-wrap gap-3">
                  {skills.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-white/70"
                    >
                      <Icon className="w-4 h-4 text-emerald-400" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mb-10"
          >
            <h2 className="font-heading text-3xl font-bold text-white mb-2">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-white/50 text-base">Real results from real partnerships.</p>
          </motion.div>

          {/* Testimonial card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="glass-panel rounded-3xl p-10 md:p-12 border border-emerald-400/15 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/8 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10">
              <Quote className="w-10 h-10 text-emerald-400/40 mb-6" />

              <blockquote className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-8 max-w-3xl">
                "Binil played a key role in bringing Cardinal Coding's website to life, handling the complete process
                from frontend development and backend setup to deployment and live configuration. His work helped create
                a modern, professional, and functional web presence for the company, with strong attention to design,
                performance, and real-world usability."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">Cardinal Coding</p>
                  <p className="text-white/45 text-sm">Cardinal Coding Team</p>
                </div>
                {/* Star rating */}
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
