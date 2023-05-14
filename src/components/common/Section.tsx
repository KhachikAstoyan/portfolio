import React from "react";
import { motion } from "framer-motion";

export const Section: React.FC<
	React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className, ...props }) => {
	return (
		// @ts-ignore
		<motion.section
			{...props}
			initial={{ left: -100, opacity: 0 }}
			whileInView={{ left: 0, opacity: 1 }}
			transition={{ delay: 0.3, duration: 1 }}
			className={`my-20 ${className}`}
		>
			{children}
		</motion.section>
	);
};
