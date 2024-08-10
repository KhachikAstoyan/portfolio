"use client";

import Image from "next/image";
import React from "react";
import data from "../data";
import { SectionTitle } from "./common/SectionTitle";
import { motion } from "framer-motion";
import { Section } from "./common/Section";

export const About = () => {
  return (
    <Section id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center relative">
        <section>
          <SectionTitle>About</SectionTitle>
          <p className="text-xl text-zinc-500">{data.description}</p>
        </section>
        <section className="my-5">
          <div>
            {/* React, node, typescript logos here */}

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-4 gap-2">
              {data.skills.map((skill) => (
                <div className="flex flex-col gap-1 group bg-neutral-950-950 border border-neutral-900 hover:border-indigo-600 transition-colors rounded-lg aspect-square justify-center items-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={50}
                    height={50}
                  />
                  <span className="text-zinc-500 group-hover:text-indigo-500">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Section>
  );
};
