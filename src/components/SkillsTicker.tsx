const SKILLS = [
  "Python", "PyTorch", "Scikit-Learn", "PySpark", "Azure Data Factory",
  "SQL", "Tableau", "Power BI", "TensorFlow", "Keras", "Pandas", "NumPy",
  "Deep Learning", "ETL Pipelines", "Docker", "Linux", "Git", "R",
  "Neural Networks", "Computer Vision", "NLP", "Time Series Analysis",
  "CycleGAN", "Graph Neural Networks", "IBM Cognos", "Microsoft Azure", "SSMS",
];

const SkillsTicker = () => (
  <div
    className="overflow-hidden py-5"
    style={{
      background: "#0A0A0A",
      borderTop:  "1px solid rgba(255,255,255,0.05)",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
    }}
    aria-hidden="true"
  >
    {/* Duplicate the list so the CSS loop is seamless */}
    <div className="ticker-track">
      {[...SKILLS, ...SKILLS].map((skill, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-5 px-6 font-mono text-xs uppercase whitespace-nowrap"
          style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}
        >
          {skill}
          <span style={{ fontSize: 5, color: "rgba(37,99,235,0.5)" }}>●</span>
        </span>
      ))}
    </div>
  </div>
);

export default SkillsTicker;
