import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/PageShell";
import { ProcessSection } from "@/components/ProcessSection";

import { motion } from "framer-motion";
import {
  ClipboardList, Map, PenTool, Rocket, LifeBuoy,
  CheckCircle2, ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Free Growth Audit",
    duration: "Week 1",
    desc: "Before we build anything, we look at what you have. We review your current website, local search visibility, Google Business Profile, competitor presence, and digital systems to understand exactly where your agency stands and where the biggest opportunities are.",
    details: [
      "Full website and UX review",
      "Local SEO and Google Maps audit",
      "Competitor visibility analysis",
      "Intake and referral flow assessment",
      "Recommendations and priority gaps identified",
    ],
    note: "The audit is completely free with no obligation. Most agencies discover 4 to 6 specific gaps they were not aware of.",
  },
  {
    icon: Map,
    number: "02",
    title: "Strategy & Website Plan",
    duration: "Week 1–2",
    desc: "We translate the audit findings into a clear roadmap. This includes a sitemap, page-by-page content plan, local SEO keyword strategy, and a growth system design tailored specifically to your agency's services, service areas, and goals.",
    details: [
      "Custom sitemap and page structure",
      "Local SEO keyword strategy per service area",
      "Content plan for each page",
      "Referral system and recruitment page design",
      "Timeline and milestone agreement",
    ],
    note: "You approve the plan before we write a single line of code. Nothing moves forward without your sign-off.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design & Build",
    duration: "Weeks 2–5",
    desc: "Our team builds your website and digital systems from scratch — no generic templates, no recycled designs. Every page is written and structured for your agency specifically, with your services, your service areas, and your brand at the center.",
    details: [
      "Custom website design and development",
      "Service pages, service area pages, referral page",
      "Caregiver recruitment section",
      "Contact forms, intake CTAs, referral forms",
      "Mobile optimization and performance tuning",
    ],
    note: "You review progress at each milestone. Revisions are included — we build until you are satisfied.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Launch & Optimization",
    duration: "Week 5–6",
    desc: "We don't just flip a switch and walk away. Launch week includes technical SEO setup, Google Search Console integration, local citation verification, and performance baseline tracking so we know exactly where you started and can measure what improves.",
    details: [
      "Technical SEO implementation and schema markup",
      "Google Search Console and Analytics setup",
      "Google Business Profile alignment",
      "Local citation and directory verification",
      "Speed, accessibility, and mobile final check",
    ],
    note: "Most agencies see initial search visibility improvements within 30 to 60 days of a properly launched site.",
  },
  {
    icon: LifeBuoy,
    number: "05",
    title: "Ongoing Support & Growth",
    duration: "Month 2 onward",
    desc: "The relationship does not end at launch. We stay involved — updating pages, adding service area content, adjusting strategy based on what the data shows, and supporting your agency as it grows. You get unlimited update requests and a team that knows your agency by name.",
    details: [
      "Unlimited website update requests",
      "Monthly content and SEO improvements",
      "Performance reporting and strategy reviews",
      "New page builds as your services expand",
      "Priority support for urgent updates",
    ],
    note: "Agencies that stay on our growth plan see compounding visibility improvements month over month.",
  },
];

const faqs = [
  {
    q: "How long does the full process take from audit to launch?",
    a: "Most agencies are live within 5 to 6 weeks of starting. Timelines depend on how quickly content approvals are returned — projects move faster when feedback is prompt.",
  },
  {
    q: "What do I need to provide during the build?",
    a: "We handle the heavy lifting. We ask for your agency logo, any existing content you want to keep, a list of your services and service areas, and a photo or two if available. We write the rest.",
  },
  {
    q: "Can I make changes after the website launches?",
    a: "Yes. All ongoing clients can submit unlimited update requests. New service pages, service area additions, content updates, and design tweaks are all included in your support plan.",
  },
  {
    q: "Do you work with agencies that already have a website?",
    a: "Yes. Many of our clients come with an existing website that is outdated or underperforming. We audit what you have, keep what is working, and rebuild the rest — including migrating your domain and preserving your existing SEO signals where possible.",
  },
];

export function ProcessSection() {
  return (
    <>
      {/* Timeline Steps */}
      <section id="process" className="py-16 relative" data-testid="section-process">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">

          {/* Desktop */}
          <div className="hidden lg:block space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-panel rounded-2xl p-8 grid lg:grid-cols-[200px_1fr_1fr] gap-8 items-start"
                data-testid={`step-process-${i}`}
              >
                {/* Step identity */}
                <div className="flex flex-col items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-cyan-500/15 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                    <step.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-500 tracking-widest block mb-1">{step.number}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
                    <span className="text-xs text-white/40 mt-1 block">{step.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="text-sm text-white/65 leading-relaxed mb-4">{step.desc}</p>
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                    <p className="text-xs text-emerald-300/80 leading-relaxed italic">{step.note}</p>
                  </div>
                </div>

                {/* Details */}
                <div>
                  <p className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-3">What happens in this step</p>
                  <ul className="space-y-2">
                    {step.details.map((d, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-white/65">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-5 lg:hidden">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="glass-panel rounded-2xl p-6"
                data-testid={`step-process-mobile-${i}`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <step.icon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-emerald-500 tracking-widest">{step.number} · {step.duration}</span>
                    <h3 className="text-sm font-bold text-white mt-0.5">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-4">{step.desc}</p>
                <ul className="space-y-2">
                  {step.details.map((d, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-white/55">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 p-3 rounded-lg bg-emerald-500/5 border border-emerald-500/15">
                  <p className="text-xs text-emerald-300/75 leading-relaxed italic">{step.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Don't Have to Do */}
      <section className="py-20 relative">
        <div className="max-w-[1280px] mx-auto px-6 relative z-10">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-5">
                  What You Don't Have to Do
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  We handle the technical side so you can focus on care
                </h2>
                <p className="text-sm text-white/60 leading-relaxed mb-4">
                  Most agency owners don't have time to learn web design, SEO, or automation systems — and they shouldn't have to. Running a home health, hospice, or home care agency is already a full-time job.
                </p>
                <p className="text-sm text-white/55 leading-relaxed">
                  Our process is designed to require as little of your time as possible. We ask targeted questions, handle the research and writing, and bring you in for approvals at key milestones. You stay in control without managing the details.
                </p>
              </div>
              <div className="grid gap-4">
                {[
                  { label: "You don't write the content", detail: "We research your services and service areas and write every page. You review and approve." },
                  { label: "You don't manage the technical setup", detail: "Domain, hosting, SSL, analytics, Search Console — we configure all of it." },
                  { label: "You don't chase down updates", detail: "Submit a request and it gets handled. No tickets, no waiting weeks, no extra fees." },
                  { label: "You don't start from scratch when you grow", detail: "New service areas, new programs, expanded services — we add them as your agency evolves." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/4 border border-white/8">
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

      {/* FAQ */}
      <section className="py-16 relative">
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white">Common questions about our process</h2>
            <p className="mt-3 text-sm text-white/50 max-w-xl mx-auto">Straightforward answers to what most agencies ask before getting started.</p>
          </motion.div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-panel rounded-xl p-6"
              >
                <h3 className="text-sm font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
