import React from "react";
import styled from "styled-components";
import Works from "./Works";

const ProjectSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color2};
  font-size: 1rem;
  @media screen and (max-width: 48rem) {
    padding: 2rem 1rem 4rem;
  }
`;
const Title = styled.h2`
  font-size: 2.25rem;
  color: ${(props) => props.theme.Title};
  text-align: center;
`;
const Subtitle = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${(props) => props.theme.Description};
`;
function Projects() {
  return (
    <ProjectSection id="portfolio">
      <Title>Portfolio</Title>
      <Subtitle>Most recent work</Subtitle>
      <Works />
    </ProjectSection>
  );
}

export default Projects;
