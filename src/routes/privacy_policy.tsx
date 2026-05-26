import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy_policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — SOP Support" },
      {
        name: "description",
        content:
          "Privacy Policy for SOP Support, explaining how contact form information is collected, used, and protected.",
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
          How we handle your{" "}
          <span className="text-gradient">information</span>
        </>
      }
      subtitle="This Privacy Policy explains how SOP Support collects and uses information submitted through this website."
    >
      <div className="glass-panel rounded-3xl p-6 md:p-10 space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p>
            When you submit a contact form on this website, we may collect your
            name, agency name, email address, phone number, current website,
            service interest, and any message or details you choose to provide.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information you submit to respond to your inquiry,
            understand your agency’s needs, provide consultation details, and
            communicate with you about SOP Support services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Contact Form Submissions
          </h2>
          <p>
            Contact form submissions may be sent to our email using a secure
            third-party form service. We do not sell your submitted information
            to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Website Analytics
          </h2>
          <p>
            This website may use basic analytics tools to understand website
            traffic, page visits, and general performance. These tools help us
            improve the website and user experience.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Cookies
          </h2>
          <p>
            This website may use essential cookies or similar technologies for
            basic website functionality. If additional tracking or marketing
            tools are added in the future, this policy may be updated
            accordingly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Data Sharing
          </h2>
          <p>
            We do not sell, rent, or trade your personal information. We may use
            trusted service providers only when necessary to operate the website,
            process form submissions, or communicate with you.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Data Security
          </h2>
          <p>
            We take reasonable steps to protect submitted information. However,
            no method of internet transmission or electronic storage is fully
            secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Your Rights
          </h2>
          <p>
            You may contact us to request access, correction, or deletion of
            information you have submitted through this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Updates to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with the updated effective date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy or how your
            information is handled, please contact us through the website contact
            form.
          </p>
        </section>

        <p className="pt-4 text-sm text-white/40">
          Effective Date: May 2026
        </p>
      </div>
    </PageShell>
  );
}
