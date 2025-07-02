"use client";

import React from "react";
import MarqueeHeader from "../common/MarqueeHeader";
import Image from "next/image";
import SplitLineText from "../animation/SplitLineText";

const BuildFuture = () => {
  return (
    <section className="w-full flex-flex-col items-center">
      <MarqueeHeader text="Ready to Build Your Future?" />
      <div className="relative w-full h-8 mb-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <span className="col-span-3 h-[320px] border-b-[1px] border-border-gray" />
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-x-[0px] border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/learning.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Join the Future of Learning. </h3>
            </SplitLineText>
          </div>
        </div>
        <span className="col-span-3 h-[320px] border-b-[1px] border-border-gray" />
      </div>

      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/journey.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Start your tech journey today</h3>
            </SplitLineText>
          </div>
        </div>
        <span className="col-span-4 h-[320px] border-b-[1px] border-border-gray" />
      </div>

      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <span className="col-span-5 h-[320px] border-b-[1px] border-border-gray" />
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/potential.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Unlock Your Digital Potential.</h3>
            </SplitLineText>
          </div>
        </div>
        <span className="col-span-1 h-[320px] border-b-[1px] border-border-gray" />
      </div>

      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <span className="col-span-2 h-[320px] border-b-[1px] border-border-gray" />
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/project.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Dive into Real Projects.</h3>
            </SplitLineText>
          </div>
        </div>
        <span className="col-span-4 h-[320px] border-b-[1px] border-border-gray" />
      </div>

      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <span className="col-span-6 h-[320px] border-b-[1px] border-border-gray" />
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/community.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Join Our Global Community.</h3>
            </SplitLineText>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 w-full border-y-[1px] border-border-gray mb-8">
        <span className="col-span-1 h-[320px] border-b-[1px] border-border-gray" />
        <div className="relative h-full flex flex-col items-center justify-center col-span-6 border-border-gray">
          <div className="relative w-full h-[320px] flex flex-col items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="bottom"
              alt="gradient-bg"
              src="/assets/images/bgs/build_future/bg-gradient.jpg"
              quality={100}
            />

            <Image
              width={220}
              height={220}
              alt="build_step_1"
              src="/assets/images/icons/build_future/mark.png"
              className="z-10"
            />
          </div>
          <div className="w-full p-8">
            <SplitLineText>
              <h3>Make Your Mark in Tech.</h3>
            </SplitLineText>
          </div>
        </div>
        <span className="col-span-5 h-[320px] border-b-[1px] border-border-gray" />
      </div>
    </section>
  );
};

export default BuildFuture;
