import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, CheckCircle2, AlertTriangle, ChevronDown, ChevronUp, Shield, FileText, Eye, Clock } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/resources/cms-enrollment-moratoria")({
  head: () => ({
    meta: [
      { title: "CMS Provider Enrollment Moratoria — What Agencies Need to Know | SOP Support" },
      { name: "description", content: "Understand how CMS enrollment moratoria work, which agencies are affected, and what steps to take to stay compliant and prepared in 2026." },
    ],
    links: [{ rel: "canonical", href: "/resources/cms-enrollment-moratoria" }],
  }),
  component: CMSMoratoriaPage,
});

const PDF_PATH = "/pdfs/cms-enrollment-moratoria.pdf";

const whyMatters = [
  { icon: Shield, title: "Combating Fraud, Waste, and Abuse", body: "Enrollment moratoria are primarily used as a preventive measure against fraudulent enrollment activities. CMS analyzes risk indicators and historical trends to identify areas where additional safeguards are necessary." },
  { icon: Eye, title: "Protecting Program Integrity", body: "By limiting enrollment activity in high-risk locations, CMS strengthens the integrity of Medicare programs and ensures resources are directed toward qualified providers delivering legitimate patient care." },
  { icon: FileText, title: "Focusing on High-Risk Areas", body: "Moratoria are not applied nationwide. CMS targets specific geographic areas and provider categories based on risk assessments, payment irregularities, and patterns identified through data analysis." },
  { icon: Clock, title: "Temporary by Design", body: "Enrollment moratoria are reviewed periodically and may be lifted, modified, or extended depending on ongoing risk evaluations and the effectiveness of implemented safeguards." },
];

const impactedActions = [
  "New Medicare enrollments for affected provider types",
  "Changes of ownership in moratorium regions",
  "Revalidations in specific impacted circumstances",
  "Certain provider and supplier applications in designated areas",
];

const agencySteps = [
  { title: "Verify Eligibility Before Applying", body: "Always confirm enrollment eligibility through CMS and PECOS before beginning any application process. Submitting during an active moratorium can result in automatic denial and wasted resources." },
  { title: "Monitor CMS Updates Consistently", body: "CMS periodically publishes updates regarding active moratoria, affected regions, and provider categories. Staying informed helps agencies plan effectively and avoid unexpected delays." },
  { title: "Maintain Accurate Documentation", body: "Ensure all enrollment records, licenses, certifications, and supporting documentation remain current, complete, and accurate. Clean documentation speeds up the process when moratoria are lifted." },
  { title: "Seek Expert Guidance", body: "Navigating CMS enrollment requirements can be complex. Working with experienced compliance and enrollment professionals reduces risk and improves application outcomes." },
];

const faqs = [
  { q: "Are enrollment moratoria permanent?", a: "No. Moratoria are temporary by design and are reviewed periodically. CMS may lift, modify, or extend them based on ongoing risk evaluations. Agencies should monitor CMS announcements regularly for updates." },
  { q: "How do I know if my agency is in a moratorium area?", a: "CMS publishes lists of affected provider types and geographic regions in the Federal Register and on the CMS website. You can also check PECOS or work with a compliance professional to verify your status." },
  { q: "Can I still submit enrollment applications during a moratorium?", a: "In most cases, applications for affected provider types in moratorium regions will be denied or held. Some exceptions may apply depending on the nature of the enrollment action. Always verify before submitting." },
  { q: "How does a moratorium affect an existing agency?", a: "Existing enrolled agencies with active Medicare billing privileges are generally not affected by moratoria. The restrictions primarily impact new enrollments, changes of ownership, and certain revalidation scenarios in affected areas." },
  { q: "What should an agency do while a moratorium is active?", a: "Use the time to ensure your documentation is complete, your licenses are current, your systems are compliant, and your website accurately represents your services. Agencies that are organized and prepared move faster when moratoria are lifted." },
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

function CMSMoratoriaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />

      {/* Floating PDF buttons */}
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
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-cyan-300 border border-cyan-500/30">Guide</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              CMS Provider Enrollment <span className="text-gradient">Moratoria</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
              What It Is, Why It Matters, and What Agencies Need to Know
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Healthcare agencies operating within the Medicare ecosystem face a constantly evolving regulatory environment. Understanding how CMS enrollment moratoria work can help agencies avoid costly delays, maintain compliance, and make informed decisions when planning growth or expansion.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                <Download className="w-4 h-4 mr-2" /> Download This Guide
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Talk to SOP Support
              </Link>
            </motion.div>
          </section>

          {/* What are moratoria */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">What Are Enrollment Moratoria?</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Understanding CMS Enrollment Moratoria</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                To protect the Medicare program from fraud, waste, and abuse, CMS may implement temporary enrollment moratoria for specific provider and supplier types in designated geographic regions. These are targeted measures designed to limit new enrollments in areas identified as having elevated risks of fraudulent activity.
              </p>
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                In 2026, CMS extended enrollment moratoria affecting selected provider and supplier categories in specific regions through December 31, 2026. By restricting certain enrollment activities, CMS aims to safeguard Medicare resources while ensuring beneficiaries continue receiving care from legitimate providers.
              </p>
              <div className="p-5 rounded-2xl bg-amber-400/5 border border-amber-400/20 flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-sm text-amber-200/80 leading-relaxed">
                  <strong className="text-amber-300">Important:</strong> Before submitting any enrollment-related request, agencies should verify whether a moratorium applies to their specific provider type and geographic region.
                </p>
              </div>
            </div>
          </section>

          {/* Why moratoria exist */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Why Moratoria Exist</span>
              <h2 className="text-2xl md:text-3xl font-bold">Four Reasons CMS Uses Enrollment Moratoria</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {whyMatters.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} className="glass-panel rounded-2xl p-6">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Impact on agencies */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">How Moratoria Impact Agencies</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Enrollment Actions That May Be Restricted</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-7">
                If your provider type or service area falls within an affected region, certain enrollment actions may be restricted. Understanding which actions are affected helps agencies avoid wasted time and resources.
              </p>
              <div className="space-y-3">
                {impactedActions.map((action, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-amber-400/5 border border-amber-400/10">
                    <AlertTriangle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                    <span className="text-sm text-white/70">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What agencies should do */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">What Agencies Should Do</span>
              <h2 className="text-2xl md:text-3xl font-bold">Four Steps to Stay Compliant and Prepared</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">Agencies that are proactive about compliance are better positioned for sustainable growth when moratoria are lifted.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {agencySteps.map((step, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }} className="glass-panel rounded-2xl p-6">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-sm font-bold mb-4">{i + 1}</div>
                  <h3 className="text-sm font-semibold mb-2">{step.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{step.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Staying ahead */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">Staying Ahead</span>
                  <h2 className="text-2xl font-bold mb-4">Proactive Compliance Drives Long-Term Growth</h2>
                  <p className="text-sm text-white/60 leading-relaxed">
                    Healthcare regulations continue to evolve, making proactive compliance more important than ever. Agencies that stay informed, maintain accurate documentation, and regularly monitor CMS announcements are better positioned for sustainable growth and long-term success.
                  </p>
                </div>
                <div className="space-y-3">
                  {["Stay current with CMS Federal Register announcements", "Maintain complete enrollment documentation at all times", "Monitor PECOS for eligibility status regularly", "Build compliance into your agency's operational calendar", "Work with enrollment professionals for complex situations"].map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm text-white/65">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2>
              <p className="mt-3 text-white/50 text-sm max-w-xl mx-auto">Common questions about CMS enrollment moratoria from home health and hospice agencies.</p>
            </div>
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Build a <span className="text-gradient">Compliance-Ready Digital Foundation</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">SOP Support helps care agencies build professional websites and digital growth systems designed to support compliance, operational credibility, and long-term growth.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Talk to SOP Support <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors gap-2">
                    <Download className="w-4 h-4" /> Download Guide
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
