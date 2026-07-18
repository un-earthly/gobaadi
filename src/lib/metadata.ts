import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://gobaadi.com";
const siteName = "Gobaadi";
const siteDescription =
  "Gobadi is an AI-powered digital platform transforming the livestock ecosystem by connecting farmers, veterinarians, and trusted service providers in one intelligent platform.";

export const siteConfig = {
  url: siteUrl,
  name: siteName,
  description: siteDescription,
  keywords: [
    "gobadi",
    "livestock platform",
    "cattle management",
    "veterinary services",
    "farmer marketplace",
    "AI livestock tracking",
    "animal care ecosystem",
    "digital farming",
    "veterinary consultation",
    "livestock management software",
    "AgriTech platform",
    "smart farming",
  ],
  email: "ceo.gobaadi@gmail.com",
  phone: "+8801911418977",
  address: "Road# 9, House# 5, Lane#3, Mirpur 11/a, Dhaka, 1216, Bangladesh",
  social: {
    facebook: "https://facebook.com/gobadi",
    // instagram: "https://instagram.com/gobadi",
    // twitter: "https://x.com/gobadi",
    linkedin: "https://linkedin.com/company/gobadi",
  },
} satisfies Record<string, unknown>;

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — AI-Powered Livestock Platform`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteConfig.keywords,
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  applicationName: siteName,
  formatDetection: {
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    locale: "en_US",
    title: `${siteName} — AI-Powered Livestock Platform`,
    description: siteDescription,
    images: [
      {
        url: "/images/brand/logo-og.webp",
        width: 1200,
        height: 630,
        alt: `${siteName} — AI-Powered Livestock Platform`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — AI-Powered Livestock Platform`,
    description: siteDescription,
    images: ["/images/brand/logo-og.webp"],
  },
};
