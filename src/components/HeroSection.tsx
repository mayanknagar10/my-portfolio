import { Button } from "@/components/ui/button";
import { ChevronDown, Download, Github, Linkedin, Mail, BarChart3, Trophy } from "lucide-react";
import heroBackground from "@/assets/hero-background-minimal.jpg";
const mayankProfile = "/lovable_uploads/profile-pic (5).png";

interface HeroSectionProps {
  onOpenPanel: (panelId: string) => void;
}

const HeroSection = ({ onOpenPanel }: HeroSectionProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section id="hero" className="hero-section relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }} />
      <div className="absolute inset-0 bg-background/40 dark:bg-background/70" />
      
      {/* Data Pattern Overlay */}
      <div className="data-pattern" />
      
      {/* Main Content */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground dark:text-primary-foreground">
                Mayank
                <span className="block text-accent">Nagar</span>
              </h1>
              <p className="text-xl md:text-2xl text-foreground/80 dark:text-primary-foreground/80 font-light">
                Data Scientist Crafting Innovative Data-Driven Solutions
              </p>
            </div>
            
            <p className="text-lg text-foreground/70 dark:text-primary-foreground/70 max-w-xl leading-relaxed">
              Data Science M.Sc. student at Hamburg University of Technology (TUHH) with expertise in data engineering, machine learning, and ETL pipelines, passionate about innovative data-driven solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero" onClick={() => onOpenPanel('portfolio')}>
                View Portfolio
              </Button>
              <Button variant="outline" onClick={() => onOpenPanel('contact')} className="bg-accent/20 text-foreground dark:text-primary-foreground border-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300 px-8 py-4 rounded-lg font-semibold">
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a href="https://www.linkedin.com/in/mayank-nagar10/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/mayanknagar10" target="_blank" rel="noopener noreferrer" className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="GitHub">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://public.tableau.com/app/profile/mayank.nagar3143/vizzes" target="_blank" rel="noopener noreferrer" className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="Tableau">
                <BarChart3 className="w-6 h-6" />
              </a>
              <a href="https://www.kaggle.com/nmayank10" target="_blank" rel="noopener noreferrer" className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent transition-colors duration-300" aria-label="Kaggle">
                <Trophy className="w-6 h-6" />
              </a>
              <a href="mailto:nmayank.790@gmail.com" className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent transition-colors duration-300">
                <Mail className="w-6 h-6" />
              </a>
              <Button variant="ghost" size="sm" onClick={() => window.open('/resume.pdf', '_blank')} className="text-foreground/60 dark:text-primary-foreground/60 hover:text-accent hover:bg-accent/10 transition-all duration-300" aria-label="Download Resume PDF">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl animate-float">
                <img src={mayankProfile} alt="Mayank Nagar" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-accent-secondary/20 blur-xl animate-pulse-glow -z-10" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-foreground/60 dark:text-primary-foreground/60 cursor-pointer hover:text-accent transition-colors duration-300" onClick={() => onOpenPanel('about')} />
      </div>
    </section>;
};
export default HeroSection;
