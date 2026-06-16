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

const growthAreas = [
  {
    title: "Patient Acquisition",
    description:
      "Create clear pathways for prospective patients and families to learn about your services and connect with your team.",
  },
  {
    title: "Caregiver Recruitment",
    description:
      "Attract qualified caregivers through dedicated recruitment funnels and streamlined application experiences.",
  },
  {
    title: "Referral Relationships",
    description:
      "Strengthen credibility with referral sources through professional branding and informative digital experiences.",
  },
  {
    title: "Local Market Visibility",
    description:
      "Improve discoverability through local SEO strategies and optimized online presence management.",
  },
];

function ResultsPage() {
  return (
    <PageShell>
      <ResultsSection
        eyebrow="What We Build For"
        title={
          <>
            Built to support{" "}
            <span className="text-gradient">your agency's growth</span>
          </>
        }
        subtitle="Every website, SEO system, automation workflow and recruitment funnel we build is designed around these outcomes."
      />

      <section className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Why these outcomes matter
          </h2>
          <p className="mb-4 text-muted-foreground">
            In today's competitive healthcare landscape, agencies need more
            than a professional website. They need a complete digital
            foundation that helps them attract patients, recruit caregivers,
            strengthen referral relationships, and build long-term trust
            within their communities.
          </p>
          <p className="mb-4 text-muted-foreground">
            Every service we provide is designed to support measurable
            business outcomes. Rather than focusing solely on traffic or
            rankings, we focus on creating systems that contribute to
            sustainable agency growth.
          </p>
          <p className="text-muted-foreground">
            Whether your goal is increasing inquiries, improving recruitment,
            or expanding market visibility, our approach aligns digital
            strategy with real operational objectives.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-foreground">
            Key growth areas we help strengthen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {growthAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {area.title}
                </h3>
                <p className="text-muted-foreground">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to grow your agency?"
        subtitle="Book a free consultation and we'll map out the website, SEO and automation systems your agency needs to win more referrals, families and caregivers."
        ctaLabel="Book a Free Consultation"
      />
    </PageShell>
  );
}
