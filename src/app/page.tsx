import { Hero } from "@/components/sections/Hero";
import { Vision } from "@/components/sections/Vision";
import { About } from "@/components/sections/About";
import { Features } from "@/components/sections/Features";
import { Statistics } from "@/components/sections/Statistics";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { FAQSchema } from "@/components/shared/JsonLd";
import { faqItems } from "@/content/faq";

export default function Home() {
  return (
    <>
      <FAQSchema items={faqItems} />
      <Hero />
      <Vision />
      <About />
      <Features />
      <Statistics />
      <ComingSoon />
      <FAQ />
      <CTA />
      <Contact />
    </>
  );
}
