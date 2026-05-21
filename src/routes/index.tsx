import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { SpecializationSection } from "@/components/SpecializationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AgencyProblemsSection } from "@/components/AgencyProblemsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { FinalCTASection } from "@/components/FinalCTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "SOP Support — Websites, SEO & Growth Systems for Home Care Agencies",
      },
      {
        name: "description",
        content:
          "We build premium websites, local SEO systems, automation and recruitment funnels for home health, hospice and home care agencies.",
      },
    ],
  }),
  component: HomePage,
});

function PreviewCTA({
  eyebrow,
  title,
  body,
  cta,
  to,
}: {
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  to: "/process" | "/results" | "/faq";
}) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-3xl p-10 md:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10 pointer-events-none" />

          <div className="relative">
            <span className="inline-block px-3 py-1 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
              {eyebrow}
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              <span className="text-gradient">{title}</span>
            </h2>

            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {body}
            </p>

            <Link
              to={to}
              className="inline-flex items-center gap-2 mt-8 h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide"
            >
              {cta}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <HeroSection />
        <SpecializationSection />
        <ServicesSection />
        <AgencyProblemsSection />

        <PreviewCTA
          eyebrow="Our Process"
          title="See how we work with your agency"
          body="From the first growth audit to ongoing optimization — a clear path built for care agencies."
          cta="View Our Process"
          to="/process"
        />

        <PreviewCTA
          eyebrow="What We Build For"
          title="Explore what our systems are built to improve"
          body="Credibility, qualified inquiries, local visibility, caregiver recruiting and referral partner trust."
          cta="View Growth Outcomes"
          to="/results"
        />

        <ResourcesSection />

        <PreviewCTA
          eyebrow="FAQ"
          title="Have questions before upgrading your agency website?"
          body="Learn how SOP Support handles websites, SEO, automation, recruitment funnels, and growth systems for home health, hospice, and home care agencies."
          cta="View FAQs"
          to="/faq"
        />

        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
