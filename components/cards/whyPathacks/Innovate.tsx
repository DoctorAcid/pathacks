"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SplitLineText from "@/components/animation/SplitLineText";

const Innovate = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full border-r-[1px] border-border-gray">
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
          src="/assets/images/bgs/why-pathacks/innovate.svg"
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
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "linear",
          }}
          className="absolute top-10 -left-10"
          width="446"
          height="446"
          viewBox="0 0 446 446"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M174.245 20.325C201.403 -6.03669 244.597 -6.03669 271.755 20.325L276.923 25.3412C289.727 37.7697 306.794 44.8392 324.636 45.1048L331.838 45.212C369.682 45.7753 400.225 76.3179 400.788 114.162L400.895 121.364C401.161 139.206 408.23 156.273 420.659 169.077L425.675 174.245C452.037 201.403 452.037 244.597 425.675 271.755L420.659 276.923C408.23 289.727 401.161 306.794 400.895 324.636L400.788 331.838C400.225 369.682 369.682 400.225 331.838 400.788L324.636 400.895C306.794 401.161 289.727 408.23 276.923 420.659L271.755 425.675C244.597 452.037 201.403 452.037 174.245 425.675L169.077 420.659C156.273 408.23 139.206 401.161 121.364 400.895L114.162 400.788C76.3179 400.225 45.7753 369.682 45.212 331.838L45.1048 324.636C44.8392 306.794 37.7697 289.727 25.3412 276.923L20.325 271.755C-6.03669 244.597 -6.03669 201.403 20.325 174.245L25.3412 169.077C37.7697 156.273 44.8392 139.206 45.1048 121.364L45.212 114.162C45.7753 76.3179 76.3179 45.7753 114.162 45.212L121.364 45.1048C139.206 44.8392 156.273 37.7697 169.077 25.3412L174.245 20.325Z"
            fill="#040B16"
          />
        </motion.svg>
      </div>
      <div className="flex flex-col p-16">
        <SplitLineText>
          <h2>{t("home-why-pathacks-innovate")}</h2>
        </SplitLineText>
      </div>
    </div>
  );
};

export default Innovate;
