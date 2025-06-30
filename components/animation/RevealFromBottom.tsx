"use client";

import { delay, motion, useInView } from "framer-motion";
import React, { useRef } from "react";

type RevealFromBottomProps = {
  children: React.ReactNode;
  start?: number;
  delay?: number;
  duration?: number;
  className?: string;
};

const RevealFromBottom = ({
  children,
  start = 50,
  delay = 0,
  duration = 0.5,
  className = "",
}: RevealFromBottomProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: start }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default RevealFromBottom;
