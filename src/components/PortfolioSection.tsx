import { useState } from "react";
import { ArrowRight } from "lucide-react";

const PROJECTS = [
  {
    type:    "Independent Project",
    title:   "PlanningCopilot: AI-Augmented Demand Forecasting & Inventory Planning",
    company: "Personal Project",
    period:  "06/2026 – Present",
    desc:    "Built a demand forecasting system with a LangGraph agent over a deterministic Prophet engine, ensuring every forecast traces to a backtested model rather than an LLM estimate. Benchmarked SMA, ETS, Prophet, GBT, and neural baselines on identical holdout windows, achieving 14.4% WAPE. Engineered a RAG pipeline (ChromaDB) with a custom MCP server and dual-LLM failover (Groq → Gemini), deployed via Streamlit with 31 pytest tests.",
    tags:    ["LangGraph", "Prophet", "RAG", "ChromaDB", "MCP", "Streamlit"],
    href:    "",
  },
  {
    type:    "Research Project",
    title:   "Gen AI based Modeling of RVE for Microstructure Generation",
    company: "TU Hamburg",
    period:  "10/2025 – 03/2026",
    desc:    "Designed a ViT-VQGAN for high-fidelity microstructure reconstruction with 260× image compression, addressing the data scarcity challenge in materials science. Built a novel Dual-Tower SDXL conditioning architecture with 173M trainable parameters across Perceiver Resampler, Pooled Projection, and ControlNet channels. Compared ViT-VQGAN and SDXL trade-offs across reconstruction fidelity, compression, diversity, and data augmentation.",
    tags:    ["ViT-VQGAN", "SDXL", "Diffusion Models", "PyTorch", "Materials Science"],
    href:    "",
  },
  {
    type:    "Research Project",
    title:   "PRSage: GNN-Powered Code Reviewer Recommendation System",
    company: "Deep Learning for Social Analytics, TU Hamburg",
    period:  "11/2025 – 02/2026",
    desc:    "Engineered a GraphSAGE-based GNN system to automate reviewer recommendations for GitHub pull requests, reducing review latency in distributed teams. Constructed developer-PR bipartite graphs from 10,000+ pull requests using the GitHub REST API and CodeBERT embeddings. Benchmarked link-prediction models using Recall@10 to improve prioritization and recommendation accuracy.",
    tags:    ["GraphSAGE", "GNN", "CodeBERT", "GitHub API", "Link Prediction"],
    href:    "",
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
        Generative AI, agentic systems, and graph learning — applied research with real data.
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
