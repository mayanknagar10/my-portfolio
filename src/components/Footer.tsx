import { Github, Linkedin, Mail, Heart } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Github,
    href: "https://github.com/mayanknagar10",
    label: "GitHub"
  }, {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/mayank-nagar10/",
    label: "LinkedIn"
  }, {
    icon: Mail,
    href: "mailto:nmayank.790@gmail.com",
    label: "Email"
  }];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-primary text-primary-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Mayank Nagar. All rights reserved.
            </p>
            
            <div className="text-primary-foreground/60 text-sm">
              Made within Hamburg
            </div>
            
            <button onClick={scrollToTop} className="text-primary-foreground/60 hover:text-accent transition-colors duration-300 text-sm">
              Back to Top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;