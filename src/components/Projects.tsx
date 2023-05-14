"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "./common/SectionTitle";
import data from "../data";
import { Section } from "./common/Section";

export const Projects = () => {
	return (
		<Section id="projects" className="relative">
			<SectionTitle>Projects</SectionTitle>
			<div className="mt-10 grid grid-cols-1 md:grid-cols-2">
				{data.projects.map((project) => (
					<div
						key={project.name}
						className="break-normal mb-10 h-80 bg-center bg-cover relative rounded transition-colors border-separate border-2 border-transparent hover:border-indigo-600"
						style={{ backgroundImage: `url(${project.img})` }}
					>
						<div className="p-5 flex flex-col h-full justify-end break-words bg-black bg-opacity-75">
							<h3 className="text-2xl font-bold mb-2">{project.name}</h3>
							<p className="text-gray-500 mb-2 break-words">{project.description}</p>
							<div className="break-keep">
								{project.technologies.map((tech) => (
									<span key={tech} className="text-gray-500 bg-zinc-900 p-1 rounded text-sm mr-2">
										{tech}
									</span>
								))}
							</div>
							<div className="flex gap-2">
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
					</div>
				))}
			</div>
		</Section>
	);
};
