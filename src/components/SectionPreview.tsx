import { User, Briefcase, Code2, FolderOpen, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SectionPreviewProps {
  onOpenPanel: (panelId: string) => void;
}

const SectionPreview = ({ onOpenPanel }: SectionPreviewProps) => {
  const sections = [
    {
      id: 'about',
      title: 'About Me',
      description: 'Learn about my background, education, and passion for technology',
      icon: User,
      gradient: 'from-accent/20 to-primary/20'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Explore my professional journey and key accomplishments',
      icon: Briefcase,
      gradient: 'from-primary/20 to-accent/20'
    },
    {
      id: 'skills',
      title: 'Skills',
      description: 'Discover my technical expertise and proficiency levels',
      icon: Code2,
      gradient: 'from-accent/20 to-primary/20'
    },
    {
      id: 'portfolio',
      title: 'Portfolio',
      description: 'View my projects and contributions to the field',
      icon: FolderOpen,
      gradient: 'from-primary/20 to-accent/20'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Explore My Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover more about my background, skills, and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => {
            const IconComponent = section.icon;
            return (
              <div
                key={section.id}
                className="group cursor-pointer"
                onClick={() => onOpenPanel(section.id)}
              >
                <div className={`bg-gradient-to-br ${section.gradient} backdrop-blur-sm border border-border/50 rounded-2xl p-8 h-full hover:shadow-2xl hover:shadow-accent/20 transition-all duration-500 hover:-translate-y-2`}>
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-background/50 rounded-2xl group-hover:bg-accent/10 transition-colors duration-300">
                      <IconComponent className="h-8 w-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {section.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="mt-4 group-hover:bg-accent/10 group-hover:text-accent transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <Button
            onClick={() => onOpenPanel('contact')}
            className="bg-gradient-to-r from-accent to-primary hover:from-accent/80 hover:to-primary/80 text-white px-8 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-accent/20 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionPreview;