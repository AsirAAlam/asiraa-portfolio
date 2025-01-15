import React from "react";
import ProjectItem from "../components/ProjectItem";
import { Container, Box } from "@mui/material";

const projects = [
  {
    title: "O(fast)",
    description: (
      <>
        O(fast) is a guided learning platform for competitive programming. It is
        a web application built using React and Firebase. This was a capstone
        project for UCF's undergraduate senior design course. I was responsible
        for front-end development and took ownership of the interactive lessons,
        and lesson and problem creation processes.
      </>
    ),
  },
  {
    title: "Garden of Thorns",
    description: (
      <>
        Game of Thorns is a 3D third-person shooter rogue-like game built using
        Unity. It features an enchanted forest, where the protagonist must fight
        off waves of enemies to return the forest to its peaceful state. I acted
        as project manager and took advantage of agile development. In
        development, I worked on the enemy AI (state machines), automation of
        level creation, part of the boss fight, most physics-based interactions,
        the game's UI, sound effects, and more.
      </>
    ),
  },
  {
    title: "Handler",
    description: (
      <>
        Handler is a MERN stack web project that allows users to list or request
        various locally-available practical services. For example, a user could
        request a dog walker, or list themselves as one. I was responsible for
        front-end development. One of the crucial features I worked on was the
        integration of the Google Maps API to display the location of the
        service provider.
      </>
    ),
  },
  {
    title: "Parallel Karatsuba Paper",
    description: (
      <>
        Experimented with parallelizing the Karatsuba Algorithm for integer
        multiplication and wrote a research paper outlining our findings.{" "}
        <a
          className="underline"
          href="https://github.com/AsirAAlam/ParallelKaratsuba"
        >
          Link
        </a>
        .
      </>
    ),
  },
  {
    title: "VR and AR Projects",
    description: (
      <>
        As part of UCF's VR and AR Engineering courses, I worked on several
        small VR and AR projects using Unity.
      </>
    ),
  },
];

export default function ProjectsPage() {
  return (
    <Container>
      <Box>
        {projects.map((project, i) => (
          <ProjectItem key={i} title={project.title}>
            {project.description}
          </ProjectItem>
        ))}
      </Box>
    </Container>
  );
}
