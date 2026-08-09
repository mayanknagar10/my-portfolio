import { motion, useReducedMotion } from "motion/react";
import { BrainCircuit, Braces, Database, Workflow } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Build the data layer",
    text: "I’m strongest when the model is not separated from the system feeding it: ingestion, transformation, storage, validation, and repeatable workflows.",
    icon: Database,
    skills: ["SQL", "PySpark", "ETL", "Azure Data Factory", "Azure Storage", "Kafka", "SQL Server"],
  },
  {
    title: "Model the signal",
    text: "Classical ML, forecasting, deep learning, and vision — with evaluation designed into the workflow instead of added at the end.",
    icon: BrainCircuit,
    skills: ["Python", "PyTorch", "Scikit-Learn", "Time-Series Forecasting", "Deep Learning", "Computer Vision", "Model Evaluation"],
  },
  {
    title: "Add reasoning carefully",
    text: "LLMs are most useful when they sit on top of deterministic tools, retrieval, and explicit interfaces rather than pretending to be the source of truth.",
    icon: Workflow,
    skills: ["LangGraph", "LangChain", "RAG", "ChromaDB", "MCP", "HuggingFace Transformers", "LLM Tool Calling"],
  },
  {
    title: "Ship and explain",
    text: "The work is only useful when people can run it, inspect it, and understand the result — from containers and version control to analytics and dashboards.",
    icon: Braces,
    skills: ["Docker", "Git", "Linux", "Microsoft Azure", "Tableau", "Power BI", "Excel", "Dashboards"],
  },
];

const SkillsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id="skills" className="soft-section px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="section-intro lg:sticky lg:top-28 lg:self-start">
            <p className="soft-kicker">What I work with</p>
            <h2 className="soft-title">A stack organized by what it helps me do.</h2>
            <p className="soft-lead mt-5 max-w-[520px]">
              Instead of a wall of logos: reliable data, useful models, careful reasoning, and enough engineering to make the result usable by someone else.
            </p>
          </div>

          <div className="capability-list">
            {CAPABILITIES.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <motion.article
                  key={capability.title}
                  initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.62, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
                  className="capability-row"
                >
                  <div className="flex items-center gap-4">
                    <div className="capability-icon"><Icon className="h-4 w-4" /></div>
                    <h3 className="capability-title">{capability.title}</h3>
                  </div>

                  <p className="capability-copy">{capability.text}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {capability.skills.map((skill) => <span key={skill} className="tech-chip-soft">{skill}</span>)}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
