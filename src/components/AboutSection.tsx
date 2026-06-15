import { useState } from "react";
import mayankProfile from "@/assets/profile-pic.png";
import { Download } from "lucide-react";

const EDUCATION = [
  {
    degree: "M.Sc. in Data Science",
    school: "Hamburg University of Technology (TUHH)",
    period: "10/2024 – Present",
    place:  "Hamburg, Germany",
    color:  "var(--c-accent)",
  },
  {
    degree: "B.Tech. in Computer Science & Engineering",
    school: "Dr. Babasaheb Ambedkar Technological University",
    period: "08/2018 – 07/2022",
    place:  "Lonere, India",
    color:  "#7c3aed",
  },
];

const AboutSection = () => {
  const [imgError, setImgError] = useState(false);
  const openResume = () =>
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <section
      id="about"
      className="px-8 py-24"
      style={{ background: "var(--c-bg-base)" }}
    >
      <div className="max-w-[1240px] mx-auto grid gap-12 lg:gap-20 items-start grid-cols-1 lg:grid-cols-[420px_1fr]">

        {/* ── Portrait ── */}
        <div className="reveal">
          {imgError ? (
            <div
              className="w-full rounded-sm overflow-hidden flex items-end p-8"
              style={{
                aspectRatio: "4/5",
                background: "linear-gradient(150deg, #141416 0%, #1e1e2e 60%, #0f0f1a 100%)",
              }}
            >
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Mayank Nagar · Data Scientist
              </span>
            </div>
          ) : (
            <img
              src={mayankProfile}
              alt="Mayank Nagar"
              className="w-full object-cover object-top rounded-sm"
              style={{ aspectRatio: "4/5" }}
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* ── Content ── */}
        <div className="reveal" style={{ transitionDelay: "0.12s" }}>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
            style={{ color: "var(--c-accent)" }}
          >
            About Me
          </p>

          <h2
            className="font-heading font-bold leading-none mb-6"
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              letterSpacing: "-0.03em",
              color: "var(--c-heading)",
            }}
          >
            Data-Driven
            <br />
            by Nature
          </h2>

          <p
            className="text-base leading-relaxed mb-4"
            style={{ color: "var(--c-body)" }}
          >
            I'm a Data Science M.Sc. student at Hamburg University of Technology,
            combining rigorous academic training with hands-on industry experience.
            My work spans data engineering, machine learning, and ETL pipeline
            development — building systems that don't just process data but generate
            actionable intelligence.
          </p>
          <p
            className="text-base leading-relaxed mb-10"
            style={{ color: "var(--c-body)" }}
          >
            Previously at Cognizant Technology Solutions, I architected Azure-based
            pipelines serving enterprise clients. Now at Harbour Energy, I apply deep
            learning to geoscience challenges while pursuing advanced research in AI
            and optimization.
          </p>

          {/* Education cards */}
          <div className="flex flex-col gap-3 mb-8">
            {EDUCATION.map((edu) => (
              <div
                key={edu.degree}
                className="rounded-sm p-5 transition-shadow duration-200"
                style={{
                  background:  "var(--c-card)",
                  border:      "1px solid var(--c-border)",
                  borderLeft:  `3px solid ${edu.color}`,
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow =
                    "0 4px 20px rgba(0,0,0,0.08)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.boxShadow = "none")
                }
              >
                <p
                  className="font-heading font-semibold mb-1 text-base"
                  style={{ color: "var(--c-heading)", letterSpacing: "-0.01em" }}
                >
                  {edu.degree}
                </p>
                <p className="text-sm font-medium mb-2" style={{ color: edu.color }}>
                  {edu.school}
                </p>
                <div
                  className="flex gap-4 font-mono text-[11px]"
                  style={{ color: "var(--c-muted-lt)", letterSpacing: "0.04em" }}
                >
                  <span>{edu.period}</span>
                  <span>{edu.place}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Download CV */}
          <button
            onClick={openResume}
            className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded transition-all duration-200"
            style={{ border: "1px solid var(--c-accent)", color: "var(--c-accent)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--c-accent)";
              (e.currentTarget as HTMLElement).style.color      = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color      = "var(--c-accent)";
            }}
          >
            <Download className="w-4 h-4" />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
