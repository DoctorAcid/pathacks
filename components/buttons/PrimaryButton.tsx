"use client";

import React from "react";
import { motion, useAnimationControls } from "framer-motion";
import Link from "next/link";

interface PrimaryButtonProps {
  text: string;
  className?: string;
  href?: string;
}

const MotionChar = ({
  char,
  index,
  isSpace,
  hovered,
}: {
  char: string;
  index: number;
  isSpace: boolean;
  hovered: boolean;
}) => {
  return (
    <span
      className={`relative inline-block overflow-hidden align-middle h-[14px] ${
        isSpace ? "w-[0.3em]" : ""
      }`}
    >
      {/* Placeholder to maintain layout */}
      <span className="opacity-0 font-semibold text-[14px]">
        {isSpace ? "\u00A0" : char}
      </span>

      {/* Front face */}
      {!isSpace && (
        <motion.span
          initial={{ scaleY: 1 }}
          animate={{ scaleY: hovered ? 0 : 1 }}
          transition={{
            duration: 0.4,
            delay: index * 0.06,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 w-full h-[14px] flex items-center justify-center font-semibold text-[14px] origin-top"
        >
          {char}
        </motion.span>
      )}

      {/* Back face */}
      {!isSpace && (
        <motion.span
          initial={{ scaleY: 0 }}
          animate={{ scaleY: hovered ? 1 : 0 }}
          transition={{
            duration: 0.4,
            delay: index * 0.06,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 w-full h-[14px] flex items-center justify-center font-semibold text-[14px] origin-bottom"
        >
          {char}
        </motion.span>
      )}
    </span>
  );
};

const PrimaryButton = ({ text, className, href }: PrimaryButtonProps) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link
      href={href ? href : ""}
      className={`${className && className} border-transparent`}
    >
      <button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`${
          className && className
        } relative flex items-center justify-center bg-black text-white px-8 py-6 border-border-gray uppercase overflow-hidden cursor-pointer`}
      >
        <div className="flex flex-wrap">
          {text.split("").map((char, i) => (
            <MotionChar
              key={i}
              char={char}
              index={i}
              isSpace={char === " "}
              hovered={hovered}
            />
          ))}
        </div>
      </button>
    </Link>
  );
};

export default PrimaryButton;
