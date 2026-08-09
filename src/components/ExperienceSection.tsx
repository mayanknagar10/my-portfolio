import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const EXPERIENCES = [
  {
    period: "04/2026 — Present",
    badge: "Current",
    company: "Helmholtz Centre Hereon GmbH",
    role: "Master Thesis · Geesthacht, Germany",
    bullets: [
      "Developing ViTFMDiT and ViTDiT architectures for microstructure reconstruction using diffusion models, flow-matching techniques, and PyTorch workflows.",
      "Building reproducible training, validation, checkpointing, and inference pipelines for GPU-accelerated generative vision models.",
      "Designing latent conditioning, bottleneck mechanisms, and reconstruction losses for fidelity, grain orientation, and boundary preservation.",
    ],
    tools: ["PyTorch", "Diffusion Models", "Flow Matching", "Computer Vision"],
  },
  {
    period: "04/2025 — 09/2025",
    badge: "6 months",
    company: "Harbour Energy",
    role: "Data Science Intern · Barnstorf, Germany",
    bullets: [
      "Designed an ML pipeline with CycleGAN, FFT, and interpolation to upscale 64³ micro-CT scans to 1024³ resolution.",
      "Enhanced image-processing and 3D super-resolution workflows for downstream simulation and analysis.",
      "Automated segmentation, porosity analysis, and training workflows to reduce manual intervention.",
    ],
    tools: ["CycleGAN", "FFT", "3D Imaging", "Automation"],
  },
  {
    period: "01/2022 — 08/2024",
    badge: "2.5 years",
    company: "Cognizant Technology Solutions",
    role: "Programmer Analyst — Data Engineering · Pune, India",
    bullets: [
      "Engineered ETL pipelines with Azure Data Factory, Azure Storage, SQL Server, and PySpark, reducing data migration latency by 30%.",
      "Optimized automated data-processing workflows, improving processing efficiency by 25% and supporting data-quality checks.",
      "Built reports and dashboards with SQL, PySpark, and IBM Cognos Analytics for stakeholder decision-making.",
    ],
    tools: ["Azure Data Factory", "PySpark", "SQL Server", "ETL"],
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.72", "end 0.72"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 55, damping: 24, mass: 0.65 });

  return (
    <section ref={sectionRef} id="experience" className="soft-section px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-intro mb-14 max-w-[760px]">
          <p className="soft-kicker">Experience</p>
          <h2 className="soft-title">From enterprise data pipelines to generative research.</h2>
          <p className="soft-lead mt-5 max-w-[650px]">
            The tools changed, but the pattern stayed similar: understand the data, build the workflow carefully, measure what improved, and make the result usable.
          </p>
        </div>

        <div className="relative">
          <div className="timeline-track hidden md:block" />
          {!reduceMotion && <motion.div className="timeline-progress hidden md:block" style={{ scaleY: smoothProgress }} />}

          <div className="space-y-4 md:pl-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.article
                key={exp.company}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.66, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
                className="experience-card relative"
              >
                <span className="timeline-node hidden md:block" aria-hidden="true" />
                <div className="grid gap-7 lg:grid-cols-[220px_1fr] lg:gap-12">
                  <div>
                    <p className="experience-period">{exp.period}</p>
                    <span className="experience-badge">{exp.badge}</span>
                  </div>

                  <div>
                    <h3 className="experience-company">{exp.company}</h3>
                    <p className="experience-role">{exp.role}</p>
                    <ul className="mt-6 space-y-3">
                      {exp.bullets.map((bullet) => (
                        <li key={bullet} className="experience-bullet">{bullet}</li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {exp.tools.map((tool) => <span key={tool} className="tech-chip-soft">{tool}</span>)}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
