import { motion, useReducedMotion } from "motion/react";

const STATS = [
  { num: "14.4%", label: "WAPE on demand forecasting", note: "Forecast quality" },
  { num: "260×", label: "image compression in generative RVE research", note: "Representation" },
  { num: "10k+", label: "pull requests collected for graph learning", note: "Dataset scale" },
  { num: "30%", label: "lower migration latency in data engineering", note: "Production impact" },
];

const StatsSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="soft-section px-5 py-10 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-[1240px]">
        <div className="mb-5 flex items-end justify-between gap-5">
          <p className="soft-kicker">A few outcomes from the work</p>
          <span className="soft-rule" aria-hidden="true" />
        </div>

        <div className="outcomes-grid">
          {STATS.map((stat, index) => (
            <motion.article
              key={stat.num}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
              className="outcome-card"
            >
              <p className="outcome-note">{stat.note}</p>
              <p className="outcome-value">{stat.num}</p>
              <p className="outcome-label">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
