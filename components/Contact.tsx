"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, MapPin, Send } from "lucide-react";

const InstagramIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const CONTACT_INFO = [
  {
    Icon: Phone,
    label: "Call Us",
    value: "+91 7416214865",
    href: "tel:+917416214865",
  },
  {
    Icon: MessageCircle,
    label: "WhatsApp",
    value: "Message on WhatsApp",
    href: "https://wa.me/917416214865?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20web%20services",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "subhodaya.r@gmail.com",
    href: "mailto:subhodaya.r@gmail.com",
  },
  {
    Icon: MapPin,
    label: "Location",
    value: "Hyderabad, Telangana",
    href: "#",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">(
    "idle"
  );

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
    <section id="contact" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "#FEF3C7", backgroundColor: "#FEFCE8" }}
          >
            Contact
          </span>
          <h2
            className="font-heading font-black text-stone-950 leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Let&apos;s Build
            <br />
            Something Great
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            <p className="font-body text-stone-500 text-base leading-relaxed mb-10 max-w-sm">
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
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-150"
                    style={{ backgroundColor: "#FEF3C7" }}
                  >
                    <Icon size={18} style={{ color: "#CA8A04" }} />
                  </div>
                  <div>
                    <div className="text-xs font-body text-stone-400 uppercase tracking-wide mb-0.5">
                      {label}
                    </div>
                    <div className="font-body font-medium text-stone-800 group-hover:text-stone-950 transition-colors duration-150">
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-10">
              <a
                href="https://instagram.com/laxissolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-stone-200 text-stone-500 hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors duration-150 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
            viewport={{ once: true }}
          >
            {status === "sent" ? (
              <div className="bg-white border border-stone-200 rounded-2xl p-10 text-center h-full flex flex-col items-center justify-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4 mx-auto"
                  style={{ backgroundColor: "#FEF3C7" }}
                >
                  <Send size={24} style={{ color: "#CA8A04" }} />
                </div>
                <h3 className="font-heading font-bold text-stone-950 text-xl mb-2">
                  Message Received!
                </h3>
                <p className="font-body text-stone-500 text-sm">
                  We&apos;ll get back to you within a few hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-stone-200 rounded-2xl p-8 space-y-5"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-body font-semibold text-stone-500 uppercase tracking-wide mb-2"
                  >
                    Your Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Ravi Kumar"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-950 font-body text-sm placeholder:text-stone-300 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-xs font-body font-semibold text-stone-500 uppercase tracking-wide mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-950 font-body text-sm placeholder:text-stone-300 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150 bg-white"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-body font-semibold text-stone-500 uppercase tracking-wide mb-2"
                  >
                    Tell Us About Your Project
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="I need a website for my restaurant in Hyderabad..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 text-stone-950 font-body text-sm placeholder:text-stone-300 focus:outline-none focus:border-[#CA8A04] transition-colors duration-150 bg-white resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 font-body text-sm">
                    Something went wrong. Please try WhatsApp instead.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-3.5 rounded-xl text-sm font-body font-semibold text-white transition-all duration-150 cursor-pointer flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#CA8A04" }}
                  onMouseEnter={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#A16207";
                  }}
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.backgroundColor =
                      "#CA8A04")
                  }
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
