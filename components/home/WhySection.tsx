"use client";

import React from "react";
import Collaborate from "../cards/whyPathacks/Collaborate";
import Innovate from "../cards/whyPathacks/Innovate";
import Lead from "../cards/whyPathacks/Lead";
import MarqueeHeader from "../common/MarqueeHeader";
import { useTranslation } from "react-i18next";

const WhySection = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex flex-col items-center">
      <MarqueeHeader text={t("home-why-pathacks-title")} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        <Innovate />
        <Collaborate />
        <Lead />
      </div>
    </section>
  );
};

export default WhySection;
