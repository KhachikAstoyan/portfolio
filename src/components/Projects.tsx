"use client";

import React, { useState } from "react";
import { SectionTitle } from "./common/SectionTitle";
import data, { IProject } from "../data";
import { Section } from "./common/Section";
import { Project } from "./common/Project";
import { AnimatePresence } from "framer-motion";
import { ProjectModal } from "./common/ProjectModal";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(data.projects[0]);

  return (
    <Section id="projects" className="relative">
      <SectionTitle>Projects</SectionTitle>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-2">
        {data.projects.map((project) => (
          <Project setSelectedProject={setSelectedProject} project={project} />
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} setSelectedProject={setSelectedProject}/>
        )}
      </AnimatePresence>
    </Section>
  );
};
