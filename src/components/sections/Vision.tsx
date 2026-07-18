"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";

const features = [
  {
    icon: "/images/vision/icon-ecosystem.png",
    iconAlt: "Animal Care Ecosystem icon",
    title: "Animal Care Ecosystem",
    description:
      "A complete platform for pet health, care guidance, and daily wellbeing support.",
    className: "",
  },
  {
    icon: "/images/vision/icon-consultation.png",
    iconAlt: "Doctor Consultation Network icon",
    title: "Doctor Consultation Network",
    description:
      "Instant access to veterinary professionals for reliable diagnosis and treatment advice.",
    className: "",
  },
  {
    icon: "/images/vision/icon-ai-insights.png",
    iconAlt: "AI-Powered Insights icon",
    title: "AI-Powered Insights & Marketplace",
    description:
      "Smart AI results for better decisions, plus a marketplace for services, products, and care solutions.",
    className: "md:col-span-2",
  },
];

const visionImages = [
  { src: "/images/vision/doctor-cow.png", alt: "Veterinarian examining cow health", position: "top-[7%] left-[8%] md:left-[16%] md:w-[35%] w-[40%]", z: "z-20" },
  { src: "/images/vision/cow-care.png", alt: "Farmer feeding livestock in barn", position: "md:top-[38%] md:right-[10%] md:w-[33%] w-[40%] right-[2%] top-[25%]", z: "z-30" },
  { src: "/images/vision/handshake.png", alt: "Farmers shaking hands at livestock farm", position: "bottom-[10%] left-[10%] md:w-[42%] w-[45%]", z: "z-40" },
  { src: "/images/vision/cow-farm.png", alt: "Cow on green farm", position: "top-[0.5%] md:right-[30%] md:w-[10%] w-[15%] right-[9%]", z: "z-20" },
];

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="w-full bg-white py-16 md:py-24 overflow-hidden"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left - Content */}
          <div className="flex flex-col gap-10 lg:col-span-6">
            <AnimatedSection>
              <SectionHeader
                headingId="vision-heading"
                badge="Our Visions"
                title="Empowering Smarter Animal Care Through AI"
                description="Gobadi is building a unified digital ecosystem where animal care becomes faster, smarter, and more accessible. Our goal is to improve animal wellbeing through AI-driven insights, expert consultation, and trusted marketplace solutions."
                align="left"
                titleClassName="font-display"
                descriptionClassName="text-justify"
              />
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 gap-x-8 gap-y-8 border-t border-brand-primary/10 pt-8 md:grid-cols-2">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className={`flex gap-4 items-start group ${feature.className}`}
                >
                  <div className="mt-1 shrink-0">
                    <Image
                      src={feature.icon}
                      alt={feature.iconAlt}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-1.5 max-w-xl">
                    <h3 className="text-base font-semibold text-text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-text-secondary md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>

          {/* Right - Image Grid */}
          <AnimatedSection delay={0.3} direction="right" className="lg:col-span-6">
            <div className="relative flex aspect-square w-full max-w-4xl items-center justify-center mx-auto md:aspect-[4/3] lg:aspect-square">
              {/* Background shape */}
              <div className="absolute left-[8%] top-[8%] h-[280px] w-[300px] rounded-tl-[140px] bg-[#FFF6F3] md:h-[338px] md:w-[426px]" />

              {/* Vision images */}
              {visionImages.map((img, i) => (
                <div
                  key={img.src}
                  className={`absolute ${img.position} aspect-square rounded-full shadow-lg overflow-hidden ${img.z} ${i === 0 ? "-mt-10" : ""}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, 30vw"
                    className="object-cover"
                  />
                </div>
              ))}

              {/* Decorative circles */}
              <div className="absolute bottom-[40%] left-[10%] aspect-square w-[18%] rounded-full bg-brand-primary shadow-md md:w-[13%]" />
              <div className="absolute right-[5%] top-0 aspect-square w-[10%] rounded-full bg-brand-primary/50 shadow-sm md:right-[28%] md:w-[7%]" />
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
