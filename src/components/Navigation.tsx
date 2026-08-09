import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import ModeToggle from "@/components/ModeToggle";

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const openResume = () => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank");

  return (
    <>
      <nav className={`site-nav ${scrolled ? "site-nav-scrolled" : ""}`}>
        <div className="mx-auto flex h-full max-w-[1240px] items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="site-brand"
          >
            Mayank<span>.</span>
          </button>

          <div className="hidden items-center gap-5 md:flex">
            <ul className="flex items-center gap-5">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <button onClick={() => scrollTo(link.id)} className="nav-link">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <span className="nav-divider" aria-hidden="true" />
            <ModeToggle />
            <button onClick={openResume} className="resume-pill">Resume ↗</button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ModeToggle />
            <button
              className="nav-menu-button"
              onClick={() => setOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <motion.div className="nav-progress" style={{ scaleX: scrollYProgress }} />
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mobile-menu"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.button
                key={link.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.035, duration: 0.28 }}
                onClick={() => scrollTo(link.id)}
                className="mobile-menu-link"
              >
                {link.label}
              </motion.button>
            ))}
            <button onClick={openResume} className="resume-pill mt-7 self-start">Resume ↗</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
