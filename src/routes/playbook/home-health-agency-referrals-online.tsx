import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, Download, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/playbook/home-health-agency-referrals-online")({
  head: () => ({
    meta: [
      { title: "How Home Health Agencies Can Get More Referrals Online | SOP Support" },
      { name: "description", content: "Learn how home health agencies can use professional websites, referral forms, SEO visibility, and digital systems to support referral growth and capture more inquiries online." },
      { property: "og:title", content: "How Home Health Agencies Can Get More Referrals Online | SOP Support" },
      { property: "og:url", content: "/playbook/home-health-agency-referrals-online" },
    ],
    links: [{ rel: "canonical", href: "/playbook/home-health-agency-referrals-online" }],
  }),
  component: HomeHealthReferralsPage,
});

const referralChecklist = [
  "Skilled services offered",
  "Service areas covered",
  "Referral contact information",
  "Intake process clearly explained",
  "Accepted patient types or specialty programs",
  "Agency credibility and professionalism",
  "Fast ways to contact your team",
  "A simple online referral form",
];

const websiteFeatures = [
  {
    title: "Referral-Friendly Service Pages",
    body: "Provide detailed information about skilled nursing, therapy services, wound care, chronic disease management, post-hospital recovery, and specialty programs so referral partners can quickly determine patient eligibility.",
  },
  {
    title: "Secure Online Referral Forms",
    body: "Allow hospitals, physicians, discharge planners, and case managers to submit referrals online through a simple, secure, and HIPAA-conscious referral process available 24/7.",
  },
  {
    title: "Dedicated Intake Team Access",
    body: "Make it easy for referral sources to reach your intake department with direct phone numbers, email contacts, and clearly visible referral request buttons throughout the website.",
  },
  {
    title: "Fast Response & Admission Information",
    body: "Highlight your average response times, admission process, and referral turnaround expectations to help healthcare professionals make confident referral decisions.",
  },
  {
    title: "Service Area Coverage",
    body: "Clearly list the cities, counties, and communities your agency serves so referral partners can quickly verify patient eligibility based on location.",
  },
  {
    title: "Mobile-Optimized Referral Experience",
    body: "Ensure referral forms, contact options, and service information are fully accessible on mobile devices, allowing providers and families to submit referrals from anywhere.",
  },
];

const mistakes = [
  "Outdated website design",
  "No referral form",
  "No clear intake contact",
  "Confusing service descriptions",
  "Missing service areas",
  "Weak calls to action",
  "Poor mobile experience",
  "Slow loading pages",
  "Generic content that does not explain the agency clearly",
  "No clear message for referral partners",
];

const sopServices = [
  "Professional website design",
  "Clear service pages",
  "Referral form setup",
  "Local SEO structure",
  "Mobile-friendly layouts",
  "Service area content",
  "Strong calls to action",
  "Contact and intake optimization",
  "Ongoing website support",
  "Digital growth strategy",
];

const faqs = [
  {
    q: "Can a website really help a home health agency get more referrals?",
    a: "Yes. A professional website helps referral partners, patients, and families validate your agency, understand your services, and contact your team more easily.",
  },
  {
    q: "What should a home health referral page include?",
    a: "A referral page should include a simple referral form, intake contact information, service areas, accepted services, and clear instructions for submitting a referral.",
  },
  {
    q: "Do home health agencies need SEO?",
    a: "Yes. SEO helps your agency appear in relevant searches when families, patients, and referral partners are looking for care providers in your area.",
  },
  {
    q: "What makes a home health website referral-ready?",
    a: "A referral-ready website is professional, mobile-friendly, easy to navigate, clear about services, and built with strong calls to action such as 'Refer a Patient' or 'Contact Intake.'",
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

function HomeHealthReferralsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />

      {/* Floating PDF Button */}
      <a
        href={PDF_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 group"
        title="Open Playbook PDF"
      >
        <div className="bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl px-3 py-4 shadow-lg shadow-emerald-900/40 flex flex-col items-center gap-2">
          <ExternalLink className="w-4 h-4 text-white" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">
            View PDF
          </span>
        </div>
        <a
          href={PDF_URL}
          download="SOP-Support-Home-Health-Digital-Growth-Playbook.pdf"
          className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-2xl px-3 py-3 flex flex-col items-center gap-1"
          title="Download PDF"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="w-4 h-4 text-white/70" />
          <span className="text-[10px] text-white/50 uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">
            Save
          </span>
        </a>
      </a>

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
              How Home Health Agencies Can Get{" "}
              <span className="text-gradient">More Referrals Online</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
            >
              A stronger referral pipeline starts with a stronger digital presence.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Home health agencies rely heavily on referrals from hospitals, discharge planners, physicians, case managers, community partners, patients, and families. But before someone refers to your agency, they often look you up online. Your website should help your agency look professional, explain your services clearly, and make it easy for referral partners and families to contact your team.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
            </motion.div>
          </section>

          {/* Why Online Referrals Matter */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                Why Online Referrals Matter
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Referral Growth Is No Longer Only Offline</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Home health referrals are built on relationships, trust, responsiveness, and reputation. But today, your online presence plays a major role in how people evaluate your agency. When a referral partner, patient, or family member visits your website, they are looking for answers:
              </p>
              <ul className="space-y-3">
                {[
                  "Can this agency provide the services needed?",
                  "Does this agency look professional and reliable?",
                  "What areas do they serve?",
                  "How do I contact intake?",
                  "Is there a simple way to send a referral?",
                ].map((q, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold shrink-0 mt-0.5">{i + 1}</span>
                    {q}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-white/60 leading-relaxed">
                If your website does not answer these questions clearly, visitors may move on to another agency. A referral-ready website helps turn interest into action.
              </p>
            </div>
          </section>

          {/* Referral Partner Checklist */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                What Referral Partners Look For
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">Your Website Should Make Referrals Easy</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                Hospitals, physicians, discharge planners, case managers, and community partners want to work with agencies that appear organized, responsive, and easy to contact.
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

          {/* Website Features */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                Website Features
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">A Professional Website Should Do More Than Look Good</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                A home health agency website should be designed to support real business goals — help visitors understand your agency, trust your team, and take the next step.
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Holds Agencies Back Online</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                Many home health agencies lose opportunities because their website does not support referral growth. These issues can make an agency appear less professional, even if the care team is excellent.
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
              <h2 className="text-2xl md:text-3xl font-bold">Referral-Ready Websites for Home Health Agencies</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                SOP Support helps home health agencies build professional websites and digital growth systems designed to improve trust, visibility, and referral opportunities.
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
                  Ready to Capture More{" "}
                  <span className="text-gradient">Referrals Online?</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">
                  Your website should make it easier for referral partners, patients, and families to understand your agency and contact your team. SOP Support helps home health agencies create professional, referral-ready websites built for trust, clarity, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Build a Referral-Ready Website <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
