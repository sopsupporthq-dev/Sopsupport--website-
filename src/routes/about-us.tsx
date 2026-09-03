import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { PageShell, CTASection } from "@/components/PageShell";

const values = [
  "Structure",
  "Reliability",
  "Consistency",
  "Efficiency",
  "Scalable growth",
];

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us — SOP Support" },
      {
        name: "description",
        content:
          "Learn why SOP Support helps home care agencies build better digital systems, workflows, and operational support for scalable growth.",
      },
      { property: "og:title", content: "About Us — SOP Support" },
      {
        property: "og:description",
        content:
          "SOP Support helps home care agencies modernize their digital systems, workflows, and growth processes.",
      },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutUsPage,
});

function AboutUsPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title={
        <>
          Why We’re Called{" "}
          <span className="text-gradient">SOP Support</span>
        </>
      }
      subtitle="Our name is built around the systems, processes, and workflows that help care agencies grow with structure and consistency."
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-panel rounded-3xl p-8 md:p-10 space-y-6"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              SOP means Standard Operating Procedure.
            </h2>

            <p className="text-white/70 leading-relaxed">
              “SOP” stands for Standard Operating Procedure — the systems,
              processes, and workflows that keep great organizations running
              smoothly.
            </p>
          </div>

          <p className="text-white/70 leading-relaxed">
            In home care, strong systems matter. From caregiver recruiting and
            intake workflows to follow-ups, scheduling, and client
            communication, growth becomes difficult without clear and reliable
            processes behind the scenes.
          </p>

          <p className="text-white/70 leading-relaxed">
            That’s why we created SOP Support. We help home care agencies build
            the digital systems and operational support needed to grow more
            efficiently, serve families better, and modernize how their agency
            operates.
          </p>

          <p className="text-white/70 leading-relaxed">
            For us, the name represents more than marketing. Because great care
            starts with great systems — and our job is to help build them.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass-panel rounded-3xl p-8 md:p-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/20 bg-emerald-400/10 text-emerald-300 text-xs font-semibold uppercase tracking-widest mb-6">
            What our name represents
          </div>

          <div className="space-y-4">
            {values.map((value) => (
              <div
                key={value}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4"
              >
                <CheckCircle2 className="h-5 w-5 text-emerald-300 shrink-0" />
                <span className="text-white font-semibold">{value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <CTASection
        title="Ready to build better systems for your agency?"
        body="Book a free consultation and we’ll help you identify the website, workflow, and digital support your agency needs next."
        cta="Book a Free Consultation"
      />
    </PageShell>
  );
}
