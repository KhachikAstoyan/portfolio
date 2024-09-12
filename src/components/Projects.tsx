"use client";

import React from "react";
import { SectionTitle } from "./common/SectionTitle";
import data from "../data";
import { Section } from "./common/Section";

export const Projects = () => {
  return (
    <Section id="projects" className="relative">
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.projects.map((project) => (
          <article
            key={project.name}
            className="flex flex-col gap-2 border dark:border-neutral-800 shadow-sm rounded"
          >
            <img
              src={project.img.src}
              alt={project.name}
              className="top-0 left-0 w-full h-[200px] object-cover rounded-t"
            />
            <div
              className={`z-10 w-full p-5 flex flex-col gap-3 h-full justify-between`}
            >
              <div>
                <a
                  target="_blank"
                  href={project.links.website || project.links.github}
                  className="block mb-3 text-2xl font-bold hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                >
                  {project.name}
                </a>
                <p className="text-neutral-500 dark:text-neutral-400  mb-2 break-words">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-black dark:text-neutral-500 bg-zinc-100 border dark:border-zinc-800 dark:bg-zinc-900 py-[1px] px-2 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-2 justify-self-end">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="text-gray-500 text-sm mt-2 underline"
                  >
                    Github
                  </a>
                )}
                {project.links.website && (
                  <a
                    href={project.links.website}
                    target="_blank"
                    className="text-gray-500 text-sm mt-2 underline"
                  >
                    Website
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};
