import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SOP Support" },
      {
        name: "description",
        content:
          "Privacy Policy for SOP Support website visitors and contact form submissions.",
      },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title={
        <>
          Privacy <span className="text-gradient">Policy</span>
        </>
      }
      subtitle="How SOP Support collects, uses, and protects information submitted through this website."
    >
      <div className="glass-panel rounded-2xl p-8 md:p-10 space-y-8 text-white/70 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Information We Collect
          </h2>
          <p>
            When you submit a contact form, we may collect your name, email
            address, phone number, agency name, website URL, service interest,
            and message details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            How We Use Your Information
          </h2>
          <p>
            We use submitted information to respond to inquiries, provide
            consultation details, understand your agency needs, and improve our
            services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Form Submissions
          </h2>
          <p>
            Contact form submissions may be processed through third-party form
            services to deliver your inquiry by email. We do not sell your
            personal information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Cookies and Analytics
          </h2>
          <p>
            This website may use basic technical tools to improve performance
            and user experience. If analytics or advertising tools are added in
            the future, this policy may be updated.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            Contact
          </h2>
          <p>
            For privacy-related questions, contact us at
            hello@getsopsupport.com.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
