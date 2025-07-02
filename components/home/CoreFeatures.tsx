"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { motion } from "framer-motion";
import MarqueeHeader from "../common/MarqueeHeader";
import { useTranslation } from "react-i18next";
import SplitLineText from "../animation/SplitLineText";

gsap.registerPlugin(ScrollTrigger);

const CoreFeatures = () => {
  const { t } = useTranslation();
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const innerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageBGRefs = useRef<(HTMLImageElement | null)[]>([]);
  const imageRWIRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageVC1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const imageVC2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const imageC1Refs = useRef<(HTMLDivElement | null)[]>([]);
  const imageC2Refs = useRef<(HTMLDivElement | null)[]>([]);
  const imageC3Refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      slideRefs.current.forEach((slide, i) => {
        const inner = innerRefs.current[i];
        const imageBG = imageBGRefs.current[i];
        const imageRWI = imageRWIRefs.current[i];
        const imageVC1 = imageVC1Refs.current[i];
        const imageVC2 = imageVC2Refs.current[i];
        const imageC1 = imageC1Refs.current[i];
        const imageC2 = imageC2Refs.current[i];
        const imageC3 = imageC3Refs.current[i];
        if (!slide || !inner) return;

        // Pin each slide individually
        ScrollTrigger.create({
          trigger: slide,
          start: "top top",
          end: "+=200%", // long scroll for each slide
          pin: true,
          scrub: true,
        });

        // Animate inner content scrolling upward
        gsap.fromTo(
          inner,
          { scale: 1 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=100%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageBG,
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top center",
              end: "+=100%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageRWI,
          { x: -1080 },
          {
            x: -100,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageVC1,
          { y: 1080, x: -1920, rotate: 45 },
          {
            y: 200,
            x: -500,
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageVC2,
          { y: 1080, x: 1920, rotate: -70 },
          {
            y: 200,
            x: 500,
            rotate: 0,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageC1,
          { y: 1080, x: -500 },
          {
            y: 500,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageC2,
          { y: 1080 },
          {
            y: 210,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );

        gsap.fromTo(
          imageC3,
          { y: 1080, x: 500 },
          {
            y: 300,
            ease: "none",
            scrollTrigger: {
              trigger: slide,
              start: "top top",
              end: "+=200%",
              scrub: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

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
        <div
          ref={(el) => {
            slideRefs.current[0] = el;
          }}
          className="relative h-screen w-[100vw] overflow-hidden"
        >
          <div
            ref={(el) => {
              innerRefs.current[0] = el;
            }}
            className="relative h-[150vh] px-16 py-24 flex flex-col gap-2 items-center overflow-hidden"
          >
            <Image
              ref={(el) => {
                imageBGRefs.current[0] = el;
              }}
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full">
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
              <div className="absolute inset-0 w-[100vw] h-">
                <Image
                  ref={(el) => {
                    imageBGRefs.current[0] = el;
                  }}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div
              ref={(el) => {
                imageRWIRefs.current[0] = el;
              }}
              className="absolute w-full h-screen"
            >
              <Image
                width={1920}
                height={1080}
                alt=""
                src="/assets/images/elements/core_features/impact.svg"
              />
            </div>
          </div>
        </div>

        <div
          ref={(el) => {
            slideRefs.current[1] = el;
          }}
          className="relative h-screen w-[100vw] overflow-hidden"
        >
          <div
            ref={(el) => {
              innerRefs.current[1] = el;
            }}
            className="relative h-[150vh] p-16 flex flex-col gap-2 items-center"
          >
            <Image
              ref={(el) => {
                imageBGRefs.current[1] = el;
              }}
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full">
              <SplitLineText>
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
                  ref={(el) => {
                    imageBGRefs.current[1] = el;
                  }}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div
              ref={(el) => {
                imageVC1Refs.current[1] = el;
              }}
              className="absolute"
            >
              <Image
                width={650}
                height={710}
                alt=""
                src="/assets/images/elements/core_features/community-01.svg"
              />
            </div>
            <div
              ref={(el) => {
                imageVC2Refs.current[1] = el;
              }}
              className="absolute"
            >
              <Image
                width={648}
                height={648}
                alt=""
                src="/assets/images/elements/core_features/community-02.svg"
              />
            </div>
          </div>
        </div>

        <div
          ref={(el) => {
            slideRefs.current[2] = el;
          }}
          className="relative h-screen w-[100vw] overflow-hidden"
        >
          <div
            ref={(el) => {
              innerRefs.current[2] = el;
            }}
            className="relative h-[150vh] p-16 flex flex-col gap-2 items-center"
          >
            <Image
              ref={(el) => {
                imageBGRefs.current[2] = el;
              }}
              fill
              objectFit="cover"
              objectPosition="top"
              alt="slider-bg"
              src="/assets/images/bgs/core_features/bg-01.jpg"
              quality={100}
            />

            <div className="z-10 flex flex-col items-center gap-4 w-full">
              <SplitLineText>
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
                  ref={(el) => {
                    imageBGRefs.current[2] = el;
                  }}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                  alt="noise"
                  src="/assets/images/filters/noise-large-bg.jpg"
                  className="z-1 mix-blend-color-dodge"
                />
              </div>
            </div>
            <div
              ref={(el) => {
                imageC1Refs.current[2] = el;
              }}
              className="absolute"
            >
              <Image
                width={650}
                height={710}
                alt=""
                src="/assets/images/elements/core_features/certificate-1.svg"
              />
            </div>
            <div
              ref={(el) => {
                imageC2Refs.current[2] = el;
              }}
              className="absolute"
            >
              <Image
                width={648}
                height={648}
                alt=""
                src="/assets/images/elements/core_features/certificate-2.svg"
              />
            </div>
            <div
              ref={(el) => {
                imageC3Refs.current[2] = el;
              }}
              className="absolute"
            >
              <Image
                width={648}
                height={648}
                alt=""
                src="/assets/images/elements/core_features/certificate-1.svg"
              />
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default CoreFeatures;
