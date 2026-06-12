import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, ChevronUp, DollarSign, BarChart2, FileText, Shield } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/industries/revenue-cycle-billing")({
  head: () => ({
    meta: [
      { title: "Website Design & Digital Marketing for Revenue Cycle & Billing Vendors | SOP Support" },
      { name: "description", content: "SOP Support builds professional websites for revenue cycle management and medical billing vendors serving home health and hospice providers. Improve visibility and generate more qualified leads." },
      { property: "og:title", content: "Website Design & Digital Marketing for Revenue Cycle & Billing Vendors | SOP Support" },
      { property: "og:url", content: "/industries/revenue-cycle-billing" },
    ],
    links: [{ rel: "canonical", href: "/industries/revenue-cycle-billing" }],
  }),
  component: RevenueCycleBillingPage,
});

const searchExamples = [
  "home health billing services",
  "hospice revenue cycle management",
  "home health RCM vendor",
  "medical billing for home health agencies",
  "hospice billing company",
  "revenue cycle management home care",
  "home health claims processing",
  "Medicare billing for hospice providers",
];

const challenges = [
  { icon: DollarSign, title: "Decision-makers search online first", body: "Home health and hospice administrators research RCM vendors online before issuing RFPs or making contact. A professional website is your first opportunity to win their trust." },
  { icon: BarChart2, title: "Credibility determines vendor selection", body: "RCM is a high-stakes purchase. Providers evaluating billing partners scrutinize websites carefully. An outdated or unclear website signals operational risk before a single conversation happens." },
  { icon: FileText, title: "Content builds authority", body: "Guides on denial management, Medicare billing updates, and RCM best practices published on your website position your company as a knowledgeable partner — not just a vendor." },
  { icon: Shield, title: "Compliance messaging matters", body: "Home health and hospice billing is highly regulated. Your website must clearly communicate your compliance expertise, HIPAA practices, and understanding of CMS requirements." },
];

const websiteFeatures = [
  { title: "Specialty-Specific Service Pages", body: "Dedicated pages for home health billing, hospice billing, Medicare Part A claims, OASIS management, UB-04 and 1500 claim processing, denial management, and any specialty service you offer." },
  { title: "Credibility and Compliance Messaging", body: "Clearly communicate your compliance standards, HIPAA practices, years of experience, billing accuracy rates, and CMS regulatory expertise. These details matter enormously to provider decision-makers." },
  { title: "Lead Generation Forms and CTAs", body: "Revenue cycle vendors need qualified leads — not general inquiries. A well-structured website should guide administrators toward a demo request, consultation, or RFP form." },
  { title: "Case Studies and Results Content", body: "Providers evaluating billing partners want proof. Anonymized case studies showing claim denial rates reduced, days in AR improved, or revenue recovered build credibility faster than any sales pitch." },
  { title: "Educational Resource Library", body: "Blog posts and guides on Medicare billing updates, claim denial trends, RAC audit preparation, and PDGM changes attract organic search traffic from the exact administrators you want to reach." },
  { title: "SEO-Structured Technical Foundation", body: "Your website must be built with clean technical SEO — fast loading, mobile-optimized, with schema markup and structured content — so Google indexes and surfaces your pages to providers searching for RCM solutions." },
];

const seoKeywords = [
  "home health billing services", "hospice revenue cycle management",
  "home health RCM vendor", "medical billing home health agency",
  "hospice billing company", "Medicare home health billing",
  "revenue cycle management home care", "home health claims denial management",
  "OASIS billing support", "home health billing digital marketing",
];

const mistakes = [
  "Generic website that doesn't speak to home health or hospice billing specifics",
  "No case studies or proof of billing performance results",
  "Missing compliance and HIPAA messaging that providers expect",
  "No specialty service pages for each billing category",
  "No educational content to attract organic traffic from decision-makers",
  "Weak lead generation — no demo request or consultation form",
  "No clear differentiation from other RCM vendors",
  "Slow, outdated design that signals a lack of operational sophistication",
];

const sopServices = [
  "RCM and billing vendor website design",
  "Specialty service pages for each billing category",
  "Compliance and credibility messaging",
  "Lead generation and demo request forms",
  "Case study and results page layout",
  "Educational blog and resource structure",
  "Local and national SEO foundation",
  "Mobile-optimized fast-loading design",
  "Ongoing website support",
  "Digital growth strategy",
];

const faqs = [
  { q: "Why do revenue cycle vendors need a specialized website?", a: "Home health and hospice billing is a specialized field. Decision-makers evaluating RCM partners look for websites that demonstrate industry expertise, compliance knowledge, and a clear understanding of their specific billing challenges." },
  { q: "What content performs best for RCM and billing vendor websites?", a: "Service-specific pages for each billing specialty, case studies showing measurable client results, educational guides on Medicare billing updates and denial management, and clear compliance messaging perform best for RCM vendor SEO." },
  { q: "How does SEO help revenue cycle management companies grow?", a: "SEO helps RCM companies appear when home health and hospice administrators search for billing solutions. High-ranking educational content and service pages attract qualified leads who are actively researching vendors." },
  { q: "What makes an RCM website generate more leads?", a: "Clear service differentiation, visible proof of results through case studies, a prominent demo or consultation request form, and educational content that answers decision-maker questions all contribute to better lead generation." },
  { q: "Can SOP Support build websites for both home health and hospice billing vendors?", a: "Yes. We build websites for RCM and billing vendors serving home health agencies, hospice providers, home care companies, and other post-acute care organizations." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
        <span className="text-sm font-semibold text-white">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-4 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">{a}</div>}
    </div>
  );
}

function RevenueCycleBillingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Revenue Cycle & Billing Vendors</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Website Design & Digital Marketing for <span className="text-gradient">Revenue Cycle & Billing Vendors</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Get in front of home health and hospice administrators actively searching for billing solutions.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Revenue cycle management and medical billing vendors serving home health and hospice providers operate in a high-trust, high-scrutiny market. Administrators evaluating billing partners research vendors online extensively. A professional, SEO-optimized website helps your company appear in the right searches, communicate expertise clearly, and convert more visitors into qualified leads.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                Build Your RCM Website <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Schedule a Consultation
              </Link>
            </motion.div>
          </section>

          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">How Administrators Search</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Providers Are Searching for Billing Solutions Right Now</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">Home health and hospice administrators search Google when evaluating RCM partners. Your website needs to appear for searches like:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {searchExamples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-sm text-white/70 italic">"{ex}"</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Why It Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold">Why RCM Vendors Need a Strong Digital Presence</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {challenges.map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="glass-panel rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4"><c.icon className="w-5 h-5" /></div>
                  <h3 className="text-sm font-semibold mb-2">{c.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{c.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">What We Build</span>
              <h2 className="text-2xl md:text-3xl font-bold">What a High-Performing RCM Vendor Website Includes</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteFeatures.map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-panel rounded-2xl p-6">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold mb-4">{i + 1}</div>
                  <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">SEO Strategy</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Keywords Your RCM Website Should Rank For</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">We structure your website around the terms home health and hospice administrators use when evaluating billing vendors.</p>
              <div className="flex flex-wrap gap-2">
                {seoKeywords.map((kw, i) => <span key={i} className="px-3 py-1.5 rounded-full glass-panel text-xs text-emerald-300 border border-emerald-500/20">{kw}</span>)}
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">Common Mistakes</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Holds RCM Vendors Back Online</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {mistakes.map((m, i) => <div key={i} className="flex items-start gap-3 text-sm text-white/65"><XCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />{m}</div>)}
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">How SOP Support Helps</span>
              <h2 className="text-2xl md:text-3xl font-bold">What SOP Support Builds for Revenue Cycle Vendors</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {sopServices.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="glass-panel rounded-xl px-4 py-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/75">{s}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="max-w-3xl mx-auto mb-24">
            <div className="text-center mb-10"><h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2></div>
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Generate More <span className="text-gradient">Qualified RCM Leads Online?</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">SOP Support helps revenue cycle and billing vendors build professional websites that attract home health and hospice administrators, communicate expertise, and convert more visitors into clients.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Build Your RCM Website <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                    Schedule a Free Consultation
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
