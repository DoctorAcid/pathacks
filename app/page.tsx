"use client";

import PrimaryButton from "@/components/buttons/PrimaryButton";
import Collaborate from "@/components/cards/whyPathacks/Collaborate";
import Innovate from "@/components/cards/whyPathacks/Innovate";
import Lead from "@/components/cards/whyPathacks/Lead";
import MarqueeHeader from "@/components/common/MarqueeHeader";
import HeroSection from "@/components/home/HeroSection";
import IntroSection from "@/components/home/IntroSection";
import PathacksAnimation from "@/components/home/PathacksAnimation";
import WhySection from "@/components/home/WhySection";
import Wrapper from "@/layout/Wrapper";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <div className="w-full">
        <main className="w-full flex flex-col items-center">
          <HeroSection />
          <IntroSection />
          <PathacksAnimation />
          <WhySection />
          <section className="w-full flex flex-col items-center">
            <MarqueeHeader text={t("home-core-features-title")} />
          </section>
        </main>
      </div>
    </Wrapper>
  );
}
