import { Calendar, Award, GraduationCap, Briefcase, Code } from "lucide-react";

const TimelineHighlights = () => {
  const highlights = [
    {
      year: "2025",
      title: "Data Science Intern",
      subtitle: "Harbour Energy",
      description: "Developing high-resolution microCT images using CycleGAN, FFT, and interpolation techniques for 3D rock micro-models",
      icon: Briefcase,
      type: "experience"
    },
    {
      year: "2024",
      title: "M.Sc. Data Science",
      subtitle: "Hamburg University of Technology (TUHH)",
      description: "Currently pursuing Master's degree in Data Science with focus on advanced machine learning and AI",
      icon: GraduationCap,
      type: "education"
    },
    {
      year: "2022-24",
      title: "Programmer Analyst",
      subtitle: "Cognizant Technology Solutions",
      description: "Enhanced strategic decision-making efficiency by 20% using IBM Cognos Analytics and Azure Data Factory",
      icon: Briefcase,
      type: "experience"
    },
    {
      year: "2022",
      title: "B.Tech. Computer Engineering",
      subtitle: "Dr. Babasaheb Ambedkar Technological University",
      description: "Graduated with Bachelor's degree in Computer Science and Engineering",
      icon: Award,
      type: "achievement"
    }
  ];

  const getIconColors = (type: string) => {
    switch (type) {
      case 'education':
        return 'text-blue-500 bg-blue-50 dark:bg-blue-900/20';
      case 'experience':
        return 'text-green-500 bg-green-50 dark:bg-green-900/20';
      case 'achievement':
        return 'text-purple-500 bg-purple-50 dark:bg-purple-900/20';
      case 'project':
        return 'text-orange-500 bg-orange-50 dark:bg-orange-900/20';
      default:
        return 'text-accent bg-accent/10';
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Key Highlights
          </h2>
          <p className="text-xl text-muted-foreground">
            My journey through education, achievements, and professional growth
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-primary"></div>
          
          <div className="space-y-12">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl ${getIconColors(item.type)}`}>
                          <IconComponent className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <span className="text-2xl font-bold text-accent">{item.year}</span>
                            <Calendar className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                          <p className="text-accent font-medium mb-2">{item.subtitle}</p>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineHighlights;