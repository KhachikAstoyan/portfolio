import { IProject } from "@/data";
import { motion } from "framer-motion";

interface ProjectProps {
  project: IProject;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject | null>>
}

export const Project: React.FC<ProjectProps> = ({ project, setSelectedProject }) => {
  return (
    <motion.button
      onClick={() => setSelectedProject(project)}
      layoutId={project.name}
      key={project.name}
      className="break-normal mb-10 h-80 bg-center bg-cover relative rounded transition-colors border-2 border-neutral-800 hover:border-indigo-600"
      style={{ backgroundImage: `url(${project.img.src})` }}
    >
      <div
        className={`z-0 w-full h-full absolute top-0 left-0 bg-black ${
          project.img.isDark ? "opacity-50" : "opacity-85"
        }`}
      ></div>
      <div
        className={`z-10 absolute w-full h-full bottom-0 p-5 flex flex-col items-start justify-end break-words bg-opacity-70`}
      >
        <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
        <p className="text-gray-500 mb-2 break-words text-left">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-gray-500 bg-zinc-900 p-1 rounded text-sm"
            >
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
    </motion.button>
  );
};