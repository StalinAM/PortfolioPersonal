import React from "react";
import styled from "styled-components";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";

const AboutSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color};
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
const AboutC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  column-gap: 4rem;
  @media screen and (max-width: 62rem) {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
`;
const ButtomC = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.theme.Link};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Background_color};
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.Title};
  }
`;
const AboutImg = styled.img`
  width: 350px;
  border-radius: 1.5rem;
  justify-self: center;
  @media screen and (max-width: 62rem) {
    width: 220px;
  }
`;
const AboutData = styled.div`
  @media screen and (max-width: 62rem) {
    text-align: center;
  }
`;
const Description = styled.p`
  padding: 0 4rem 0 0;
  margin-bottom: 2.5rem;
  color: ${(props) => props.theme.Description};
  @media screen and (max-width: 62rem) {
    padding: 0 5rem;
    margin-bottom: 2rem;
  }
  @media screen and (max-width: 36rem) {
    padding: 0;
  }
`;
function About() {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>My introduction</SectionSubtitle>
      <AboutC>
        <AboutImg src={AboutImage} alt="" />
        <AboutData>
          <Info />
          <Description>
            Frontend developer, I create web pages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </Description>
          <ButtomC href={CV} download="">
            Download CV
          </ButtomC>
        </AboutData>
      </AboutC>
    </AboutSection>
  );
}

export default About;
