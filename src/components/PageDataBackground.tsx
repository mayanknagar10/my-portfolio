import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";

const STREAMS = [
  "M-160 210 C 120 55, 320 330, 620 205 S 1110 72, 1600 250",
  "M-120 500 C 180 325, 390 620, 720 455 S 1180 325, 1580 520",
  "M-150 765 C 210 585, 470 870, 820 690 S 1240 555, 1590 735",
];

const NODES = [
  [190, 150], [440, 276], [680, 190], [1010, 135],
  [310, 548], [760, 468], [1130, 370], [1290, 655],
] as const;

const PageDataBackground = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 42,
    damping: 22,
    mass: 0.7,
  });

  const layerY = useTransform(smoothProgress, [0, 1], [0, -72]);
  const layerX = useTransform(smoothProgress, [0, 1], [-12, 26]);
  const haloY = useTransform(smoothProgress, [0, 1], [-18, 80]);

  return (
    <div className="page-data-bg" aria-hidden="true">
      <div className="page-grid" />
      <motion.div className="world-halo world-halo-a" style={reduceMotion ? undefined : { y: haloY }} />
      <div className="world-halo world-halo-b" />
      <div className="world-halo world-halo-c" />

      <motion.svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        className="world-streams"
        style={reduceMotion ? undefined : { x: layerX, y: layerY }}
      >
        <defs>
          <linearGradient id="worldLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--p-accent)" stopOpacity="0" />
            <stop offset="28%" stopColor="var(--p-accent)" stopOpacity="0.24" />
            <stop offset="70%" stopColor="var(--p-accent-2)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="var(--p-accent)" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="worldNode">
            <stop offset="0%" stopColor="var(--p-accent-2)" stopOpacity="0.68" />
            <stop offset="100%" stopColor="var(--p-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {STREAMS.map((path, index) => (
          <g key={path}>
            <path d={path} className="world-stream-base" />
            <motion.path
              d={path}
              className="world-stream-flow"
              stroke="url(#worldLine)"
              strokeDasharray={index === 1 ? "7 34" : "5 30"}
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -220] }}
              transition={{ duration: 24 + index * 5, repeat: Infinity, ease: "linear" }}
            />
          </g>
        ))}

        {NODES.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="12" fill="url(#worldNode)" opacity="0.08" />
            <motion.circle
              cx={cx}
              cy={cy}
              r="2"
              fill="var(--p-accent-2)"
              animate={reduceMotion ? undefined : { opacity: [0.18, 0.58, 0.18] }}
              transition={{ duration: 5 + (index % 3), repeat: Infinity, delay: index * 0.42, ease: "easeInOut" }}
            />
          </g>
        ))}
      </motion.svg>

      <div className="world-wash" />
    </div>
  );
};

export default PageDataBackground;
