"use client";

import React from "react";
import Image from "next/image";
import Discord from "@/components/buttons/socialMedia/Discord";
import Facebook from "@/components/buttons/socialMedia/Facebook";
import Instagram from "@/components/buttons/socialMedia/Instagram";
import Linkedin from "@/components/buttons/socialMedia/Linkedin";
import Link from "next/link";
import { motion } from "framer-motion";
import MarqueeHeader from "@/components/common/MarqueeHeader";
import SplitLineText from "@/components/animation/SplitLineText";

const Footer = () => {
  return (
    <footer className="relative w-full h-screen flex flex-col border-t-[1px] border-border-gray">
      <Image
        fill
        objectFit="cover"
        objectPosition="center"
        alt="footer-bg"
        src="/assets/images/bgs/footer/footer-bg.jpg"
        quality={100}
      />
      <div className="z-10 flex flex-col w-full h-full items-center justify-between">
        <div className="flex w-full justify-between p-16">
          <div className="flex flex-col gap-4">
            <Image
              width={448}
              height={42}
              alt="footer-small-logo"
              src="/assets/images/logos/logo-footer.svg"
            />
            <SplitLineText>
              <p>Code Your Future. Build Your World. </p>
            </SplitLineText>
          </div>
          <div className="flex flex-col text-right items-end gap-4">
            <SplitLineText>
              <h3>Connect with Us</h3>
            </SplitLineText>
            <SplitLineText>
              <p className="max-w-[480px]">
                Join the conversation and stay updated on the latest innovations
                and community events.
              </p>
            </SplitLineText>
          </div>
        </div>

        <div className="flex w-full justify-between items-end p-16">
          <div className="flex items-center gap-8">
            <Discord className="fill-white hover:fill-black" />
            <Facebook className="fill-white hover:fill-black" />
            <Instagram className="fill-white hover:fill-black" />
            <Linkedin className="fill-white hover:fill-black" />
          </div>
          <div className="flex flex-col text-right items-end gap-4">
            <SplitLineText>
              <h4>For Partnership</h4>
            </SplitLineText>
            <div className="flex justify-end gap-16">
              <div className="group flex flex-col">
                <Link href="mailto:contact@moroccolabs.com">
                  contact@moroccolabs.com
                </Link>
                <div className="-mt-1 h-[2px] w-0 group-hover:w-full bg-white transition-all duration-300 ease-out" />
              </div>
              <div className="group flex flex-col">
                <Link href="tel:+212661884654">+212661884654</Link>
                <div className="-mt-1 h-[2px] w-0 group-hover:w-full bg-white transition-all duration-300 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MarqueeHeader text="pathacks.com" />
      </div>
    </footer>
  );
};

export default Footer;
