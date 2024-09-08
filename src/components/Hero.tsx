"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center relative h-[calc(100vh-100px)]">
      <motion.div
        className="relative"
        transition={{ duration: 0.5, type: "tween" }}
        initial={{ transform: "scale(1.1)", opacity: 0 }}
        animate={{ transform: "scale(1)", opacity: 1 }}
      >
        <Image
          priority={true}
          className="rounded-full"
          src="/avatar.png"
          alt="Khachik Astoyan"
          width={250}
          height={250}
        />
      </motion.div>
      <motion.div
        className="relative"
        transition={{ duration: 0.5, type: "tween" }}
        initial={{ top: "10px", transform: "scale(1.1)", opacity: 0 }}
        animate={{ top: "0px", transform: "scale(1)", opacity: 1 }}
      >
        <h1 className="text-7xl font-bold my-3 text-center">Khachik Astoyan</h1>
        <p className="text-xl mt-1 text-gray-600 dark:text-gray-400 text-center">
          Software Engineer, CS student at{" "}
          <a
            href="https://aua.am/"
            className="text-gray-400 dark:text-gray-300 underline"
            target="_blank"
          >
            AUA
          </a>
        </p>
      </motion.div>
    </section>
  );
};
