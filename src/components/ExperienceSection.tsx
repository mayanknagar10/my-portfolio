const EXPERIENCES = [
  {
    period:  ["04/2025", "Present"],
    badge:   "Current",
    current: true,
    company: "Harbour Energy",
    role:    "Data Science Intern · Barnstorf, Germany",
    bullets: [
      "Developing high-resolution microCT images using CycleGAN, FFT, and interpolation for 3D rock micro-models",
      "Improving fluid flow simulation accuracy through advanced image processing algorithms",
      "Exploring GAN architectures including 3D EDSR for enhanced image reconstruction",
      "Enhancing ML platform development with cutting-edge deep learning techniques",
    ],
  },
  {
    period:  ["08/2022", "08/2024"],
    badge:   "2 Years",
    current: false,
    company: "Cognizant",
    role:    "Programmer Analyst — Data Engineering (AIA) · Pune, India",
    bullets: [
      "Built robust ETL pipelines using Azure Data Factory, Azure Storage, and SQL Server — reducing latency by 30%",
      "Improved strategic decision-making efficiency by 20% through IBM Cognos Analytics implementation",
      "Optimised codebase achieving 70–80% data accuracy across multiple enterprise projects",
      "Authored comprehensive technical documentation for data engineering processes",
    ],
  },
  {
    period:  ["01/2022", "05/2022"],
    badge:   "Internship",
    current: false,
    company: "Cognizant",
    role:    "Programmer Analyst Trainee (AIA) · Pune, India",
    bullets: [
      "Created PySpark and SQL visualisations, improving stakeholder engagement by 25%",
      "Enhanced decision-making speed by 30% through streamlined data presentation",
      "Reduced processing errors by 15% via advanced data preprocessing techniques",
    ],
  },
];

const ExperienceSection = () => (
  <section
    id="experience"
    className="px-8 py-24"
    style={{ background: "#141416" }}
  >
    <div className="max-w-[1240px] mx-auto">
      {/* Header */}
      <p
        className="reveal font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
        style={{ color: "#60a5fa" }}
      >
        Work History
      </p>
      <h2
        className="reveal font-heading font-bold leading-none mb-5"
        style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          letterSpacing: "-0.03em",
          color: "#FFFFFF",
          transitionDelay: "0.05s",
        }}
      >
        Professional Experience
      </h2>
      <p
        className="reveal text-base mb-16 max-w-[520px] leading-relaxed"
        style={{ color: "rgba(255,255,255,0.4)", transitionDelay: "0.1s" }}
      >
        Building data infrastructure and intelligent solutions across energy, consulting, and academia.
      </p>

      {/* Timeline list */}
      <div>
        {EXPERIENCES.map((exp, i) => (
          <div
            key={i}
            className="reveal grid grid-cols-1 md:grid-cols-[180px_1fr] py-12"
            style={{
              gap: "3.5rem",
              borderBottom: i < EXPERIENCES.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              transitionDelay: `${0.15 + i * 0.1}s`,
            }}
          >
            {/* Left: period */}
            <div className="pt-1">
              <p
                className="font-mono text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.28)", letterSpacing: "0.05em" }}
              >
                {exp.period[0]}
                <br />
                {exp.period[1]}
              </p>
              <span
                className="inline-block mt-3 w-2 h-2 rounded-full"
                style={{
                  background: "#2563EB",
                  boxShadow: "0 0 0 4px rgba(37,99,235,0.18)",
                }}
              />
            </div>

            {/* Right: content */}
            <div>
              <span
                className="inline-block mb-3 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] rounded-sm"
                style={
                  exp.current
                    ? {
                        background: "rgba(37,99,235,0.14)",
                        color: "#93c5fd",
                        border: "1px solid rgba(37,99,235,0.28)",
                      }
                    : {
                        background: "rgba(255,255,255,0.05)",
                        color: "rgba(255,255,255,0.3)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }
                }
              >
                {exp.badge}
              </span>

              <h3
                className="font-heading font-bold mb-1"
                style={{ fontSize: 24, letterSpacing: "-0.025em", color: "#FFFFFF" }}
              >
                {exp.company}
              </h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.4)" }}>
                {exp.role}
              </p>

              <ul className="flex flex-col gap-2.5">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="text-sm leading-relaxed pl-5 relative"
                    style={{ color: "rgba(255,255,255,0.55)" }}
                  >
                    <span
                      className="absolute left-0 font-mono text-xs"
                      style={{ color: "#2563EB", top: 1 }}
                    >
                      —
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
