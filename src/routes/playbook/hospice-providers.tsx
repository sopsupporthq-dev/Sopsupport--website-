import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, ChevronUp, Heart, MapPin, Users, Star, Shield, Phone } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/playbook/hospice-providers")({
  head: () => ({
    meta: [
      { title: "Website Design & Digital Marketing for Hospice Providers | SOP Support" },
      { name: "description", content: "SOP Support builds professional websites and local SEO systems for hospice providers. Help families and referral sources find your hospice agency online and increase admissions." },
      { property: "og:title", content: "Website Design & Digital Marketing for Hospice Providers | SOP Support" },
      { property: "og:url", content: "/playbook/hospice-providers" },
    ],
    links: [{ rel: "canonical", href: "/playbook/hospice-providers" }],
  }),
  component: HospiceProvidersPage,
});

const searchExamples = [
  "hospice care near me",
  "hospice services in [city]",
  "palliative care agency near me",
  "end-of-life care providers",
  "Medicare hospice agency in [city]",
  "home hospice services near me",
  "hospice care for cancer patients",
  "inpatient hospice facility near me",
];

const challenges = [
  { icon: Heart, title: "Families search online first", body: "When a family is making an end-of-life care decision, they almost always search online before calling. If your hospice does not appear, they will choose a competitor who does." },
  { icon: MapPin, title: "Local visibility is critical", body: "Hospice care is inherently local. Families search by city, county, and zip code. Without local SEO, your agency is invisible to the people searching in your service area." },
  { icon: Users, title: "Referral sources validate online", body: "Hospital discharge planners, physicians, and case managers look up your agency online before sending a patient. A weak website erodes confidence before you ever speak." },
  { icon: Shield, title: "Trust must be built before contact", body: "Hospice is a deeply personal choice. Your website must communicate compassion, professionalism, and credibility — before a family ever picks up the phone." },
];

const websiteFeatures = [
  { title: "Compassion-First Messaging", body: "Your website should speak directly to families facing one of the hardest decisions of their lives. Clear, warm, and professional language builds trust before the first call." },
  { title: "Service Area Pages", body: "Dedicated pages for each city, county, and community you serve. These pages help your hospice appear in local searches and signal relevance to Google." },
  { title: "Referral Pathway Pages", body: "Physicians, hospital teams, and discharge planners need to understand your intake process quickly. A dedicated referral page with a simple form removes friction from the referral process." },
  { title: "Services Explained Clearly", body: "Families often do not know what hospice includes. Your website should explain routine care, continuous care, respite care, bereavement support, and what Medicare covers — in plain language." },
  { title: "Google Business Profile Optimization", body: "Your GBP is often the first thing families see. Accurate categories, photos, hours, and service areas dramatically improve local visibility and map pack rankings." },
  { title: "Mobile-First Design", body: "Families researching hospice options are often on a phone in a hospital waiting room. Your site must load fast and work perfectly on mobile — every time." },
];

const seoKeywords = [
  "hospice care near me", "hospice services [city]", "Medicare hospice agency",
  "palliative care providers", "end-of-life care agency", "hospice referral",
  "home hospice care", "hospice admission process", "hospice website design",
  "hospice digital marketing",
];

const mistakes = [
  "Outdated or generic website design that does not reflect compassionate care",
  "No service area pages — invisible in local searches",
  "No referral form or clear intake pathway",
  "Missing explanation of what hospice care includes",
  "No mobile-friendly experience",
  "Weak or missing Google Business Profile",
  "No clear call to action for families or referral partners",
  "Slow-loading pages that frustrate urgent visitors",
];

const sopServices = [
  "Professional hospice website design",
  "Local SEO and service area pages",
  "Referral form and intake optimization",
  "Google Business Profile setup",
  "Compassionate brand messaging",
  "Mobile-friendly fast-loading design",
  "Bereavement and service page content",
  "Ongoing website support",
];

const faqs = [
  { q: "Why do hospice providers need a professional website?", a: "Families and referral sources validate your agency online before making contact. A professional website builds trust, explains your services, and makes it easy to start the conversation — even during the most difficult moments." },
  { q: "What pages should a hospice website include?", a: "Essential pages include services, service areas, the referral or admission process, what to expect from hospice care, insurance and Medicare information, a contact page, and a dedicated referral form." },
  { q: "How does local SEO help hospice providers?", a: "Local SEO helps your hospice appear when families search for care in your area. Optimized service area pages, Google Business Profile, and location-specific content all improve your visibility in local search results." },
  { q: "How long does it take to see results from hospice SEO?", a: "Most hospice providers see meaningful improvements in local visibility within 60 to 90 days of a properly structured website and SEO foundation. Consistent content and local citations continue building results over time." },
  { q: "Can SOP Support build websites for both home hospice and inpatient hospice?", a: "Yes. We build websites for hospice providers of all types — home-based hospice, inpatient facilities, and organizations offering both levels of care." },
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

function HospiceProvidersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Hospice Providers</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Website Design & Digital Marketing for <span className="text-gradient">Hospice Providers</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
              Help families and referral sources find your hospice agency when it matters most.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Hospice providers serve families at the most sensitive moments of their lives. Your website must communicate compassion, professionalism, and clarity — while also helping your agency appear in local searches and referral partner evaluations. SOP Support builds professional websites and local SEO systems exclusively for care agencies including hospice providers.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
            </motion.div>
          </section>

          {/* Search Examples */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">How Families Search</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Families Are Searching for Hospice Care Right Now</h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">When a family needs hospice services, they turn to Google. Your hospice agency needs to appear when they search terms like:</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {searchExamples.map((ex, i) => (
                  <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-sm text-white/70 italic">"{ex}"</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-white/55 text-sm leading-relaxed">If your hospice website is not optimized for these searches, families are finding your competitors instead.</p>
            </div>
          </section>

          {/* Challenges */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">Why It Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold">Why Hospice Providers Need a Strong Digital Presence</h2>
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

          {/* Website Features */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">What We Build</span>
              <h2 className="text-2xl md:text-3xl font-bold">What a High-Performing Hospice Website Includes</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">Every element is designed to build trust, improve local visibility, and make it easy for families and referral sources to take the next step.</p>
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

          {/* SEO Keywords */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">SEO Strategy</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Keywords Your Hospice Website Should Rank For</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">We build your website content around the exact terms families and referral partners use when searching for hospice care in your area.</p>
              <div className="flex flex-wrap gap-2">
                {seoKeywords.map((kw, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-full glass-panel text-xs text-emerald-300 border border-emerald-500/20">{kw}</span>
                ))}
              </div>
            </div>
          </section>

          {/* Mistakes */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">Common Mistakes</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">What Holds Hospice Agencies Back Online</h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">These common website problems cause hospice providers to lose families and referrals to competitors with stronger digital presences.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {mistakes.map((m, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-white/65">
                    <XCircle className="w-4 h-4 text-amber-400/70 shrink-0 mt-0.5" />{m}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SOP Services */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">How SOP Support Helps</span>
              <h2 className="text-2xl md:text-3xl font-bold">What SOP Support Builds for Hospice Providers</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm">We understand that hospice providers need more than a website — they need a digital presence that builds trust, improves visibility, and supports admissions growth.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {sopServices.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="glass-panel rounded-xl px-4 py-3 flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-xs text-white/75">{s}</span>
                </motion.div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="max-w-3xl mx-auto mb-24">
            <div className="text-center mb-10"><h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2></div>
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </section>

          {/* CTA */}
          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build a Website Your <span className="text-gradient">Hospice Agency Can Grow With?</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">SOP Support helps hospice providers create professional, compassionate websites built for trust, local visibility, and admissions growth.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Build Your Hospice Website <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
