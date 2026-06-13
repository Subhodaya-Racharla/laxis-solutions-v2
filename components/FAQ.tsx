"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "How long does it take to build a website?",
    a: "Our standard delivery is 5–7 working days from the day you approve the mockup. Larger projects with e-commerce or custom features may take 10 days.",
  },
  {
    q: "Do I need to provide content and images?",
    a: "You provide your business details, logo, and any specific images. We handle copywriting and source professional stock images that fit your brand.",
  },
  {
    q: "What happens after the website is launched?",
    a: "You get full ownership of the website and all source files. We also provide a walkthrough video and documentation. Support plans are available for ongoing help.",
  },
  {
    q: "Can I update the website myself after launch?",
    a: "Yes. For CMS-based sites we train you to make basic updates — blog posts, images, contact details — without any coding knowledge required.",
  },
  {
    q: "Do you work with clients outside Hyderabad?",
    a: "Absolutely. We work with businesses across Pan India. All communication, reviews, and handoffs happen seamlessly over WhatsApp, email, and video calls.",
  },
  {
    q: "What are your payment terms?",
    a: "We require 50% upfront and 50% on delivery. We accept UPI, bank transfer, and Razorpay. For the Pro plan, we can split into three milestones.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-[#080808]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          viewport={{ once: true, margin: "-60px" }}
          className="mb-12 text-center"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "rgba(202,138,4,0.3)", backgroundColor: "rgba(202,138,4,0.07)" }}
          >
            FAQ
          </span>
          <h2
            className="font-heading font-black text-white leading-tight"
            style={{ fontSize: "clamp(28px, 4.5vw, 52px)" }}
          >
            Common Questions
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.25, 0, 0, 1] }}
                viewport={{ once: true, margin: "-40px" }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-150 ${
                  isOpen
                    ? "border-[#CA8A04]/40 bg-zinc-900"
                    : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-white text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-150"
                    style={
                      isOpen
                        ? { backgroundColor: "#CA8A04" }
                        : { backgroundColor: "#27272A" }
                    }
                  >
                    {isOpen
                      ? <Minus size={14} color="white" />
                      : <Plus size={14} color="#71717A" />
                    }
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                    >
                      <p className="px-6 pb-5 font-body text-zinc-400 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
