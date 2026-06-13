"use client";

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
    <section className="bg-stone-900 py-5 overflow-hidden border-y border-stone-800">
      <div
        className="flex gap-10 w-max"
        style={{ animation: "ticker 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-10 whitespace-nowrap"
          >
            <span className="text-stone-100 font-heading font-medium text-sm tracking-wide uppercase">
              {item}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: "#CA8A04" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
