import React from "react";
import styled from "styled-components";
import SkillBox from "./SkillBox";
import { frontend, backend } from "./data";
import { Section1, SectionTitle, SectionSubtitle } from "../../styles/CarouselSections";

const SkillsC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 350px);
  column-gap: 3rem;
  justify-content: center;
  @media screen and (max-width: 62rem) {
    grid-template-columns: max-content;
    row-gap: 2rem;
  }
  @media screen and (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;
function Skills() {
  return (
    <Section1 id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My technical level</SectionSubtitle>
      <SkillsC>
        <SkillBox
          name="Frontend Developer"
          data={frontend}
        />
        <SkillBox name="Others" data={backend} />
      </SkillsC>
    </Section1>
  );
}

export default Skills;
