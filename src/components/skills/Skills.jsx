import React from "react";
import styled from "styled-components";
import Frontend from "./Frontend";
import { frontend1, frontend2, backend1, backend2 } from "./data";
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
        <Frontend
          name="Frontend Developer"
          data1={frontend1}
          data2={frontend2}
        />
        <Frontend name="Backend Developer" data1={backend1} data2={backend2} />
      </SkillsC>
    </Section1>
  );
}

export default Skills;
