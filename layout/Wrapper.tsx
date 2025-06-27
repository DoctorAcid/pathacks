"use client";

import React, { useEffect } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";
import Lenis from "lenis";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <div className="w-full">
      <Header />
      <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      <Footer />
    </div>
  );
};

export default Wrapper;
