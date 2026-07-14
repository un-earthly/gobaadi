"use client";

import { Container } from "@/components/ui/Container";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { contactInfo, socialLinks } from "@/content/contact";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const contactIcons = { mail: Mail, phone: Phone, "map-pin": MapPin };
const socialIcons = { facebook: FaFacebookF, instagram: FaInstagram, twitter: FaXTwitter, linkedin: FaLinkedinIn };

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative bg-brand-primary py-16 md:py-24 overflow-hidden">
      {/* Wave separator */}
      <div className="absolute left-0 right-0 top-0 w-full -translate-y-[99%] overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 90" className="block h-[30px] w-full fill-brand-primary md:h-[100px]" preserveAspectRatio="none" aria-hidden>
          <path d="M0,90 C120,35 320,20 520,28 C760,38 900,70 1120,70 L1440,70 L1440,90 L0,90 Z" />
        </svg>
      </div>

      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/15 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-primary opacity-70 blur-[45px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 z-[1] mx-auto my-auto hidden max-w-[1400px] rounded-full opacity-50 lg:block" style={{
        height: "700px",
        backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 100%)",
      }} aria-hidden />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - Info */}
          <div className="flex flex-col gap-10 lg:col-span-7">
            <AnimatedSection>
              <div className="flex flex-col items-start gap-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#FFF6F3] px-4 py-1.5 text-sm font-semibold uppercase tracking-widest text-brand-primary md:px-5 md:py-2">
                  Contact Us
                </span>
                <h2 id="contact-heading" className="mt-2 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
                  Let&apos;s stay connected
                </h2>
                <p className="max-w-xl text-base text-white/80 md:text-lg">
                  Join the Gobadi community and be part of a smarter future for animal care.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-8 md:grid-cols-2 md:gap-10">
                {contactInfo.map((info) => {
                  const Icon = contactIcons[info.icon];
                  return (
                    <div key={info.title} className={`flex gap-4 items-start ${info.icon === "map-pin" ? "md:col-span-2" : ""}`}>
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold text-white md:text-2xl">{info.title}</h3>
                        <p className="text-base text-white/80 md:text-lg break-all">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AnimatedSection>
          </div>

          {/* Right - Form + Social */}
          <div className="flex w-full flex-col items-stretch lg:col-span-5 lg:items-end">
            <AnimatedSection delay={0.3} direction="right">
              {/* Social links */}
              <div className="mb-6 flex flex-col items-start gap-3 px-1">
                <span className="text-sm font-medium tracking-wide text-white/90">Follow Us On</span>
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.icon];
                    const isFirst = link.icon === "facebook";
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        className={`flex h-12 w-12 items-center justify-center rounded-full transition-all hover:scale-105 ${isFirst
                            ? "bg-white text-[#1877F2] shadow-md"
                            : "border border-white/30 bg-white/15 text-white backdrop-blur-md hover:bg-white/25"
                          }`}
                      >
                        <Icon className="h-5 w-5" aria-hidden />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Form */}
              <div className="w-full max-w-[480px] rounded-[32px] bg-white p-6 shadow-2xl md:p-8">
                <form className="flex flex-col gap-5" aria-label="Contact form">
                  <Input id="contact-email" type="email" label="Email" placeholder="your@email.com" required />
                  <Textarea id="contact-message" label="Message" placeholder="Your message..." rows={4} required />
                  <Button type="submit" className="mt-2 w-full py-4">
                    <Send className="h-5 w-5" aria-hidden />
                    Send Message
                  </Button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </section>
  );
}
