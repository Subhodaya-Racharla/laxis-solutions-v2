"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  ShoppingCart,
  Zap,
  Search,
  Palette,
  Wrench,
} from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Clean, conversion-focused designs that represent your brand professionally and work perfectly on every device.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Full-featured online stores with product management, payment gateways, and inventory tracking.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    desc: "High-converting landing pages built for lead generation, product launches, and paid ad campaigns.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "On-page SEO, Core Web Vitals, and speed optimization to rank your business higher on Google.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo design, color systems, and brand guidelines that give your business a distinctive, memorable look.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing updates, security monitoring, backups, and support so your site stays fast and secure.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-stone-50">
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
            What We Do
          </span>
          <h2 className="font-heading font-black text-stone-950 leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Everything You Need
            <br />
            To Win Online
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-200 border border-stone-200 rounded-2xl overflow-hidden"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="bg-white p-8 hover:bg-stone-50 transition-colors duration-150 cursor-default group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 transition-colors duration-150"
                  style={{ backgroundColor: "#FEF3C7" }}
                >
                  <Icon size={20} style={{ color: "#CA8A04" }} />
                </div>
                <h3 className="font-heading font-bold text-stone-950 text-lg mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-stone-500 text-sm leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
