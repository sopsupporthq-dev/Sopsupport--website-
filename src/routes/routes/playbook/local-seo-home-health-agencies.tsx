import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Download, ExternalLink, ChevronDown, ChevronUp, MapPin, Search, Smartphone, Star, Globe } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/playbook/local-seo-home-health-agencies")({
  head: () => ({
    meta: [
      { title: "Local SEO for Home Health Agencies | SOP Support" },
      { name: "description", content: "Learn how local SEO helps home health agencies improve online visibility, reach families, support referral growth, and appear in searches across their service areas." },
      { property: "og:title", content: "Local SEO for Home Health Agencies | SOP Support" },
      { property: "og:url", content: "/playbook/local-seo-home-health-agencies" },
    ],
    links: [{ rel: "canonical", href: "/playbook/local-seo-home-health-agencies" }],
  }),
  component: LocalSEOPage,
});

const localSearchExamples = [
  "Home health agency near me",
  "Home health care in Dallas",
  "Medicare home health agency in Austin",
  "Skilled nursing at home near me",
  "Home health therapy services in Houston",
  "Post-hospital home health care near me",
];

const seoElements = [
  {
    icon: Globe,
    title: "Google Business Profile",
    body: "Your GBP should have accurate agency information — business name, address, phone number, website, hours, service categories, and service areas. This is one of the most important parts of local visibility.",
  },
  {
    icon: MapPin,
    title: "Service Area Content",
    body: "Your website should clearly explain where your agency provides care, including city pages, county pages, or a detailed service area section. Search engines need location signals to understand where your agency is relevant.",
  },
  {
    icon: Search,
    title: "Clear Service Pages",
    body: "Each major service should be explained clearly — skilled nursing, therapy services, aide services, post-hospital care, chronic care support, wound care, and specialty services.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Friendly Website",
    body: "Many local searches happen on mobile devices. Your website should be easy to read, navigate, and contact from a phone.",
  },
  {
    icon: Star,
    title: "Reviews and Reputation",
    body: "Reviews can help build trust with families and referral partners. Your website should make your agency look credible, active, and professional.",
  },
];

const recommendedPages = [
  "Home", "About Us", "Services", "Service Areas", "Referrals",
  "Contact", "Careers", "Frequently Asked Questions", "Resources or Blog",
  "Compliance or Accreditation Information",
];

const commonProblems = [
  "No service area pages",
  "Thin or generic content",
  "Outdated website design",
  "Missing local keywords",
  "No Google Business Profile optimization",
  "Inconsistent contact information",
  "Slow website speed",
  "Poor mobile experience",
  "No referral page",
  "Weak calls to action",
  "Duplicate content copied from other websites",
  "No clear explanation of services",
];

const sopServices = [
  "SEO-ready website structure",
  "Local service area content",
  "Home health service pages",
  "Google visibility strategy",
  "Referral form setup",
  "Mobile-friendly design",
  "Clear calls to action",
  "Website speed and usability",
  "Professional branding",
  "Ongoing website support",
];

const seoReferralBenefits = [
  "Making your agency easier to find",
  "Helping referral partners validate your agency",
  "Showing clear services and service areas",
  "Driving visitors to your referral form",
  "Improving credibility before outreach calls",
  "Supporting long-term brand recognition",
];

const faqs = [
  {
    q: "What is local SEO for home health agencies?",
    a: "Local SEO helps home health agencies appear in searches related to their services and locations. It improves visibility for people searching in your service area.",
  },
  {
    q: "Why does local SEO matter for home health agencies?",
    a: "Local SEO matters because families, patients, and referral partners often search online before contacting or choosing an agency.",
  },
  {
    q: "What pages help home health SEO?",
    a: "Important pages include service pages, service area pages, referral pages, contact pages, FAQs, and helpful resource pages.",
  },
  {
    q: "Can SEO help with referrals?",
    a: "Yes. SEO helps referral partners and families find, validate, and contact your agency online.",
  },
  {
    q: "How long does local SEO take?",
    a: "SEO usually builds over time. A strong website structure, clear content, and consistent local information create a better foundation for long-term visibility.",
  },
];

const PDF_URL = "/assets/home_health_digital_growth_playbooks.pdf";

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}

function LocalSEOPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />

      {/* Floating PDF Button */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
        <a
          href={PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl px-3 py-4 shadow-lg shadow-emerald-900/40 flex flex-col items-center gap-2"
          title="Open Playbook PDF"
        >
          <ExternalLink className="w-4 h-4 text-white" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">
            View PDF
          </span>
        </a>
        <a
          href={PDF_URL}
          download="SOP-Support-Home-Health-Digital-Growth-Playbook.pdf"
          className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-2xl px-3 py-3 flex flex-col items-center gap-1"
          title="Download PDF"
        >
          <Download className="w-4 h-4 text-white/70" />
          <span className="text-[10px] text-white/50 uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">
            Save
          </span>
        </a>
      </div>

      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                Home Health Agencies
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              Local SEO for{" "}
              <span className="text-gradient">Home Health Agencies</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
            >
              Help more families, patients, and referral partners find your agency online.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              For home health agencies, visibility matters. When someone searches for home health services in your area, your agency should be easy to find, easy to understand, and easy to contact. Local SEO helps your website and online presence appear in searches connected to your city, county, and service area.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                Improve Local Visibility <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Schedule a Consultation
              </Link>
            </motion.div>
          </section>

          {/* What Is Local SEO */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                What Is Local SEO?
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Local SEO Helps Your Agency Show Up Where It Matters</h2>
              <p className="text-white/60 leading-relaxed mb-6 text-sm">
                Local SEO is the process of improving your online presence so your agency can appear in local searches. For a home health agency, that may include:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {localSearchExamples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                    <Search className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="text-sm text-white/70 italic">"{ex}"</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/60 leading-relaxed text-sm">
                When your website is structured correctly, search engines can better understand who you serve, what services you offer, and where your agency operates. The goal is simple: make it easier for local families and referral partners to find and contact your agency.
              </p>
            </div>
          </section>

          {/* Local SEO Elements */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                What Helps Your Agency Rank Locally
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Local SEO Works Best When Your Website Is Built Correctly</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                Strong local SEO comes from a combination of website structure, content, business information, and consistency.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoElements.map((el, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
                    <el.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{el.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{el.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recommended Pages */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">
                Website Structure
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Pages Every Home Health Agency Should Have</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                A home health agency website should include the core pages visitors expect to see. Each page should have a clear purpose and help your agency explain who you are, what you do, where you serve, and how people can contact you.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {recommendedPages.map((page, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {page}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Common Problems */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">
                Common Problems
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Why Some Agencies Struggle to Show Up Online</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Many home health agencies have websites, but they are not built for visibility. A professional, search-friendly website can help fix these gaps.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {commonProblems.map((p, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <XCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                    {p}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SEO + Referrals */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                How Local SEO Supports Referrals
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Search Visibility and Referral Growth Work Together</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Local SEO does not replace relationship-based referral marketing — it supports it. When a discharge planner, physician office, community partner, or family member hears about your agency, they may search for you online. Local SEO can support referrals by:
              </p>
              <div className="space-y-3">
                {seoReferralBenefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What SOP Support Does */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                How SOP Support Helps
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Local SEO-Ready Websites for Home Health Agencies</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                SOP Support helps home health agencies create professional websites built for trust, clarity, and local visibility.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {sopServices.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  className="glass-panel rounded-xl px-4 py-3 flex items-center gap-2"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/75">{s}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-24">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </section>

          {/* Final CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Want Your Home Health Agency to{" "}
                  <span className="text-gradient">Show Up Locally?</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">
                  Your agency needs more than a website. It needs a digital foundation built for visibility, trust, and growth. SOP Support helps home health agencies create professional, SEO-friendly websites that support local search and referral opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Improve Local SEO <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                    Schedule a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
}
