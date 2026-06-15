import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    type:    "Industry Project",
    title:   "Routing Tool for High & Heavy Cargoes",
    company: "Siemens Gamesa Renewable Energy & TUHH",
    period:  "11/2024 – 03/2025",
    desc:    "Developed Python routines to optimize oversized cargo routing in Germany, meeting weight and bridge load constraints. Extended Yen's algorithm to discover secure alternate routes and integrated real-time permit and distance data for renewable energy logistics.",
    tags:    ["Python", "Graph Algorithms", "Route Optimization", "Yen's Algorithm"],
    href:    "https://github.com/ShivamSuri05/routing-tool",
  },
  {
    type:    "Research Publication",
    title:   "Dynamic Urban Transit Optimization via GNNs",
    company: "IRJET · Published ISSN No. 2395-0072",
    period:  "08/2023 – 01/2024",
    desc:    "Proposed a Graph Neural Network (GNN) framework for real-time public transportation network management. The system enables dynamic routing and load balancing across urban transit networks — published in the International Research Journal of Engineering and Technology.",
    tags:    ["Graph Neural Networks", "Python", "Network Analysis", "Transportation Systems"],
    href:    "",
  },
  {
    type:    "Bachelor Thesis",
    title:   "Stock Market Analysis & Price Prediction",
    company: "Dr. Babasaheb Ambedkar Technological University",
    period:  "08/2021 – 07/2022",
    desc:    "Analysed real-time stock market data using deep learning and LSTM networks for price trend prediction, enabling accurate closing price forecasts and comprehensive financial visualisations for investment decision support.",
    tags:    ["Deep Learning", "LSTM", "Python", "Financial Analysis", "Data Visualization"],
    href:    "https://github.com/mayanknagar10/stock-market-analysis-and-prediction",
  },
];

/* ── Card ── */
const ProjectCard = ({ type, title, company, period, desc, tags, href }: (typeof PROJECTS)[0]) => {
  const [hovered, setHovered] = useState(false);

  const Arrow = () => (
    <div
      className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200"
      style={
        hovered
          ? { background: "var(--c-accent)", border: "1px solid var(--c-accent)", color: "#fff", transform: "rotate(-45deg)" }
          : { border: "1px solid var(--c-border)", color: "var(--c-muted-lt)" }
      }
    >
      <ArrowRight className="w-4 h-4" />
    </div>
  );

  return (
    <div
      className="px-12 py-12 transition-colors duration-200"
      style={{ background: hovered ? "var(--c-card-hover)" : "var(--c-card)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-start justify-between gap-6 mb-4">
        <div>
          <p
            className="font-mono text-[11px] uppercase tracking-[0.14em] mb-2"
            style={{ color: "var(--c-accent)" }}
          >
            {type}
          </p>
          <h3
            className="font-heading font-bold leading-tight mb-1"
            style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              letterSpacing: "-0.025em",
              color: "var(--c-heading)",
            }}
          >
            {title}
          </h3>
          <p className="text-sm" style={{ color: "var(--c-muted)" }}>
            {company}
          </p>
        </div>

        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View project"
            onClick={(e) => e.stopPropagation()}
          >
            <Arrow />
          </a>
        ) : (
          <Arrow />
        )}
      </div>

      <p
        className="text-sm leading-relaxed max-w-[700px] mb-6"
        style={{ color: "var(--c-muted)" }}
      >
        {desc}
      </p>

      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 font-mono text-xs rounded-sm"
              style={{ background: "var(--c-bg-surface)", color: "var(--c-muted)" }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="font-mono text-xs" style={{ color: "var(--c-muted-lt)" }}>
          {period}
        </span>
      </div>
    </div>
  );
};

/* ── Section ── */
const PortfolioSection = () => (
  <section id="projects" className="px-8 py-24" style={{ background: "var(--c-bg-base)" }}>
    <div className="max-w-[1240px] mx-auto">
      <p
        className="reveal font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
        style={{ color: "var(--c-accent)" }}
      >
        Portfolio
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
        Featured Projects
      </h2>
      <p
        className="reveal text-base mb-16 max-w-[520px] leading-relaxed"
        style={{ color: "var(--c-lead)", transitionDelay: "0.1s" }}
      >
        Industry collaborations, published research, and thesis work — real problems, real data.
      </p>

      <div
        className="reveal flex flex-col gap-px"
        style={{ background: "var(--c-border)", transitionDelay: "0.15s" }}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
