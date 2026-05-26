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
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy_policy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 pt-20 pb-10 overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-emerald-400" />
              <span className="font-heading font-bold text-lg text-white">SOP Support</span>
            </div>
            <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
              Websites & Growth Systems for Care Agencies
            </p>
            <p className="text-sm text-white/55 leading-relaxed">
              SOP Support helps home health agencies, hospice providers, and home care companies build modern
              websites and digital growth systems.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((item) => (
                <li key={item}>
                  <a
                    href="/#services"
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                    data-testid={`link-footer-service-${item.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Industries</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.industries.map((item) => (
                <li key={item}>
                  <span className="text-sm text-white/60">{item}</span>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                    data-testid={`link-footer-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:hello@getsopsupport.com"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                  data-testid="link-footer-email"
                >
                  hello@getsopsupport.com
                </a>
              </li>
              <li>
                <a
                  href="tel:(469) 902-8031"
                  className="text-sm text-white/60 hover:text-emerald-400 transition-colors"
                  data-testid="link-footer-phone"
                >
                  (469) 902-8031
                </a>
              </li>
              <li>
                <span className="text-sm text-white/60">
                   5900 Balcones Dr, Ste 100<br/>
                   Austin, TX 78731
                </span>
              </li>
            </ul>

            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow no-default-hover-elevate"
                data-testid="link-footer-cta"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/35">
            © 2026 SOP Support. All rights reserved.
          </p>
          <p className="text-xs text-white/35">
            Websites & Digital Growth Systems for Home Health, Hospice & Home Care Agencies
          </p>
        </div>
      </div>
    </footer>
  );
}
