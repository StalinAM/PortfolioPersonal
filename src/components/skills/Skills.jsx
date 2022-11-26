import React from "react";
import styled from "styled-components";
import Frontend from "./Frontend";
import { frontend1, frontend2, backend1, backend2 } from "./data";
const SkillSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color2};
  font-size: 1rem;
  @media screen and (max-width: 48rem) {
    padding: 2rem 1rem 4rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: ${(props) => props.theme.Title};
  text-align: center;
`;
const SectionSubtitle = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${(props) => props.theme.Description};
`;
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
    <SkillSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <SectionSubtitle>My technical level</SectionSubtitle>
      <SkillsC>
        <Frontend
          name="Frontend Developer"
          data1={frontend1}
          data2={frontend2}
        />
        <Frontend
          name="Backend Developer"
          data1={backend1}
          data2={backend2}
        />
      </SkillsC>
    </SkillSection>
  );
}

export default Skills;
