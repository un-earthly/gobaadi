import type { StaticImageData } from "next/image";

export interface NavLink {
  href: string;
  label: string;
}

export interface Feature {
  icon: StaticImageData | string;
  iconAlt: string;
  title: string;
  description: string;
  className?: string;
}

export interface Statistic {
  value: number;
  suffix: string;
  label: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  icon: "mail" | "phone" | "map-pin";
  title: string;
  value: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "facebook" | "instagram" | "twitter" | "linkedin";
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
