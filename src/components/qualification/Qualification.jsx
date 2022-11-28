import React, { useState } from "react";
import styled, { isStyledComponent } from "styled-components";
import QualificationData from "./QualificationData";
import { education, experience } from "./data";

const QualificationSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color};
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
const QualificationC = styled.div`
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 48rem) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
`;
const QualificationTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  .active {
    color: ${(props) => props.theme.SubTitle};
  }
`;
const Button = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0 1rem;
  cursor: pointer;
  color: ${(props) => props.theme.Description};
  &:hover {
    color: ${(props) => props.theme.SubTitle};
  }
  @media screen and (max-width: 36rem) {
    margin: 0 0.75rem;
  }
  @media screen and (max-width: 22rem) {
    font-size: 0.9rem;
  }
  .show {
    color: green;
  }
`;
const Icon = styled.i`
  font-size: 1.8rem;
  margin-right: 0.25rem;
`;
const QualificationS = styled.div`
  display: grid;
  grid-template-columns: 0.5fr;
  justify-content: center;
  @media screen and (max-width: 36rem) {
    grid-template-columns: initial;
  }
`;

function Qualification() {
  const [toggle, setToggle] = useState(education);
  return (
    <QualificationSection>
      <SectionTitle>Qualification</SectionTitle>
      <SectionSubtitle>My personel journey</SectionSubtitle>
      <QualificationC>
        <QualificationTabs>
          <Button
            className={toggle === education ? "active" : ""}
            onClick={() => setToggle(education)}
          >
            <Icon className="uil uil-graduation-cap"></Icon>
            Education
          </Button>
          <Button
            className={toggle === experience ? "active" : ""}
            onClick={() => setToggle(experience)}
          >
            <Icon className="uil uil-briefcase-alt"></Icon>
            Experience
          </Button>
        </QualificationTabs>
        <QualificationS>
          <QualificationData array={toggle} />
        </QualificationS>
      </QualificationC>
    </QualificationSection>
  );
}

export default Qualification;
