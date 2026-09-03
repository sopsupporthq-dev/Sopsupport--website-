import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Footer } from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — SOP Support" },
      {
        name: "description",
        content:
          "Get in touch with SOP Support to scope a website, SEO or growth system for your home care, home health or hospice agency.",
      },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Premium Agency Website",
  "Website Support/Re-design",
  "Full Launch Program",
  "Not sure yet",
];

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);
  const [result, setResult] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !phone || !message) {
      toast.error("Please fill in name, phone number, email and message.");
      return;
    }

    setSubmitting(true);
    setResult("Sending...");

    try {
      // Same-origin Cloudflare Pages Function — see functions/api/contact.ts.
      // The client never sees or sends the Web3Forms access key.
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSent(true);
        setResult("Message sent successfully.");
        formElement.reset();
        toast.success("Thanks — we'll be in touch within one business day.");
      } else {
        console.error(data);
        setResult("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please email hello@getsopsupport.com.");
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong. Please try again.");
      toast.error("Something went wrong. Please email hello@getsopsupport.com.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />

      <div className="absolute top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-500/20 blur-[120px] animated-bg-blob" />
      <div className="absolute top-96 -right-32 w-[40rem] h-[40rem] rounded-full bg-cyan-500/20 blur-[120px] animated-bg-blob animation-delay-2000" />

      <main className="relative pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto mb-8">
          <Breadcrumbs />
        </div>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
              Contact
            </span>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's grow your <span className="text-gradient">agency</span>
            </h1>

            <p className="mt-5 text-muted-foreground leading-relaxed">
              Tell us about your agency and the outcomes you want. We typically
              reply within one business day with the next step.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4 text-emerald-300" />
                hello@getsopsupport.com
              </div>

              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4 text-emerald-300" />
                (469) 902-8031
              </div>

              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 text-emerald-300" />
                Serving care agencies nationwide
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={onSubmit}
              className="glass-panel rounded-3xl p-8 md:p-10 space-y-5"
            >
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-5">
                <Field id="name" label="Your name" required>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Jane Doe"
                  />
                </Field>

                <Field id="agency_name" label="Agency name">
                  <Input
                    id="agency_name"
                    name="agency_name"
                    placeholder="Bright Path Home Care"
                  />
                </Field>

                <Field id="email" label="Email" required>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@agency.com"
                  />
                </Field>

                <Field id="phone" label="Phone" required>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                  />
                </Field>

                <Field id="service_interest" label="Service interested in">
                  <select
                    id="service_interest"
                    name="service_interest"
                    defaultValue=""
                    className="flex h-10 w-full rounded-md border border-input bg-background/40 px-3 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field id="current_website" label="Current website">
                  <Input
                    id="current_website"
                    name="current_website"
                    placeholder="www.youragencyname.com"
                  />
                </Field>
              </div>

              <Field id="message" label="What are you trying to solve?" required>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell us about your agency, goals and timeline."
                />
              </Field>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center gap-2 h-12 w-full md:w-auto px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide disabled:opacity-60"
              >
                {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                {sent ? "Sent — thank you" : "Send message"}
              </button>

              {result && (
                <p className="text-sm text-emerald-300">
                  {result}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label
        htmlFor={id}
        className="text-xs uppercase tracking-widest text-white/70"
      >
        {label} {required && <span className="text-emerald-300">*</span>}
      </Label>
      {children}
    </div>
  );
}
