"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20web%20services";

const PLANS = [
  {
    name: "Starter",
    price: "₹5,000",
    duration: "5 Days",
    desc: "Perfect for small businesses and individuals getting online.",
    features: [
      "5-page website",
      "Mobile responsive design",
      "Contact form",
      "Basic SEO setup",
      "Google Maps integration",
      "1 month support",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹12,000",
    duration: "7 Days",
    desc: "Built for growing businesses that need more functionality and reach.",
    features: [
      "10-page website",
      "Custom UI/UX design",
      "Blog / CMS integration",
      "Advanced SEO + sitemap",
      "WhatsApp & Call CTAs",
      "Google Analytics",
      "3 months support",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "₹25,000",
    duration: "10 Days",
    desc: "Comprehensive solution for businesses ready to dominate online.",
    features: [
      "Unlimited pages",
      "E-Commerce (up to 50 products)",
      "Payment gateway integration",
      "Admin dashboard",
      "Performance optimization",
      "1-year domain + hosting",
      "6 months priority support",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "rgba(202,138,4,0.3)", backgroundColor: "rgba(202,138,4,0.07)" }}
          >
            Pricing
          </span>
          <h2
            className="font-heading font-black text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Transparent Pricing,
            <br />
            No Hidden Fees
          </h2>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0, 0, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-200 ${
                plan.highlight
                  ? "border-[#CA8A04] bg-zinc-900"
                  : "border-zinc-800 bg-zinc-900 hover:border-zinc-700"
              }`}
              style={plan.highlight ? { boxShadow: "0 0 40px rgba(202,138,4,0.12)" } : undefined}
            >
              {plan.highlight && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-body font-semibold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "#CA8A04" }}
                >
                  Most Popular
                </motion.div>
              )}

              <div className="mb-6">
                <div className="font-heading font-bold text-zinc-300 text-lg mb-1">{plan.name}</div>
                <div
                  className="font-heading font-black text-4xl mb-1"
                  style={{ color: plan.highlight ? "#CA8A04" : "#F2F2F2" }}
                >
                  {plan.price}
                </div>
                <div className="text-zinc-600 font-body text-sm">Delivered in {plan.duration}</div>
              </div>

              <p className="font-body text-zinc-500 text-sm mb-6 leading-relaxed">{plan.desc}</p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#CA8A04" }} />
                    <span className="font-body text-sm text-zinc-400">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-xl text-sm font-body font-semibold transition-all duration-150 cursor-pointer ${
                  plan.highlight
                    ? "text-white"
                    : "text-zinc-300 bg-zinc-800 hover:bg-zinc-700"
                }`}
                style={plan.highlight ? { backgroundColor: "#CA8A04" } : undefined}
                onMouseEnter={(e) => {
                  if (plan.highlight)
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#A16207";
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight)
                    (e.currentTarget as HTMLElement).style.backgroundColor = "#CA8A04";
                }}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          className="text-center text-zinc-600 font-body text-sm mt-10"
        >
          All prices include GST. Custom packages available —{" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-zinc-400 transition-colors duration-150 cursor-pointer"
          >
            chat with us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
