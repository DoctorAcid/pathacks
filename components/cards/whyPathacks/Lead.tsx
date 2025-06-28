"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Lead = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full border-border-gray">
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
          src="/assets/images/bgs/why-pathacks/lead.svg"
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
          initial={{ y: 0, x: 0 }}
          animate={{ y: [0, -30, 0], x: [0, 30, 0] }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="absolute -bottom-20 -left-20"
          width="305"
          height="305"
          viewBox="0 0 305 305"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M305 6.66599e-06L305 305L5.7372e-06 0L305 6.66599e-06Z"
            fill="#040B16"
          />
          <path
            d="M152.5 152.5L152.5 305L0 152.5L152.5 152.5Z"
            fill="#040B16"
          />
        </motion.svg>
      </div>
      <div className="flex flex-col p-16">
        <h3>{t("home-why-pathacks-lead")}</h3>
      </div>
    </div>
  );
};

export default Lead;
