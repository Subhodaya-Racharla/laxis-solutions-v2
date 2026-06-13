"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    a: "Yes. For CMS-based sites (WordPress or custom admin panels), we train you to make basic updates — blog posts, images, contact details — without any coding.",
  },
  {
    q: "Do you work with clients outside Hyderabad?",
    a: "Absolutely. We work with businesses across Pan India. All our communication, reviews, and handoffs happen seamlessly over WhatsApp, email, and video calls.",
  },
  {
    q: "What are your payment terms?",
    a: "We require 50% upfront and 50% on delivery. We accept UPI, bank transfer, and Razorpay. For the Pro plan, we can split into three milestones.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span
            className="inline-block text-xs font-body font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4 border"
            style={{ color: "#CA8A04", borderColor: "#FEF3C7", backgroundColor: "#FEFCE8" }}
          >
            FAQ
          </span>
          <h2
            className="font-heading font-black text-stone-950 leading-tight"
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.06, ease: [0, 0, 0.2, 1] }}
                viewport={{ once: true }}
                className={`border rounded-2xl overflow-hidden transition-colors duration-150 ${
                  isOpen
                    ? "border-[#E9C46A] bg-[#FFFBEB]"
                    : "border-stone-200 bg-white hover:border-stone-300"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="font-heading font-semibold text-stone-950 text-base pr-4">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-150"
                    style={
                      isOpen
                        ? { backgroundColor: "#CA8A04" }
                        : { backgroundColor: "#F5F5F4" }
                    }
                  >
                    {isOpen ? (
                      <Minus size={14} color="white" />
                    ) : (
                      <Plus size={14} color="#78716C" />
                    )}
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
                      <p className="px-6 pb-5 font-body text-stone-500 text-sm leading-relaxed">
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
