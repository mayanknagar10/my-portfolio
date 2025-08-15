import { Briefcase, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Harbour Energy",
      location: "Barnstorf, Germany",
      period: "04/2025 – Present",
      type: "current",
      description: [
        "Developing high-resolution microCT images using CycleGAN, FFT, and interpolation techniques for 3D rock micro-models",
        "Improving fluid flow simulation accuracy through advanced image processing algorithms",
        "Enhancing machine learning platform development with cutting-edge techniques",
        "Exploring GAN algorithms including 3D EDSR for enhanced image reconstruction"
      ]
    },
    {
      title: "Programmer Analyst (Data Engineering – AIA)",
      company: "Cognizant Technology Solutions",
      location: "Pune, India", 
      period: "08/2022 – 08/2024",
      type: "past",
      description: [
        "Built robust ETL pipelines using Azure Data Factory, Azure Storage, and SQL Server, reducing latency by 30%",
        "Improved decision-making efficiency by 20% through implementation of IBM Cognos Analytics",
        "Optimized codebase achieving 70–80% data accuracy across multiple projects",
        "Authored comprehensive technical documentation for data engineering processes"
      ]
    },
    {
      title: "Programmer Analyst Trainee (AIA) – Intern",
      company: "Cognizant Technology Solutions",
      location: "Pune, India",
      period: "01/2022 – 05/2022",
      type: "internship",
      description: [
        "Created PySpark and SQL visualizations, improving stakeholder engagement by 25%",
        "Enhanced decision-making speed by 30% through streamlined data presentation",
        "Reduced processing errors by 15% through advanced data preprocessing techniques",
        "Collaborated with cross-functional teams to deliver data-driven insights"
      ]
    }
  ];

  const getCardStyle = (type: string) => {
    switch (type) {
      case 'current':
        return 'border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-transparent';
      case 'past':
        return 'border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent';
      case 'internship':
        return 'border-l-4 border-l-accent-secondary bg-gradient-to-r from-accent-secondary/5 to-transparent';
      default:
        return '';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'current':
        return 'text-accent bg-accent/10';
      case 'past':
        return 'text-primary bg-primary/10';
      case 'internship':
        return 'text-accent-secondary bg-accent-secondary/10';
      default:
        return 'text-accent bg-accent/10';
    }
  };

  return (
    <section id="experience" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Professional <span className="text-accent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building data solutions that drive innovation and business impact
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`portfolio-card ${getCardStyle(exp.type)} animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-xl ${getIconColor(exp.type)}`}>
                  <Briefcase className="w-8 h-8" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl font-semibold text-accent mb-2">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                        <p className="text-foreground/80 leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;