import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Shield, TrendingUp, Users, Globe, Star, Lock } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/resources/why-professional-website-matters")({
  head: () => ({
    meta: [
      { title: "Why a Professional Website Matters More Than Ever for Home Health Agencies | SOP Support" },
      { name: "description", content: "In a tighter regulatory environment with greater scrutiny from CMS and referral sources, a professional website is one of the most important investments a home health agency can make." },
    ],
    links: [{ rel: "canonical", href: "/resources/why-professional-website-matters" }],
  }),
  component: WhyWebsiteMattersPage,
});

const PDF_PATH = "/assets/pdfs/why-professional-website-matters.pdf";

const reasons = [
  { icon: Shield, title: "Build Trust and Credibility", body: "Your website is often the first impression potential patients, families, referral partners, and healthcare professionals have of your organization. A modern, professionally designed website demonstrates that your agency is organized, compliant, and committed to delivering exceptional care. It reassures visitors that they are dealing with a legitimate and reliable provider — before a single conversation happens." },
  { icon: Users, title: "Increase Referral Confidence", body: "Hospitals, physicians, discharge planners, and referral coordinators frequently research agencies online before making recommendations. A clear and informative website helps establish confidence by showcasing your services, service areas, qualifications, and commitment to patient care. This transparency can meaningfully improve referral opportunities and strengthen professional relationships over time." },
  { icon: Lock, title: "Support Regulatory Readiness", body: "Healthcare is one of the most regulated industries. A professional online presence reinforces your agency's commitment to compliance, operational standards, and accountability. An up-to-date website can communicate policies, services, credentials, and organizational information in a way that supports both professional perception and operational readiness — signals that matter especially in the current regulatory climate." },
  { icon: Globe, title: "Improve Patient Accessibility", body: "Patients and families increasingly rely on online searches to find healthcare providers. A website allows prospective clients to quickly access services offered, coverage areas, contact information, agency background, and frequently asked questions — helping families make informed decisions with confidence rather than having to call just to find basic information." },
  { icon: TrendingUp, title: "Drive Sustainable Business Growth", body: "A website is more than a digital brochure — it is a business growth platform. An effective website can generate private-pay leads, referral inquiries, recruitment opportunities, partnership discussions, and long-term brand awareness. By creating a professional online presence, agencies position themselves for sustainable growth in an increasingly digital healthcare environment." },
  { icon: Star, title: "Strengthen Local Visibility", body: "Many patients begin their search for healthcare services online. A professionally optimized website improves local search visibility and helps your agency appear when potential clients are actively seeking care providers in your service area. Increased visibility leads to more inquiries, stronger community recognition, and improved patient acquisition — all without additional paid advertising." },
];

const perceptionSignals = ["Established", "Trustworthy", "Compliant", "Accessible", "Ready to Serve"];

const faqs = [
  { q: "How does the 2026 Medicare moratorium make a professional website more important?", a: "With CMS implementing enrollment moratoria and increased scrutiny of home health agencies, organizations face greater pressure to demonstrate operational readiness and professionalism. A strong website signals to referral partners, patients, and regulators that your agency is established, organized, and trustworthy — which matters more than ever when credentials are being evaluated more carefully." },
  { q: "What is the most important thing a home health website should accomplish?", a: "The most important function is building trust before the first contact. Whether a visitor is a family member researching care for a loved one or a discharge planner evaluating your agency, your website should make it completely clear who you are, what you offer, where you serve, and how to reach you — in under 30 seconds." },
  { q: "How does a website support referral growth specifically?", a: "Referral sources research agencies before sending patients. When a discharge planner visits your website and finds clear service descriptions, service area information, an intake contact, and a professional design, they feel more confident adding your agency to their referral list. A poor or outdated website creates doubt — and doubt costs referrals." },
  { q: "Can a website help with caregiver recruitment?", a: "Yes. A dedicated careers section with clear job descriptions, benefits information, and an easy application process helps attract qualified caregiver applicants. Many agencies underestimate how many potential hires evaluate a company's website before deciding whether to apply." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left gap-4">
        <span className="text-sm font-semibold text-white">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {open && <div className="px-6 pb-5 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-4">{a}</div>}
    </div>
  );
}

function WhyWebsiteMattersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
        <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl px-3 py-4 shadow-lg shadow-emerald-900/40 flex flex-col items-center gap-2" title="View PDF">
          <ExternalLink className="w-4 h-4 text-white" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">View PDF</span>
        </a>
        <a href={PDF_PATH} download className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-2xl px-3 py-3 flex flex-col items-center gap-1" title="Download PDF">
          <Download className="w-4 h-4 text-white/70" />
          <span className="text-[10px] text-white/50 uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">Save</span>
        </a>
      </div>

      <main className="relative z-10 pt-20 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Playbook</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Why a Professional Website Matters <span className="text-gradient">More Than Ever</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">For Home Health Agencies</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              In today's healthcare landscape, having a professional website is no longer optional — it is a critical part of your agency's credibility, visibility, and long-term growth strategy. As competition grows and regulatory oversight increases, agencies face higher expectations from patients, referral sources, and healthcare partners. A strong digital presence has become one of the most important assets a home health agency can invest in.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate gap-2">
                <Download className="w-4 h-4" /> Download This Playbook
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Talk to SOP Support
              </Link>
            </motion.div>
          </section>

          {/* Moratorium context */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">The 2026 Context</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">The Impact of the 2026 Medicare Moratorium</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-4">With CMS implementing a nationwide temporary moratorium on new Medicare Home Health enrollments, agencies are operating in an environment where credibility and operational readiness matter more than ever. Organizations face greater scrutiny, longer approval timelines, and increased expectations regarding compliance and professionalism.</p>
              <p className="text-sm text-white/60 leading-relaxed">In this environment, a professional website serves as a powerful signal that your agency is established, trustworthy, and prepared to deliver quality care. It is one of the most visible and accessible indicators of your agency's professionalism — visible to patients, referral partners, and regulators alike.</p>
            </div>
          </section>

          {/* Six reasons */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Why It Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold">Six Reasons Every Home Health Agency Needs a Professional Website</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reasons.map((r, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-panel rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4"><r.icon className="w-5 h-5" /></div>
                  <h3 className="text-sm font-semibold mb-2">{r.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{r.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Perception strip */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12 text-center">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">In Healthcare, Perception Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">First impressions influence referrals, partnerships, recruitment, and growth</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">A professional website helps position your agency as the kind of organization people feel confident working with — before they ever speak with your team.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {perceptionSignals.map((s, i) => (
                  <div key={i} className="px-5 py-2.5 rounded-full glass-panel border border-emerald-500/20 text-sm font-semibold text-emerald-300 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5" />{s}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your <span className="text-gradient">Digital Foundation</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">A professional website is no longer simply a marketing tool — it is a foundational business asset that supports trust, visibility, compliance, and growth. Modern websites. Smarter systems. Stronger agencies.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Get Started <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors gap-2">
                    <Download className="w-4 h-4" /> Download Playbook
                  </a>
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
