import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AtmosphericBackground } from "@/components/backgrounds/AtmosphericBackground";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Single fixed background — covers entire page seamlessly */}
      <AtmosphericBackground variant="default" />

      <Header />

      <main className={`relative z-10 px-5 sm:px-8 lg:px-12 ${title ? "py-20 lg:py-28" : "pb-20"}`}>
        <div className="max-w-[1280px] mx-auto w-full">
          <Breadcrumbs />
          {title && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              {eyebrow && (
                <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
                  {eyebrow}
                </span>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                  {subtitle}
                </p>
              )}
            </motion.div>
          )}
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export function CTASection({
  title = "Ready to grow your agency?",
  body = "Book a free consultation and we'll map out the website, SEO and automation systems your agency needs to win more referrals, families and caregivers.",
  href = "/contact",
  cta = "Book a Free Consultation",
}: {
  title?: string;
  body?: string;
  href?: string;
  cta?: string;
}) {
  return (
    <section className="mt-20">
      <div className="glass-panel rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        <div className="relative">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{body}</p>
          <a
            href={href}
            className="inline-flex items-center justify-center mt-7 h-11 px-7 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
