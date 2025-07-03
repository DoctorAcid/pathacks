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
import YourJourney from "@/components/home/YourJourney";
import BuildFuture from "@/components/home/BuildFuture";
import StudentsMentors from "@/components/home/StudentsMentors";
import Pricing from "@/components/home/Pricing";
import CoreFeaturesMobile from "@/components/home/CoreFeaturesMobile";

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
          <div className="w-full hidden lg:flex">
            <CoreFeatures />
          </div>
          <div className="w-full lg:hidden flex">
            <CoreFeaturesMobile />
          </div>
          <YourJourney />
          <BuildFuture />
          <StudentsMentors />
          <Pricing />
        </main>
      </div>
    </Wrapper>
  );
}
