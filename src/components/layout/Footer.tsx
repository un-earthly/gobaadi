import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { footerLinks } from "@/content/navigation";
import { siteConfig } from "@/lib/metadata";
import { Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedinIn,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-secondary text-white" role="contentinfo">
      <Container size="wide" className="pt-16 pb-8 lg:pt-20">
        {/* Top Section - Logo + Newsletter */}
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3" aria-label="Gobadi Home">
              <Image
                src="/images/brand/logo.png"
                alt="Gobadi logo"
                width={48}
                height={48}
                className="rounded-xl object-contain"
              />
              <span className="font-bengali text-3xl font-bold text-white md:text-4xl">
                গবাদি
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-white/60 lg:text-base">
              AI-powered digital platform transforming the livestock ecosystem by connecting farmers,
              veterinarians, and trusted service providers.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full max-w-md">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white/80">
              Stay Updated
            </p>
            <form className="flex gap-2" aria-label="Newsletter signup">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-sm transition-all focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                required
                aria-label="Email address for newsletter"
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-brand-primary px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-primary/90 hover:shadow-lg hover:shadow-brand-primary/25"
                aria-label="Subscribe to newsletter"
              >
                <Send className="h-4 w-4" aria-hidden />
                <span className="hidden sm:inline">Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 lg:gap-12">
          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="leading-relaxed">{siteConfig.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            © {year} {siteConfig.name}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {Object.entries(siteConfig.social).map(([name, href]) => {
              const Icon = socialIcons[name as keyof typeof socialIcons];
              return (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/50 transition-all hover:border-brand-primary hover:bg-brand-primary hover:text-white"
                  aria-label={`Follow us on ${name}`}
                >
                  <Icon className="h-4 w-4" aria-hidden />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
