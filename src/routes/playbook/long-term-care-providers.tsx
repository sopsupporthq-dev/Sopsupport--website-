import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, XCircle, ChevronDown, ChevronUp, Home, MapPin, Users, TrendingUp, Clock, Shield } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/industries/long-term-care-providers")({
  head: () => ({
    meta: [
      { title: "Website Design & SEO for Long-Term Care & Home-Based Care Providers | SOP Support" },
      { name: "description", content: "SOP Support builds professional websites and local SEO systems for long-term care and home-based care providers. Help families find your services online, improve local visibility, and grow census." },
      { property: "og:title", content: "Website Design & SEO for Long-Term Care & Home-Based Care Providers | SOP Support" },
      { property: "og:url", content: "/industries/long-term-care-providers" },
    ],
    links: [{ rel: "canonical", href: "/industries/long-term-care-providers" }],
  }),
  component: LongTermCareProvidersPage,
});

const searchExamples = [
  "long-term care near me",
  "home-based care services in [city]",
  "skilled nursing facility near me",
  "in-home care for elderly near me",
  "adult day care services [city]",
  "memory care at home near me",
  "personal care services long-term",
  "home care agency for chronic conditions",
  "non-medical home care near me",
  "long-term care alternatives near me",
];

const whyMatters = [
  {
    icon: Clock,
    title: "Families research for months before deciding",
    body: "Research shows families spend up to 120 days comparing long-term care options online before making a decision. Your website must be visible and compelling throughout that entire research window.",
  },
  {
    icon: MapPin,
    title: "Local search drives nearly all inquiries",
    body: "Long-term care selection happens within a tight geographic radius. Searches like 'long-term care near me' and 'home care [city]' dominate inquiry sources. Without local SEO, you simply don't appear.",
  },
  {
    icon: Users,
    title: "Adult children are your primary audience",
    body: "Adult children — not the care recipients themselves — conduct most of the research. Your website must speak to their concerns: safety, reliability, cost transparency, and quality of care.",
  },
  {
    icon: TrendingUp,
    title: "Competition is intensifying every year",
    body: "The long-term care market is growing rapidly and digital competition is rising with it. Organic search leads all marketing channels for care providers by a wide margin in 2026.",
  },
  {
    icon: Shield,
    title: "Trust must be established before the first call",
    body: "Long-term care is a high-stakes, emotional decision. Families evaluate your agency's professionalism, credibility, and care standards from your website before they ever contact your team.",
  },
  {
    icon: Home,
    title: "Home-based care alternatives are surging",
    body: "More families are choosing home-based long-term care over facility placement. Providers who are visible online with clear messaging about home-based options are capturing this growing demand.",
  },
];

const websiteFeatures = [
  {
    title: "Service-Specific Pages for Every Care Level",
    body: "Personal care, companion care, skilled nursing support, memory care assistance, chronic disease management, post-hospitalization care, respite care, and adult day programs — each deserves a dedicated page optimized for the specific searches families use.",
  },
  {
    title: "Local Service Area Pages",
    body: "Pages for every city, county, and community you serve. Families search by location — 'long-term home care in [city]' or 'in-home care [zip code]'. Location-specific pages are the foundation of local SEO for care providers.",
  },
  {
    title: "Family-Focused Trust Content",
    body: "Guides answering the real questions adult children ask — what long-term home care includes, how to know when a loved one needs more support, how to compare care providers, and what to expect from the onboarding process.",
  },
  {
    title: "Google Business Profile Optimization",
    body: "Your GBP is often the first result families see. Accurate categories, updated service areas, photos, and actively managed reviews dramatically improve map pack visibility for local searches.",
  },
  {
    title: "Caregiver Recruitment Section",
    body: "Long-term care providers need a steady pipeline of quality caregivers. A dedicated careers page with clear job descriptions and a simple application process improves both applicant quality and volume.",
  },
  {
    title: "Clear Intake and Contact Pathways",
    body: "Families should never have to search for how to contact your team. Click-to-call buttons, consultation request forms, and live chat options reduce friction and increase the likelihood a visitor becomes a client.",
  },
];

const seoKeywords = [
  "long-term care near me",
  "home-based care services",
  "in-home long-term care",
  "home care for chronic conditions",
  "personal care services elderly",
  "non-medical home care agency",
  "long-term care alternatives",
  "adult day care services",
  "memory care at home",
  "long-term care website design",
  "home care local SEO",
  "home-based care digital marketing",
];

const mistakes = [
  "No dedicated pages for each level of care — one generic services page does not rank",
  "No local service area pages — missing every location-specific search",
  "Website messaging aimed at care recipients instead of adult child decision-makers",
  "No Google Business Profile or an unoptimized GBP with missing service areas",
  "Thin content that doesn't answer the questions families are actually researching",
  "No caregiver recruitment section — missing a high-traffic search segment",
  "No clear contact path — families leave when they can't easily reach you",
  "Outdated mobile experience — most families research on smartphones",
  "No trust signals like certifications, licensing, or staff qualifications",
  "Generic template design that looks identical to every other care agency online",
];

const sopServices = [
  "Long-term and home-based care website design",
  "Service-specific pages for each care level",
  "Local SEO and service area pages",
  "Family-focused trust content",
  "Google Business Profile optimization",
  "Caregiver recruitment page",
  "Contact and consultation request forms",
  "Mobile-first fast-loading design",
  "Ongoing website support",
  "Digital growth strategy",
];

const faqs = [
  {
    q: "What is the difference between long-term care SEO and home health SEO?",
    a: "Long-term care SEO targets families searching for ongoing personal care, companionship, and chronic condition support at home or in community settings. Home health SEO targets medically supervised services like skilled nursing and therapy. The keyword sets, content requirements, and decision-making timelines differ — and providers offering both need separate, clearly differentiated pages for each.",
  },
  {
    q: "How long does it take for a long-term care provider to rank in local search?",
    a: "Most long-term care providers see meaningful improvements in local visibility within 60 to 90 days of a properly structured website launch. A combination of service area pages, Google Business Profile optimization, and consistent local citations produces compounding results over 4 to 6 months.",
  },
  {
    q: "Should a long-term care website have separate pages for each city it serves?",
    a: "Yes. Service area pages for each city and community are one of the most effective local SEO strategies for care providers. Families search by location, and Google ranks pages with specific location content above generic service pages for those searches.",
  },
  {
    q: "How do I attract adult children who are researching long-term care options for a parent?",
    a: "Educational content that answers real research questions — how to evaluate a care agency, what to expect from home-based long-term care, how to discuss care with an aging parent — builds trust with adult children during the research phase and positions your agency as a credible choice before they ever make contact.",
  },
  {
    q: "Can SOP Support build websites for providers offering both in-home and community-based long-term care?",
    a: "Yes. We build websites for providers across the full spectrum of long-term and home-based care — personal care, companion care, adult day programs, chronic care support, respite care, and more. Each service level gets its own properly structured page.",
  },
  {
    q: "Does a care agency website need a caregiver recruitment section?",
    a: "Absolutely. Caregiver recruitment is a persistent challenge across the long-term care industry. A dedicated careers page with clear role descriptions, benefit highlights, and an easy application form improves both applicant volume and quality — and also ranks for caregiver job searches in your area.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel rounded-xl border border-white/10 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
      >
        <span className="text-sm font-semibold text-white">{q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-emerald-400 shrink-0" />
          : <ChevronDown className="w-4 h-4 text-white/40 shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-4 text-sm text-white/60 leading-relaxed border-t border-white/5 pt-3">{a}</div>
      )}
    </div>
  );
}

function LongTermCareProvidersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />

      <main className="relative z-10 pt-32 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">

          {/* Hero */}
          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                Long-Term Care & Home-Based Care
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6"
            >
              Website Design & SEO for{" "}
              <span className="text-gradient">Long-Term Care & Home-Based Care Providers</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4"
            >
              Help families find your long-term care services online — before they find your competitors.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              Long-term care decisions often begin with online research. A professional website and strong local SEO help families find, trust, and contact your organization. SOP Support builds modern websites and digital growth systems designed specifically for care providers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
            </motion.div>
          </section>

          {/* How Families Search */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                How Families Search
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Families Are Searching for Long-Term Care Right Now
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Adult children and seniors research care options online for weeks or months before making contact. Your organization needs to appear consistently for searches like:
              </p>
              <div className="grid sm:grid-cols-2 gap-3 mb-6">
                {searchExamples.map((ex, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl px-4 py-3"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span className="text-sm text-white/70 italic">"{ex}"</span>
                  </div>
                ))}
              </div>
              <p className="text-white/55 text-sm leading-relaxed">
                Organic search leads all marketing channels for long-term and home-based care providers. If your organization does not appear in these searches, families are choosing competitors who do.
              </p>
            </div>
          </section>

          {/* Why It Matters */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                Why It Matters
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                Why Long-Term Care Providers Need a Strong Digital Presence
              </h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                The decision to seek long-term care is one of the most significant a family will make. Your digital presence must support that decision at every stage — from first search to first contact.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyMatters.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{item.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{item.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Website Features */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                What We Build
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                What a High-Performing Long-Term Care Website Includes
              </h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                Every element is designed to improve visibility in local search, build trust with families during the research phase, and make it easy to take the next step.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {websiteFeatures.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-panel rounded-2xl p-6"
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-xs font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="text-sm font-semibold mb-2">{f.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{f.body}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SEO Keywords */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-5">
                SEO Strategy
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Keywords Your Long-Term Care Website Should Rank For
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-6">
                We structure your website content around the exact terms families use when searching for long-term and home-based care in your service area — from broad discovery searches to high-intent local queries.
              </p>
              <div className="flex flex-wrap gap-2">
                {seoKeywords.map((kw, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-full glass-panel text-xs text-emerald-300 border border-emerald-500/20"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Common Mistakes */}
          <section className="max-w-4xl mx-auto mb-24">
            <div className="glass-panel rounded-3xl p-8 md:p-12 border border-amber-400/10">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-5">
                Common Mistakes
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                What Holds Long-Term Care Providers Back Online
              </h2>
              <p className="text-white/55 text-sm leading-relaxed mb-8">
                These common website problems cause long-term care providers to lose families to competitors with stronger digital presences — often without ever knowing it happened.
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

          {/* SOP Services */}
          <section className="max-w-5xl mx-auto mb-24">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
                How SOP Support Helps
              </span>
              <h2 className="text-2xl md:text-3xl font-bold">
                What SOP Support Builds for Long-Term Care Providers
              </h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
                We build more than a website. We build a complete digital foundation — structured for search, designed for trust, and optimized for the families and referral partners who need to find you.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {sopServices.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
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
              <p className="mt-3 text-white/55 text-sm max-w-xl mx-auto">Everything long-term care providers ask about websites, local SEO, and digital growth.</p>
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
                  Ready to Grow Your{" "}
                  <span className="text-gradient">Long-Term Care Organization Online?</span>
                </h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">
                  SOP Support helps long-term care and home-based care providers build professional websites and local SEO systems that attract more families, build trust during the research phase, and support sustainable census growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate"
                  >
                    Build Your Long-Term Care Website
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors"
                  >
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
