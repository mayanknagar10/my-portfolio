import { BarChart3, Code, Database, Settings, Brain, Cpu } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Data Analytics & Visualization",
      icon: BarChart3,
      color: "accent",
      skills: [
        "Data Analysis",
        "Tableau",
        "Power BI",
        "Data Wrangling"
      ]
    },
    {
      title: "Programming & Machine Learning",
      icon: Brain,
      color: "primary",
      skills: [
        "Python",
        "R",
        "SQL",
        "PyTorch",
        "Scikit-Learn",
        "PySpark"
      ]
    },
    {
      title: "Software & Tools",
      icon: Settings,
      color: "accent-secondary",
      skills: [
        "Microsoft Excel",
        "SSMS",
        "VS Code",
        "Git",
        "Microsoft Azure"
      ]
    },
    {
      title: "Data Engineering & ETL",
      icon: Database,
      color: "accent",
      skills: [
        "ETL Pipelines",
        "Data Migration",
        "Azure Data Factory",
        "Data Processing"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'accent':
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          progress: 'from-accent to-accent/80'
        };
      case 'primary':
        return {
          bg: 'bg-primary/10',
          text: 'text-primary',
          progress: 'from-primary to-primary/80'
        };
      case 'accent-secondary':
        return {
          bg: 'bg-accent-secondary/10',
          text: 'text-accent-secondary',
          progress: 'from-accent-secondary to-accent-secondary/80'
        };
      default:
        return {
          bg: 'bg-accent/10',
          text: 'text-accent',
          progress: 'from-accent to-accent/80'
        };
    }
  };

  return (
    <section id="skills" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Technical <span className="text-accent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive expertise across the data science and engineering stack
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div 
                key={categoryIndex}
                className="portfolio-card animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl ${colors.bg}`}>
                    <IconComponent className={`w-8 h-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-card border border-border rounded-full text-foreground/80 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Additional Skills Tags */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Additional Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "TensorFlow", "Keras", "Pandas", "NumPy", "Matplotlib", "Seaborn",
              "Jupyter", "Docker", "Linux", "Statistical Analysis", "Deep Learning",
              "Neural Networks", "Computer Vision", "NLP", "Time Series Analysis"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-card border border-border rounded-full text-foreground/80 hover:border-accent hover:text-accent transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;