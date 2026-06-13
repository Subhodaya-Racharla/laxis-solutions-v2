"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20web%20services";

const STATS = [
  { value: "8+", label: "Happy Clients" },
  { value: "5–7", label: "Day Delivery" },
  { value: "₹5k", label: "Starting Price" },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-20 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0, 0, 0.2, 1] }}
          className="flex items-center gap-2 mb-8 w-fit"
        >
          <div className="flex -space-x-1.5">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full border-2 border-white bg-stone-300"
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-stone-500 text-sm font-body">
            <Star size={13} fill="#CA8A04" stroke="#CA8A04" />
            <span>Trusted by 8+ businesses · Hyderabad</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0, 0, 0.2, 1] }}
          className="font-heading font-black text-stone-950 leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(40px, 7.5vw, 92px)" }}
        >
          Web Design
          <br />
          That Turns
          <br />
          <span
            className="relative inline-block"
            style={{ color: "#CA8A04" }}
          >
            Visitors
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="8"
              viewBox="0 0 300 8"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 5.5 C60 1.5, 120 7.5, 180 4.5 C240 1.5, 280 6.5, 298 4"
                stroke="#CA8A04"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </span>
          <br />
          Into Customers.
        </motion.h1>

        {/* Subtext + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-8 mt-12"
        >
          <p className="text-stone-500 font-body text-lg leading-relaxed max-w-sm">
            Premium websites built for businesses across Hyderabad and Pan India.
            Delivered in{" "}
            <span className="text-stone-900 font-medium">5–7 days</span>, starting
            at <span className="text-stone-900 font-medium">₹5,000</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-body font-semibold text-white transition-all duration-150 cursor-pointer group"
              style={{ backgroundColor: "#CA8A04" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#A16207")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#CA8A04")
              }
            >
              Start Your Project
              <ArrowRight
                size={16}
                className="transition-transform duration-150 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-body font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 transition-colors duration-150 cursor-pointer"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-10 border-t border-stone-200 max-w-md"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="font-heading font-black text-3xl sm:text-4xl"
                style={{ color: "#CA8A04" }}
              >
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-stone-500 font-body mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
