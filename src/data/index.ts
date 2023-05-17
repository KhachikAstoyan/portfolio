export interface Skill {
	name: string;
	icon: string;
}

export interface Project {
	name: string;
	description: string;
	technologies: string[];
	img: string;
	links: {
		github?: string;
		website?: string;
	};
}

export interface Link {
	icon: string;
	url: string;
}

export default {
	name: "Khachik Astoyan",
	role: "Full-Stack Developer",
	title: "Khachik Astoyan - Full-Stack Developer",
	description:
		"Hey! I am a full-stack developer specialising in React, Node.js, and TypeScript. I am currently pursuing a Bachelor's degree in Computer Science at the American University of Armenia.",
	skills: [
		{
			name: "React",
			icon: "react.svg",
		},
		{
			name: "Node.js",
			icon: "nodejs.svg",
		},
		{
			name: "TypeScript",
			icon: "typescript.svg",
		},
		{
			name: "PostgreSQL",
			icon: "postgresql.svg",
		},
	] as Skill[],
	projects: [
		{
			name: "Typo.io",
			description:
				"A typing test website heavily inspired by monkeytype, built for learning purposes.",
			technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "NextJS", "Prisma"],
			img: "/typo.png",
			links: {
				github: "https://github.com/KhachikAstoyan/typo",
				website: "https://typox.vercel.app/",
			},
		},
	] as Project[],
	links: [
		{
			icon: "/github.svg",
			url: "https://github.com/KhachikAstoyan",
		},
	] as Link[],
};
