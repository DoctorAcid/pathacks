"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import SplitLineText from "../animation/SplitLineText";

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col items-center pt-8 md:pt-0">
      <div className="w-full flex flex-col gap-4 p-4 md:p-8 lg:p-16">
        <SplitLineText>
          <h3>{t("home-intro-title")}</h3>
        </SplitLineText>
        <SplitLineText>
          <p>{t("home-intro-description")}</p>
        </SplitLineText>
      </div>
    </section>
  );
};

export default IntroSection;
