"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

const SOON_LETTERS = ["S", "O", "O", "N"] as const;

export function ComingSoon() {
  return (
    <section id="coming-soon" aria-label="Coming Soon" className="w-full bg-white py-16 md:py-24 overflow-hidden">
      {/* <Container size="wide"> */}
      <div className="flex justify-between items-center ">
        <AnimatedSection className="flex gap-10 flex-col items-start lg:pl-80">
          <h2 className="font-audiowide text-[36px] font-normal leading-[1.1] tracking-tight text-text-primary md:text-[87px]">
            Something <br /> New Is
          </h2>
          <div className="h-full w-full">
            <img src="/images/coming-soon/coming-soon.png" className="h-full w-full" alt="" />
          </div>
          <p className=" max-w-2xl text-xl font-semibold leading-snug text-text-primary md:text-2xl lg:text-3xl">
            Our new and improved <br className="hidden sm:inline" /> digital livestock platform.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} direction="right" className="flex items-end justify-end">
          <div className="h-200">
            <img src="/images/coming-soon/app-preview.png" alt="Preview of the upcoming Gobadi mobile app interface" />
          </div>
        </AnimatedSection>
      </div>
      {/* </Container> */}
    </section>
  );
}
