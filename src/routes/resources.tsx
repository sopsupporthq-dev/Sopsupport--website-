import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download } from "lucide-react";
import { PageShell, CTASection } from "@/components/PageShell";

const resources = [
  { icon: FileText, type: "Guide", title: "The Home Care Website Checklist", body: "31 things every agency website must include to win family trust and rank locally." },
  { icon: BookOpen, type: "Playbook", title: "Local SEO Playbook for Care Agencies", body: "Step-by-step framework for ranking in every city you serve — GMB, citations, reviews, schema." },
  { icon: Video, type: "Workshop", title: "Caregiver Recruitment Funnel Walkthrough", body: "Watch the exact funnel we use to bring agencies 100+ applicants per month." },
  { icon: Download, type: "Template", title: "Referral Source Outreach Tracker", body: "Free CRM template to organize and grow your hospital and physician referral relationships." },
];

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — SOP Support" },
      { name: "description", content: "Free guides, playbooks and templates to grow home health, hospice and home care agencies." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <PageShell
      eyebrow="Resources"
      title={<>Free guides for <span className="text-gradient">care agency owners</span></>}
      subtitle="The same frameworks we use with paying clients — packaged so you can put them to work this week."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel rounded-2xl p-7 group hover:border-emerald-400/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-300">
                <r.icon className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-emerald-300">{r.type}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2 group-hover:text-emerald-200 transition-colors">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.body}</p>
          </motion.div>
        ))}
      </div>
      <CTASection title="Want these tailored to your agency?" body="Book a call and we'll walk through your numbers and recommend the next move." />
    </PageShell>
  );
}
