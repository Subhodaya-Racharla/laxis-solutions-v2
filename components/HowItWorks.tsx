"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We understand your business, goals, and target audience in a quick 15-minute call.",
  },
  {
    num: "02",
    title: "Design Mockup",
    desc: "We create a full visual mockup of your website for your review and approval.",
  },
  {
    num: "03",
    title: "Development",
    desc: "Once approved, we build the full website — fast, responsive, and SEO-ready.",
  },
  {
    num: "04",
    title: "Launch & Handoff",
    desc: "Your site goes live, and you get full ownership with a training walkthrough.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-16"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "rgba(202,138,4,0.3)", backgroundColor: "rgba(202,138,4,0.07)" }}
          >
            The Process
          </span>
          <h2
            className="font-heading font-black text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            From Brief to
            <br />
            Live in 7 Days
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0, 0, 1] }}
              viewport={{ once: true, margin: "-60px" }}
              className="relative md:pr-8"
            >
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-5 left-[calc(2.5rem+8px)] right-0 h-px bg-zinc-800" />
              )}

              {/* Circle */}
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.15, ease: [0.25, 0, 0, 1] }}
                viewport={{ once: true }}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-heading font-black text-sm mb-5 relative z-10"
                style={{ backgroundColor: "#CA8A04" }}
              >
                {i + 1}
              </motion.div>

              <h3 className="font-heading font-bold text-white text-lg mb-2">{step.title}</h3>
              <p className="font-body text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
