"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const WA_LINK =
  "https://wa.me/917416214865?text=Hi%2C%20I'd%20like%20to%20know%20more%20about%20your%20web%20services";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex items-center justify-between px-5 py-3 rounded-2xl border transition-all duration-200 ${
            scrolled
              ? "bg-white/95 border-stone-200 shadow-sm backdrop-blur-sm"
              : "bg-white/80 border-stone-200/60 backdrop-blur-sm"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-heading font-black text-sm"
              style={{ backgroundColor: "#CA8A04" }}
            >
              L
            </span>
            <span className="font-heading font-bold text-stone-950 text-base tracking-tight">
              Laxis Solutions
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-stone-600 hover:text-stone-950 transition-colors duration-150 font-body cursor-pointer"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl text-sm font-body font-medium text-white transition-all duration-150 cursor-pointer"
              style={{ backgroundColor: "#CA8A04" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#A16207")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#CA8A04")
              }
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-stone-600 hover:text-stone-950 hover:bg-stone-100 transition-colors duration-150 cursor-pointer"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden mt-2 bg-white border border-stone-200 rounded-2xl overflow-hidden">
            <nav className="flex flex-col p-3">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm text-stone-700 hover:bg-stone-50 hover:text-stone-950 rounded-xl transition-colors duration-150 font-body cursor-pointer"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 mx-1 px-4 py-3 text-sm font-body font-medium text-white text-center rounded-xl transition-colors duration-150 cursor-pointer"
                style={{ backgroundColor: "#CA8A04" }}
              >
                Get a Quote
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
