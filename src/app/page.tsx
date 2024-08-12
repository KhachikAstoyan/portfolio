import Image from "next/image";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Container } from "../components/common/Container";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Metadata } from "next";
import data from "../data";
import { Experience } from "../components/Experience";
import Head from "next/head";

export const metadata: Metadata = {
  title: data.title,
  description: data.description,
  creator: data.name,
  icons: [
    {
      url: "/icon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
    {
      url: "/icon.ico",
      sizes: "16x16",
      type: "image/x-icon",
    },
    {
      url: "/icon.ico",
      sizes: "48x48",
      type: "image/x-icon",
    },
    {
      url: "/icon.ico",
      sizes: "64x64",
      type: "image/x-icon",
    },
    {
      url: "/icon.ico",
      sizes: "128x128",
      type: "image/x-icon",
    },
    {
      url: "/icon.ico",
      sizes: "256x256",
      type: "image/x-icon",
    },
  ],
  keywords: ["portfolio", "developer", "software", "engineer", "fullstack"]
    .concat(data.skills.map((skill) => skill.name))
    .concat(data.projects.map((project) => project.name))
    .concat(data.name),
  openGraph: {
    title: data.title,
    description: data.description,
    locale: "en_US",
    siteName: data.title,
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <Head>
        <link rel="canonical" href="https://kastoyan.com" key="canonical" />
      </Head>
      <div className="light">
        <Container>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </Container>
      </div>
    </>
  );
}
