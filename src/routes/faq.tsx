import { createFileRoute } from "@tanstack/react-router";
import { PageShell, CTASection } from "@/components/PageShell";
import { FAQSection } from "@/components/FAQSection";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | SOP Support" },
      {
        name: "description",
        content:
          "Answers to common questions about SOP Support's websites, SEO, automation, and growth systems for home health, hospice, and home care agencies.",
      },
      { property: "og:title", content: "FAQ | SOP Support" },
      {
        property: "og:description",
        content:
          "Answers to common questions about SOP Support's websites, SEO, automation, and growth systems for care agencies.",
      },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <PageShell
      eyebrow="FAQ"
      title={<>Frequently asked <span className="text-gradient">questions</span></>}
      subtitle="Get clear answers to the most common questions agencies ask about working with SOP Support — from onboarding and pricing to communication, deliverables, and scaling support."
    >
      <FAQSection />
      <CTASection title="Still have questions?" cta="Talk to our team" />
    </PageShell>
  );
}
