import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";

const NAV_LINKS = [
  { id: "about",      label: "About"      },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills"     },
  { id: "projects",   label: "Projects"   },
  { id: "contact",    label: "Contact"    },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const openResume = () =>
    window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <>
      {/* ── Main bar ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[68px] transition-all duration-300"
        style={{
          background:   scrolled ? "rgba(10,10,10,0.96)" : "transparent",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.07)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
        }}
      >
        <div className="max-w-[1240px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-heading text-xl font-bold text-white"
            style={{ letterSpacing: "-0.03em" }}
          >
            Mayank<span style={{ color: "var(--c-accent)" }}>.</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7 list-none">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.6)")}
                >
                  {link.label}
                </button>
              </li>
            ))}

            {/* Divider */}
            <li
              className="h-4 w-px"
              style={{ background: "rgba(255,255,255,0.15)" }}
              aria-hidden="true"
            />

            {/* Dark / light toggle */}
            <li><ModeToggle /></li>

            {/* Resume */}
            <li>
              <button
                onClick={openResume}
                className="text-xs font-semibold text-white uppercase tracking-widest px-4 py-2 rounded transition-colors duration-200"
                style={{ background: "var(--c-accent)", letterSpacing: "0.06em" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#1d4ed8")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--c-accent)")}
              >
                Resume ↗
              </button>
            </li>
          </ul>

          {/* Mobile: toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <ModeToggle />
            <button
              className="text-white p-1"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile overlay ── */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col gap-1 px-8 pt-24 pb-12"
          style={{ background: "#0A0A0A" }}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left py-4 font-heading text-3xl font-semibold text-white/80 border-b transition-colors hover:text-white"
              style={{ borderColor: "rgba(255,255,255,0.08)", letterSpacing: "-0.02em" }}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={openResume}
            className="mt-6 text-sm font-semibold text-white uppercase tracking-widest px-6 py-3 rounded self-start"
            style={{ background: "var(--c-accent)" }}
          >
            Resume ↗
          </button>
        </div>
      )}
    </>
  );
};

export default Navigation;
