import { siteConfig } from "@/lib/metadata";
import type { ContactInfo, SocialLink } from "@/types";

export const contactInfo: ContactInfo[] = [
  {
    icon: "mail",
    title: "Email",
    value: siteConfig.email,
  },
  {
    icon: "phone",
    title: "Phone",
    value: siteConfig.phone,
  },
  {
    icon: "map-pin",
    title: "Office",
    value: siteConfig.address,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Facebook",
    href: siteConfig.social.facebook,
    icon: "facebook",
  },
  // {
  //   name: "Instagram",
  //   href: siteConfig.social.instagram,
  //   icon: "instagram",
  // },
  // {
  //   name: "X (Twitter)",
  //   href: siteConfig.social.twitter,
  //   icon: "twitter",
  // },
  {
    name: "LinkedIn",
    href: siteConfig.social.linkedin,
    icon: "linkedin",
  },
];
