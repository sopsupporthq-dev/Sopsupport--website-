"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100vh] pt-24 md:pt-28 pb-8 md:pb-12 flex items-center overflow-hidden"
      data-testid="section-hero"
      >
      {/* Full-page fixed atmospheric background */}
      <AtmosphericBackground variant="home" />

      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 xl:gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-6 border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
                Exclusively for Care Agencies
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.08] mb-5 text-white"
              data-testid="text-hero-headline"
            >
              The Website & Digital Growth Partner for{" "}
              <span className="text-gradient">
                Home Health, Hospice & Home Care
              </span>{" "}
              Agencies
            </h1>

            <p
              className="text-sm sm:text-base lg:text-lg text-white/80 mb-8 leading-relaxed max-w-xl"
              data-testid="text-hero-subheadline"
            >
              We are the preeminent digital agency for home care and healthcare
              providers. We build original websites and also replace outdated
              ones with modern digital systems designed to build trust, improve
              local visibility, capture referrals, and support long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate"
                data-testid="link-book-audit-primary"
              >
                Book Your Free Growth Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center h-11 px-7 text-sm font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                data-testid="link-explore-services"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>

          {/* Animated Dashboard Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:h-[520px] flex items-center justify-center"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-md glass-panel rounded-2xl p-5 shadow-2xl shadow-emerald-900/20 border-white/10"
              data-testid="hero-dashboard-visual"
            >
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <h3 className="font-heading font-semibold text-base text-white">Digital Growth System</h3>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Website Design",         status: "Live",      color: "bg-emerald-500", text: "text-emerald-400", pulse: false },
                  { label: "Professional Branding",   status: "Polished",  color: "bg-emerald-400", text: "text-emerald-300", pulse: false },
                  { label: "Mobile Responsive",       status: "Optimized", color: "bg-teal-400",    text: "text-teal-300",    pulse: false },
                  { label: "SEO Visibility",          status: "Improving", color: "bg-cyan-500",    text: "text-cyan-400",    pulse: true  },
                  { label: "Referral System",         status: "Active",    color: "bg-emerald-400", text: "text-emerald-300", pulse: true  },
                  { label: "Web & Digital Services",  status: "Running",   color: "bg-cyan-400",    text: "text-cyan-300",    pulse: false },
                  { label: "Fast and Secure Hosting", status: "Online",    color: "bg-emerald-500", text: "text-emerald-400", pulse: true  },
                ].map((row, i) => (
                  <motion.div
                    key={row.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/5"
                  >
                    <span className="text-xs font-medium text-white/80">{row.label}</span>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-semibold ${row.text}`}>{row.status}</span>
                      <div className="relative flex h-2 w-2">
                        {row.pulse && (
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${row.color} opacity-75`} />
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${row.color}`} />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
