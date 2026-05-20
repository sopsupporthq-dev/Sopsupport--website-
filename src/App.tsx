import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MeetOurTeam from "@/pages/MeetOurTeam";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SpecializationSection } from "@/components/SpecializationSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AgencyProblemsSection } from "@/components/AgencyProblemsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ResourcesSection } from "@/components/ResourcesSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTASection } from "@/components/FinalCTASection";
import { Footer } from "@/components/Footer";

const queryClient = new QueryClient();

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <SpecializationSection />
        <ServicesSection />
        <AgencyProblemsSection />
        <ProcessSection />
        <ResultsSection />
        <ResourcesSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
