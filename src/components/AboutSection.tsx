import { motion, useReducedMotion } from "motion/react";
import { Download, GraduationCap, MapPin, Sparkles } from "lucide-react";
import mayankProfile from "@/assets/profile-pic.png";

const EDUCATION = [
  {
    degree: "M.Sc. in Data Science",
    school: "Hamburg University of Technology (TUHH)",
    period: "10/2024 — Present",
    place: "Hamburg, Germany",
  },
  {
    degree: "B.Tech. in Computer Science & Engineering",
    school: "Dr. Babasaheb Ambedkar Technological University",
    period: "08/2018 — 07/2022",
    place: "Lonere, India",
  },
];

const PROFILE_CHIPS = [
  { icon: MapPin, text: "Hamburg, Germany" },
  { icon: GraduationCap, text: "M.Sc. Data Science" },
  { icon: Sparkles, text: "Data · ML · Agentic AI" },
];

const AboutSection = () => {
  const reduceMotion = useReducedMotion();
  const openResume = () => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <section id="about" className="soft-section px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="section-intro mb-12">
          <p className="soft-kicker">About me</p>
          <h2 className="soft-title max-w-[830px]">I like the part where messy data becomes something people can trust and use.</h2>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.22 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="profile-card lg:sticky lg:top-28"
          >
            <div className="profile-photo-wrap">
              <img src={mayankProfile} alt="Mayank Nagar" className="h-full w-full object-cover object-top" />
              <div className="profile-photo-shade" />
            </div>
            <div className="profile-chip-list">
              {PROFILE_CHIPS.map(({ icon: Icon, text }) => (
                <span key={text} className="profile-chip">
                  <Icon className="h-3.5 w-3.5" /> {text}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.7, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-6 text-[15px] leading-7 text-[var(--p-muted)] md:grid-cols-2">
              <p>
                I’m a Data Science M.Sc. student at Hamburg University of Technology with professional experience in data engineering and applied machine learning. I’m most comfortable when a problem crosses boundaries: ingestion, modeling, evaluation, and the interface people finally use.
              </p>
              <p>
                My recent work has moved from Azure-based enterprise pipelines to 3D imaging, generative materials research, forecasting, retrieval, and tool-using AI systems. The common thread is reproducibility and evidence — not adding a model where a simpler system would do.
              </p>
            </div>

            <div className="education-list mt-10">
              {EDUCATION.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.45 }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="education-row"
                >
                  <div>
                    <h3 className="education-title">{edu.degree}</h3>
                    <p className="education-school">{edu.school}</p>
                  </div>
                  <div className="education-meta md:text-right">
                    <p>{edu.period}</p>
                    <p>{edu.place}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button onClick={openResume} className="system-outline-btn mt-8">
              <Download className="h-4 w-4" /> Resume / CV
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
