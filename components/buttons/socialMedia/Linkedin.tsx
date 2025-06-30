"use client";

import React from "react";

interface LinkedProps {
  className: string;
}

const Linkedin = ({ className = "fill-white" }: LinkedProps) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} cursor-pointer transition-all duration-300 ease-out`}
    >
      <g clipPath="url(#clip0_169_2831)">
        <path
          d="M31.992 32L32 31.9986V20.2626C32 14.5213 30.764 10.0986 24.052 10.0986C20.8253 10.0986 18.66 11.8693 17.776 13.548H17.6827V10.6346H11.3187V31.9986H17.9453V21.42C17.9453 18.6346 18.4733 15.9413 21.9227 15.9413C25.3213 15.9413 25.372 19.12 25.372 21.5986V32H31.992Z"
          fill=""
        />
        <path d="M0.527985 10.6357H7.16265V31.9997H0.527985V10.6357Z" fill="" />
        <path
          d="M3.84267 0C1.72133 0 0 1.72133 0 3.84267C0 5.964 1.72133 7.72133 3.84267 7.72133C5.964 7.72133 7.68533 5.964 7.68533 3.84267C7.684 1.72133 5.96267 0 3.84267 0Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0_169_2831">
          <rect width="32" height="32" fill="" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Linkedin;
