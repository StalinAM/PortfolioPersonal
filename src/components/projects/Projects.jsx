import React from "react";
import styled from "styled-components";
import Works from "./Works";
import {
  Section2,
  SectionTitle,
  SectionSubtitle,
} from "../../styles/CarouselSections";

function Projects() {
  return (
    <Section2 id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>
      <Works />
    </Section2>
  );
}

export default Projects;
