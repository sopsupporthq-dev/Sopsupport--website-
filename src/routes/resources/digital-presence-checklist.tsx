import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/resources/digital-presence-checklist")({
  head: () => ({
    meta: [
      { title: "Home Health Agency Digital Presence Checklist | SOP Support" },
      { name: "description", content: "A complete checklist of the digital presence components every home health agency should have — from website design and SEO to Google Business Profile and reputation management." },
    ],
    links: [{ rel: "canonical", href: "/resources/digital-presence-checklist" }],
  }),
  component: DigitalPresenceChecklistPage,
});

const PDF_PATH = "/pdfs/digital-presence-checklist.pdf";

const checklistItems = [
  {
    title: "Professional Website",
    desc: "Your website serves as the foundation of your digital presence. It should clearly communicate who you are, what services you provide, and how to contact your team. Essential pages include an agency overview, mission and values, services, service areas, contact information, referral information, career opportunities, FAQs, and compliance or accreditation details.",
    importance: "High",
  },
  {
    title: "Mobile-Friendly Design",
    desc: "Most healthcare-related searches now occur on mobile devices. Your website should load quickly, display properly on all screen sizes, feature easy-to-read text, simple navigation, and click-to-call functionality. A poor mobile experience can cause visitors to leave before contacting your agency — and choose a competitor instead.",
    importance: "High",
  },
  {
    title: "Clear Contact Information",
    desc: "Contact information should be clearly visible throughout the website — not buried on a single contact page. Include your primary phone number, email address, office address, service area coverage, contact forms, and referral inquiry options. The easier it is to contact your agency, the more likely prospective clients and referral partners are to engage.",
    importance: "High",
  },
  {
    title: "Google Business Profile",
    desc: "A Google Business Profile is one of the most important local visibility tools available. When people search for home health services in their area, agencies with optimized profiles are more likely to appear in local search results. Ensure your profile includes accurate business information, current phone numbers, office hours, website link, photos, service descriptions, and reviews.",
    importance: "High",
  },
  {
    title: "Search Engine Optimization (SEO)",
    desc: "SEO helps your agency appear in search results when prospective patients are actively looking for care services. Basic SEO practices include service-specific pages, location-specific content, optimized page titles, fast website performance, mobile responsiveness, and high-quality educational content. Strong SEO can increase organic traffic and generate consistent inquiries over time.",
    importance: "High",
  },
  {
    title: "Patient and Family Education Content",
    desc: "Providing educational content demonstrates expertise and builds trust with prospective clients. Useful content may include home health care guides, post-hospital recovery information, caregiver resources, Medicare education, frequently asked questions, and healthcare tips. Educational resources position your agency as a knowledgeable and trusted provider.",
    importance: "Medium",
  },
  {
    title: "Professional Branding",
    desc: "Consistent branding creates a stronger and more memorable impression. Your digital presence should maintain consistency across your website, social media profiles, marketing materials, email communications, and business listings. Consistent branding helps establish recognition and professionalism throughout your service area.",
    importance: "Medium",
  },
  {
    title: "Online Reviews and Reputation Management",
    desc: "Online reviews play a significant role in healthcare decision-making. Families often evaluate providers based on public feedback before making contact. Best practices include monitoring reviews regularly, encouraging satisfied clients to leave feedback, responding professionally to all reviews, and addressing concerns promptly to maintain a positive online reputation.",
    importance: "High",
  },
  {
    title: "Social Media Presence",
    desc: "While social media should not replace a professional website, it can support community engagement and brand awareness. Platforms can be used to share agency updates, educational content, community involvement, recruitment opportunities, and healthcare awareness initiatives. The goal is to maintain a consistent and professional presence that reflects your agency's values.",
    importance: "Medium",
  },
  {
    title: "Career and Recruitment Section",
    desc: "Recruiting qualified caregivers, nurses, and healthcare professionals remains a major challenge across the industry. Your digital presence should support hiring efforts through a dedicated careers page, job postings, employee testimonials, benefits information, and an easy application process. A strong recruitment section can improve workforce development and staffing success.",
    importance: "High",
  },
  {
    title: "Professional Business Email",
    desc: "Using domain-based email addresses reinforces credibility. Instead of generic email services, agencies should use addresses like info@youragency.com, referrals@youragency.com, and careers@youragency.com. Professional email communication builds trust with patients, referral partners, and healthcare organizations in ways that generic addresses cannot.",
    importance: "Medium",
  },
  {
    title: "Compliance and Trust Signals",
    desc: "Displaying appropriate trust indicators helps reinforce confidence among visitors. Consider including licensing information, accreditation details, HIPAA-related statements, privacy policies, terms of use, and professional memberships. These elements demonstrate operational legitimacy and accountability — especially important for referral sources evaluating your agency.",
    importance: "High",
  },
  {
    title: "Regular Website Maintenance",
    desc: "An outdated website can create negative perceptions. Regular maintenance should include content updates, security patches, broken link checks, contact information verification, and performance monitoring. Maintaining an up-to-date website ensures visitors receive accurate information and a positive user experience every time they visit.",
    importance: "Medium",
  },
];

const importanceColors: Record<string, string> = {
  High: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  Medium: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

const faqs = [
  { q: "Which checklist items should a home health agency prioritize first?", a: "The highest-impact items are a professional website, mobile-friendly design, Google Business Profile, clear contact information, and SEO. These form the foundation of local visibility and trust. Once these are in place, reputation management, education content, and a careers section provide the next biggest returns." },
  { q: "How often should a home health agency update its website?", a: "At minimum, audit your website quarterly. Check for outdated service information, broken contact forms, old staff photos, and any compliance details that may have changed. Agencies that update content more frequently also tend to rank better in local search results over time." },
  { q: "Is a Google Business Profile really that important?", a: "Yes — for local care agencies, it is one of the most important digital assets available. Google Business Profile listings often appear before organic website results in local searches. An optimized profile directly improves map pack rankings and is often the first thing families and referral partners see when they search for your agency." },
  { q: "How does a careers section help with SEO?", a: "A dedicated careers page with specific job titles — such as 'home health aide jobs in [city]' or 'RN home health nurse openings' — can rank in search results for caregiver job seekers. This brings a segment of motivated, qualified traffic to your site that most agencies miss entirely." },
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

function DigitalPresenceChecklistPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <AtmosphericBackground variant="default" />
      <Header />
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2">
        <a href={PDF_PATH} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 transition-colors rounded-2xl px-3 py-4 shadow-lg shadow-emerald-900/40 flex flex-col items-center gap-2">
          <ExternalLink className="w-4 h-4 text-white" />
          <span className="text-[10px] font-bold text-white uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">View PDF</span>
        </a>
        <a href={PDF_PATH} download className="bg-white/10 hover:bg-white/20 border border-white/20 transition-colors rounded-2xl px-3 py-3 flex flex-col items-center gap-1">
          <Download className="w-4 h-4 text-white/70" />
          <span className="text-[10px] text-white/50 uppercase tracking-wider [writing-mode:vertical-rl] rotate-180">Save</span>
        </a>
      </div>

      <main className="relative z-10 pt-20 pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="mb-8">
            <Breadcrumbs />
          </div>

          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-teal-300 border border-teal-500/30">Checklist</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Home Health Agency <span className="text-gradient">Digital Presence Checklist</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">Every Component Your Agency Should Have in Place</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Before a patient contacts your agency, a hospital sends a referral, or a family member requests information, there is a strong likelihood they will search for your organization online. What they find — or fail to find — can significantly influence their decision. This checklist outlines the 13 components every home health agency should have in place.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate gap-2">
                <Download className="w-4 h-4" /> Download the Checklist
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Get an Agency Audit
              </Link>
            </motion.div>
          </section>

          {/* Checklist items */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">The Checklist</span>
              <h2 className="text-2xl md:text-3xl font-bold">13 Digital Presence Components for Home Health Agencies</h2>
              <p className="mt-3 text-white/55 text-sm max-w-2xl mx-auto">Work through each item to understand where your agency stands and what needs attention.</p>
            </div>
            <div className="space-y-4">
              {checklistItems.map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="glass-panel rounded-2xl p-6 flex items-start gap-5">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${importanceColors[item.importance]}`}>{item.importance}</span>
                    </div>
                    <p className="text-xs text-white/55 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Summary strip */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <h2 className="text-xl font-bold mb-6 text-center">Quick Reference Summary</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {checklistItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-white/65">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    {item.title}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="max-w-3xl mx-auto mb-20">
            <div className="text-center mb-10"><h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions</h2></div>
            <div className="space-y-3">{faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}</div>
          </section>

          <section className="max-w-4xl mx-auto">
            <div className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
              <div className="relative">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How Does Your Agency <span className="text-gradient">Score on This Checklist?</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">SOP Support offers a free agency audit that reviews your website, local visibility, Google Business Profile, and digital systems against this checklist. We'll tell you exactly where you stand and what to prioritize.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Get Your Free Audit <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors gap-2">
                    <Download className="w-4 h-4" /> Save the Checklist
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
