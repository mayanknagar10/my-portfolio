import { Mail, Phone, MapPin, Send, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

// Replace with your Web3Forms Access Key from https://web3forms.com/
const WEB3FORMS_ACCESS_KEY = "8e90e7bb-2cd5-43f7-b09d-10dd2cd2d792";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatusMessage(null);

  const formEl = e.currentTarget;
  const fd = new FormData(formEl);

  // Honeypot check
  if (fd.get("botcheck")) {
    setStatusMessage("Spam detected. Submission blocked.");
    return;
  }

  setIsSubmitting(true);
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        replyto: formData.email,
        from_name: formData.name,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I’ll reply soon.",
      });
      setStatusMessage("Your message was sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      formEl.reset();
    } else {
      toast({
        variant: "destructive",
        title: "Failed to send",
        description: data.message || "Please try again later.",
      });
      setStatusMessage("Failed to send. Please try again later.");
    }
  } catch (error) {
    toast({
      variant: "destructive",
      title: "Network error",
      description: "Unable to send right now. Please try again.",
    });
    setStatusMessage("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nmayank.790@gmail.com",
      href: "mailto:nmayank.790@gmail.com",
      color: "accent"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 155 10431014",
      href: "tel:+4915510431014",
      color: "primary"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Milchgrund 47, 21075, Hamburg, DE",
      href: "https://maps.google.com?q=Milchgrund+47,+21075,+Hamburg,+DE",
      color: "accent-secondary"
    }
  ];

  const getIconColors = (color: string) => {
    switch (color) {
      case 'accent':
        return 'bg-accent/10 text-accent';
      case 'primary':
        return 'bg-primary/10 text-primary';
      case 'accent-secondary':
        return 'bg-accent-secondary/10 text-accent-secondary';
      default:
        return 'bg-accent/10 text-accent';
    }
  };

  return (
    <section id="contact" className="section-container">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how we can work together on innovative data science projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    className="block portfolio-card hover:scale-105 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl ${getIconColors(info.color)}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground font-medium">
                          {info.label}
                        </p>
                        <p className="text-foreground font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
            
            {/* Resume Download */}
            <div className="portfolio-card bg-gradient-to-r from-accent/5 to-accent/10 border border-accent/20">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-bold text-foreground">
                  Download Resume
                </h4>
                <p className="text-muted-foreground">
                  Get a comprehensive overview of my experience and skills
                </p>
                <Button className="btn-hero w-full" onClick={() => window.open(`${import.meta.env.BASE_URL}resume.pdf`, "_blank") aria-label="Download Resume PDF">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </Button>
              </div>
            </div>
            
            {/* Availability */}
            <div className="portfolio-card">
              <h4 className="text-lg font-semibold text-foreground mb-3">
                Current Availability
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-foreground">Open for internship opportunities</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-foreground">Available for research collaborations</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                  <span className="text-foreground">Open to data science consulting</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="portfolio-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Send a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="focus:ring-accent focus:border-accent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="focus:ring-accent focus:border-accent"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    required
                    className="focus:ring-accent focus:border-accent resize-none"
                  />
                </div>
                
                <Button type="submit" className="btn-hero w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                <p className="text-sm text-muted-foreground" aria-live="polite">
                  {statusMessage}
                </p>
              </form>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="mt-16">
          <div className="portfolio-card overflow-hidden">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              My Location in Hamburg
            </h3>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="w-16 h-16 text-accent mx-auto" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Hamburg, Germany</p>
                  <p className="text-muted-foreground">Michgrund 47, 21075</p>
                </div>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://maps.google.com?q=Milchgrund+47,+21075,+Hamburg,+DE', '_blank')}
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  View on Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
