"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const PathacksAnimation = () => {
  return (
    <section className="relative w-full h-[512px] mt-8 md:mt-0 md:h-[90vh] flex flex-col items-center justify-center border-t-[1px] border-border-gray overflow-hidden">
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
          className="absolute top-0 left-0"
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
          className="absolute bottom-0"
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
          className="absolute top-10 ml-40"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: [0, 1, 0, 0, 1] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatDelay: 5,
          delay: 3,
        }}
      >
        <Image
          width={24}
          height={24}
          alt="small-sqr"
          src="/assets/images/elements/sqr-small.png"
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
          repeatDelay: 1,
          delay: 2,
        }}
      >
        <Image
          width={24}
          height={24}
          alt="small-sqr"
          src="/assets/images/elements/sqr-small.png"
          className="absolute bottom-0 left-0"
        />
      </motion.div>

      {/* strip animations */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -500 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 5,
          delay: 1.5,
        }}
        className="absolute bottom-50 left-50"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -300 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 3,
          delay: 1,
        }}
        className="absolute bottom-0 left-100"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -200 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 1,
        }}
        className="absolute bottom-10 left-10"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -300 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 8,
          delay: 2,
        }}
        className="absolute bottom-0 right-80"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -200 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 8,
          delay: 4,
        }}
        className="absolute bottom-10 right-150"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -500 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 3,
        }}
        className="absolute bottom-40 right-10"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>

      {/* center animation strips */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -500 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 6,
        }}
        className="absolute bottom-0"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -400 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 8,
          delay: 2,
        }}
        className="absolute bottom-0 mr-150"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>

      {/* top animation strips */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -400 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 5,
          delay: 3,
        }}
        className="absolute top-50"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -300 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 2,
          delay: 1,
        }}
        className="absolute top-50 right-100"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 1, 0], y: -200 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeIn",
          repeatDelay: 1,
          delay: 3,
        }}
        className="absolute top-50 left-150"
      >
        <Image
          width={8}
          height={228}
          alt="small-sqr"
          src="/assets/images/elements/strip-1.png"
        />
      </motion.div>
      {/* pathacks large logo */}
      <Image
        width={1800}
        height={178}
        alt="pathacks-large"
        src="/assets/images/logos/pathacks-logo-large.png"
        className="px-4 md:px-16"
      />
    </section>
  );
};

export default PathacksAnimation;
