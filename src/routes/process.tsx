import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ClipboardList, Map, PenTool, Rocket, LifeBuoy,
  CheckCircle2, ArrowRight,
} from "lucide-react";
import { PageShell, CTASection } from "@/components/PageShell";
import { ProcessSection } from "@/components/ProcessSection";

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

const dontHaveToDoItems = [
  { label: "You don't write the content", detail: "We research your services and service areas and write every page. You review and approve." },
  { label: "You don't manage the technical setup", detail: "Domain, hosting, SSL, analytics, Search Console — we configure all of it." },
  { label: "You don't chase down updates", detail: "Submit a request and it gets handled. No tickets, no waiting weeks, no extra fees." },
  { label: "You don't start from scratch when you grow", detail: "New service areas, new programs, expanded services — we add them as your agency evolves." },
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

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our Process | SOP Support" },
      {
        name: "description",
        content:
          "See how SOP Support plans, builds, launches, and supports websites and digital growth systems for home health, hospice, and home care agencies.",
      },
      { property: "og:title", content: "Our Process | SOP Support" },
      {
        property: "og:description",
        content:
          "See how SOP Support plans, builds, launches, and supports websites and digital growth systems for home health, hospice, and home care agencies.",
      },
      { property: "og:url", content: "/process" },
    ],
    links: [{ rel: "canonical", href: "/process" }],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <PageShell
      eyebrow="Our Process"
      title={<>How we work <span className="text-gradient">with your agency</span></>}
      subtitle="A clear, proven path from first audit to ongoing growth — built for home health, hospice, and home care agencies."
    >
      <div className="text-center mb-12">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          No guesswork, no long onboarding — just a simple path from audit to results.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          <span className="px-4 py-2 rounded-full border text-sm">1. Audit</span>
          <span className="px-4 py-2 rounded-full border text-sm">2. Build</span>
          <span className="px-4 py-2 rounded-full border text-sm">3. Launch</span>
          <span className="px-4 py-2 rounded-full border text-sm">4. Support & Grow</span>
        </div>
      </div>
      <ProcessSection />
      <CTASection title="Ready to start your growth audit?" />
    </PageShell>
  );
}
