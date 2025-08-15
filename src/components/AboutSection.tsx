import { GraduationCap, MapPin, Calendar } from "lucide-react";
import mayankProfile from "@/assets/profile-pic.png"; // ✅ Import instead of static path

const AboutSection = () => {
  return (
    <section id="about" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about transforming data into actionable insights and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src={mayankProfile} // ✅ Bundled image
                  alt="Mayank Nagar" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/10 to-accent-secondary/10 blur-2xl -z-10" />
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a dedicated Data Science M.Sc. student at Hamburg University of Technology (TUHH), 
                specializing in data engineering, machine learning, and ETL pipelines. My passion lies in 
                creating innovative data-driven solutions that solve real-world problems.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                With extensive experience in building robust data infrastructure and developing advanced 
                analytics solutions, I bring a unique combination of technical expertise and analytical 
                thinking to every project.
              </p>
            </div>
            
            {/* Education Timeline */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Education</h3>
              
              <div className="space-y-4">
                {/* Current Education */}
                <div className="portfolio-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground">
                        M.Sc. in Data Science
                      </h4>
                      <p className="text-accent font-medium">
                        Hamburg University of Technology (TUHH)
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>10/2024 – Present</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Hamburg, Germany</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Previous Education */}
                <div className="portfolio-card">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-secondary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-accent-secondary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-foreground">
                        B.Tech. in Computer Science and Engineering
                      </h4>
                      <p className="text-accent-secondary font-medium">
                        Dr. Babasaheb Ambedkar Technological University
                      </p>
                      <div className="flex items-center gap-4 mt-2 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>08/2018 – 07/2022</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>Lonere, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
