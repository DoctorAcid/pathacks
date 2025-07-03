"use client";

import React from "react";
import Image from "next/image";
import SplitLineText from "../animation/SplitLineText";
import MarqueeHeader from "../common/MarqueeHeader";
import { useTranslation } from "react-i18next";

const CoreFeaturesMobile = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-black text-white w-full overflow-hidden">
      <MarqueeHeader text={t("home-core-features-title")} />
      <div className="relative w-full h-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <>
        <div className="relative h-screen w-[100vw] overflow-hidden">
          <div className="relative h-[150vh] px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 flex flex-col gap-2 items-center overflow-hidden">
            <Image
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full text-center">
              <SplitLineText>
                <h1 className="">Real-World Impact</h1>
              </SplitLineText>
              <SplitLineText className="max-w-[800px] text-center">
                <p>
                  Dive into hands-on projects that solve real problems and make
                  a tangible difference. Our curriculum is designed to mirror
                  the demands of the professional tech world, ensuring you gain
                  skills that are immediately applicable. 
                </p>
              </SplitLineText>
            </div>
            <div className="absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden">
              <div className="absolute inset-0 w-[100vw] ">
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div className="absolute bottom-10 w-full h-screen">
              <div className="w-[1080px] flex items-center justify-center">
                <Image
                  width={1920}
                  height={1080}
                  alt=""
                  src="/assets/images/elements/core_features/impact.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-screen w-[100vw] overflow-hidden">
          <div className="relative h-[150vh] px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 flex flex-col gap-2 items-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full">
              <SplitLineText className="text-center">
                <h1 className="">Vibrant Community </h1>
              </SplitLineText>
              <SplitLineText className="max-w-[800px] text-center">
                <p>
                  Connect with fellow Pathackers, mentors, and industry experts
                  from around the world. Our Discord community is a hub for
                  knowledge sharing, peer review, and collaborative
                  problem-solving. You're never alone on your journey. 
                </p>
              </SplitLineText>
            </div>
            <div className="absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden">
              <div className="absolute inset-0 w-[100vw] h-">
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div className="absolute top-0 w-full h-screen flex items-center justify-center">
              <div className="absolute -bottom-40 left-0">
                <Image
                  width={650}
                  height={710}
                  alt=""
                  src="/assets/images/elements/core_features/community-01.svg"
                />
              </div>
              <div className="absolute top-60 right-0">
                <Image
                  width={648}
                  height={648}
                  alt=""
                  src="/assets/images/elements/core_features/community-02.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-screen w-[100vw] overflow-hidden">
          <div className="relative h-[150vh] px-4 py-8 md:px-8 md:py-16 lg:px-16 lg:py-24 flex flex-col gap-2 items-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full text-center">
              <SplitLineText className="text-center">
                <h1 className="">Future-Ready Skills</h1>
              </SplitLineText>
              <SplitLineText className="max-w-[800px] text-center">
                <p>
                  Master cutting-edge technologies and advanced concepts, from
                  foundational programming to AI and modern web frameworks. We
                  equip you with the skills needed to thrive in tomorrow's
                  rapidly evolving digital landscape. 
                </p>
              </SplitLineText>
            </div>
            <div className="absolute inset-0 flex items-center justify-center w-screen h-screen overflow-hidden">
              <div className="absolute inset-0 w-[100vw] h-">
                <Image
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div className="absolute -bottom-40 w-full h-screen">
              <div className="absolute bottom-100 min-w-[800px]">
                <Image
                  width={1200}
                  height={710}
                  alt=""
                  src="/assets/images/elements/core_features/mobile/certificate.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default CoreFeaturesMobile;
