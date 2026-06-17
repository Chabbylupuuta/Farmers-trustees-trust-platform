import './globals.css';
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ftt.co.zm"),

  title: {
    default: "Farmers & Trustees Trust",
    template: "%s | FTT",
  },

  description:
    "Empowering farmers, preserving family wealth and connecting businesses across Zambia.",

  keywords: [
    "farmers zambia",
    "estate planning zambia",
    "trust services zambia",
    "talent recruitment",
    "business investment zambia",
  ],

  alternates: {
    canonical: "https://ftt.co.zm",
  },

  openGraph: {
    title: "Farmers & Trustees Trust",
    description:
      "Empowering farmers and preserving family wealth.",

    url: "https://ftt.co.zm",

    siteName: "FTT",

    locale: "en_ZM",

    type: "website",

    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Farmers & Trustees Trust",
    description:
      "Empowering farmers and preserving family wealth.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}