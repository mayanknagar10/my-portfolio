import { FormEvent, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";

const WEB3FORMS_KEY = "8e90e7bb-2cd5-43f7-b09d-10dd2cd2d792";

const CONTACTS = [
  { label: "Email", value: "nmayank.790@gmail.com", href: "mailto:nmayank.790@gmail.com", icon: Mail },
  { label: "Phone", value: "+49 155 10431014", href: "tel:+4915510431014", icon: Phone },
  { label: "LinkedIn", value: "mayank-nagar10", href: "https://www.linkedin.com/in/mayank-nagar10/", icon: Linkedin },
  { label: "GitHub", value: "mayanknagar10", href: "https://github.com/mayanknagar10", icon: Github },
  { label: "Location", value: "Hamburg, Germany", href: "", icon: MapPin },
];

const ContactSection = () => {
  const reduceMotion = useReducedMotion();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<{ msg: string; ok: boolean } | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    setStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form, replyto: form.email }),
      });
      const data = await response.json();

      if (data.success) {
        setStatus({ msg: "Message sent. I’ll get back to you soon.", ok: true });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ msg: "Couldn’t send the form. Please email me directly.", ok: false });
      }
    } catch {
      setStatus({ msg: "Network error. Please email me directly.", ok: false });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="soft-section px-5 py-24 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1240px]">
        <div className="contact-card">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
            className="contact-copy"
          >
            <p className="soft-kicker">Let’s talk</p>
            <h2 className="soft-title max-w-[650px]">Have a data, ML, or AI problem worth digging into?</h2>
            <p className="soft-lead mt-6 max-w-[580px]">
              I’m open to data science and machine-learning opportunities, research collaborations, and technically interesting problems where the system matters as much as the model.
            </p>

            <div className="mt-10 grid gap-2 sm:grid-cols-2">
              {CONTACTS.map(({ label, value, href, icon: Icon }) => {
                const content = (
                  <>
                    <span className="contact-icon"><Icon className="h-4 w-4" /></span>
                    <span>
                      <span className="contact-label">{label}</span>
                      <span className="contact-value">{value}</span>
                    </span>
                  </>
                );

                return href ? (
                  <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="contact-channel">
                    {content}
                  </a>
                ) : (
                  <div key={label} className="contact-channel">{content}</div>
                );
              })}
            </div>
          </motion.div>

          <motion.form
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.18 }}
            transition={{ duration: 0.68, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            onSubmit={onSubmit}
            className="contact-form-panel"
          >
            <div className="contact-form-head">
              <div>
                <p className="contact-form-eyebrow">Send a message</p>
                <p className="contact-form-title">A little context is enough.</p>
              </div>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6">
              <label className="contact-field">
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
                  placeholder="you@email.com"
                  required
                />
              </label>
              <label className="contact-field sm:col-span-2">
                <span>Subject</span>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={(e) => setForm((current) => ({ ...current, subject: e.target.value }))}
                  placeholder="What are you working on?"
                  required
                />
              </label>
              <label className="contact-field sm:col-span-2">
                <span>Message</span>
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
                  placeholder="Tell me a little about the problem..."
                  required
                />
              </label>

              <button type="submit" disabled={sending} className="contact-submit sm:col-span-2">
                {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                {sending ? "Sending" : "Send message"}
              </button>

              {status && <p className={`sm:col-span-2 text-center text-xs ${status.ok ? "text-emerald-500" : "text-red-500"}`}>{status.msg}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
