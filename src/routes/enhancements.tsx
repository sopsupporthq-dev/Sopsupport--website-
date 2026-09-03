import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe,
  FileText,
  Search,
  MousePointerClick,
  Bot,
  Star,
  Sparkles,
  BarChart3,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";

export const Route = createFileRoute("/enhancements")({
  head: () => ({
    meta: [
      { title: "Enhancements — SOP Support" },
      {
        name: "description",
        content:
          "Growth and optimization services for home health, hospice, and home care agencies — SEO, lead capture, automation, recruitment, branding, and more.",
      },
      { property: "og:title", content: "Enhancements — SOP Support" },
      {
        property: "og:description",
        content:
          "Scale your agency with SEO, automation, lead capture, recruitment, and ongoing growth services from SOP Support.",
      },
    ],
  }),
  component: EnhancementsPage,
});

type Category = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
};

const categories: Category[] = [
  {
    icon: Globe,
    title: "Website Enhancements",
    description: "Expand your website with additional pages and specialized content.",
    items: [
      "Extra website pages",
      "Additional service pages",
      "Additional location pages",
      "Blog and article pages",
      "Family education pages",
      "Referral partner landing pages",
      "Caregiver recruitment pages",
      "Careers and job openings pages",
      "Leadership and team pages",
      "Testimonials and reviews pages",
      "FAQ pages",
      "Resource library pages",
      "Case study pages",
      "Spanish-language pages",
      "Multi-language website setup",
    ],
  },
  {
    icon: FileText,
    title: "Copywriting Enhancements",
    description: "Professional content creation for agency growth.",
    items: [
      "Website copywriting",
      "Service page copywriting",
      "Location page copywriting",
      "Blog writing",
      "Family education content",
      "Referral partner copy",
      "Caregiver recruitment copy",
      "Email follow-up copy",
      "Brand messaging",
      "Homepage headline refinement",
      "Offer messaging refinement",
      "SEO titles and meta descriptions",
    ],
  },
  {
    icon: Search,
    title: "SEO Enhancements",
    description: "Improve local visibility and search performance.",
    items: [
      "Local SEO setup",
      "Google Business Profile optimization",
      "Keyword research",
      "Service-area SEO structure",
      "Location page SEO",
      "On-page SEO optimization",
      "Technical SEO cleanup",
      "Schema markup",
      "Internal linking setup",
      "SEO content plan",
      "Competitor SEO review",
      "Monthly SEO reporting",
    ],
  },
  {
    icon: MousePointerClick,
    title: "Lead Capture Enhancements",
    description: "Increase inquiries and conversions.",
    items: [
      "Client inquiry forms",
      "Referral forms",
      "Caregiver application forms",
      "Multi-step lead forms",
      "HIPAA-conscious form setup",
      "Call tracking setup",
      "Conversion tracking setup",
      "Thank-you pages",
      "Lead notification setup",
      "Missed-call follow-up workflows",
      "Website chat setup",
      "Online appointment request forms",
    ],
  },
  {
    icon: Bot,
    title: "Automation Enhancements",
    description: "Reduce manual work and streamline operations.",
    items: [
      "CRM integration",
      "Form-to-CRM automation",
      "Email automation",
      "SMS automation",
      "Referral follow-up automation",
      "Applicant follow-up automation",
      "Client inquiry automation",
      "Internal task automation",
      "Lead routing automation",
      "Pipeline setup",
      "Dashboard setup",
      "Zapier setup",
      "Make.com setup",
    ],
  },
  {
    icon: Star,
    title: "Reputation Enhancements",
    description: "Build trust and social proof.",
    items: [
      "Review request systems",
      "Google review setup",
      "Testimonial collection forms",
      "Review displays",
      "Reputation monitoring",
      "Case study formatting",
      "Trust badges",
      "Awards and accreditation sections",
    ],
  },
  {
    icon: Sparkles,
    title: "Design & Branding Enhancements",
    description: "Improve your agency's visual identity.",
    items: [
      "Logo refresh",
      "Brand color refinement",
      "Typography refinement",
      "Custom icons",
      "Custom graphics",
      "Premium homepage design",
      "Landing page design",
      "PDF brochure design",
      "Social media graphics",
      "Business cards",
      "Flyer design",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics, Growth & Maintenance",
    description: "Track, improve and maintain your digital presence.",
    items: [
      "Google Analytics",
      "Google Search Console",
      "Google Tag Manager",
      "Conversion tracking",
      "Referral source tracking",
      "Monthly dashboards",
      "Landing pages",
      "Campaign pages",
      "Newsletter setup",
      "Monthly optimization",
      "CRO testing",
      "Hosting",
      "Security",
      "Backups",
      "Speed optimization",
      "Accessibility reviews",
      "Website migrations",
      "Domain and DNS support",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function EnhancementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <Header />
      <AtmosphericBackground variant="default" />

      {/* HERO */}
      <section className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 sm:pb-28 lg:px-8">
        <div className="mb-6">
          <Breadcrumbs />
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1.5 text-xs font-medium tracking-wide text-emerald-300 backdrop-blur-md sm:text-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.8)]" />
            Growth & Optimization Services
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Enhancements That Help Your{" "}
            <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Agency Scale
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg"
          >
            Your website is only the beginning. SOP Support provides additional services that help
            home health, hospice, and home care agencies improve visibility, generate more leads,
            automate operations, strengthen recruitment, and support long-term growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-7 py-3.5 text-sm font-semibold text-emerald-950 shadow-[0_10px_40px_-10px_rgba(52,211,153,0.6)] transition-all hover:shadow-[0_20px_50px_-10px_rgba(52,211,153,0.8)] hover:-translate-y-0.5 sm:w-auto"
            >
              Request Enhancement Plan
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-all hover:border-emerald-400/40 hover:bg-white/10 sm:w-auto"
            >
              Contact Our Team
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Eight categories. One growth partner.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Mix and match the enhancements your agency needs — today and as you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
                className="group relative"
              >
                <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-emerald-400/40 via-teal-400/20 to-transparent opacity-0 blur transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-all duration-300 hover:border-emerald-400/30 hover:bg-white/[0.06]">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/20 to-teal-500/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]">
                    <Icon className="h-6 w-6 text-emerald-300" />
                  </div>

                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{cat.description}</p>

                  <div className="my-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-slate-300/90"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="relative mx-auto max-w-7xl px-6 pb-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-white/[0.02] p-10 backdrop-blur-2xl sm:p-16"
        >
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-emerald-400/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-[300px] w-[400px] rounded-full bg-teal-400/15 blur-[100px]" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Build The Growth System{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                Your Agency Needs
              </span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
              Every agency grows differently. Whether you need stronger SEO, caregiver recruitment
              systems, referral partner pages, automation workflows, or ongoing website support,
              SOP Support can help.
            </p>
            <div className="mt-9">
              <a
                href="https://www.getsopsupport.com/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 px-8 py-4 text-sm font-semibold text-emerald-950 shadow-[0_10px_40px_-10px_rgba(52,211,153,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-10px_rgba(52,211,153,0.9)] sm:text-base"
              >
                Schedule a Free Growth Consultation
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="text-sm text-slate-400 transition-colors hover:text-emerald-300"
          >
            ← Back to home
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
