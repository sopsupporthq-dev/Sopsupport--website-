import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe, Search, Users, LifeBuoy, ShieldCheck, Target, TrendingUp, Layers,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us | SOP Support" },
      {
        name: "description",
        content:
          "Learn why SOP Support builds websites, SEO systems, referral systems, and digital growth foundations specifically for home health, hospice, and home care agencies.",
      },
      { property: "og:title", content: "Why Us | SOP Support" },
      {
        property: "og:description",
        content:
          "SOP Support focuses on one market: home health, hospice, and home care agencies.",
      },
      { property: "og:url", content: "/why-us" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUsPage,
});

const services = [
  { icon: Globe, title: "Website Design", body: "Built specifically for care agencies — not generic templates. Modern, fast, and conversion-ready." },
  { icon: Search, title: "SEO & Local Visibility", body: "Help referral partners and families find your agency first in local searches." },
  { icon: Users, title: "Referral Systems", body: "Capture and follow up with referral partners automatically through purpose-built lead forms." },
  { icon: LifeBuoy, title: "Website Support", body: "Ongoing updates, performance optimization, and technical support as your agency grows." },
];

const challenges = [
  "Referral partners do not see a professional online presence and hesitate to send clients.",
  "Families cannot understand your services quickly — and leave before making contact.",
  "Your agency does not rank well locally, so potential clients find your competitors first.",
  "Website traffic is not turning into real inquiries — visitors come and leave without action.",
  "Manual follow-up wastes staff time and slows down your intake and response process.",
  "Caregiver applicants visit your site and don't apply — your recruiting flow isn't converting.",
];

const reasons = [
  { icon: Target, title: "One focused niche", body: "We build only for home health, hospice, and home care agencies." },
  { icon: ShieldCheck, title: "Built around trust", body: "Every page is designed to make families, referral partners, and caregivers feel confident." },
  { icon: TrendingUp, title: "Growth-ready structure", body: "Your website is built to support SEO, referrals, recruitment, automation, and long-term scaling." },
  { icon: Layers, title: "Not just a website", body: "We help create a digital foundation that supports your agency's growth systems." },
];

function WhyUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
      <div className="absolute top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-500/20 blur-[120px] animated-bg-blob" />
      <div className="absolute top-[40rem] -right-32 w-[40rem] h-[40rem] rounded-full bg-cyan-500/20 blur-[120px] animated-bg-blob animation-delay-2000" />

      <main className="relative pt-32 pb-24 px-6">
        {/* Hero */}
        <section className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex flex-col items-center gap-1 px-5 py-3 mb-8 glass-panel rounded-2xl text-xs text-white/70"
          >
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
          >
            We do not build websites for{" "}
            <span className="text-gradient">everyone.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            SOP Support focuses on one market: home health, hospice, and home care agencies. That means every page, message, CTA, form, SEO plan, and automation system is created around the way care agencies actually grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            {["Home Health Agencies", "Hospice Providers", "Home Care Companies"].map((p) => (
              <span key={p} className="px-4 py-1.5 rounded-full glass-panel text-xs font-medium text-emerald-300 border border-emerald-500/30">
                {p}
              </span>
            ))}
          </motion.div>
        </section>

        {/* Services Preview */}
        <section className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Everything your agency needs{" "}
              <span className="text-gradient">to grow online</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-300 mb-4">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-amber-300 border border-amber-400/30">
              Common Agency Challenges
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
              If your website is outdated, your agency may be{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                losing trust before the first call.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-panel rounded-2xl p-6 border border-amber-400/10"
              >
                <div className="w-8 h-8 rounded-lg bg-amber-400/15 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xs font-bold mb-3">
                  {i + 1}
                </div>
                <p className="text-sm text-white/70 leading-relaxed">{c}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Why SOP Support */}
        <section className="mt-32 max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Why agencies choose{" "}
              <span className="text-gradient">SOP Support</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass-panel rounded-2xl p-6"
              >
                <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-300 mb-4">
                  <r.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{r.body}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="mt-24 max-w-5xl mx-auto">
          <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to build a website your agency can{" "}
                <span className="text-gradient">actually grow with?</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
                Let's review your current website, visibility, and digital systems, then map out what needs to improve.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide"
                >
                  Book a Free Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
