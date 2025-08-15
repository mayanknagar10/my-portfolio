import { useState } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SectionPreview from "@/components/SectionPreview";
import TimelineHighlights from "@/components/TimelineHighlights";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionModal from "@/components/SectionModal";

const Index = () => {
  const [activePanel, setActivePanel] = useState<string | null>(null);

  const openPanel = (panelId: string) => {
    setActivePanel(panelId);
  };

  const closePanel = () => {
    setActivePanel(null);
  };

  const renderPanelContent = () => {
    switch (activePanel) {
      case 'about':
        return <AboutSection />;
      case 'experience':
        return <ExperienceSection />;
      case 'skills':
        return <SkillsSection />;
      case 'portfolio':
        return <PortfolioSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return null;
    }
  };

  const getPanelTitle = () => {
    switch (activePanel) {
      case 'about':
        return 'About Me';
      case 'experience':
        return 'Experience';
      case 'skills':
        return 'Skills';
      case 'portfolio':
        return 'Portfolio';
      case 'contact':
        return 'Contact';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onOpenPanel={openPanel} />
      <main>
        <HeroSection onOpenPanel={openPanel} />
        <SectionPreview onOpenPanel={openPanel} />
        <TimelineHighlights />
      </main>
      <Footer />
      
      {/* Section Modal */}
      <SectionModal
        isOpen={!!activePanel}
        onClose={closePanel}
        title={getPanelTitle()}
      >
        {renderPanelContent()}
      </SectionModal>
    </div>
  );
};

export default Index;
