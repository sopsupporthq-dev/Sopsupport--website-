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

      {/* Why our process works */}
      <section className="container mx-auto py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">
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
      <section className="container mx-auto py-16 border-t">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10">
            What you can expect during the project
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-xl mb-3">
                Transparent Communication
              </h3>
              <p className="text-muted-foreground">
                Regular updates, milestone reviews, and clear timelines ensure
                you always know where your project stands.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Healthcare-Focused Strategy
              </h3>
              <p className="text-muted-foreground">
                Every recommendation is built around the needs of home health,
                hospice, and home care organizations—not generic marketing
                templates.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Long-Term Partnership
              </h3>
              <p className="text-muted-foreground">
                Launch day is only the beginning. We continue supporting your
                agency through optimization, reporting, and growth initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="container mx-auto py-16 border-t">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-xl mb-2">
                How long does a typical project take?
              </h3>
              <p className="text-muted-foreground">
                Most website projects are completed within 4–8 weeks depending
                on complexity, content availability, and approval timelines.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                Do you work with existing websites?
              </h3>
              <p className="text-muted-foreground">
                Yes. We can improve, redesign, or expand existing websites while
                preserving important content and search visibility.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-2">
                What happens after launch?
              </h3>
              <p className="text-muted-foreground">
                After launch, we monitor performance, provide support, implement
                improvements, and help your agency continue growing online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection title="Ready to start your growth audit?" />
    </PageShell>
  );
}
