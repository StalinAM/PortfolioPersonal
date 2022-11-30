import React from "react";
import styled from "styled-components";
import Works from "./Works";
import {
  Section1,
  SectionTitle,
  SectionSubtitle,
} from "../../styles/CarouselSections";

function Projects() {
  return (
    <Section1 id="portfolio">
      <SectionTitle>Portfolio</SectionTitle>
      <SectionSubtitle>Most recent work</SectionSubtitle>
      <Works />
    </Section1>
  );
}

export default Projects;
