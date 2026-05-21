import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/PageShell";
import { ProcessSection } from "@/components/ProcessSection";

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
      <ProcessSection />
      <CTASection title="Ready to start your growth audit?" />
    </PageShell>
  );
}
