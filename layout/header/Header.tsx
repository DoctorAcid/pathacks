"use client";

import React from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <nav className="w-full flex items-center justify-between border-b-[1px] border-border-gray">
      <div className="flex items-center">
        <div className="flex items-center justify-center px-8  border-r-[1px] border-border-gray">
          <Image
            width={134}
            height={24}
            alt="nav-logo"
            src="/assets/images/logos/navbar-logo.svg"
          />
        </div>
        <NavMenu />
      </div>

      <div className="flex items-center">
        <PrimaryButton
          text={t("navigation-sign-up")}
          className="border-l-[1px]"
          href="/"
        />
        <PrimaryButton
          text={t("navigation-login")}
          className="border-l-[1px]"
          href="/"
        />
      </div>
    </nav>
  );
};

export default Header;
