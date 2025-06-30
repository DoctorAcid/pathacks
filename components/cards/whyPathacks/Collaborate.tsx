"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SplitLineText from "@/components/animation/SplitLineText";

const Collaborate = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full border-x-[1px] border-border-gray">
      <div className="relative w-full h-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <div className="relative flex items-center justify-center w-full h-[256px] overflow-hidden">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="innovate-bg"
          src="/assets/images/bgs/why-pathacks/collaborate.svg"
        />
        <div className="absolute inset-0 max-w-[800px]">
          <Image
            fill
            objectFit="cover"
            objectPosition="center"
            alt="noise"
            src="/assets/images/filters/noise-bg.jpg"
            className="z-1 mix-blend-color-dodge"
          />
        </div>
        <motion.svg
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
          className="absolute top-10 -left-5"
          width="490"
          height="435"
          viewBox="0 0 490 435"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="244.833"
            cy="217.45"
            rx="207.624"
            ry="168.8"
            transform="rotate(-15 244.833 217.45)"
            fill="#040B16"
          />
          <rect
            x="108.364"
            y="210.328"
            width="259.952"
            height="33.7601"
            transform="rotate(-15 108.364 210.328)"
            fill="black"
          />
          <rect
            x="121.034"
            y="257.612"
            width="183.992"
            height="33.7601"
            transform="rotate(-15 121.034 257.612)"
            fill="black"
          />
        </motion.svg>
      </div>
      <div className="flex flex-col p-16">
        <SplitLineText>
          <h2>{t("home-why-pathacks-collaborate")}</h2>
        </SplitLineText>
      </div>
    </div>
  );
};

export default Collaborate;
