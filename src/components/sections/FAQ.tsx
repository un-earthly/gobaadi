"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { faqItems } from "@/content/faq";

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="bg-white py-20 md:py-28">
      <Container size="narrow">
        <AnimatedSection>
          <SectionHeader
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Find answers to common questions about Gobadi and how our platform can transform your livestock management."
            align="center"
          />
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="mt-12 lg:mt-16">
          <div className="rounded-3xl border border-border/50 bg-surface-warm/30 p-6 md:p-8 lg:p-10">
            <Accordion items={faqItems} />
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
