"use client";

import { motion } from "motion/react";

const ITEMS = [
  "Web Design",
  "E-Commerce",
  "Landing Pages",
  "SEO Optimization",
  "UI / UX Design",
  "Fast Delivery",
  "Mobile-First",
  "Brand Identity",
  "Custom CMS",
  "Pan India Service",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden border-y border-zinc-800 bg-zinc-950 py-5"
    >
      <div
        className="flex gap-10 w-max"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="text-zinc-300 font-heading font-medium text-sm tracking-widest uppercase">
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#CA8A04" }}
            />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
