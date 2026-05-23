import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { TrustServicePreview } from "@/components/TrustServicePreview";
import { WhySopPreview } from "@/components/WhySopPreview";
import { FinalCTASection } from "@/components/FinalCTASection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SOP Support — Websites & Growth Systems for Care Agencies" },
      {
        name: "description",
        content:
          "Premium websites, local SEO and recruitment systems built exclusively for home health, hospice and home care agencies.",
      },
      { property: "og:title", content: "SOP Support — Websites & Growth Systems for Care Agencies" },
      {
        property: "og:description",
        content:
          "We build websites and digital growth systems for home health, hospice and home care agencies.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <TrustServicePreview />
        <WhySopPreview />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
