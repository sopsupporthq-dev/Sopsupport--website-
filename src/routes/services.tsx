import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Globe, Search, Workflow, Users, BarChart3, Smartphone } from "lucide-react";
import { PageShell, CTASection } from "@/components/PageShell";

const services = [
  {
    icon: Globe,
    title: "Premium Agency Websites",
    body: "Conversion-built websites for home health, hospice and home care agencies — designed to win family trust and rank locally.",
  },
  {
    icon: Search,
    title: "Local SEO Systems",
    body: "City pages, Google Business Profile optimization, schema markup and reviews engineered to dominate your service areas.",
  },
  {
    icon: Workflow,
    title: "Automation Workflows",
    body: "Intake, follow-up, referral and onboarding automations that remove busywork and stop leads from slipping.",
  },
  {
    icon: Users,
    title: "Caregiver Recruitment Funnels",
    body: "Landing pages, ad creative and applicant nurture flows built to fill your hiring pipeline week after week.",
  },
  {
    icon: BarChart3,
    title: "Referral Growth Systems",
    body: "Outreach pages, sales enablement assets and CRM workflows to deepen relationships with referral sources.",
  },
  {
    icon: Smartphone,
    title: "Brand & Identity",
    body: "Logos, color systems and marketing collateral that make a small agency look like the most credible choice in town.",
  },
];

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — SOP Support" },
      {
        name: "description",
        content:
          "Websites, local SEO, automation, recruitment and referral growth systems for home health, hospice and home care agencies.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title={
        <>
          Digital Growth systems for{" "}
          <span className="text-gradient">care agencies</span>
        </>
      }
      subtitle="We build the digital infrastructure home health, hospice and home care agencies need to grow — without hiring a marketing team."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="glass-panel rounded-2xl p-7 hover:border-emerald-400/30 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/15 flex items-center justify-center text-emerald-300 mb-5">
              <s.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </div>
      <CTASection />
    </PageShell>
  );
}
