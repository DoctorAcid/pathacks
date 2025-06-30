"use client";

import React from "react";
import MarqueeHeader from "../common/MarqueeHeader";
import Image from "next/image";
import SplitLineText from "../animation/SplitLineText";

const StudentsMentors = () => {
  return (
    <section className="flex flex-col w-full items-center">
      <MarqueeHeader text="Students & Mentors" />
      <div className="relative w-full h-8 border-b-[1px] border-border-gray">
        <Image
          fill
          objectFit="cover"
          objectPosition="center"
          alt="angled-pattern"
          src="/assets/images/patterns/angled-pattern-small.svg"
        />
      </div>
      <div className="flex flex-col w-full items-center mb-8 border-b-[1px] border-border-gray">
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col justify-center p-16 border-b-[1px] border-border-gray">
            <SplitLineText>
              <h1>
                At Pathacks, we believe learning to code shouldn't be a lonely
                journey.
              </h1>
            </SplitLineText>
          </div>
          <div className="relative aspect-5/4 flex items-center justify-center">
            <Image
              fill
              objectFit="cover"
              objectPosition="center"
              alt="student image"
              src="/assets/images/banners/students/banner-s.jpg"
            />
          </div>
        </div>
        <div className="relative w-full h-8 border-b-[1px] border-border-gray">
          <Image
            fill
            objectFit="cover"
            objectPosition="center"
            alt="angled-pattern"
            src="/assets/images/patterns/angled-pattern-small.svg"
          />
        </div>
        <div className="flex flex-col gap-4 w-full p-16">
          <SplitLineText>
            <h3>
              That’s why we built a platform where students and mentors grow
              side by side — through real projects, open collaboration, and
              continuous feedback.
            </h3>
          </SplitLineText>
          <SplitLineText>
            <p>
              Whether you're just starting out or already writing code, Pathacks
              connects you with a community of peers and mentors who are here to
              help, guide, and inspire.
            </p>
          </SplitLineText>
          <SplitLineText>
            <p>
              🚀 Learners build skills by doing — tackling challenges, joining
              bootcamps, and learning from every mistake and win.
            </p>
          </SplitLineText>
          <SplitLineText>
            <p>
              🧭 Mentors lead by example — offering advice, reviewing code, and
              helping shape Morocco’s next generation of developers.
            </p>
          </SplitLineText>
          <SplitLineText>
            <p>
              This is peer-powered learning, rooted in community, driven by
              purpose, and proudly made for Morocco.
            </p>
          </SplitLineText>
        </div>
      </div>
    </section>
  );
};

export default StudentsMentors;
