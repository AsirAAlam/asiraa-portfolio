import React from "react";
import ExperienceItem from "../components/ExperienceItem";
import Container from "@mui/material/Container";

const experiences = [
  {
    title: "Meta",
    role: "Software Engineering Intern",
    description:
      "Three summer internships. I worked with Facebook Shop Ads, Facebook Gaming, and Org Effectiveness teams. I accepted a full-time return offer and start once I graduate with my Master's in Computer Science.",
    img: (
      <img
        alt="Meta logo"
        src={require("../images/meta.gif")}
        style={{ objectFit: "fill" }}
      />
    ),
  },
  {
    title: "UCF Programming Team",
    role: "ICPC Competitive Programmer",
    description:
      "Competed in ICPC contests over my 3 years on the team. " +
      "Solved hundreds of ICPC-style problems. " +
      "Helped as a UCF High School Programming Tournament Judge by writing problems " +
      "and helping develop problem sets.",
    img: (
      <img
        alt="Meta logo"
        src={require("../images/meta.gif")}
        style={{ objectFit: "fill" }}
      />
    ),
  },
];

export default function ExperiencePage() {
  return (
    <Container className="pt-16">
      {experiences.map((experience, index) => (
        <div
          key={index}
          style={{ marginBottom: index + 1 < experiences.length ? 128 : 0 }}
        >
          <ExperienceItem
            title={experience.title}
            role={experience.role}
            description={experience.description}
            img={experience.img}
          />
        </div>
      ))}
    </Container>
  );
}
