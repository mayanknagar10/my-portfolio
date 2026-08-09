import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PageDataBackground from "@/components/PageDataBackground";

const Index = () => (
  <div className="portfolio-shell min-h-screen overflow-x-hidden">
    <Navigation />
    <PageDataBackground />

    <main className="relative z-10">
      <HeroSection />
      <div className="portfolio-world">
        <StatsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <PortfolioSection />
        <ContactSection />
      </div>
    </main>

    <Footer />
  </div>
);

export default Index;
