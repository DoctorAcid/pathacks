"use client";

import React from "react";
import { useTranslation } from "react-i18next";

const IntroSection = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full flex flex-col items-center">
      <div className="w-full flex flex-col gap-4 p-16">
        <h3>{t("home-intro-title")}</h3>
        <p>{t("home-intro-description")}</p>
      </div>
    </section>
  );
};

export default IntroSection;
