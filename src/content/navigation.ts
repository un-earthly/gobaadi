import type { NavLink } from "@/types";

export const navLinks: NavLink[] = [
  { href: "#home", label: "Home" },
  { href: "#vision", label: "Our Vision" },
  { href: "#about", label: "About Us" },
  { href: "#features", label: "Features" },
  { href: "#contact", label: "Contact" },
];

export const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Vision", href: "#vision" },
    { label: "Features", href: "#features" },
    { label: "Coming Soon", href: "#coming-soon" },
  ],
  support: [
    { label: "Contact Us", href: "#contact" },
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  services: [
    { label: "Veterinary Care", href: "#features" },
    { label: "AI Health Insights", href: "#features" },
    { label: "Livestock Marketplace", href: "#features" },
    { label: "Farm Management", href: "#features" },
  ],
};
