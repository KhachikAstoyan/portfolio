export interface Skill {
  name: string;
  icon: string;
}

export interface IProject {
  name: string;
  description: string;
  technologies: string[];
  img: {
    src: string;
    isDark: boolean;
  };
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
  role: "Software Engineer",
  title: "Khachik Astoyan - Software Engineer",
  description:
    `Hi, I'm Khachik Astoyan,\
    a Software Engineer with a passion for building efficient, scalable applications,\
    and tinkering with new technologies.\
    While pursuing a Computer Science degree, I’m constantly exploring and refining my skills.\
    Check out my projects to see what I’m up to!`,
  skills: [
    {
      name: "React",
      icon: "/react.svg",
    },
    {
      name: "Node.js",
      icon: "/nodejs.svg",
    },
    {
      name: "TypeScript",
      icon: "/typescript.svg",
    },
    {
      name: "PostgreSQL",
      icon: "/postgresql.svg",
    },
    {
      name: "Golang",
      icon: "/go.svg",
    },
    {
      name: "RabbitMQ",
      icon: "/rabbitmq.svg",
    },
    {
      name: "GCP",
      icon: "/gcp.svg",
    },
    {
      name: "Docker",
      icon: "/docker.svg",
    },
    {
      name: "Kubernetes",
      icon: "/k8s.svg",
    },
    {
      name: "NextJS",
      icon: "/nextjs.svg",
    },
    {
      name: "NestJS",
      icon: "/nestjs.svg",
    },
    {
      name: "Rust",
      icon: "/rust.png",
    },
  ] as Skill[],
  projects: [
    {
      name: "Quandry",
      description:
        "A platform for solving algorithmic problems and preparing for technical interviews.",
      technologies: [
        "Golang",
        "Rust",
        "RabbitMQ",
        "React",
        "PostgreSQL",
        "Docker",
      ],
      links: {
        github: "https://github.com/KhachikAstoyan/rce",
      },
      img: {
        src: "/quandry.png",
        isDark: false,
      },
    },
    {
      name: "Typo.io",
      description:
        "A typing test website heavily inspired by monkeytype, built for learning purposes.",
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "PostgreSQL",
        "NextJS",
        "Prisma",
      ],
      img: {
        src: "/typo.png",
        isDark: true,
      },
      links: {
        github: "https://github.com/KhachikAstoyan/typo",
        website: "https://typox.vercel.app/",
      },
    },
  ] satisfies IProject[],
  links: {
    self: "https://kastoyan.com",
    github: "https://github.com/KhachikAstoyan",
  },
};
