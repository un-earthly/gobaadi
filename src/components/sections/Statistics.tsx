"use client";

import { useRef, useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { useInView } from "framer-motion";
import { statistics } from "@/content/statistics";

function CounterNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;
    const increment = value / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCount(Math.min(Math.round(increment * step), value));
      if (step >= steps) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Statistics() {
  return (
    <section aria-label="Platform statistics" className="relative bg-brand-primary py-16 md:py-20 overflow-hidden">
      <div className="absolute inset-0 opacity-10" aria-hidden>
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-white blur-3xl" />
      </div>
      <Container size="wide" className="relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {statistics.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                  <CounterNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-white/70 sm:text-base md:mt-3">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
