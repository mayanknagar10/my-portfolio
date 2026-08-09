import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    type: "Independent Project",
    title: "PlanningCopilot",
    subtitle: "AI-Augmented Demand Forecasting & Inventory Planning",
    period: "06/2026 — Present",
    summary: "A planning system where the LLM coordinates tools, but the forecast itself still comes from a backtested statistical / ML engine.",
    approach: "LangGraph agent over a deterministic Prophet workflow, model benchmarking on identical holdouts, RAG with ChromaDB, a custom MCP server, and dual-LLM failover.",
    evidence: ["14.4% WAPE", "31 pytest tests", "SMA · ETS · Prophet · GBT · neural baselines"],
    tags: ["LangGraph", "Prophet", "RAG", "ChromaDB", "MCP", "Streamlit"],
    href: "",
  },
  {
    type: "Research Project",
    title: "Generative RVE Modeling",
    subtitle: "Microstructure generation with ViT-VQGAN + SDXL conditioning",
    period: "10/2025 — 03/2026",
    summary: "A generative modeling study focused on compressing and reconstructing materials microstructures while preserving the information needed for useful synthesis.",
    approach: "ViT-VQGAN reconstruction plus a dual-tower SDXL conditioning architecture using Perceiver Resampler, pooled projection, and ControlNet channels.",
    evidence: ["260× image compression", "173M trainable parameters", "ViT-VQGAN vs SDXL trade-off study"],
    tags: ["ViT-VQGAN", "SDXL", "Diffusion Models", "PyTorch", "Materials Science"],
    href: "",
  },
  {
    type: "Research Project",
    title: "PRSage",
    subtitle: "GNN-Powered Code Reviewer Recommendation",
    period: "11/2025 — 02/2026",
    summary: "A graph-learning system for recommending reviewers on GitHub pull requests using developer–PR relationships and semantic code representations.",
    approach: "Developer–PR bipartite graphs from the GitHub REST API, CodeBERT embeddings, GraphSAGE link prediction, and ranking evaluation with Recall@10.",
    evidence: ["10,000+ pull requests", "GraphSAGE link prediction", "Recall@10 evaluation"],
    tags: ["GraphSAGE", "GNN", "CodeBERT", "GitHub API", "Link Prediction"],
    href: "",
  },
];

const PortfolioSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="projects" className="soft-section px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-intro mb-14 max-w-[760px]">
          <p className="soft-kicker">Selected work</p>
          <h2 className="soft-title">Projects where the design choices matter as much as the stack.</h2>
          <p className="soft-lead mt-5">
            I try to make the evidence easy to find: forecast quality, compression, dataset scale, testing, or evaluation methodology.
          </p>
        </div>

        <div className="space-y-5">
          {PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.16 }}
              transition={{ duration: 0.68, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              className="project-card"
            >
              <div className="grid gap-8 xl:grid-cols-[0.78fr_1.22fr] xl:gap-14">
                <div>
                  <div className="project-meta-row">
                    <p>{project.type}</p>
                    <span>{project.period}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>

                  <div className="project-evidence-grid">
                    {project.evidence.map((item) => (
                      <div key={item} className="project-evidence-item"><p>{item}</p></div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="grid gap-7 sm:grid-cols-2">
                    <div>
                      <p className="case-label">Why I built it</p>
                      <p className="case-copy">{project.summary}</p>
                    </div>
                    <div>
                      <p className="case-label">How it works</p>
                      <p className="case-copy">{project.approach}</p>
                    </div>
                  </div>

                  <div className="project-card-footer">
                    <div className="flex max-w-[650px] flex-wrap gap-2">
                      {project.tags.map((tag) => <span key={tag} className="tech-chip-soft">{tag}</span>)}
                    </div>

                    {project.href && (
                      <a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">
                        View project <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
