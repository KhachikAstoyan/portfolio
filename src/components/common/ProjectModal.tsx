import { IProject } from "@/data";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: IProject;
  setSelectedProject: React.Dispatch<React.SetStateAction<IProject | null>>;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  setSelectedProject,
}) => {
  return (
    <div className={`
        fixed w-screen h-screen z-[100]
        bg-red-600 
        `}>
      <motion.div
        layoutId={project.name}
        className={`
        h-96 
        bg-black
      `}
      >
        hello
      </motion.div>
    </div>
  );
};
