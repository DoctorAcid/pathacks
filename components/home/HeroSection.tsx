"use client";

import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../buttons/PrimaryButton";
import SplitLineText from "../animation/SplitLineText";

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="absolute bottom-0 w-full h-[1080px]">
        <Image
          fill
          objectFit="cover"
          objectPosition="bottom"
          alt="hero-bg"
          src="/assets/images/bgs/hero/bg-hero.jpg"
          quality={100}
        />
      </div>
      <div className="z-10 w-full p-16 flex flex-col gap-4">
        <SplitLineText>
          <h1>{t("home-hero-title")}</h1>
        </SplitLineText>
        <SplitLineText>
          <p>{t("home-hero-description")}</p>
        </SplitLineText>
        <PrimaryButton text={t("button-join")} className="border-[1px]" />
      </div>
      <div className="w-full flex px-16 justify-center">
        <Image
          width={1440}
          height={873}
          alt="hero-image"
          src="/assets/images/banners/hero/laptop.png"
          quality={100}
          className="z-10"
        />
      </div>
    </section>
  );
};

export default HeroSection;
