"use client";

import React from "react";
import MarqueeHeader from "../common/MarqueeHeader";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";
import price_list from "@/data/pricing_data";
import SplitLineText from "../animation/SplitLineText";

const Pricing = () => {
  return (
    <section className="flex flex-col w-full items-center">
      <MarqueeHeader text="Empowering Learning" />
      <div className="relative w-full h-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 w-full border-b-[1px] border-border-gray mb-8">
        {price_list.map((list, index) => {
          return (
            <div
              key={index}
              className="flex flex-col w-full border-r-0 md:border-r-[1px] border-y-[1px] lg:border-y-0 mb-8 lg:mb-0 border-border-gray"
            >
              <div className="flex flex-col gap-4 w-full p-8">
                <SplitLineText>
                  <h5>{list.title}</h5>
                </SplitLineText>
                <div className="flex items-center w-full gap-4">
                  <SplitLineText>
                    <h1>${list.value}</h1>
                  </SplitLineText>
                  <SplitLineText>
                    <p>/ Month</p>
                  </SplitLineText>
                </div>
              </div>
              <PrimaryButton
                text="get started now"
                className="border-y-[1px] w-full"
                href="https://www.pathacks.com/signup"
              />
              <div className="flex flex-col gap-4 w-full p-8">
                {list.features.map((feature, i) => {
                  return (
                    <div key={i} className="flex items-center w-full gap-4">
                      <Image
                        src={
                          feature.access
                            ? "/assets/images/icons/pricing/tick.jpg"
                            : "/assets/images/icons/pricing/cross.jpg"
                        }
                        alt=""
                        width={48}
                        height={48}
                      />
                      <SplitLineText>
                        <p>{feature.feature}</p>
                      </SplitLineText>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
