import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

interface NavigationProps {
  onOpenPanel: (panelId: string) => void;
}

const Navigation = ({ onOpenPanel }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-background/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300"
          >
            Mayank<span className="text-accent">.</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onOpenPanel(item.id)}
                  className="text-foreground/80 hover:text-accent transition-colors duration-300 font-medium relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-3 pl-4 border-l border-border">
              <ModeToggle />
              <Button variant="outline" size="sm" onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank") className="border-accent text-accent hover:bg-accent hover:text-accent-foreground" aria-label="Download Resume PDF">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-accent transition-colors duration-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-border">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onOpenPanel(item.id);
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-foreground/80 hover:text-accent hover:bg-accent/10 rounded-md transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <div className="px-3 py-2">
                <Button variant="outline" size="sm" onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank") className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground" aria-label="Download Resume PDF">
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
