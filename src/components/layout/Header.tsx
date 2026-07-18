"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content/navigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { motion, AnimatePresence } from "framer-motion";

const sectionIds = ["home", "vision", "about", "features", "coming-soon", "faq", "contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { activeSection, scrollToSection } = useScrollSpy(sectionIds, 100);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    scrollToSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/50 shadow-lg shadow-black/3 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto container px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group" aria-label="Gobadi Home">
            <motion.div
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src="/images/brand/logo.png"
                alt="Gobadi logo"
                width={40}
                height={40}
                className="rounded-lg object-contain"
                priority
              />
            </motion.div>
            <span className="font-bengali text-2xl font-bold text-text-primary sm:text-3xl group-hover:text-brand-primary transition-colors">
              গবাদি
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden items-center gap-1 md:flex">
            <nav aria-label="Main navigation" className="flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "relative rounded-xl px-4 py-2 text-[15px] font-medium transition-all duration-300 cursor-pointer",
                      isActive
                        ? "text-brand-primary"
                        : "text-text-secondary hover:text-text-primary"
                    )}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 rounded-xl bg-brand-primary/5 border border-brand-primary/10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            <button
              onClick={() => handleNavClick("#contact")}
              className="ml-4 flex items-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-[#D4783F] px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-primary/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Zap className="h-4 w-4" aria-hidden />
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors hover:bg-surface-warm md:hidden"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileOpen}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileOpen(false)}
              aria-hidden
            />
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-20 border-t border-border/50 bg-white shadow-2xl md:hidden"
            >
              <nav aria-label="Mobile navigation" className="flex flex-col gap-1 p-4">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace("#", "");
                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        "w-full rounded-xl px-4 py-3.5 text-left text-base font-medium transition-all cursor-pointer",
                        isActive
                          ? "bg-brand-primary/5 text-brand-primary font-semibold"
                          : "text-text-secondary hover:bg-surface-warm"
                      )}
                    >
                      {link.label}
                    </button>
                  );
                })}
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-primary to-[#D4783F] px-6 py-3.5 text-base font-semibold text-white transition-all hover:shadow-lg cursor-pointer"
                >
                  <Zap className="h-4 w-4" aria-hidden />
                  Contact Us
                </button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
