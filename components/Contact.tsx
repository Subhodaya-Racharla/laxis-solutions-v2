"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CONTACT_INFO = [
  { Icon: Phone, label: "Call Us", value: "+91 7416214865", href: "tel:+917416214865" },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20web%20services",
  },
  { Icon: Mail, label: "Email", value: "subhodaya.r@gmail.com", href: "mailto:subhodaya.r@gmail.com" },
  { Icon: MapPin, label: "Location", value: "Hyderabad, Telangana", href: "#" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "rgba(202,138,4,0.3)", backgroundColor: "rgba(202,138,4,0.07)" }}
          >
            Contact
          </span>
          <h2
            className="font-heading font-black text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Let&apos;s Build
            <br />
            Something Great
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            <p className="font-body text-zinc-500 text-base leading-relaxed mb-10 max-w-sm">
              Have a project in mind? Reach out through any channel — we respond
              within a few hours, every day.
            </p>

            <div className="space-y-5">
              {CONTACT_INFO.map(({ Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-150 group-hover:bg-[rgba(202,138,4,0.15)]"
                    style={{ backgroundColor: "rgba(202,138,4,0.08)" }}
                  >
                    <Icon size={18} style={{ color: "#CA8A04" }} />
                  </div>
                  <div>
                    <div className="text-xs font-body text-zinc-600 uppercase tracking-wide mb-0.5">{label}</div>
                    <div className="font-body font-medium text-zinc-300 group-hover:text-white transition-colors duration-150">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://instagram.com/laxissolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-zinc-800 text-zinc-500 hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors duration-150 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
            viewport={{ once: true, margin: "-60px" }}
          >
            {status === "sent" ? (
              <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-10 text-center flex flex-col items-center justify-center h-full">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "rgba(202,138,4,0.12)" }}
                >
                  <Send size={24} style={{ color: "#CA8A04" }} />
                </div>
                <h3 className="font-heading font-bold text-white text-xl mb-2">Message Received!</h3>
                <p className="font-body text-zinc-500 text-sm">We&apos;ll get back to you within a few hours.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label htmlFor="name"
                    className="block text-xs font-body font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                    Your Name *
                  </label>
                  <input
                    id="name" type="text" required value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ravi Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white font-body text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150"
                  />
                </div>
                <div>
                  <label htmlFor="phone"
                    className="block text-xs font-body font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="phone" type="tel" required value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white font-body text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150"
                  />
                </div>
                <div>
                  <label htmlFor="message"
                    className="block text-xs font-body font-semibold text-zinc-500 uppercase tracking-wide mb-2">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message" rows={4} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="I need a website for my restaurant in Hyderabad..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-800 bg-zinc-950 text-white font-body text-sm placeholder:text-zinc-700 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150 resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-400 font-body text-sm">
                    Something went wrong. Please try WhatsApp instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl text-sm font-body font-semibold text-white transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#CA8A04" }}
                  onMouseEnter={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLElement).style.backgroundColor = "#A16207";
                  }}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor = "#CA8A04")
                  }
                >
                  {status === "loading" ? "Sending..." : <><Send size={15} /> Send Message</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
