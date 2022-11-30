import React from "react";
import styled from "styled-components";
import AboutImage from "../../assets/profile.png";
import CV from "../../assets/John-Cv.pdf";
import Info from "./Info";
import {
  Section2,
  SectionTitle,
  SectionSubtitle,
} from "../../styles/CarouselSections";
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
const IconB = styled.i`
  font-size: 1.2rem;
  margin-left: 3px;
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
const SpanText = styled.a`
  color: ${(props) => props.theme.Title};
  &:hover {
    color: ${(props) => props.theme.SubTitle};
  }
`;
function About() {
  return (
    <Section2 id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionSubtitle>My introduction</SectionSubtitle>
      <AboutC>
        <AboutImg src={AboutImage} alt="" />
        <AboutData>
          {/* <Info /> */}
          <Description>
            Hi, I'm <SpanText href="#contact">Stalin</SpanText> and I love
            creating all kinds of things for the web. My history in technology
            was when I was a high school student when I wanted to customize my
            PC, I found several tutorials on the internet where they showed how
            to do it and I was fascinated by this world.
          </Description>
          <Description>
            For some time I learned several things about Computer Science
            including programming in languages like C, Java, Python, but a long
            time ago I discovered my passion for the world of web development
            and the beauty behind building interactive websites like the ones
            you will find in <SpanText href="#portfolio">My portfolio</SpanText>
            . Now I am looking for a developer position so I can learn and
            polish my skills among professionals.
          </Description>
          {/* <ButtomC href={CV} download="">
            Contact Me!
            <IconB className="uil uil-file-download-alt"></IconB>
          </ButtomC> */}
        </AboutData>
      </AboutC>
    </Section2>
  );
}

export default About;
