import { motion, useReducedMotion } from "motion/react";

const STREAMS = [
  { d: "M -80 160 C 160 78, 286 250, 515 184 S 845 45, 1280 150", duration: 24 },
  { d: "M -60 365 C 180 250, 330 430, 570 340 S 935 195, 1295 300", duration: 29 },
  { d: "M -90 590 C 185 450, 360 630, 625 535 S 980 385, 1290 480", duration: 33 },
];

const HeroDataBackground = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="hero-data-field" aria-hidden="true">
      <motion.div
        className="hero-ambient hero-ambient-a"
        animate={reduceMotion ? undefined : { x: [0, 34, -12, 0], y: [0, 20, 50, 0], scale: [1, 1.04, 0.98, 1] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="hero-ambient hero-ambient-b"
        animate={reduceMotion ? undefined : { x: [0, -28, 12, 0], y: [0, 30, -14, 0], scale: [1, 0.97, 1.05, 1] }}
        transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg className="hero-data-svg" viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="heroStreamGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--p-accent)" stopOpacity="0" />
            <stop offset="30%" stopColor="var(--p-accent)" stopOpacity="0.32" />
            <stop offset="68%" stopColor="var(--p-accent-2)" stopOpacity="0.22" />
            <stop offset="100%" stopColor="var(--p-accent)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {STREAMS.map((stream, index) => (
          <g key={stream.d}>
            <path d={stream.d} className="hero-stream-base" />
            <motion.path
              d={stream.d}
              className="hero-stream-flow"
              stroke="url(#heroStreamGradient)"
              strokeDasharray={index === 1 ? "6 30" : "5 34"}
              animate={reduceMotion ? undefined : { strokeDashoffset: [0, -240] }}
              transition={{ duration: stream.duration, repeat: Infinity, ease: "linear" }}
            />
          </g>
        ))}
      </svg>

      <div className="hero-data-vignette" />
    </div>
  );
};

export default HeroDataBackground;
