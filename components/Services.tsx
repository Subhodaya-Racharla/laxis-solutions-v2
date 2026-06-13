"use client";

import { motion } from "motion/react";
import { Monitor, ShoppingCart, Zap, Search, Palette, Wrench } from "lucide-react";

const SERVICES = [
  {
    icon: Monitor,
    title: "Website Design",
    desc: "Clean, conversion-focused designs that represent your brand professionally on every device.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Full-featured online stores with product management, payment gateways, and inventory tracking.",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    desc: "High-converting pages built for lead generation, product launches, and paid ad campaigns.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "On-page SEO, Core Web Vitals, and speed optimization to rank higher on Google.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo design, color systems, and brand guidelines for a distinctive, memorable look.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    desc: "Ongoing updates, security monitoring, backups, and support so your site stays fast.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#080808]">
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
            What We Do
          </span>
          <h2
            className="font-heading font-black text-white leading-tight"
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
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 rounded-2xl overflow-hidden"
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={cardVariants}
                className="bg-zinc-950 p-8 hover:bg-zinc-900 transition-colors duration-200 cursor-default group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: "rgba(202,138,4,0.12)" }}
                >
                  <Icon size={20} style={{ color: "#CA8A04" }} />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors duration-200">
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
