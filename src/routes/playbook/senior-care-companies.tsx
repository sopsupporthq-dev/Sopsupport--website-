import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, ChevronUp, Home, Search, TrendingUp, Users } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/industries/senior-care-companies")({
  head: () => ({
    meta: [
      { title: "Website Design & SEO for Senior Care Companies | SOP Support" },
      { name: "description", content: "SOP Support builds professional websites and local SEO systems for senior care companies. Help families find your services online and grow your senior care business." },
      { property: "og:title", content: "Website Design & SEO for Senior Care Companies | SOP Support" },
      { property: "og:url", content: "/industries/senior-care-companies" },
    ],
    links: [{ rel: "canonical", href: "/industries/senior-care-companies" }],
  }),
  component: SeniorCareCompaniesPage,
});

const searchExamples = [
  "senior care services near me",
  "in-home care for elderly near me",
  "assisted living alternatives [city]",
  "senior home care agency near me",
  "elderly care services [city]",
  "companion care for seniors",
  "personal care services for elderly",
  "senior living options near me",
];

const challenges = [
  { icon: Home, title: "Families research online extensively", body: "Adult children researching care for an aging parent spend significant time comparing options online before making contact. A professional website is your first impression." },
  { icon: Search, title: "Local search determines who wins", body: "Searches like 'senior care near me' or 'in-home care for elderly in [city]' are high-intent. Agencies without local SEO simply do not appear for these searches." },
  { icon: TrendingUp, title: "Competition is rising fast", body: "The senior care market is growing rapidly and so is the competition. A modern, SEO-optimized website is one of the most effective ways to differentiate your company." },
  { icon: Users, title: "Trust drives the decision", body: "Families choose senior care providers based on perceived professionalism and trust. Your website is often the deciding factor before a family ever makes a call." },
];

const websiteFeatures = [
  { title: "Clear Service Pages", body: "Companion care, personal care, respite care, memory care support, transportation, meal preparation, and medication reminders — each service deserves a dedicated, keyword-optimized page." },
  { title: "Local Service Area Pages", body: "Pages for each city and community you serve help your agency rank for location-specific searches. Families search by city — your site must match that intent." },
  { title: "Trust Signals Throughout", body: "Staff credentials, agency licensing, accreditation badges, caregiver training standards, and Google reviews displayed prominently help families feel confident before calling." },
  { title: "Caregiver Recruitment Pages", body: "Senior care companies constantly need quality caregivers. A dedicated careers page with clear job descriptions and an easy application process is essential." },
  { title: "Simple Contact and Inquiry Forms", body: "Families should never struggle to contact your team. Clear contact forms, click-to-call buttons, and an easy consultation request path reduce friction and increase leads." },
  { title: "Mobile-Optimized Speed", body: "Adult children researching care options are frequently on mobile devices. A fast, clean mobile experience directly impacts whether they call you or a competitor." },
];

const seoKeywords = [
  "senior care near me", "in-home care for elderly", "senior home care agency",
  "companion care for seniors", "personal care services elderly",
  "senior care company website", "elderly care digital marketing",
  "senior living SEO", "non-medical home care agency", "senior care local SEO",
];

const mistakes = [
  "Generic website template not built for senior care audiences",
  "No local service area pages — missing location-specific searches",
  "No caregiver recruitment section",
  "Missing trust signals like licensing, reviews, and accreditation",
  "Poor mobile experience for adult children researching on phones",
  "No clear inquiry or consultation request form",
  "Thin service descriptions that don't explain what you offer",
  "No Google Business Profile or outdated GBP information",
];

const sopServices = [
  "Senior care website design",
  "Local SEO and city landing pages",
  "Service page content and structure",
  "Caregiver recruitment page",
  "Google Business Profile optimization",
  "Trust signal integration",
  "Mobile-first fast-loading design",
  "Consultation request and contact forms",
  "Ongoing website support",
  "Digital growth strategy",
];

const faqs = [
  { q: "Why does a senior care company need a professional website?", a: "Families researching care for an aging parent spend significant time comparing options online. A professional website is your agency's most important trust-building tool — and often the deciding factor before a family picks up the phone." },
  { q: "What local SEO strategies work best for senior care companies?", a: "Service area pages for each city you serve, an optimized Google Business Profile, consistent contact information across directories, and location-specific service content are the most effective local SEO strategies for senior care." },
  { q: "Should a senior care website have a caregiver recruiting page?", a: "Yes. Caregiver recruitment is a constant challenge for senior care companies. A dedicated careers page with clear job descriptions and a simple application form improves both candidate quality and volume." },
  { q: "How does content marketing help senior care SEO?", a: "Educational content — guides for families on choosing home care, understanding caregiver qualifications, and managing care transitions — attracts organic traffic and positions your agency as a trusted resource." },
  { q: "How long does senior care SEO take to produce results?", a: "Most senior care companies see measurable improvements in local visibility within 60 to 90 days of a properly structured website. Ongoing content and citation building produce compounding results over 4 to 6 months." },
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

function SeniorCareCompaniesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Senior Care Companies</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Website Design & SEO for <span className="text-gradient">Senior Care Companies</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Help families find your senior care company online before they find your competitors.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Senior care companies face a growing, competitive market. Families researching care for an aging parent go online first. A professional website with strong local SEO helps your company appear in the right searches, build trust before the first call, and convert more inquiries into clients. SOP Support builds modern websites and digital growth systems specifically for care companies like yours.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
            </motion.div>
          </section>

          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">How Families Search</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Families Are Searching for Senior Care Right Now</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">Adult children and seniors search Google to compare care options before making contact. Your company needs to appear for searches like:</p>
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
              <h2 className="text-2xl md:text-3xl font-bold">Why Senior Care Companies Need a Strong Digital Presence</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold">What a High-Performing Senior Care Website Includes</h2>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Keywords Your Senior Care Website Should Rank For</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">We structure your website content around the exact terms families use when searching for senior care in your service area.</p>
              <div className="flex flex-wrap gap-2">
                {seoKeywords.map((kw, i) => <span key={i} className="px-3 py-1.5 rounded-full glass-panel text-xs text-emerald-300 border border-emerald-500/20">{kw}</span>)}
              </div>
            </div>
          </section>

          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">Common Mistakes</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Holds Senior Care Companies Back Online</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">These common problems cause senior care companies to lose families to competitors with stronger digital presences.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {mistakes.map((m, i) => <div key={i} className="flex items-start gap-3 text-sm text-white/65"><XCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />{m}</div>)}
              </div>
            </div>
          </section>

          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">How SOP Support Helps</span>
              <h2 className="text-2xl md:text-3xl font-bold">What SOP Support Builds for Senior Care Companies</h2>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your <span className="text-gradient">Senior Care Company Online?</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">SOP Support helps senior care companies build professional websites and local SEO systems that attract more families, build trust, and support long-term growth.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Build Your Senior Care Website <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
