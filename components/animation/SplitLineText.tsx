"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { motion, useInView } from "framer-motion";

interface SplitLineTextProps {
  children: React.ReactElement<{ children: string }>;
  delay?: number;
  className?: string;
}

const SplitLineText: React.FC<SplitLineTextProps> = ({
  children,
  delay = 0,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const Tag = children.type;
  const text = children.props.children;

  useEffect(() => {
    if (isInView && containerRef.current && !hasAnimated) {
      const split = new SplitType(containerRef.current, {
        types: "lines",
        lineClass: "split-line",
      });

      // Wrap each line in a div with overflow-hidden
      if (split.lines && split.lines.length > 0) {
        split.lines.forEach((line) => {
          const wrapper = document.createElement("div");
          wrapper.style.overflow = "hidden";
          wrapper.style.display = "block";
          wrapper.style.width = "100%";
          wrapper.style.paddingRight = "1px"; // helps prevent text cutoff due to anti-aliasing
          wrapper.style.paddingBottom = "2px";
          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
        });

        gsap.fromTo(
          split.lines,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.8,
            delay,
            ease: "power3.out",
            onComplete: () => {
              setHasAnimated(true);
            },
          }
        );
      }
    }
  }, [isInView, delay, hasAnimated]);

  return (
    <Tag className={`${className} overflow-hidden`}>
      <motion.span
        ref={containerRef}
        className="split"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.2 }}
        style={{
          display: "inline-block",
          visibility: isInView ? "visible" : "hidden",
        }}
      >
        {text}
      </motion.span>
    </Tag>
  );
};

export default SplitLineText;
