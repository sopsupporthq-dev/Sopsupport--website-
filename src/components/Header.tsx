import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Activity, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Process", to: "/process" },
  { label: "Results", to: "/results" },
  { label: "Enhancements", to: "/enhancements" },
  { label: "Resources", to: "/resources" },
  { label: "Launch Program", to: "/launch-program" },
  { label: "About Us", to: "/about-us" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-12 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col group shrink-0">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              SOP Support
            </span>
          </div>

          <span className="hidden xl:block text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
            Websites & Digital Growth Systems for Care Agencies
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 mx-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors whitespace-nowrap"
              activeProps={{ className: "text-white" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide whitespace-nowrap"
          >
            Contact
          </Link>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="max-w-[1600px] mx-auto px-6 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-white/80 hover:text-white py-2"
              >
                {link.label}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide mt-2"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
