import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/PageShell";
import { ResultsSection } from "@/components/ResultsSection";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Growth Outcomes | SOP Support" },
      {
        name: "description",
        content:
          "Explore the outcomes SOP Support websites, SEO systems, automation workflows, and digital growth systems are designed to support for care agencies.",
      },
      { property: "og:title", content: "Growth Outcomes | SOP Support" },
      {
        property: "og:description",
        content:
          "Explore the outcomes SOP Support websites, SEO systems, automation workflows, and digital growth systems are designed to support for care agencies.",
      },
      { property: "og:url", content: "/results" },
    ],
    links: [{ rel: "canonical", href: "/results" }],
  }),
  component: ResultsPage,
});

function ResultsPage() {
  return (
    <PageShell
      eyebrow="What We Build For"
      title={<>Built to support <span className="text-gradient">your agency's growth</span></>}
      subtitle="Every website, SEO system, automation workflow and recruitment funnel we build is designed around these outcomes."
    >
      <ResultsSection />
      <CTASection title="Want these outcomes for your agency?" />
    </PageShell>
  );
}
