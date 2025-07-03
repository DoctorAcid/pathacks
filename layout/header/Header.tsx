"use client";

import React, { useState } from "react";
import Image from "next/image";
import NavMenu from "./NavMenu";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
// import { Menu, X } from "lucide-react";

const Header = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full border-b-[1px] border-border-gray bg-black text-white relative z-50">
      <div className="flex items-center justify-between h-[62px] px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center border-border-gray">
          <Image
            width={134}
            height={24}
            alt="nav-logo"
            src="/assets/images/logos/navbar-logo.svg"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <NavMenu />
          <PrimaryButton text={t("navigation-sign-up")} href="/" />
          <PrimaryButton text={t("navigation-login")} href="/" />
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <div
            onClick={() => setMenuOpen(!menuOpen)}
            className="focus:outline-none"
            aria-label="Toggle menu"
          >
            <PrimaryButton text={menuOpen ? "close" : "menu"} />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden absolute w-full border-b-[1px] flex flex-col items-start gap-4 px-4 py-6 border-t border-border-gray bg-black"
          >
            <NavMenu className="flex-col w-full items-center" />
            <PrimaryButton
              text={t("navigation-sign-up")}
              href="/"
              className="w-full items-center justify-center"
            />
            <PrimaryButton
              text={t("navigation-login")}
              href="/"
              className="w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Header;
