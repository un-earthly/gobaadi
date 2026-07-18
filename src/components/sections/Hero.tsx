"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" aria-label="Hero section" className="relative pt-20">
      <div className="hidden lg:block bg-linear-to-br from-[#FAF8F7] via-[#F5F0EC] to-[#F0ECE9] overflow-hidden">
        <Container size="wide" className="py-10 lg:py-16">
          <div className="relative space-y-4 lg:space-y-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 lg:gap-6">
              {/* Title Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="relative grid grid-cols-1 grid-rows-1"
              >
                <Image
                  src="/images/hero/hero-frame.png"
                  alt=""
                  width={780}
                  height={456}
                  className="h-full w-full"
                  priority
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="absolute top-[10%] left-0 sm:top-[12%] sm:left-[6%]">
                  <h1 className="font-tusker font-normal text-[28px] sm:text-[40px] md:text-[56px] lg:text-[72px]">
                    <span className="text-text-primary">Where </span>
                    <span className="text-brand-primary">Livestock</span>
                    <br />
                    <span className="text-text-primary">Meets</span>
                    <br />
                    <span className="text-brand-primary">Intelligence.</span>
                  </h1>
                </div>
              </motion.div>

              {/* Cow Image */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="hidden lg:flex flex-col relative min-h-117.5 overflow-visible"
              >
                <Image
                  src="/images/hero/banner-cow-bg.png"
                  alt=""
                  fill
                  className="object-contain"
                  priority
                />
                <Image
                  src="/images/hero/banner-cow.png"
                  alt="Cow standing on a green pasture representing Gobadi livestock platform"
                  width={509}
                  height={529}
                  className="absolute z-10 h-137.5 w-full -mt-16.5 object-contain"
                  sizes="(min-width: 1024px) 32vw, 100vw"
                  priority
                />
              </motion.div>
            </div>

            {/* Bottom Row - Bento Grid */}
            <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
              {/* Stay Tuned + Launch */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col gap-4 sm:gap-6 lg:w-[26%]"
              >
                <div className="flex flex-1 flex-col justify-center rounded-[30px] bg-brand-primary p-6 md:aspect-4/3">
                  <h2 className="font-tusker ml-6 font-normal uppercase leading-[1.1] text-[30px] md:text-[64px] flex flex-col gap-6">
                    <span className="text-brand-secondary">STAY</span>
                    <span className="text-white">Tuned...</span>
                  </h2>
                </div>

                <div className="relative flex flex-col justify-center overflow-hidden rounded-[30px] border border-border bg-white p-5 shadow-sm min-h-48">
                  <span className="text-[18px] font-semibold  tracking-wide text-text-primary md:text-[24px] mb-3">
                    We are near to:
                  </span>
                  <span className="z-10 text-7xl font-semibold font-tusker leading-none text-brand-primary md:text-[88px]">
                    Launch
                  </span>
                  <Image
                    src="/images/hero/rocket-transparent.gif"
                    alt=""
                    width={128}
                    height={128}
                    unoptimized
                    className="absolute -right-2 top-0 h-32 w-32 object-cover"
                    aria-hidden
                  />
                </div>
              </motion.div>

              {/* Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative lg:w-[22%]"
              >
                <Image
                  src="/images/hero/hero-phone.png"
                  alt="Gobadi mobile app interface showing livestock management dashboard"
                  width={305}
                  height={475}
                  className="h-[450px] w-full rounded-[30px] object-cover lg:h-full"
                  sizes="(min-width: 1024px) 22vw, 100vw"
                  priority
                />
              </motion.div>

              {/* Text Overlay Image */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative flex-1"
              >
                <Image
                  src="/images/hero/hero-cows.png"
                  alt="Cows grazing on a farm"
                  width={641}
                  height={475}
                  className="w-full rounded-[20px] object-cover lg:rounded-[30px]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 32vw"
                  priority
                />
                <div className="absolute inset-0 flex items-start justify-center px-4 pt-6 sm:px-6 sm:pt-8 lg:pt-10">
                  <p className="w-full text-right text-[14px] font-bold leading-relaxed text-text-primary md:text-xl lg:text-left lg:text-[28px]">
                    <span className="block lg:pl-48">AI-powered digital platform</span>
                    <span className="block lg:pl-44">transforming the livestock</span>
                    <span className="block lg:pl-40">eco-system by connecting</span>
                    <span className="block lg:pl-20">farmers, veterinarians, and also</span>
                    <span className="block pl-12">trusted providers in one place.</span>
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Centered Logo - Overlapping */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring", bounce: 0.3 }}
              className="absolute left-[51%] top-[50.5%] z-30 hidden h-60 w-60 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-brand-primary bg-white lg:flex xl:h-72 xl:w-72 2xl:h-80 2xl:w-80"
            >
              <Image
                src="/images/brand/logo-round.png"
                alt="Gobadi brand logo"
                width={320}
                height={320}
                className="h-full w-full rounded-full object-contain"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </div>
      <div className="lg:hidden bg-linear-to-br from-[#FAF8F7] via-[#F5F0EC] to-[#F0ECE9] overflow-hidden">


      </div>
    </section>
  );
}
