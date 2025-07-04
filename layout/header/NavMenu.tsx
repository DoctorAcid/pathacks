"use client";

import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";
import nav_menu_list from "@/data/header/nav-menu";
import PrimaryButton from "@/components/buttons/PrimaryButton";

interface NavMenuProps {
  className?: string;
}

const NavMenu = ({ className }: NavMenuProps) => {
  const { t } = useTranslation();
  return (
    <ul className={`flex ${className ? className : ""}`}>
      {nav_menu_list.map((nav, index) => {
        return (
          <li key={index}>
            <PrimaryButton href={nav.link} text={t(nav.title)} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavMenu;
