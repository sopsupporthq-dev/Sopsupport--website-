import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const footerLinks = {
  services: [
    "Website Design",
    "SEO & Local Visibility",
    "Referral Systems",
    "Website Support",
  ],

  industries: [
    "Home Health Agencies",
    "Hospice Providers",
    "Senior Care Companies",
    "Long-Term Care & Home-Based Care Providers",
    "Revenue Cycle & Billing Vendors",
    "Clinical Documentation & QA Firms",
  ],

  quickLinks: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Why Us", href: "/why-us" },
    { label: "Process", href: "/process" },
    { label: "Results", href: "/results" },
    { label: "Resources", href: "/resources" },
    { label: "FAQ", href: "/faq" },
    { label: "Launch Program", href: "/launch-program" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ],
};

export function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8 bg-black z-10"
      data-testid="footer"
    >

      <div className="max-w-[1600px] mx-auto px-6 xl:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12"
        >
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="font-bold text-lg text-white">
                SOP Support
              </span>
            </div>

            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
              Websites & Growth Systems For Care Agencies
            </p>

            <p className="text-sm text-white/60 leading-relaxed">
              SOP Support helps home health agencies, hospice providers,
              and home care companies build modern websites, referral
              systems, SEO foundations and digital growth systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item}>
                  <a
                    href="/services"
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Industries
            </h4>

            <ul className="space-y-3">
              {footerLinks.industries.map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Quick Links
            </h4>

            <ul className="space-y-3">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">
              Contact
            </h4>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@getsopsupport.com"
                  className="text-sm text-white/60 hover:text-emerald-400"
                >
                  hello@getsopsupport.com
                </a>
              </li>

              <li>
                <a
                  href="tel:(469)902-8031"
                  className="text-sm text-white/60 hover:text-emerald-400"
                >
                  (469) 902-8031
                </a>
              </li>

              <li>
                <span className="text-sm text-white/60">
                  5900 Balcones Dr, Ste 100
                  <br />
                  Austin, TX 78731
                </span>
              </li>
            </ul>

            <a
              href="/contact"
              className="inline-flex items-center justify-center mt-6 h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow"
            >
              Book a Free Consultation
            </a>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © 2026 SOP Support. All rights reserved.
          </p>

          <p className="text-xs text-white/35 text-center lg:text-right">
            Websites & Digital Growth Systems for Home Health,
            Hospice & Home Care Agencies
          </p>
        </div>
      </div>
    </footer>
  );
}
