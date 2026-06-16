import { motion } from "framer-motion";
import {
  ShieldCheck, TrendingUp, MapPin, UserCog,
  Clock, Handshake, ArrowRight, Star,
} from "lucide-react";

const outcomes = [
  {
    icon: ShieldCheck,
    tag: "Credibility",
    headline: "Referral partners trust your agency before the first call",
    desc: "First impressions happen online. When a hospital discharge planner, physician office, or case manager looks up your agency, your website is what they see first. A modern, well-structured site signals that your agency is organized, professional, and worth referring to. We build websites that communicate credibility clearly — through design, messaging, and the details that matter to the people evaluating you.",
    stat: "Trust is built before contact",
  },
  {
    icon: TrendingUp,
    tag: "Inquiries",
    headline: "More qualified families and patients take action",
    desc: "Traffic without conversions means nothing. We design every page with a clear purpose — guiding visitors toward a phone call, a form submission, or a consultation request. Strong calls to action, clear service explanations, and friction-free contact paths turn website visitors into real inquiries. The difference between a basic website and a conversion-focused one is measurable in the number of calls your intake team receives.",
    stat: "More inquiries, less friction",
  },
  {
    icon: MapPin,
    tag: "Visibility",
    headline: "Your agency shows up when families search locally",
    desc: "Most care decisions start with a Google search. If your agency does not appear in the results for your city, county, or community — you are invisible to the families who need you most. We build local SEO foundations into every website: service area pages, optimized content, Google Business Profile alignment, and structured data that helps search engines understand exactly where you operate and what you offer.",
    stat: "Found in local searches",
  },
  {
    icon: UserCog,
    tag: "Recruitment",
    headline: "Quality caregiver applicants find you online",
    desc: "Caregiver recruitment is one of the biggest operational challenges in home health and hospice. Most agencies either have no careers section or one buried so deep that applicants give up. We build dedicated recruitment pages that rank for caregiver job searches in your area, explain what makes your agency a great place to work, and make the application process as simple as possible. More applicants means more choice — and better care for your clients.",
    stat: "Better applicant pipeline",
  },
  {
    icon: Clock,
    tag: "Efficiency",
    headline: "Your team spends less time on repetitive admin tasks",
    desc: "Intake coordination, referral follow-up, caregiver onboarding reminders, review requests — these are tasks your team handles manually every week. We implement automation workflows that handle the predictable parts of your operations digitally. That means fewer dropped leads, faster response times, and a team that can focus on delivering care instead of chasing paperwork.",
    stat: "Less admin, more care",
  },
  {
    icon: Handshake,
    tag: "Referrals",
    headline: "Referral partners send more patients consistently",
    desc: "A referral relationship only grows when partners feel confident your agency will deliver. Your online presence is part of that confidence. When a discharge planner checks your website and sees a professional, detailed, easy-to-navigate experience — complete with a referral form, clear intake contact, and service area information — they are more likely to add you to their regular referral list. We make sure your digital presence supports every referral relationship you build.",
    stat: "Stronger referral relationships",
  },
];

const differentiators = [
  { label: "Built exclusively for care agencies", sub: "We don't work with restaurants, law firms, or e-commerce. Every system we build is designed around the care industry." },
  { label: "One connected growth system", sub: "Website, SEO, referral forms, recruitment pages, and automation — all built to work together, not as separate disconnected pieces." },
  { label: "Ongoing support included", sub: "We don't build and disappear. Every client gets continued access to updates, improvements, and strategy support." },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const cardVariant = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function ResultsSection() {
  return (
    <>
      {/* Outcome Cards */}
      <section id="results" className="py-16 relative" data-testid="section-results">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {outcomes.map((item, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(16,185,129,0.10)" }}
                className="glass-panel rounded-2xl p-7 border-white/10 group transition-all duration-300 flex flex-col"
                data-testid={`card-result-${i}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-xs font-semibold text-emerald-400/70 uppercase tracking-widest mt-1">{item.tag}</span>
                </div>
                <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.headline}</h3>
                <p className="text-sm text-white/55 leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-5 pt-4 border-t border-white/8 flex items-center gap-2">
                  <Star className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                  <span className="text-xs text-emerald-400/80 font-medium">{item.stat}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">
              Why SOP Support
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              A system built around your agency,{" "}
              <span className="text-gradient">not a template built for everyone</span>
            </h2>
            <p className="mt-4 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">
              Most website agencies treat care agencies like any other client. We don't. Every decision we make — from page structure to content strategy — is informed by how home health, hospice, and home care agencies actually operate and grow.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-7"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 text-sm font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{d.label}</h3>
                <p className="text-xs text-white/55 leading-relaxed">{d.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect strip */}
      <section className="py-16 relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                  What to Expect
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Real outcomes, not just a new website
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-6">
                  A new website on its own does not grow an agency. What grows an agency is a website built with the right structure, content, and systems — connected to your intake workflow, your referral relationships, and your local search presence. That is what we build.
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Every project we deliver is measured against a simple question: does this make it easier for referral partners, families, and caregivers to find your agency, understand what you offer, and take the next step? If the answer is yes, we ship it. If not, we keep building.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Referral partners find a website that validates your agency", detail: "Clear services, intake contact, referral form, service areas — everything a discharge planner needs." },
                  { label: "Families find answers before they call", detail: "Service explanations, coverage information, and a clear contact path reduce uncertainty and friction." },
                  { label: "Google finds your agency for local searches", detail: "Structured content, service area pages, and technical SEO help your agency appear where families are searching." },
                  { label: "Caregivers find a reason to apply", detail: "A dedicated careers section with clear role expectations and an easy application process improves applicant flow." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/4 border border-white/8">
                    <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-white mb-1">{item.label}</p>
                      <p className="text-xs text-white/50 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
