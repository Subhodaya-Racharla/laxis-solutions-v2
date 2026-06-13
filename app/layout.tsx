import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://laxis.solutions"),
  title: "Laxis Solutions — Premium Web Design & Development, Hyderabad",
  description:
    "We build fast, premium websites for businesses across Hyderabad and Pan India. Starting at ₹5,000. Delivered in 5–7 days.",
  keywords: [
    "web design Hyderabad",
    "website development Hyderabad",
    "premium websites India",
    "affordable web design",
    "Laxis Solutions",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://laxis.solutions",
    title: "Laxis Solutions — Premium Web Design & Development",
    description:
      "Fast, premium websites for businesses across Hyderabad & Pan India. Starting ₹5k. 5–7 day delivery.",
    siteName: "Laxis Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laxis Solutions — Premium Web Design & Development",
    description: "Fast, premium websites. Starting ₹5k. 5–7 day delivery.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
