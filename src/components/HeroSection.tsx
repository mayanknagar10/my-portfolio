import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Database,
  Github,
  Linkedin,
  Mail,
  Network,
  Trophy,
} from "lucide-react";
import HeroDataBackground from "@/components/HeroDataBackground";

const PIPELINE = [
  { label: "Ingest", detail: "ADF · SQL · PySpark", icon: Database },
  { label: "Model", detail: "PyTorch · Forecasting", icon: BrainCircuit },
  { label: "Reason", detail: "RAG · LangGraph · MCP", icon: Network },
  { label: "Explain", detail: "Metrics · Dashboards", icon: BarChart3 },
];

const EVIDENCE = [
  { value: "14.4%", label: "WAPE · forecasting" },
  { value: "260×", label: "image compression" },
  { value: "10k+", label: "PRs in GNN dataset" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/mayank-nagar10/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/mayanknagar10", label: "GitHub", icon: Github },
  { href: "https://public.tableau.com/app/profile/mayank.nagar3143/vizzes", label: "Tableau", icon: BarChart3 },
  { href: "https://www.kaggle.com/nmayank10", label: "Kaggle", icon: Trophy },
  { href: "mailto:nmayank.790@gmail.com", label: "Email", icon: Mail },
];

const HeroSection = () => {
  const reduceMotion = useReducedMotion();
  const pointerX = useMotionValue(620);
  const pointerY = useMotionValue(360);
  const glowX = useSpring(pointerX, { stiffness: 72, damping: 26, mass: 0.8 });
  const glowY = useSpring(pointerY, { stiffness: 72, damping: 26, mass: 0.8 });
  const pointerGlow = useMotionTemplate`radial-gradient(420px circle at ${glowX}px ${glowY}px, var(--p-pointer-glow), transparent 72%)`;

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const openResume = () => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <section
      id="hero"
      onPointerMove={(event) => {
        if (reduceMotion) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        pointerX.set(event.clientX - bounds.left);
        pointerY.set(event.clientY - bounds.top);
      }}
      className="hero-shell relative isolate overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32"
    >
      <HeroDataBackground />
      <motion.div className="hero-pointer-glow" style={{ background: pointerGlow }} aria-hidden="true" />
      <div className="hero-noise" aria-hidden="true" />

      <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-[1240px] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative z-10">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="hero-eyebrow"
          >
            <span className="status-dot" />
            Data Scientist · Hamburg, Germany
            <span className="hero-eyebrow-divider">/</span>
            <span className="hero-eyebrow-muted">M.Sc. Data Science · TUHH</span>
          </motion.div>

          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title"
          >
            I build data systems that move from
            <span className="hero-gradient"> raw signal to decision.</span>
          </motion.h1>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.64, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hero-copy"
          >
            Data engineering, machine learning, generative vision, and agentic AI — built with a bias toward measurable systems, reproducible experiments, and useful outputs.
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.23, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <button onClick={() => scrollTo("projects")} className="hero-primary-btn">
              Explore selected work <ArrowRight className="h-4 w-4" />
            </button>
            <button onClick={openResume} className="hero-secondary-btn">Resume ↗</button>
            <button onClick={() => scrollTo("contact")} className="hero-secondary-btn">Contact</button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.34, duration: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-2"
          >
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-chip"
                aria-label={label}
              >
                <Icon className="h-3.5 w-3.5" />
                <span>{label}</span>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24, scale: 0.99 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <div className="system-card">
            <div className="system-card-head">
              <div>
                <p className="system-card-kicker">How I tend to work</p>
                <p className="system-card-title">Data → models → useful decisions</p>
              </div>
            </div>

            <div className="relative px-5 py-6 sm:px-6 sm:py-7">
              <div className="pipeline-line" aria-hidden="true" />
              {!reduceMotion && (
                <motion.span
                  className="pipeline-pulse"
                  animate={{ top: [34, 102, 170, 238, 34] }}
                  transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                />
              )}

              <div className="space-y-3">
                {PIPELINE.map(({ label, detail, icon: Icon }, index) => (
                  <motion.div
                    key={label}
                    initial={reduceMotion ? false : { opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.36 + index * 0.07, duration: 0.46, ease: [0.22, 1, 0.36, 1] }}
                    className="pipeline-row"
                  >
                    <div className="pipeline-node"><Icon className="h-4 w-4" /></div>
                    <div className="min-w-0 flex-1">
                      <span className="pipeline-label">{label}</span>
                      <p className="pipeline-detail">{detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="evidence-row">
              {EVIDENCE.map((item) => (
                <div key={item.label} className="evidence-mini">
                  <p className="evidence-mini-value">{item.value}</p>
                  <p className="evidence-mini-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -3, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="current-research-card"
          >
            <p className="current-research-label">Current research</p>
            <p className="current-research-title">Diffusion models for microstructure reconstruction</p>
            <p className="current-research-meta">Master thesis · Helmholtz Centre Hereon</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
