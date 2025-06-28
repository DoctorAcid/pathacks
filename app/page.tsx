"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Collaborate from "@/components/cards/whyPathacks/Collaborate";
import Innovate from "@/components/cards/whyPathacks/Innovate";
import Lead from "@/components/cards/whyPathacks/Lead";
import MarqueeHeader from "@/components/common/MarqueeHeader";
import CoreFeatures from "@/components/home/CoreFeatures";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PathacksAnimation from "@/components/home/PathacksAnimation";
import WhySection from "@/components/home/WhySection";
import Wrapper from "@/layout/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

export default function Home() {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const tl = gsap.timeline();
  tl.to(containerRef.current, {
    opacity: 1,
  });

  return (
    <Wrapper>
      <div className="w-full">
        <main className="w-full flex flex-col items-center">
          <HeroSection />
          <IntroSection />
          <PathacksAnimation />
          <WhySection />
          <CoreFeatures />
          <section className="relative flex flex-col w-full h-[90vh] items-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="top"
              alt=""
              src="/assets/images/bgs/core_features/coding.jpg"
            />
            <div className="relative w-full h-8 border-b-[1px] border-border-gray">
              <Image
                fill
                objectFit="cover"
                objectPosition="center"
                alt="angled-pattern"
                src="/assets/images/patterns/angled-pattern-small.svg"
              />
            </div>
            <div className="z-10 grid grid-cols-2 w-full p-16">
              <h1>Your Journey Starts Here. </h1>
              <div className="flex flex-col gap-4">
                <h3>Beyond the Classroom: Tech That Transforms.</h3>
                <p>
                  Experience hands-on learning that prepares you for tomorrow's
                  challenges. Master the skills that matter, with a global
                  community by your side.
                </p>
                <p>
                  Our unique dimensional progression guides you through
                  increasingly complex concepts, ensuring a deep understanding
                  and practical mastery. From your first line of code to
                  deploying your own applications, we provide the structured
                  path and dedicated support you need to succeed.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full flex-flex-col items-center">
            <MarqueeHeader text="Ready to Build Your Future?" />
          </section>
        </main>
      </div>
    </Wrapper>
  );
}
