"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    category: "Construction",
    title: "GVS Construction",
    outcome: "+40% leads from organic search",
    tags: ["Next.js", "SEO", "Landing Page"],
    color: "#D97706",
  },
  {
    category: "Healthcare",
    title: "Pathology Lab Portal",
    outcome: "Online bookings enabled",
    tags: ["Web App", "Dashboard", "Payments"],
    color: "#0EA5E9",
  },
  {
    category: "E-Commerce",
    title: "Apparel Brand Store",
    outcome: "₹80k revenue in first month",
    tags: ["Shopify", "UI/UX", "Mobile-First"],
    color: "#8B5CF6",
  },
  {
    category: "Education",
    title: "Coaching Institute",
    outcome: "3x more enquiries post-launch",
    tags: ["WordPress", "CMS", "Forms"],
    color: "#22C55E",
  },
  {
    category: "Real Estate",
    title: "Property Developer",
    outcome: "Reduced ad spend by 30%",
    tags: ["Landing Page", "CRO", "Analytics"],
    color: "#F43F5E",
  },
  {
    category: "Restaurant",
    title: "Cloud Kitchen Brand",
    outcome: "Online ordering fully integrated",
    tags: ["Web Design", "Menu CMS", "Delivery API"],
    color: "#F97316",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
              style={{ color: "#FDE68A", borderColor: "#78350F", backgroundColor: "#292524" }}
            >
              Portfolio
            </span>
            <h2
              className="font-heading font-black text-white leading-tight"
              style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
            >
              Work That
              <br />
              Speaks Results
            </h2>
          </div>
          <p className="text-stone-400 font-body text-sm max-w-xs leading-relaxed">
            Real projects, real outcomes. Every site we build is designed to
            generate measurable business results.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: i * 0.06,
                ease: [0, 0, 0.2, 1],
              }}
              viewport={{ once: true }}
              className="group bg-stone-800 hover:bg-stone-700 border border-stone-700 rounded-2xl p-6 transition-colors duration-150 cursor-default"
            >
              {/* Category + icon */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-body font-medium text-stone-400 uppercase tracking-wider">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-stone-600 group-hover:text-stone-300 transition-colors duration-150"
                />
              </div>

              {/* Color strip */}
              <div
                className="w-8 h-1 rounded-full mb-4"
                style={{ backgroundColor: p.color }}
              />

              <h3 className="font-heading font-bold text-white text-xl mb-2">
                {p.title}
              </h3>
              <p className="font-body text-sm text-stone-400 mb-5">
                {p.outcome}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body text-stone-500 bg-stone-900 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
