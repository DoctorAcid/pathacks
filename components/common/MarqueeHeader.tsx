"use client";

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

interface MarqueeHeaderProps {
  text: string;
  speed?: number; // duration in seconds
  repeatCount?: number; // how many text copies in one cycle
}

const MarqueeHeader: React.FC<MarqueeHeaderProps> = ({
  text,
  speed = 40,
  repeatCount = 4,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const startAnimation = async () => {
    await controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: speed,
        },
      },
    });
  };

  const stopAnimation = () => {
    controls.stop();
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <div
      className="relative w-full h-fit overflow-hidden border-y border-border-gray py-8 md:py-10"
      // onMouseEnter={() => {
      //   setIsHovered(true);
      //   stopAnimation();
      // }}
      // onMouseLeave={() => {
      //   setIsHovered(false);
      //   startAnimation();
      // }}
    >
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 4,
          delay: 2,
        }}
      >
        <Image
          width={72}
          height={72}
          alt="double-sqr"
          src="/assets/images/elements/sqr-double.png"
          className="absolute bottom-0 left-0"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
      >
        <Image
          width={72}
          height={48}
          alt="blend-sqr"
          src="/assets/images/elements/sqr-blend.png"
          className="absolute top-0 right-0"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 2,
          delay: 1,
        }}
      >
        <Image
          width={48}
          height={30}
          alt="rect"
          src="/assets/images/elements/rect.png"
          className="absolute bottom-0 right-0"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 3,
        }}
      >
        <Image
          width={24}
          height={24}
          alt="small-sqr"
          src="/assets/images/elements/sqr-small.png"
          className="absolute top-0 ml-40"
        />
      </motion.div>
      <motion.div className="flex w-max" animate={controls}>
        {/* Repeat the content twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex whitespace-nowrap">
            {Array.from({ length: repeatCount }).map((_, j) => (
              <span
                key={j}
                className="title pr-16 md:pr-[64px] pointer-events-none select-none text-[24px] md:text-[48px] font-semibold capitalize"
              >
                {text}
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeHeader;
