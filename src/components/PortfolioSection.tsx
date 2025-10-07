import { ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Routing Tool for High and Heavy Cargoes",
      company: "Siemens Gamesa Renewable Energy & TUHH",
      period: "11/2024 – 03/2025",
      type: "Industry Project",
      description: "Developed Python routines to optimize oversized cargo routing in Germany, meeting weight and bridge constraints. Extended Yen's algorithm for secure alternate routes and integrated time/distance and permit data.",
      technologies: ["Python", "Graph Algorithms", "Route Optimization", "Yen's Algorithm"],
      highlights: [
        "Optimized routing for oversized cargo transportation",
        "Implemented advanced graph algorithms for secure routing",
        "Integrated real-time permit and constraint data",
        "Enhanced logistics efficiency for renewable energy projects"
      ],
      status: "completed",
      codeUrl: "https://github.com/ShivamSuri05/routing-tool",
      liveUrl: ""
    },
    {
      title: "Dynamic Urban Transit Optimization",
      company: "IRJET Research Publication",
      period: "08/2023 – 01/2024",
      type: "Research Project",
      description: "Proposed a Graph Neural Network (GNN) approach for real-time public transportation network management, focusing on urban transit optimization and efficiency improvements.",
      technologies: ["Graph Neural Networks", "Python", "Network Analysis", "Transportation Systems"],
      highlights: [
        "Developed GNN-based optimization framework",
        "Real-time transit network management",
        "Published in IRJET (ISSN No. 2395-0072)",
        "Improved urban transportation efficiency"
      ],
      status: "completed",
      publication: "IRJET ISSN No. 2395-0072"
    },
    {
      title: "Stock Market Analysis and Prediction",
      company: "Bachelor Thesis Project",
      period: "08/2021 – 07/2022",
      type: "Academic Project",
      description: "Analyzed real-time stock market data using deep learning and LSTM networks for price trend prediction, enabling accurate closing price forecasts and comprehensive financial visualizations.",
      technologies: ["Deep Learning", "LSTM", "Python", "Financial Analysis", "Data Visualization"],
      highlights: [
        "Real-time stock market data analysis",
        "LSTM-based price prediction models",
        "Advanced financial visualization techniques",
        "Accurate closing price forecasting system"
      ],
      status: "completed",
      codeUrl: "https://github.com/mayanknagar10/stock-market-analysis-and-prediction",
      liveUrl: ""
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ongoing':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'completed':
        return 'bg-primary/10 text-primary border-primary/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getProjectGradient = (index: number) => {
    const gradients = [
      'from-accent/5 to-accent/10',
      'from-primary/5 to-primary/10',
      'from-accent-secondary/5 to-accent-secondary/10'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section id="portfolio" className="section-container bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative solutions spanning machine learning, data engineering, and research
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`portfolio-card bg-gradient-to-r ${getProjectGradient(index)} animate-slide-up`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Project Info */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="space-y-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                        {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                      </span>
                      <span className="px-3 py-1 bg-secondary rounded-full text-sm font-medium text-secondary-foreground">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
                    <div className="flex items-center gap-4 text-muted-foreground">
                      <span className="font-medium text-accent">{project.company}</span>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    {project.description}
                  </p>
                  {/* Key Highlights */}
                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span className="text-foreground/80 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {project.publication && (
                    <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
                      <p className="text-sm text-accent font-medium">
                        📄 Published: {project.publication}
                      </p>
                    </div>
                  )}
                </div>
                {/* Technologies & Actions */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-card border border-border rounded-lg text-sm text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {project.codeUrl ? (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button variant="outline" className="w-full justify-start">
                          <Github className="w-4 h-4 mr-2" />
                          View Code
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" className="w-full justify-start" disabled>
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Button>
                    )}

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full block"
                      >
                        <Button variant="outline" className="w-full justify-start">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    ) : (
                      <Button variant="outline" className="w-full justify-start" disabled>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    <p className="text-xs text-muted-foreground">
                      *Contact for project details and availability
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <div className="portfolio-card max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              More Projects Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              Currently working on exciting new data science projects and research initiatives.
            </p>
            <Button className="btn-hero">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;