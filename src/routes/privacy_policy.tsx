import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy_policy")({
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title={
        <>
          How we handle your <span className="text-gradient">information</span>
        </>
      }
      subtitle="This Privacy Policy explains how SOP Support collects and uses information submitted through this website."
    >
      <div className="glass-panel rounded-3xl p-6 md:p-10 text-muted-foreground leading-relaxed">
        <p>
          SOP Support may collect information submitted through the contact form,
          including name, agency name, email, phone number, website, service
          interest, and message details. We use this information only to respond
          to inquiries and communicate about SOP Support services.
        </p>
      </div>
    </PageShell>
  );
}
