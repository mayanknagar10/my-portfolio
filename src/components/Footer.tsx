const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer relative z-10 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-[1240px] flex-wrap items-center justify-between gap-5">
        <span className="site-footer-brand">Mayank<span>.</span></span>
        <p className="site-footer-copy">© {year} Mayank Nagar · Built in Hamburg</p>
        <div className="flex gap-5">
          {[
            { label: "LinkedIn", href: "https://www.linkedin.com/in/mayank-nagar10/" },
            { label: "GitHub", href: "https://github.com/mayanknagar10" },
            { label: "Email", href: "mailto:nmayank.790@gmail.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" className="site-footer-link">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
