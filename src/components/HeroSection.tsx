"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen pt-28 md:pt-32 pb-16 md:pb-20 flex items-center"
      data-testid="section-hero"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-12 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel mb-8 border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-100 uppercase tracking-wider">
                Exclusively for Care Agencies
              </span>
            </div>

            <h1 className="text-[clamp(3rem,6vw,6.5rem)] font-bold leading-[1.05] mb-6 text-white">
              The Website & Digital Growth Partner for <br />
              <span className="text-gradient">
                Home Health, Hospice & Home Care
              </span>{" "}
              Agencies
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white mb-8 md:mb-10 leading-relaxed max-w-3xl">
              We are the preeminent digital agency for home care and healthcare
              providers. We build original websites and also replace outdated
              ones with modern digital systems designed to build trust, improve
              local visibility, capture referrals, and support long-term growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold rounded-full text-white bg-gradient-glow group"
              >
                Book Your Free Growth Audit
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center h-12 px-8 text-base font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                Explore Our Services
              </a>
            </div>
          </motion.div>

          <div />
        </div>
      </div>
    </section>
  );
}
