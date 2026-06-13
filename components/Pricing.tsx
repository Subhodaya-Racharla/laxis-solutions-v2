"use client";

import { motion } from "framer-motion";
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
    <section id="pricing" className="py-24 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "#FEF3C7", backgroundColor: "#FEFCE8" }}
          >
            Pricing
          </span>
          <h2
            className="font-heading font-black text-stone-950 leading-tight"
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
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: i * 0.1,
                ease: [0, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className={`relative rounded-2xl p-8 flex flex-col border transition-all duration-150 ${
                plan.highlight
                  ? "border-[#CA8A04] bg-white"
                  : "border-stone-200 bg-white hover:border-stone-300"
              }`}
            >
              {plan.highlight && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-white text-xs font-body font-semibold px-4 py-1 rounded-full whitespace-nowrap"
                  style={{ backgroundColor: "#CA8A04" }}
                >
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <div className="font-heading font-bold text-stone-950 text-lg mb-1">
                  {plan.name}
                </div>
                <div
                  className="font-heading font-black text-4xl mb-1"
                  style={{ color: plan.highlight ? "#CA8A04" : "#0C0A09" }}
                >
                  {plan.price}
                </div>
                <div className="text-stone-400 font-body text-sm">
                  Delivered in {plan.duration}
                </div>
              </div>

              <p className="font-body text-stone-500 text-sm mb-6 leading-relaxed">
                {plan.desc}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="mt-0.5 flex-shrink-0"
                      style={{ color: "#CA8A04" }}
                    />
                    <span className="font-body text-sm text-stone-700">{f}</span>
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
                    : "text-stone-950 bg-stone-100 hover:bg-stone-200"
                }`}
                style={
                  plan.highlight
                    ? { backgroundColor: "#CA8A04" }
                    : undefined
                }
                onMouseEnter={(e) => {
                  if (plan.highlight)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#A16207";
                }}
                onMouseLeave={(e) => {
                  if (plan.highlight)
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "#CA8A04";
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
          transition={{ duration: 0.45, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-stone-400 font-body text-sm mt-10"
        >
          All prices include GST. Custom packages available — {" "}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-stone-600 transition-colors duration-150 cursor-pointer"
          >
            chat with us
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
