import { Github, Linkedin, Mail, BarChart3, Trophy, ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const openResume = () =>
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center px-8 overflow-hidden hero-grid hero-glow"
      style={{ background: "#0A0A0A", paddingTop: "68px" }}
    >
      <div className="max-w-[1240px] mx-auto w-full relative z-10">

        {/* Eyebrow */}
        <div
          className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest mb-8"
          style={{
            color: "#2563EB",
            letterSpacing: "0.14em",
            opacity: 0,
            animation: "fade-up 0.7s 0.15s ease forwards",
          }}
        >
          <span
            className="inline-block w-8 h-px"
            style={{ background: "#2563EB" }}
          />
          Data Scientist · Hamburg, Germany
        </div>

        {/* Title */}
        <h1
          className="font-heading font-bold text-white leading-none mb-10"
          style={{
            fontSize: "clamp(60px, 11vw, 136px)",
            letterSpacing: "-0.035em",
            lineHeight: 0.90,
            opacity: 0,
            animation: "fade-up 0.7s 0.3s ease forwards",
          }}
        >
          Mayank
          <br />
          <span style={{ fontWeight: 300, color: "rgba(255,255,255,0.35)" }}>
            Nagar
          </span>
          <br />
          <span style={{ color: "#2563EB" }}>Data&nbsp;Scientist</span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-lg font-body max-w-[500px] mb-12 leading-relaxed"
          style={{
            color: "rgba(255,255,255,0.45)",
            opacity: 0,
            animation: "fade-up 0.7s 0.45s ease forwards",
          }}
        >
          M.Sc. student at TUHH, building intelligent systems from raw data —
          pipelines, models, and insights that move the needle.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center gap-4 mb-12"
          style={{ opacity: 0, animation: "fade-up 0.7s 0.6s ease forwards" }}
        >
          <button
            onClick={() => scrollTo("projects")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-semibold text-sm text-white transition-all duration-200"
            style={{ background: "#2563EB" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563EB"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-medium text-sm transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.6)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
            }}
          >
            Get In Touch
          </button>

          <button
            onClick={openResume}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded font-medium text-sm transition-all duration-200"
            style={{
              border: "1px solid rgba(255,255,255,0.18)",
              color: "rgba(255,255,255,0.6)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)";
              (e.currentTarget as HTMLElement).style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.18)";
              (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.6)";
            }}
          >
            ↓ Resume
          </button>
        </div>

        {/* Social icons */}
        <div
          className="flex items-center gap-4"
          style={{ opacity: 0, animation: "fade-up 0.7s 0.75s ease forwards" }}
        >
          {[
            {
              href: "https://www.linkedin.com/in/mayank-nagar10/",
              label: "LinkedIn",
              icon: <Linkedin className="w-4 h-4" />,
            },
            {
              href: "https://github.com/mayanknagar10",
              label: "GitHub",
              icon: <Github className="w-4 h-4" />,
            },
            {
              href: "https://public.tableau.com/app/profile/mayank.nagar3143/vizzes",
              label: "Tableau",
              icon: <BarChart3 className="w-4 h-4" />,
            },
            {
              href: "https://www.kaggle.com/nmayank10",
              label: "Kaggle",
              icon: <Trophy className="w-4 h-4" />,
            },
            {
              href: "mailto:nmayank.790@gmail.com",
              label: "Email",
              icon: <Mail className="w-4 h-4" />,
            },
          ].map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center rounded-full transition-all duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.13)",
                color: "rgba(255,255,255,0.4)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2563EB";
                (e.currentTarget as HTMLElement).style.color = "#2563EB";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.13)";
                (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "none";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-9 right-10 hidden md:flex flex-col items-center gap-3 font-mono text-[10px] tracking-widest"
        style={{
          writingMode: "vertical-lr",
          color: "rgba(255,255,255,0.2)",
          letterSpacing: "0.18em",
          opacity: 0,
          animation: "fade-up 0.7s 1s ease forwards",
        }}
      >
        SCROLL
        <span
          className="block"
          style={{
            width: 1,
            height: 48,
            background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
