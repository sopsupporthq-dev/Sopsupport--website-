import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Why not hire a full-time marketing employee?",
    a: "Hiring a full-time designer, developer, SEO specialist, automation expert and marketer separately can easily cost over $150,000/year. With SOP Support, you get ongoing access to an entire growth system for a flat monthly rate — without the overhead, payroll, training or management.",
  },
  {
    q: "Who is SOP Support for?",
    a: "We work exclusively with Home Care Agencies, Home Health Agencies, Hospice Providers, and Senior Care Companies. If your business serves seniors, caregivers or in-home healthcare clients, we're built for you.",
  },
  {
    q: "What services do you offer?",
    a: "We help home care agencies grow with website design, SEO, recruiting funnels, AI automations, CRM systems, reputation management, landing pages, branding, marketing systems, caregiver hiring systems, and intake workflows — all tailored specifically for the home care industry.",
  },
  {
    q: "Why specialize in home care?",
    a: "Because generic marketing agencies don't understand this industry. Home care is different: trust matters more, recruiting is critical, local SEO matters, families need reassurance, referral relationships matter, and compliance matters. We build systems specifically around how home care agencies grow.",
  },
  {
    q: "How does the subscription work?",
    a: "Subscribe to a monthly plan, submit requests through your client portal, and we work through them one by one. No complicated contracts. No hourly billing. No surprises.",
  },
  {
    q: "Is there a contract?",
    a: "Yes — we use a simple agreement for all projects.",
  },
  {
    q: "How fast is turnaround?",
    a: "Most requests are completed within a few business days depending on complexity. Larger projects like full websites or automation systems may take longer, but we move fast and communicate clearly throughout the process.",
  },
  {
    q: "What makes SOP Support different?",
    a: "We combine modern design, home care expertise, automation systems, recruiting strategy, SEO, and conversion-focused websites. Most agencies only offer one piece of the puzzle. We help build the entire growth infrastructure behind your care agency.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="glass-panel rounded-2xl border-white/10 overflow-hidden"
      data-testid={`faq-item-${index}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left group"
        data-testid={`button-faq-${index}`}
      >
        <span className="text-sm font-semibold text-white group-hover:text-emerald-100 transition-colors pr-4">
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-6 text-sm text-white/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden" data-testid="section-faq">
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-emerald-500/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-300 uppercase tracking-wider">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently asked{" "}
            <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
