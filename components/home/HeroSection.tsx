"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../buttons/PrimaryButton";
import SplitLineText from "../animation/SplitLineText";
import HeroAnimation from "../animation/HeroAnimation";
import Link from "next/link";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col items-center pt-8 md:pt-0">
      <div className="absolute bottom-0 w-full h-[1080px]">
        {/* <Image
          fill
          objectFit="cover"
          objectPosition="bottom"
          alt="hero-bg"
          src="/assets/images/bgs/hero/bg-hero.jpg"
          quality={100}
        /> */}
      </div>
      <div className="z-10 w-full p-4 md:p-8 lg:p-16 flex flex-col gap-4">
        <SplitLineText>
          <h1>{t("home-hero-title")}</h1>
        </SplitLineText>
        <SplitLineText>
          <p>{t("home-hero-description")}</p>
        </SplitLineText>

        <PrimaryButton
          text={t("button-join")}
          className="border-[1px]"
          href="https://www.pathacks.com/curriculum"
        />
      </div>
      <div className="w-full flex justify-center overflow-hidden">
        {/* <HeroAnimation />
        <Image
          width={1375}
          height={833}
          alt="hero-filter"
          src="/assets/images/filters/noise-hero.png"
          quality={100}
          className="absolute mix-blend-color-dodge"
        /> */}
        {/* <Image
          width={1440}
          height={873}
          alt="hero-image"
          src="/assets/images/banners/hero/laptop.png"
          quality={100}
          className="z-10"
        /> */}
        <div className="flex w-full items-center justify-center min-w-[1280px]">
          <video
            width={1920}
            height={1080}
            autoPlay
            loop
            muted
            src="/assets/videos/hero_video_1.mp4"
            className="z-[-10]"
            playsInline
            preload="auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
