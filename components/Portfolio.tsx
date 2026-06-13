"use client";

import { motion } from "motion/react";
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

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#080808]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <span
              className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
              style={{ color: "#CA8A04", borderColor: "rgba(202,138,4,0.3)", backgroundColor: "rgba(202,138,4,0.07)" }}
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
          <p className="text-zinc-500 font-body text-sm max-w-xs leading-relaxed">
            Real projects, real outcomes. Every site we build is designed to generate
            measurable business results.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {PROJECTS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariants}
              className="group bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 transition-all duration-200 cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-body font-medium text-zinc-500 uppercase tracking-wider">
                  {p.category}
                </span>
                <ArrowUpRight
                  size={15}
                  className="text-zinc-700 group-hover:text-zinc-400 transition-colors duration-150"
                />
              </div>

              <div className="w-8 h-1 rounded-full mb-4" style={{ backgroundColor: p.color }} />

              <h3 className="font-heading font-bold text-white text-xl mb-2">{p.title}</h3>
              <p className="font-body text-sm text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200 mb-5">
                {p.outcome}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-body text-zinc-600 bg-zinc-950 border border-zinc-800 px-2.5 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
