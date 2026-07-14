"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section aria-label="Call to action" className="relative overflow-hidden bg-gradient-to-br from-brand-primary via-[#D4783F] to-brand-primary py-20 md:py-28">
      {/* Decorations */}
      <div className="absolute inset-0 opacity-20" aria-hidden>
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-white blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white blur-[120px]" />
      </div>

      <Container size="narrow" className="relative z-10 text-center">
        <AnimatedSection>
          <div className="mx-auto flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <Sparkles className="h-4 w-4" aria-hidden />
              Join the Revolution
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Transform Your Livestock Management?
            </h2>
            <p className="max-w-2xl text-base text-white/80 md:text-lg lg:text-xl">
              Join thousands of farmers and veterinarians already using Gobadi to build smarter, healthier, and more profitable livestock operations.
            </p>
            <div className="flex flex-col gap-4 pt-4 sm:flex-row">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-white text-brand-primary hover:bg-white/90 hover:shadow-xl shadow-lg"
              >
                Get Started Today
                <ArrowRight className="h-5 w-5" aria-hidden />
              </Button>
              <Button
                size="lg"
                variant="ghost"
                onClick={scrollToContact}
                className="border-2 border-white/30 text-white hover:bg-white/10"
              >
                Contact Our Team
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
