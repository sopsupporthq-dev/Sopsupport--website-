import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function PageShell({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
      <div className="absolute top-32 -left-32 w-[40rem] h-[40rem] rounded-full bg-emerald-500/20 blur-[120px] animated-bg-blob" />
      <div className="absolute top-96 -right-32 w-[40rem] h-[40rem] rounded-full bg-cyan-500/20 blur-[120px] animated-bg-blob animation-delay-2000" />

      <main className="relative px-6 sm:px-8 lg:px-12 xl:px-16 py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {eyebrow && (
              <span className="inline-block px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase rounded-full glass-panel text-emerald-300">
                {eyebrow}
              </span>
            )}
            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </motion.div>
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
    <section className="mt-24">
      <div className="glass-panel rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />
        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gradient">{title}</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{body}</p>
          <a
            href={href}
            className="inline-flex items-center justify-center mt-8 h-12 px-8 text-sm font-semibold rounded-full text-white bg-gradient-glow tracking-wide"
          >
            {cta}
          </a>
        </div>
      </div>
    </section>
  );
}
