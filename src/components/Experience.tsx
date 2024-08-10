"use client";

import React from "react";
import { Section } from "./common/Section";
import { SectionTitle } from "./common/SectionTitle";
import { Timeline } from "./common/Timeline";

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>
      <p className="text-xl text-zinc-500 mb-9">
        Here are some of the places I've worked at
      </p>
      <Timeline
        items={[
          {
            title: "Software Engineer",
            company: "Grid Dynamics",
            date: "July 2024 - Present",
            detailedText:
              "Worked on core internal tools and implemented complex user interfaces for one of our clients, as well as participated in the interviewing and hiring process",
          },
          {
            title: "Junior Software Engineer",
            company: "Grid Dynamics",
            date: "June 2023 - July 2024",
            detailedText:
              "Worked on a team that developed a new pricing management application for a big retail company based in US",
          },
          {
            title: "Full Stack Developer",
            company: "Freelance",
            date: "April 2022 - May 2023",
            detailedText:
              "Helped a small business to improve their Laravel and VueJS app for stock trading and divident tracking. Resolved bugs, implemented new features, and improved the overall performance of the app",
          },
          {
            title: "Intern Frontend Developer",
            company: "Matenadaran",
            date: "June 2021 - March 2022",
            detailedText:
              "Developed and maintained a real-time excursion management tool, enhancing data collection and analysis capabilities. • Conducted statistical assessments on collected data to identify trends and insights.",
          },
        ]}
      />
    </Section>
  );
};
