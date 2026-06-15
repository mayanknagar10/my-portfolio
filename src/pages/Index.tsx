import { useScrollReveal }    from "@/hooks/useScrollReveal";
import Navigation             from "@/components/Navigation";
import HeroSection            from "@/components/HeroSection";
import StatsSection           from "@/components/StatsSection";
import AboutSection           from "@/components/AboutSection";
import ExperienceSection      from "@/components/ExperienceSection";
import SkillsTicker           from "@/components/SkillsTicker";
import SkillsSection          from "@/components/SkillsSection";
import PortfolioSection       from "@/components/PortfolioSection";
import ContactSection         from "@/components/ContactSection";
import Footer                 from "@/components/Footer";

const Index = () => {
  // Wire up scroll-reveal once for the whole page
  useScrollReveal();

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsTicker />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
