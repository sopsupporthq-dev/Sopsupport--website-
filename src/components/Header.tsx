import { Activity } from "lucide-react";
import { Link } from "wouter";

export function Header() {
  const sectionLinks = [
    { label: "Services", href: "/#services" },
    { label: "Why Us", href: "/#specialization" },
    { label: "Process", href: "/#process" },
    { label: "Resources", href: "/#resources" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10"
      data-testid="header"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            data-testid="link-home-logo"
          >
            <Activity className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-emerald-50 transition-colors">
              SOP Support
            </span>
          </Link>

          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
            Websites & Growth Systems for Care Agencies
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-nav-home"
          >
            Home
          </Link>

          {sectionLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              data-testid={`link-nav-${link.label
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
            >
              {link.label}
            </a>
          ))}

          <Link
            href="/launch-program"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-nav-launch-program"
          >
            Launch Program
          </Link>

          <Link
            href="/meet-our-team"
            className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            data-testid="link-nav-meet-our-team"
          >
            Meet Our Team
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow no-default-hover-elevate tracking-wide"
            data-testid="link-book-audit-header"
          >
            Book a Free Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
