"use client";

import React from "react";
import Image from "next/image";
import SplitLineText from "../animation/SplitLineText";

const YourJourney = () => {
  return (
    <section className="relative flex flex-col w-full h-[90vh] items-center mb-8">
      <Image
        fill
        objectFit="cover"
        objectPosition="top"
        alt=""
        src="/assets/images/bgs/core_features/coding.jpg"
      />
      <div className="relative w-full h-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <div className="z-10 grid grid-cols-2 w-full p-16">
        <SplitLineText>
          <h1>Your Journey Starts Here. </h1>
        </SplitLineText>
        <div className="flex flex-col gap-4">
          <SplitLineText>
            <h3>Beyond the Classroom: Tech That Transforms.</h3>
          </SplitLineText>
          <SplitLineText>
            <p>
              Experience hands-on learning that prepares you for tomorrow's
              challenges. Master the skills that matter, with a global community
              by your side.
            </p>
          </SplitLineText>
          <SplitLineText>
            <p>
              Our unique dimensional progression guides you through increasingly
              complex concepts, ensuring a deep understanding and practical
              mastery. From your first line of code to deploying your own
              applications, we provide the structured path and dedicated support
              you need to succeed.
            </p>
          </SplitLineText>
        </div>
      </div>
    </section>
  );
};

export default YourJourney;
