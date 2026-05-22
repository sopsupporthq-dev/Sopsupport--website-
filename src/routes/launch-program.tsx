import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Search,
  Smartphone,
  Users,
  Wrench,
  Map,
  CheckCircle2,
  ArrowRight,
  Zap,
  Heart,
  Home,
  Star,
  BarChart3,
  MessageSquare,
  Rocket,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/launch-program")({
  head: () => ({
    meta: [
      { title: "Agency Launch Program — SOP Support" },
      {
        name: "description",
        content:
          "A done-for-you launch program for new and growing home health, hospice and home care agencies: website, SEO foundation, automations and recruitment funnel.",
      },
    ],
  }),
  component: LaunchProgram,
});

const included = [
  {
    icon: Globe,
    title: "Full Custom Professional Website",
    desc: "Built specifically for your agency — not a template. Designed to build trust and convert visitors from day one.",
  },
  {
    icon: Shield,
    title: "Secure Hosting + SSL Security",
    desc: "Your site is fully hosted and secured with SSL included. No extra setup, no surprise fees.",
  },
  {
    icon: Search,
    title: "SEO Foundation",
    desc: "Structured so your agency shows up in local searches for home care, hospice, and caregiver services near you.",
  },
  {
    icon: Smartphone,
    title: "Mobile-Optimized Design",
    desc: "Looks perfect on every device — phone, tablet, or desktop. Families and caregivers search on mobile.",
  },
  {
    icon: Users,
    title: "Built-In Caregiver Application Forms",
    desc: "Start recruiting talent immediately with forms designed to attract and convert caregiver applicants.",
  },
  {
    icon: Wrench,
    title: "Ongoing Website Updates & Support",
    desc: "Throughout the program, we handle updates, changes, and technical support so you can focus on operations.",
  },
  {
    icon: Map,
    title: "Growth Foundation Strategy",
    desc: "Your custom roadmap to attract clients and caregivers — not just a website, but a plan to grow with it.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    desc: "Track website traffic, form submissions, and key growth activity so your agency can understand what is working.",
  },
  {
    icon: MessageSquare,
    title: "Referral Partner Contact Flow",
    desc: "Clear contact paths and referral-focused forms that make it easier for hospitals, clinics, and partners to reach your agency.",
  },
];

const perfectFor = [
  { icon: Home, label: "New Startup Home Care Agencies" },
  { icon: Heart, label: "Home Health Agencies" },
  { icon: Star, label: "Hospice Agencies" },
];

const challenges = [
  "Licensing & certifications",
  "Background checks & insurance",
  "Operational setup & staffing",
  "Months before first revenue",
  "Building credibility from zero",
  "Competing with established agencies",
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function LaunchProgram() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section
          className="relative pt-36 pb-24 overflow-hidden"
          data-testid="section-launch-hero"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="animated-bg-blob bg-emerald-500 w-[550px] h-[550px] top-[-100px] left-[-150px]" />
            <div className="animated-bg-blob bg-cyan-500 w-[400px] h-[400px] top-[20%] right-[-120px] animation-delay-2000" />
            <div
              className="animated-bg-blob bg-teal-600 w-[500px] h-[500px] bottom-[-200px] left-[25%] animation-delay-4000"
              style={{ opacity: 0.15 }}
            />
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 39.5h40V0zm39.5 0V0H0z' stroke='rgba(255,255,255,0.025)' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-emerald-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  Startup-Friendly Program
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-center max-w-4xl mx-auto mb-8"
            >
              <div className="relative inline-block mb-6">
                <h1
                  className="text-5xl lg:text-7xl font-bold leading-[1.08] text-white"
                  data-testid="text-launch-headline"
                  >
                  SOP Support{" "}
                  <span className="text-gradient">
                    Launch Program<span className="relative inline-flex items-center"> 
                      <motion.span
                        initial={{ opacity: 0, scale: 0.7, rotate: -25 }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                          y: [0, -10, 0],
                          x: [0, 6, 0],
                          rotate: [-12, 8, -12],
                        }}
                        transition={{
                          opacity: { duration: 0.4, delay: 0.4 },
                          scale: { duration: 0.4, delay: 0.4 },
                          y: {
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          x: {
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          rotate: {
                            duration: 2.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                        }}
                        className="absolute -right-14 -top-8 hidden h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_35px_rgba(34,211,238,0.45)] backdrop-blur-md sm:flex md:-right-16 md:-top-10"
                        >
                        <Rocket className="h-6 w-6 text-cyan-300" />
                      </motion.span>
                    </span>
                  </span>
                </h1>
              </div>

              <p className="text-xl lg:text-2xl font-semibold text-white/80 mb-3">
                Affordable website &amp; growth support built exclusively for
                home care agencies
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-2xl mx-auto text-center"
            >
              <p className="text-lg text-white/65 leading-relaxed mb-10">
                Starting a home care agency is tough. You're pouring time,
                money, and energy into licensing, certifications, background
                checks, insurance, and operations — all while revenue is still
                months away.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#get-started"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold rounded-full text-white bg-gradient-glow no-default-hover-elevate"
                  data-testid="link-launch-hero-cta"
                >
                  Book a Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="#whats-included"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-semibold rounded-full text-white bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  data-testid="link-launch-see-included"
                >
                  See What's Included
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        <section
          className="py-20 relative overflow-hidden"
          data-testid="section-launch-problem"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-amber-500/30 mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">
                    We Get It
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                  Starting an agency means juggling everything — before revenue
                  even starts.
                </h2>

                <p className="text-white/65 leading-relaxed mb-6">
                  That's exactly why we created the SOP Support Launch Program —
                  the smartest, most affordable way for startup agencies to
                  launch with a professional online presence and a real growth
                  foundation — without a large upfront payment.
                </p>

                <p className="text-lg font-semibold text-emerald-300 leading-relaxed">
                  Launch looking established, credible, and ready for clients —
                  even before you've booked your first patient.
                </p>
              </motion.div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {challenges.map((item, i) => (
                  <motion.div
                    key={item}
                    variants={itemVariant}
                    className="flex items-center gap-3 glass-panel rounded-xl p-4 border-amber-500/10"
                    data-testid={`challenge-item-${i}`}
                  >
                    <div className="w-7 h-7 shrink-0 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
                      <span className="text-xs font-bold text-amber-400">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-white/75">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section
          id="whats-included"
          className="py-24 relative overflow-hidden"
          data-testid="section-launch-included"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="animated-bg-blob bg-emerald-600 w-[500px] h-[500px] top-[10%] right-[-150px] opacity-20" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-emerald-500/30 mb-6">
                <Zap className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  What's Included
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Everything you need to{" "}
                <span className="text-gradient">launch with confidence</span>
              </h2>

              <p className="text-lg text-white/60 max-w-xl mx-auto">
                One program. One monthly payment. A complete professional
                foundation for your agency.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {included.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={itemVariant}
                  whileHover={{
                    y: -6,
                    boxShadow: "0 20px 40px rgba(16,185,129,0.15)",
                  }}
                  className="glass-panel rounded-2xl p-7 border-white/10 group transition-all duration-300 cursor-default"
                  data-testid={`card-included-${i}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/40 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-white/55 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          className="py-20 relative overflow-hidden"
          data-testid="section-launch-perfect-for"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="animated-bg-blob bg-teal-500 w-[400px] h-[400px] bottom-[-100px] left-[-80px] opacity-15 animation-delay-2000" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-panel border-emerald-500/30 mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  Perfect For
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Built for agencies{" "}
                <span className="text-gradient">just like yours</span>
              </h2>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-5">
              {perfectFor.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(16,185,129,0.2)",
                  }}
                  className="flex items-center gap-3 px-8 py-5 rounded-2xl glass-panel border-emerald-500/25 cursor-default transition-all duration-300"
                  data-testid={`perfect-for-${i}`}
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-emerald-400" />
                  </div>

                  <span className="text-base font-bold text-white">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="py-24 relative overflow-hidden"
          data-testid="section-launch-promise"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="animated-bg-blob bg-cyan-600 w-[500px] h-[500px] top-[-80px] right-[10%] opacity-15 animation-delay-4000" />
          </div>

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-panel rounded-3xl p-10 lg:p-16 border-emerald-500/20 text-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-8">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-xs font-bold text-emerald-300 uppercase tracking-widest">
                  Your Goal. Our Promise.
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                A polished, high-converting website that builds instant trust —
                for one simple monthly payment.
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                {[
                  {
                    headline: "Build Instant Trust",
                    desc: "Families and referral partners see a professional agency from the first click.",
                  },
                  {
                    headline: "Generate Qualified Inquiries",
                    desc: "Every page, form, and CTA is designed to turn visitors into real leads.",
                  },
                  {
                    headline: "Position as the Professional Choice",
                    desc: "Look established and credible in your market from day one.",
                  },
                ].map((promise) => (
                  <div
                    key={promise.headline}
                    className="rounded-2xl bg-white/5 border border-white/8 p-6 text-left"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 mb-3" />
                    <h3 className="text-sm font-bold text-white mb-2">
                      {promise.headline}
                    </h3>
                    <p className="text-xs text-white/55 leading-relaxed">
                      {promise.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-left">
                {[
                  "No massive upfront investment.",
                  "No waiting until you're ready.",
                  "Just a professional launch — from day one.",
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <div className="w-5 h-5 shrink-0 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center">
                      <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    </div>

                    <span className="text-sm font-semibold text-white/85">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section
          id="get-started"
          className="py-28 relative overflow-hidden"
          data-testid="section-launch-cta"
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #022c1a 0%, #0c2132 50%, #022c1a 100%)",
            }}
          />
          <div
            className="animated-bg-blob bg-emerald-500 w-[500px] h-[500px] top-[-150px] left-[10%] absolute"
            style={{ opacity: 0.22 }}
          />
          <div
            className="animated-bg-blob bg-cyan-500 w-[400px] h-[400px] bottom-[-150px] right-[5%] absolute animation-delay-2000"
            style={{ opacity: 0.18 }}
          />
          <div
            className="absolute inset-0 opacity-50"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 59.5h60V0zm59.5 0V0H0z' stroke='rgba(255,255,255,0.03)' stroke-width='1' fill='none'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="max-w-3xl mx-auto px-6 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                  Launch Program
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                Ready to launch your agency with a real digital foundation?
              </h2>

              <p className="text-lg text-white/65 mb-10 leading-relaxed">
                Book a free consultation and learn how the SOP Support Launch
                Program can get your agency online, looking professional, and
                ready to attract clients and caregivers — without a large
                upfront cost.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold rounded-full bg-white text-emerald-900 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] transition-all duration-300 no-default-hover-elevate"
                  data-testid="link-launch-schedule"
                >
                  Schedule Free Consultation
                </motion.a>

                <motion.a
                  href="/"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 text-base font-bold rounded-full text-white border-2 border-white/25 bg-white/5 hover:bg-white/10 hover:border-white/40 transition-all duration-300 no-default-hover-elevate"
                  data-testid="link-launch-back-home"
                >
                  Back to SOP Support
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
