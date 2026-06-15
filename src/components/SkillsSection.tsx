import { Monitor, Brain, Database, Code2 } from "lucide-react";

const CATEGORIES = [
  {
    name: "Data Analytics & Visualization",
    icon: <Monitor className="w-[18px] h-[18px]" />,
    tags: ["Data Analysis", "Tableau", "Power BI", "Data Wrangling", "Matplotlib", "Seaborn"],
  },
  {
    name: "Programming & Machine Learning",
    icon: <Brain className="w-[18px] h-[18px]" />,
    tags: ["Python", "R", "SQL", "PyTorch", "Scikit-Learn", "PySpark", "TensorFlow", "Keras"],
  },
  {
    name: "Data Engineering & ETL",
    icon: <Database className="w-[18px] h-[18px]" />,
    tags: ["ETL Pipelines", "Azure Data Factory", "Data Migration", "SQL Server", "Azure Storage", "IBM Cognos"],
  },
  {
    name: "Tools & Platforms",
    icon: <Code2 className="w-[18px] h-[18px]" />,
    tags: ["Microsoft Azure", "Git", "Docker", "Jupyter", "VS Code", "Linux", "SSMS", "Pandas · NumPy"],
  },
];

const SkillsSection = () => (
  <section
    id="skills"
    className="px-8 py-24"
    style={{ background: "var(--c-bg-surface)" }}
  >
    <div className="max-w-[1240px] mx-auto">
      <p
        className="reveal font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
        style={{ color: "var(--c-accent)" }}
      >
        Technical Proficiency
      </p>
      <h2
        className="reveal font-heading font-bold leading-none mb-5"
        style={{
          fontSize: "clamp(36px, 5vw, 60px)",
          letterSpacing: "-0.03em",
          color: "var(--c-heading)",
          transitionDelay: "0.05s",
        }}
      >
        Skills & Stack
      </h2>
      <p
        className="reveal text-base mb-16 max-w-[520px] leading-relaxed"
        style={{ color: "var(--c-lead)", transitionDelay: "0.1s" }}
      >
        Full-lifecycle data expertise — from raw ingestion to deployed intelligence.
      </p>

      {/* 2×2 grid */}
      <div
        className="reveal grid grid-cols-1 md:grid-cols-2 gap-px rounded-sm overflow-hidden"
        style={{
          background: "var(--c-border)",
          border: "1px solid var(--c-border)",
          transitionDelay: "0.15s",
        }}
      >
        {CATEGORIES.map((cat) => (
          <div
            key={cat.name}
            className="p-9 transition-colors duration-200"
            style={{ background: "var(--c-card)" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--c-card-hover)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--c-card)")
            }
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-9 h-9 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: "var(--c-accent-lt)", color: "var(--c-accent)" }}
              >
                {cat.icon}
              </div>
              <span
                className="font-heading font-semibold text-sm"
                style={{ color: "var(--c-heading)", letterSpacing: "-0.01em" }}
              >
                {cat.name}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {cat.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-medium rounded-sm cursor-default transition-all duration-200"
                  style={{ border: "1px solid var(--c-border)", color: "var(--c-muted)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--c-accent)";
                    (e.currentTarget as HTMLElement).style.color       = "var(--c-accent)";
                    (e.currentTarget as HTMLElement).style.background  = "var(--c-accent-lt)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--c-border)";
                    (e.currentTarget as HTMLElement).style.color       = "var(--c-muted)";
                    (e.currentTarget as HTMLElement).style.background  = "transparent";
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
