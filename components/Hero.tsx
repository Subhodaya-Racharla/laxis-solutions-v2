"use client";

import { motion } from "motion/react";
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
    <section className="relative min-h-screen pt-28 pb-20 flex flex-col justify-center overflow-hidden">

      {/* ── Animated gradient orbs ── */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gold orb – top-left */}
        <div
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(202,138,4,0.18) 0%, transparent 70%)",
            filter: "blur(60px)",
            animation: "float-a 10s ease-in-out infinite",
          }}
        />
        {/* Amber orb – top-right */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
            animation: "float-b 14s ease-in-out infinite",
          }}
        />
        {/* Indigo orb – bottom-center */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(120,53,15,0.10) 0%, transparent 70%)",
            filter: "blur(100px)",
            animation: "float-c 18s ease-in-out infinite",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "radial-gradient(circle, #CA8A04 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Noise overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
            backgroundSize: "200px",
          }}
        />

        {/* Horizontal gradient line */}
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(202,138,4,0.15) 30%, rgba(202,138,4,0.25) 50%, rgba(202,138,4,0.15) 70%, transparent 100%)",
            animation: "pulse-glow 4s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
          className="flex items-center gap-2 mb-8 w-fit"
        >
          <span className="flex items-center gap-1.5 text-xs font-body text-zinc-500 border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
            <Star size={11} fill="#CA8A04" stroke="#CA8A04" />
            Trusted by 8+ businesses · Hyderabad
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08, ease: [0.25, 0, 0, 1] }}
          className="font-heading font-black text-white leading-[0.95] tracking-tight mb-6"
          style={{ fontSize: "clamp(44px, 8vw, 100px)" }}
        >
          Web Design
          <br />
          That Turns
          <br />
          <span className="relative inline-block" style={{ color: "#CA8A04" }}>
            Visitors
            {/* Gold underline */}
            <svg
              className="absolute -bottom-2 left-0 w-full"
              height="6"
              viewBox="0 0 300 6"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden
            >
              <path
                d="M2 4 C60 1, 120 5.5, 180 3 C240 0.5, 280 5, 298 3"
                stroke="#CA8A04"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="300"
              />
            </svg>
          </span>
          <br />
          Into Customers.
        </motion.h1>

        {/* Subtext + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22, ease: [0.25, 0, 0, 1] }}
          className="flex flex-col md:flex-row md:items-end gap-8 mt-12"
        >
          <p className="text-zinc-400 font-body text-lg leading-relaxed max-w-sm">
            Premium websites for businesses across Hyderabad and Pan India.{" "}
            <span className="text-zinc-200 font-medium">5–7 day delivery</span>, starting at{" "}
            <span className="text-zinc-200 font-medium">₹5,000</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-body font-semibold text-white transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: "#CA8A04" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#A16207")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.backgroundColor = "#CA8A04")
              }
            >
              Start Your Project
              <ArrowRight size={15} className="transition-transform duration-150 group-hover:translate-x-0.5" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-body font-semibold text-zinc-300 border border-zinc-700 hover:border-zinc-500 hover:text-white bg-zinc-900/50 backdrop-blur-sm transition-all duration-200 cursor-pointer"
            >
              View Our Work
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 pt-10 border-t border-zinc-800 max-w-md"
        >
          {STATS.map((s) => (
            <div key={s.label}>
              <div
                className="font-heading font-black text-3xl sm:text-4xl"
                style={{ color: "#CA8A04" }}
              >
                {s.value}
              </div>
              <div className="text-xs sm:text-sm text-zinc-500 font-body mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)" }}
      />
    </section>
  );
}
