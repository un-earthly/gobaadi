"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="relative">
      <div
        style={{
          backgroundImage: "url('/images/about/field&sky.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top center",
          backgroundSize: "100% 120%",
        }}

        className="relative min-h-150 overflow-hidden lg:min-h-[900px]">
        {/* Field Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/images/about/field.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center top",
            backgroundSize: "100% 115%",
            maskImage:
              "linear-gradient(to bottom, transparent 0px, transparent 170px, rgba(0,0,0,0.2) 210px, rgba(0,0,0,0.6) 250px, black 300px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent 0px, transparent 170px, rgba(0,0,0,0.2) 210px, rgba(0,0,0,0.6) 250px, black 300px)",
          }}
          aria-hidden
        />

        {/* Sky */}
        <div
          className="absolute left-0 right-0 top-0 z-10 h-[300px] lg:h-[500px]"

          aria-hidden
        />

        {/* Content */}
        <div className="relative z-20 py-16 md:py-24">
          <Container size="narrow">
            <AnimatedSection>
              <SectionHeader
                badge="About Us"
                title="Who We Are"
                description="Our platform enables farmers to access veterinary care, book services from licensed veterinarians, receive AI-assisted health insights, and generate personalized livestock management content. Veterinarians can also use AI to create educational content, share expert knowledge, and provide digital consultations more efficiently."
                align="center"
              />
            </AnimatedSection>
          </Container>

          {/* Image Grid */}
          <Container size="default" className="mt-16 lg:mt-24">
            <div className="grid grid-cols-2 items-center gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
              <AnimatedSection delay={0.1}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] lg:rounded-[32px]">
                  <Image
                    src="/images/about/sheep.png"
                    alt="Farmer smiling while holding a fluffy lamb in a green pasture"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] md:-translate-y-8 lg:-translate-y-12 lg:rounded-[32px]">
                  <Image
                    src="/images/about/cow.png"
                    alt="Veterinarian examining healthy cows inside a modern barn"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 30vw"
                  />
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02] md:translate-y-8 lg:translate-y-12 lg:rounded-[32px] col-span-2 md:col-span-1">
                  <Image
                    src="/images/about/chicken.png"
                    alt="Farmer holding white turkey poultry in a well-maintained farm"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </AnimatedSection>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
