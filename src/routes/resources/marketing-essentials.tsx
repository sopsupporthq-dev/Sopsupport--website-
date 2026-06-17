import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, CheckCircle2, ChevronDown, ChevronUp, Globe, Search, Star, Users, BarChart2, Handshake, FileText } from "lucide-react";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/resources/marketing-essentials")({
  head: () => ({
    meta: [
      { title: "Home Health Agency Marketing Essentials | SOP Support" },
      { name: "description", content: "A practical guide to the core marketing strategies every home health agency should prioritize — from Google Business Profile and local SEO to referral partnerships and content marketing." },
    ],
    links: [{ rel: "canonical", href: "/resources/marketing-essentials" }],
  }),
  component: MarketingEssentialsPage,
});

const PDF_PATH = "/assets/pdfs/marketing-essentials.pdf";

const pillars = [
  {
    icon: Globe,
    title: "Google Business Profile",
    tag: "Local Visibility",
    tagColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
    body: "One of the most valuable and cost-effective marketing assets available to home health agencies. When potential patients or family members search online for home health services, Google often displays local business listings before traditional website results. An optimized Google Business Profile can make the difference between appearing in front of a searching family or being invisible to them entirely.",
    points: ["Appear in Google Maps local pack results", "Display reviews, ratings, and photos prominently", "Provide immediate contact information to searchers", "Signal service area coverage to local searchers", "Build credibility before a visitor reaches your website"],
  },
  {
    icon: Search,
    title: "Local SEO",
    tag: "Search Rankings",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    body: "Search Engine Optimization refers to improving your online presence so your agency appears when people search for relevant healthcare services. For home health agencies, local SEO is especially important because most patients are seeking providers within a specific geographic area. When done properly, local SEO delivers a consistent stream of qualified organic inquiries.",
    points: ["Location-specific service pages for each city you serve", "Consistent business name, address, and phone across all listings", "Fast, mobile-optimized website that Google rewards", "Educational content that answers what families are searching for", "Structured data markup that helps search engines understand your agency"],
  },
  {
    icon: Star,
    title: "Reviews and Reputation",
    tag: "Trust Building",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    body: "Reputation is one of the most influential factors in healthcare decision-making. Before contacting an agency, many patients and family members review online ratings and testimonials. Positive reviews directly improve local search rankings, increase trust before first contact, and influence referral decisions. Reputation management should be viewed as an ongoing process rather than a one-time activity.",
    points: ["Encourage satisfied clients and families to leave feedback", "Monitor Google and other review platforms consistently", "Respond professionally and promptly to all reviews", "Use positive reviews in your marketing materials", "Address negative feedback with attentiveness and respect"],
  },
  {
    icon: BarChart2,
    title: "Website Conversion",
    tag: "Lead Generation",
    tagColor: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    body: "Many agencies focus on generating website traffic but overlook an equally important goal: converting visitors into actual inquiries. Traffic that doesn't convert is wasted. A successful website should guide visitors toward taking action — a phone call, a form submission, or a consultation request. The easier this process is, the more inquiries your website generates.",
    points: ["Phone numbers and contact forms visible on every page", "Clear calls to action — not buried or unclear", "Simple navigation so visitors find information fast", "Trust-building content including credentials and services", "Mobile-optimized experience for on-the-go searchers"],
  },
  {
    icon: Handshake,
    title: "Referral Partnerships",
    tag: "Growth Foundation",
    tagColor: "text-teal-400 bg-teal-500/10 border-teal-500/20",
    body: "Referral relationships remain one of the most important growth drivers for home health agencies. Hospitals, physicians, case managers, discharge planners, rehabilitation facilities, and skilled nursing facilities all serve as referral sources. Successful referral development combines professional communication, consistent follow-up, educational outreach, and — critically — a digital presence that makes your agency easy to evaluate and contact.",
    points: ["Professional communication and rapid responsiveness to partners", "Consistent follow-up that builds lasting relationships over time", "Educational outreach that positions your agency as a resource", "A website that validates your agency when partners look you up", "Strong patient outcomes that support long-term referral loyalty"],
  },
  {
    icon: FileText,
    title: "Content Marketing",
    tag: "Authority Building",
    tagColor: "text-emerald-300 bg-emerald-400/10 border-emerald-400/20",
    body: "Content marketing involves creating useful information that helps patients, families, and referral partners understand healthcare topics. Unlike traditional advertising, content marketing focuses on education and genuine value. When agencies consistently provide helpful information, they become recognized as trusted authorities within their communities — and trusted authorities attract more inquiries, more referrals, and stronger partnerships.",
    points: ["Blog articles answering the questions families actually search", "Caregiver resources and Medicare education guides", "FAQs that reduce pre-contact friction for prospective clients", "Post-hospital recovery tips and care transition information", "Content that improves SEO while building credibility simultaneously"],
  },
];

const summaryItems = ["Google Business Profile", "Local SEO", "Reputation Management", "Social Media Presence", "Website Conversion", "Referral Relationships", "Educational Content"];

const faqs = [
  { q: "What is the single most important marketing investment for a home health agency?", a: "For most agencies, the highest-impact investment is a professional website combined with an optimized Google Business Profile. Together, these two assets address the most common way families and referral sources find and evaluate agencies — online search. Everything else builds on top of this foundation." },
  { q: "How long does it take for local SEO to produce results?", a: "Most agencies see measurable improvements in local visibility within 60 to 90 days of a properly structured website and SEO foundation. Ongoing content updates, citation building, and review generation continue to compound results over 4 to 6 months. SEO is a long-term investment, not a one-time fix." },
  { q: "How do home health agencies get more Google reviews?", a: "The most effective approach is simply asking. After a positive patient interaction, family members can be gently encouraged to share their experience on Google. Making the process easy — with a direct link to your review page — significantly increases the rate at which satisfied clients follow through." },
  { q: "Should home health agencies use social media?", a: "Social media is a supporting channel, not a primary growth driver for most home health agencies. It works best for community engagement, brand awareness, and recruitment visibility. Agencies should focus on their website and local SEO first, then maintain a consistent social presence without treating it as the centerpiece of their marketing." },
  { q: "What type of content performs best for home health agency marketing?", a: "Educational content that directly answers questions families search for performs best — guides on what home health care includes, how to choose a provider, what Medicare covers, and how to navigate care transitions. This content attracts organic traffic while building trust with visitors who are still in the research phase." },
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

function MarketingEssentialsPage() {
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

          <section className="max-w-4xl mx-auto text-center mb-24">
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-violet-300 border border-violet-500/30">Guide</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Home Health Agency <span className="text-gradient">Marketing Essentials</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">A Practical Guide to Building Awareness and Trust</motion.p>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="text-base text-white/55 max-w-3xl mx-auto leading-relaxed mb-10">
              Providing exceptional patient care is the foundation of every successful home health agency. But even the highest-quality care can go unnoticed if prospective patients, families, and referral partners can't find or evaluate your organization. Effective marketing doesn't require large budgets — it requires focus on the right areas.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href={PDF_PATH} download className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate gap-2">
                <Download className="w-4 h-4" /> Download This Guide
              </a>
              <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white glass-panel border border-white/20 hover:border-emerald-400/40 transition-colors">
                Get a Free Marketing Audit
              </Link>
            </motion.div>
          </section>

          {/* Why marketing matters */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-12">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-full bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-5">Why Marketing Matters</span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Healthcare decisions are built on trust — and trust starts online</h2>
              <p className="text-sm text-white/60 leading-relaxed mb-5">When families search for care providers, they compare multiple agencies before making contact. Referral sources evaluate organizations based on professionalism, reputation, responsiveness, and visibility. Effective marketing helps agencies appear at the right moment and make the right impression.</p>
              <div className="grid sm:grid-cols-2 gap-3">
                {["Increase community awareness and local recognition", "Generate consistent patient and family inquiries", "Build credibility and trust before the first call", "Strengthen referral relationships over time", "Improve caregiver recruitment and retention", "Differentiate your agency from local competitors"].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-white/65">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />{item}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Six pillars */}
          <section className="max-w-5xl mx-auto mb-20">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300 border border-emerald-500/30">The Six Core Areas</span>
              <h2 className="text-2xl md:text-3xl font-bold">Marketing Essentials Every Home Health Agency Should Prioritize</h2>
              <p className="mt-3 text-white/55 max-w-2xl mx-auto text-sm leading-relaxed">Each component strengthens the others. Together they create a marketing system that compounds over time.</p>
            </div>
            <div className="space-y-6">
              {pillars.map((p, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="glass-panel rounded-2xl p-7 grid md:grid-cols-[auto_1fr_1fr] gap-6 items-start">
                  <div className="flex flex-col items-start gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${p.tagColor.split(" ").slice(1).join(" ")}`}>
                      <p.icon className={`w-6 h-6 ${p.tagColor.split(" ")[0]}`} />
                    </div>
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white/35 uppercase tracking-widest mb-3">Key Actions</p>
                    <ul className="space-y-2">
                      {p.points.map((point, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-white/60">
                          <ArrowRight className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />{point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Summary */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="glass-panel rounded-3xl p-8 md:p-10">
              <h2 className="text-xl font-bold mb-2 text-center">Bringing It All Together</h2>
              <p className="text-sm text-white/55 text-center mb-6 max-w-xl mx-auto">Successful home health agency marketing doesn't rely on a single tactic. The strongest organizations combine multiple strategies that work together.</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {summaryItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-emerald-500/20 text-sm text-emerald-300">
                    <CheckCircle2 className="w-3.5 h-3.5" />{item}
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
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Trust Drives <span className="text-gradient">Healthcare Decisions</span></h2>
                <p className="text-white/60 max-w-xl mx-auto text-sm leading-relaxed mb-8">The agencies that succeed are not always the ones with the largest marketing budgets — they are the ones that consistently build trust, provide value, and remain visible to the communities they serve. SOP Support helps care agencies build that foundation.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link to="/contact" className="inline-flex items-center justify-center h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow group no-default-hover-elevate">
                    Get a Free Marketing Audit <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
