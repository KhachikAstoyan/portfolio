"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { delay: 0.1, duration: 0.5, type: "tween" },
  },
} as const;

export const Section: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, id, className, ...props }) => {
  const controls = useAnimation();
  const [hasAnimated, setHasAnimated] = React.useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      controls.start("visible");
      setHasAnimated(true);
    }
  }, [controls, isInView, hasAnimated]);

  return (
    <>
      {/* @ts-ignore */}
      <motion.section
        {...props}
        animate={controls}
        ref={ref}
        initial={"hidden"}
        variants={variants}
        className={`my-20 relative ${className}`}
      >
        <div id={id} className="block relative top-[-100px] invisible"></div>
        {children}
      </motion.section>
    </>
  );
};
