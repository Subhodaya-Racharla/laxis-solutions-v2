"use client";

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-heading font-black text-sm"
                style={{ backgroundColor: "#CA8A04" }}
              >
                L
              </span>
              <span className="font-heading font-bold text-white text-base">
                Laxis Solutions
              </span>
            </div>
            <p className="font-body text-sm leading-relaxed text-stone-500 max-w-xs mb-6">
              Premium websites for businesses that are serious about growth.
              Hyderabad-based. Pan India reach.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/laxissolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl flex items-center justify-center border border-stone-700 text-stone-500 hover:border-[#CA8A04] hover:text-[#CA8A04] transition-colors duration-150 cursor-pointer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Website Design",
                "E-Commerce",
                "Landing Pages",
                "SEO Optimization",
                "Brand Identity",
                "Maintenance",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="font-body text-sm text-stone-500 hover:text-stone-200 transition-colors duration-150 cursor-pointer"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Portfolio", href: "#portfolio" },
                { label: "Pricing", href: "#pricing" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "FAQ", href: "#faq" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="font-body text-sm text-stone-500 hover:text-stone-200 transition-colors duration-150 cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-stone-600">
            &copy; {new Date().getFullYear()} Laxis Solutions. All rights reserved.
          </p>
          <p className="font-body text-xs text-stone-600">
            Made with care in Hyderabad, India
          </p>
        </div>
      </div>
    </footer>
  );
}
