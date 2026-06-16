import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/playbook/clinical-documentation-qa")({
  head: () => ({
    meta: [
      { title: "Clinical Documentation QA: How Agencies Stay Audit-Ready | SOP Support" },
      { name: "description", content: "Learn how home health and clinical agencies use documentation QA processes, chart review workflows, compliance checks, and digital systems to stay audit-ready and reduce denials." },
      { property: "og:title", content: "Clinical Documentation QA: How Agencies Stay Audit-Ready | SOP Support" },
      { property: "og:url", content: "/playbook/clinical-documentation-qa" },
    ],
    links: [{ rel: "canonical", href: "/playbook/clinical-documentation-qa" }],
  }),
  component: ClinicalDocumentationQAPage,
});

const referralChecklist = [
  "Visit notes completed and signed on time",
  "Plan of care matches physician orders",
  "Diagnosis coding is accurate and supported",
  "OASIS or assessment data is consistent",
  "Medication lists are current and reconciled",
  "Skilled need is clearly documented",
  "Required signatures and dates are present",
  "Documentation supports billed services",
];

const websiteFeatures = [
  {
    title: "Structured Chart Review Processes",
    body: "Implement consistent review workflows for assessments, visit notes, care plans, and discharge documentation to identify issues before they become compliance or reimbursement risks.",
  },
  {
    title: "Documentation Compliance Checks",
    body: "Verify signatures, dates, physician orders, medical necessity, coding accuracy, and regulatory requirements through standardized QA reviews that support audit readiness.",
  },
  {
    title: "Error Detection & Resolution",
    body: "Identify incomplete documentation, inconsistencies, missing information, and potential compliance concerns early so corrections can be made before claims submission or external review.",
  },
  {
    title: "Audit-Ready Record Management",
    body: "Maintain organized, well-documented patient records with clear review histories, helping agencies respond efficiently to payer requests, surveys, and regulatory audits.",
  },
  {
    title: "Performance Reporting & Insights",
    body: "Track recurring documentation trends, compliance risks, and quality metrics to uncover improvement opportunities and strengthen agency-wide documentation standards.",
  },
  {
    title: "Continuous Staff Education",
    body: "Use QA findings to provide ongoing training, feedback, and best-practice guidance that helps clinicians improve documentation accuracy, consistency, and compliance.",
  },
];

const mistakes = [
  "Late or unsigned visit notes",
  "No standardized chart review process",
  "Plan of care not matching physician orders",
  "Inconsistent OASIS or assessment data",
  "Missing documentation of skilled need",
  "Coding errors that trigger denials",
  "No audit trail for chart edits",
  "QA findings not shared with clinicians",
  "Manual, spreadsheet-based tracking",
  "No clear ownership of the QA process",
];

const sopServices = [
  "Documentation QA workflow setup",
  "Chart review checklists",
  "Compliance tracking systems",
  "Audit trail processes",
  "Staff training programs",
  "Denial prevention reviews",
  "OASIS and coding support",
  "QA reporting dashboards",
  "Ongoing QA process support",
  "Digital documentation strategy",
];

const faqs = [
  {
    q: "What is clinical documentation QA?",
    a: "Clinical documentation QA is the process of reviewing patient charts, visit notes, and assessments to confirm they are accurate, complete, timely, and compliant with payer and regulatory requirements.",
  },
  {
    q: "Why does documentation QA matter for home health agencies?",
    a: "Strong documentation QA helps agencies avoid claim denials, pass audits more smoothly, support medical necessity for services billed, and maintain accurate patient records.",
  },
  {
    q: "What should a documentation QA process include?",
    a: "A solid QA process should include chart review checklists, timeliness tracking, coding accuracy checks, signature verification, and a feedback loop to clinicians.",
  },
  {
    q: "How often should charts be reviewed for QA?",
    a: "Many agencies review charts on an ongoing basis, with checks at key points such as start of care, recertification, and discharge, in addition to periodic random audits.",
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

function ClinicalDocumentationQAPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      
      <main className="relative z-10 pt-24 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                Clinical Documentation QA
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              How Agencies Stay{" "}
              <span className="text-gradient">Audit-Ready Every Day</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
            >
              Strong documentation is the foundation of clean claims, smooth audits, and quality care.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Clinical documentation quality assurance is more than a compliance checkbox. It is the process that protects your agency from denials, supports accurate billing, and gives clinicians a clear, defensible record of the care provided. Agencies that build a consistent QA process spend less time scrambling during audits and more time focused on patient care.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
            </motion.div>
          </section>

          {/* Why Documentation QA Matters */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                Why Documentation QA Matters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Every Chart Tells a Story to Payers and Auditors</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Clinical documentation is reviewed by payers, surveyors, and auditors long after the visit happens. When a chart is reviewed, reviewers are looking for answers:
              </p>
              <ul className="space-y-3">
                {[
                  "Does the documentation support the services billed?",
                  "Is the plan of care consistent with physician orders?",
                  "Are notes signed, dated, and submitted on time?",
                  "Is the skilled need clearly justified?",
                  "Are assessments and coding consistent across the record?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/60 leading-relaxed">
                If a chart cannot clearly answer these questions, it can lead to denials, repayment requests, or findings during a survey. A strong QA process catches these gaps before they become problems.
              </p>
            </div>
          </section>

          {/* Chart Review Checklist */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                What Reviewers Look For
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Your QA Process Should Cover These Basics</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                Payers, surveyors, and internal auditors all check for the same core elements. A reliable QA process makes sure these items are verified on every chart, every time.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {referralChecklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="glass-panel rounded-xl px-5 py-4 flex items-center gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="text-sm text-white/80">{item}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Website Features -> QA System Features */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                QA System Features
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">A Good QA Process Should Do More Than Catch Errors</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                A documentation QA system should be designed to support real outcomes — fewer denials, faster reviews, and clinicians who feel supported rather than policed.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mistakes */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">
                Common Mistakes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Puts Agencies at Risk During Audits</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Many agencies run into avoidable trouble because documentation QA is inconsistent or reactive. These issues can lead to denials and audit findings, even when the care delivered was excellent.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {mistakes.map((m, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <XCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />
                    {m}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* What SOP Support Builds */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                What SOP Support Builds
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Documentation QA Systems for Clinical Agencies</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                SOP Support helps agencies build documentation QA workflows and tracking systems designed to reduce denials, improve audit readiness, and support clinical teams.
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
                  Ready to Strengthen Your{" "}
                  <span className="text-gradient">Documentation QA Process?</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">
                  A consistent QA process protects your agency from denials, supports clean audits, and gives your clinical team clear standards to work from. SOP Support helps clinical agencies build documentation QA systems built for compliance, clarity, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Build a Documentation QA System <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
