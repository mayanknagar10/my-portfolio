const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="px-8 py-11"
      style={{
        background:   "#060606",
        borderTop:    "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        className="max-w-[1240px] mx-auto flex flex-wrap items-center justify-between gap-5"
      >
        {/* Logo */}
        <span
          className="font-heading font-bold text-lg text-white"
          style={{ letterSpacing: "-0.025em" }}
        >
          Mayank<span style={{ color: "#2563EB" }}>.</span>
        </span>

        {/* Copyright */}
        <p className="text-sm" style={{ color: "rgba(255,255,255,0.2)" }}>
          © {year} Mayank Nagar · Crafted with precision in Hamburg
        </p>

        {/* Links */}
        <div className="flex gap-6">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-nagar10/" },
            { label: "GitHub",   href: "https://github.com/mayanknagar10" },
            { label: "Email",    href: "mailto:nmayank.790@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(255,255,255,0.28)" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#fff")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.28)")}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
