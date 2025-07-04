"use client";

import Link from "next/link";
import React from "react";

interface FacebookProps {
  className: string;
}

const Facebook = ({ className = "fill-white" }: FacebookProps) => {
  return (
    <Link href="https://www.facebook.com/pathackscom/" target="_blank">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${className} cursor-pointer transition-all duration-300 ease-out`}
      >
        <path
          d="M21.3293 5.31333H24.2507V0.225333C23.7467 0.156 22.0133 0 19.9947 0C15.7827 0 12.8973 2.64933 12.8973 7.51867V12H8.24933V17.688H12.8973V32H18.596V17.6893H23.056L23.764 12.0013H18.5947V8.08267C18.596 6.43867 19.0387 5.31333 21.3293 5.31333Z"
          fill=""
        />
      </svg>
    </Link>
  );
};

export default Facebook;
