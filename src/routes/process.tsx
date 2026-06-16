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

const expectations = [
  {
    title: "Transparent Communication",
    description:
      "Regular updates, milestone reviews, and clear timelines ensure you always know where your project stands.",
  },
  {
    title: "Healthcare-Focused Strategy",
    description:
      "Every recommendation is built around the needs of home health, hospice, and home care organizations—not generic marketing templates.",
  },
  {
    title: "Long-Term Partnership",
    description:
      "Launch day is only the beginning. We continue supporting your agency through optimization, reporting, and growth initiatives.",
  },
];

const faqs = [
  {
    question: "How long does a typical project take?",
    answer:
      "Most website projects are completed within 4–8 weeks depending on complexity, content availability, and approval timelines.",
  },
  {
    question: "Do you work with existing websites?",
    answer:
      "Yes. We can improve, redesign, or expand existing websites while preserving important content and search visibility.",
  },
  {
    question: "What happens after launch?",
    answer:
      "After launch, we monitor performance, provide support, implement improvements, and help your agency continue growing online.",
  },
  {
    question: "Do I need to provide content and photos?",
    answer:
      "Not necessarily. We can write copy and source professional imagery on your behalf, or work with whatever materials your agency already has.",
  },
  {
    question: "What if I need changes after the site is live?",
    answer:
      "Ongoing support plans include monthly requests, so your site keeps evolving alongside your agency without starting a new project each time.",
  },
];

function ProcessPage() {
  return (
    <PageShell
      eyebrow="Our Process"
      title={
        <>
          How we work <span className="text-gradient">with your agency</span>
        </>
      }
      subtitle="A clear, proven path from first audit to ongoing growth — built for home health, hospice, and home care agencies."
    >
      <ProcessSection />

      {/* Why our process works */}
      <section className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-foreground">
            Why agencies choose our process
          </h2>

          <p className="mb-4 text-muted-foreground">
            Most healthcare agencies know they need a stronger online presence,
            but many struggle with outdated websites, inconsistent branding,
            poor search visibility, and marketing systems that fail to generate
            qualified leads. Our process is designed to eliminate guesswork and
            provide a structured path toward measurable growth.
          </p>

          <p className="mb-4 text-muted-foreground">
            Every project begins with understanding your agency, your market,
            and your growth goals. We then build a customized strategy that
            combines modern web design, local SEO, content optimization, and
            lead-generation systems tailored specifically for home health,
            hospice, and home care providers.
          </p>

          <p className="text-muted-foreground">
            By focusing on both user experience and long-term marketing
            performance, we help agencies create trust, improve visibility, and
            generate more opportunities from their digital presence.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="container mx-auto py-16 border-t border-border/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-foreground">
            What you can expect during the project
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/40"
              >
                <h3 className="font-semibold text-xl mb-3 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto py-16 border-t border-border/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-foreground">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-border/50 bg-card/50 p-6"
              >
                <h3 className="font-semibold text-xl mb-2 text-foreground">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to start your growth audit?"
        subtitle="Book a free consultation and we'll map out the website, SEO and automation systems your agency needs to win more referrals, families and caregivers."
        ctaLabel="Book a Free Consultation"
      />
    </PageShell>
  );
}
