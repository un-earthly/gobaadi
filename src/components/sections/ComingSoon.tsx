"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const SOON_LETTERS = ["S", "O", "O", "N"] as const;

export function ComingSoon() {
  return (
    <section id="coming-soon" aria-label="Coming Soon" className="w-full bg-white py-16 md:py-24 overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <AnimatedSection className="flex flex-col items-start gap-4 md:gap-6 lg:col-span-7">
            <h2 className="font-audiowide text-[36px] font-normal uppercase leading-[1.1] tracking-tight text-text-primary md:text-[87px]">
              Something <br /> New Is
            </h2>
            <div className="inline-block max-w-fit rounded-3xl bg-brand-primary p-3 shadow-lg shadow-brand-primary/15 md:p-4">
              <p className="text-4xl font-black uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl">
                Coming
              </p>
              <div className="flex items-center justify-between gap-2 pt-3">
                {SOON_LETTERS.map((letter, index) => (
                  <span
                    key={index}
                    className="inline-flex min-w-[3rem] items-center justify-center rounded-3xl bg-white p-2 md:min-w-[4.5rem] md:p-3"
                  >
                    <span className="text-4xl font-black tracking-[0.08em] text-brand-primary sm:text-5xl md:text-6xl">
                      {letter}
                    </span>
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-2 max-w-2xl text-xl font-semibold leading-snug text-text-primary md:text-2xl lg:text-3xl">
              Our new and improved <br className="hidden sm:inline" /> digital livestock platform.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3} direction="right" className="flex justify-center lg:col-span-5">
            <div className="relative aspect-[0.88] w-full max-w-[520px]">
              <Image
                src="/images/coming-soon/app-preview.png"
                alt="Gobadi mobile application dashboard preview"
                fill
                className="pointer-events-none z-20 object-contain"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
