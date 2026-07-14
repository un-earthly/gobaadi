"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { AnimatedSection, StaggerContainer, staggerItem } from "@/components/shared/AnimatedSection";
import { motion } from "framer-motion";
import { Stethoscope, Brain, ShoppingBag, BookOpen, Users, Shield } from "lucide-react";

const featuresList = [
  {
    icon: Shield,
    title: "Animal Care Ecosystem",
    description:
      "A comprehensive platform for livestock health monitoring, daily care guidance, and wellbeing management — all powered by intelligent automation.",
    gradient: "from-orange-500/10 to-amber-500/10",
    iconColor: "text-orange-600",
  },
  {
    icon: Stethoscope,
    title: "Veterinary Consultation Network",
    description:
      "Connect instantly with licensed veterinary professionals for reliable diagnosis, treatment recommendations, and ongoing health management.",
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600",
  },
  {
    icon: Brain,
    title: "AI-Powered Insights & Analytics",
    description:
      "Leverage advanced AI to make data-driven decisions about livestock health, breeding, nutrition, and farm productivity optimization.",
    gradient: "from-purple-500/10 to-pink-500/10",
    iconColor: "text-purple-600",
  },
  {
    icon: ShoppingBag,
    title: "Trusted Marketplace",
    description:
      "Buy and sell livestock, veterinary supplies, feed, and farming equipment through our verified marketplace with trusted sellers and transparent pricing.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconColor: "text-green-600",
  },
  {
    icon: BookOpen,
    title: "Expert Knowledge Hub",
    description:
      "Access a growing library of veterinary educational content, farming best practices, and AI-generated personalized livestock management guides.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    iconColor: "text-amber-600",
  },
  {
    icon: Users,
    title: "Farmer Community Network",
    description:
      "Join a thriving community of farmers, veterinarians, and agricultural experts sharing knowledge, resources, and innovative farming solutions.",
    gradient: "from-teal-500/10 to-cyan-500/10",
    iconColor: "text-teal-600",
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-heading" className="bg-surface-warm py-20 md:py-28">
      <Container size="wide">
        <AnimatedSection>
          <SectionHeader
            badge="Our Features"
            title="Everything You Need for Smarter Livestock Management"
            description="From AI-powered health insights to a trusted marketplace, Gobadi provides a complete ecosystem for modern livestock management."
            align="center"
          />
        </AnimatedSection>

        <StaggerContainer className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:mt-20">
          {featuresList.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={staggerItem}
                className="group relative overflow-hidden rounded-3xl border border-border/50 bg-white p-8 shadow-sm transition-all duration-500 hover:shadow-xl hover:shadow-brand-primary/5 hover:-translate-y-1"
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

                <div className="relative z-10">
                  <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.gradient} ${feature.iconColor}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    {feature.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-text-secondary lg:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
