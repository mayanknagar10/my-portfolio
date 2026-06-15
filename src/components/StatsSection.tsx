const STATS = [
  { num: "2",    sup: "+",  label: "Years of professional data engineering & analytics experience" },
  { num: "3",    sup: "",   label: "Major projects across industry, research & academia" },
  { num: "15",   sup: "+",  label: "Technologies across the full data lifecycle" },
  { num: "M.Sc", sup: ".",  label: "Data Science · Hamburg University of Technology (TUHH)" },
];

const StatsSection = () => (
  <section
    style={{ background: "var(--c-bg-surface)", borderBottom: "1px solid var(--c-border)" }}
  >
    <div className="max-w-[1240px] mx-auto grid grid-cols-2 lg:grid-cols-4">
      {STATS.map((s, i) => (
        <div
          key={i}
          className="reveal px-8 py-12 lg:px-10 lg:py-14"
          style={{
            borderRight:  i % 2 === 0 ? "1px solid var(--c-border)" : "none",
            borderBottom: i < 2       ? "1px solid var(--c-border)" : "none",
            transitionDelay: `${i * 0.1}s`,
          }}
        >
          <div
            className="font-mono font-bold leading-none mb-2"
            style={{ fontSize: 48, letterSpacing: "-0.04em", color: "var(--c-heading)" }}
          >
            {s.num}
            <span style={{ color: "var(--c-accent)" }}>{s.sup}</span>
          </div>
          <p
            className="text-sm leading-snug"
            style={{ color: "var(--c-muted)", maxWidth: 180 }}
          >
            {s.label}
          </p>
        </div>
      ))}
    </div>
  </section>
);

export default StatsSection;
