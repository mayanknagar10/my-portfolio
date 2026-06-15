import { useState } from "react";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const WEB3FORMS_KEY = "8e90e7bb-2cd5-43f7-b09d-10dd2cd2d792";

const CONTACT_ITEMS = [
  {
    icon:  <Mail  className="w-5 h-5" />,
    label: "Email",
    value: "nmayank.790@gmail.com",
    href:  "mailto:nmayank.790@gmail.com",
  },
  {
    icon:  <Phone className="w-5 h-5" />,
    label: "Phone",
    value: "+49 155 10431014",
    href:  "tel:+4915510431014",
  },
  {
    icon:  <MapPin className="w-5 h-5" />,
    label: "Location",
    value: "Hamburg, Germany",
    href:  undefined,
  },
];

const AVAIL = [
  "Open to internship opportunities",
  "Available for research collaborations",
  "Open to data science consulting",
];

/* ── Shared input style for dark section ─────────────────────────── */
const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 15px",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.09)",
  borderRadius: 3,
  fontFamily: "Inter, sans-serif",
  fontSize: 14,
  color: "#fff",
  outline: "none",
};

const ContactSection = () => {
  const [form, setForm]       = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status,  setStatus]  = useState<{ msg: string; ok: boolean } | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, ...form, replyto: form.email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ msg: "✓ Message sent. I'll be in touch soon.", ok: true });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ msg: "✗ Failed to send — please email me directly.", ok: false });
      }
    } catch {
      setStatus({ msg: "✗ Network error — email nmayank.790@gmail.com directly.", ok: false });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="px-8 py-24" style={{ background: "#141416" }}>
      <div className="max-w-[1240px] mx-auto">
        {/* Header */}
        <p
          className="reveal font-mono text-[11px] uppercase tracking-[0.16em] mb-4"
          style={{ color: "#60a5fa" }}
        >
          Get In Touch
        </p>
        <h2
          className="reveal font-heading font-bold leading-none mb-5"
          style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            letterSpacing: "-0.03em",
            color: "#FFFFFF",
            transitionDelay: "0.05s",
          }}
        >
          Let's Work Together
        </h2>
        <p
          className="reveal text-base mb-16 max-w-[520px] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.4)", transitionDelay: "0.1s" }}
        >
          Open to internships, research collaborations, and data science consulting opportunities.
        </p>

        <div
          className="grid gap-12 lg:gap-20 grid-cols-1 lg:grid-cols-[1fr_1.1fr]"
        >
          {/* ── Left: contact info ─────────────────────────────── */}
          <div className="reveal" style={{ transitionDelay: "0.15s" }}>
            <div className="flex flex-col gap-7">
              {CONTACT_ITEMS.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded transition-colors duration-200"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1"
                        style={{ color: "rgba(255,255,255,0.25)" }}
                      >
                        {item.label}
                      </p>
                      <p
                        className="text-sm transition-colors duration-200 group-hover:text-white"
                        style={{ color: "rgba(255,255,255,0.65)" }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div key={item.label} className="flex items-start gap-4">
                    <div
                      className="w-11 h-11 flex items-center justify-center flex-shrink-0 rounded"
                      style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1" style={{ color: "rgba(255,255,255,0.25)" }}>
                        {item.label}
                      </p>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* Availability */}
            <div
              className="mt-11 pt-8 flex flex-col gap-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p
                className="font-mono text-[10px] uppercase tracking-[0.14em] mb-1"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                Current Availability
              </p>
              {AVAIL.map((a) => (
                <div key={a} className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0 animate-[green-pulse_2.2s_ease-in-out_infinite]"
                    style={{ background: "#22c55e" }}
                  />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form ────────────────────────────────────── */}
          <div className="reveal" style={{ transitionDelay: "0.22s" }}>
            <form onSubmit={onSubmit} className="flex flex-col gap-4" noValidate>
              {/* Honeypot */}
              <input type="text" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2">
                {[
                  { id: "name",  label: "Name *",  type: "text",  placeholder: "Your full name" },
                  { id: "email", label: "Email *", type: "email", placeholder: "your@email.com" },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label
                      htmlFor={f.id}
                      className="font-mono text-[10px] uppercase tracking-[0.14em]"
                      style={{ color: "rgba(255,255,255,0.28)" }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      value={(form as Record<string, string>)[f.id]}
                      onChange={onChange}
                      placeholder={f.placeholder}
                      required
                      style={inputStyle}
                      onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2563EB"; (e.target as HTMLInputElement).style.background = "rgba(37,99,235,0.05)"; }}
                      onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.04)"; }}
                    />
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="subject" className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.28)" }}>
                  Subject *
                </label>
                <input
                  id="subject" name="subject" type="text"
                  value={form.subject} onChange={onChange}
                  placeholder="What's this about?" required
                  style={inputStyle}
                  onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#2563EB"; (e.target as HTMLInputElement).style.background = "rgba(37,99,235,0.05)"; }}
                  onBlur={(e)  => { (e.target as HTMLInputElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.target as HTMLInputElement).style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: "rgba(255,255,255,0.28)" }}>
                  Message *
                </label>
                <textarea
                  id="message" name="message"
                  value={form.message} onChange={onChange}
                  placeholder="Tell me about your project or opportunity..."
                  rows={5} required
                  style={{ ...inputStyle, resize: "none", lineHeight: 1.65 }}
                  onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#2563EB"; (e.target as HTMLTextAreaElement).style.background = "rgba(37,99,235,0.05)"; }}
                  onBlur={(e)  => { (e.target as HTMLTextAreaElement).style.borderColor = "rgba(255,255,255,0.09)"; (e.target as HTMLTextAreaElement).style.background = "rgba(255,255,255,0.04)"; }}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="flex items-center justify-center gap-2 py-4 px-8 font-semibold text-sm text-white rounded transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: "#2563EB" }}
                onMouseEnter={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = "#1d4ed8"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#2563EB"; }}
              >
                {sending ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>

              {status && (
                <p
                  className="text-sm text-center"
                  style={{ color: status.ok ? "#4ade80" : "#f87171" }}
                >
                  {status.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
