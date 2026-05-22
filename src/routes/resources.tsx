import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageShell, CTASection } from "@/components/PageShell";
import { resources } from "@/data/resources";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — SOP Support" },
      {
        name: "description",
        content:
          "Free guides, playbooks, checklists, and templates to help home health, hospice, and home care agencies improve websites, SEO, referrals, and recruitment.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title={
        <>
          Free guides for{" "}
          <span className="text-gradient">care agency owners</span>
        </>
      }
      subtitle="Practical website, SEO, referral, and recruitment resources created for home health, hospice, and home care agencies."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <motion.div
            key={resource.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="glass-panel rounded-2xl p-7 group hover:border-emerald-400/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-500/25 transition-colors">
                <resource.icon className="w-5 h-5" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                {resource.type}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-200 transition-colors">
              {resource.title}
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {resource.body}
            </p>

            <a
              href={resource.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-5 py-3 text-sm font-semibold text-emerald-200 hover:bg-emerald-400/20 hover:text-white transition-colors"
            >
              {resource.buttonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        ))}
      </div>

      <CTASection
        title="Want these tailored to your agency?"
        body="Book a call and we’ll review your current website, visibility, referral flow, and digital systems."
      />
    </PageShell>
  );
}
