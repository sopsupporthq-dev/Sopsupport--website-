import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Activity, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", to: "/services" },
  { label: "Why Us", to: "/why-us" },
  { label: "Process", to: "/process" },
  { label: "Results", to: "/results" },
  { label: "Resources", to: "/resources" },
  { label: "Launch Program", to: "/launch-program" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex flex-col group">
          <div className="flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400 group-hover:text-emerald-300 transition-colors" />
            <span className="font-heading font-bold text-xl tracking-tight text-white">
              SOP Support
            </span>
          </div>
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest font-semibold mt-0.5">
            Websites & Digital Growth Systems for Care Agencies
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              activeProps={{ className: "text-white" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-6 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide"
          >
            Contact
          </Link>
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
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
