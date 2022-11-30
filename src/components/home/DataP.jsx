import React from "react";
import styled from "styled-components";
import hand from "../../assets/hand.svg";
const HomeData = styled.div`
  @media screen and (max-width: 48rem) {
    grid-column: 1/3;
  }
`;
const Title = styled.h1`
  font-size: 2.75rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.Title};
`;
const Subtitle = styled.h3`
  color: ${(props) => props.theme.SubTitle};
  position: relative;
  font-size: 1rem;
  padding-left: 5.4rem;
  font-weight: 400;
  margin-bottom: 1rem;
  &::before {
    content: "";
    position: absolute;
    width: 70px;
    height: 1px;
    background-color: ${(props) => props.theme.SubTitle};
    left: 0;
    top: 1.1rem;
  }
  @media screen and (max-width: 62rem) {
    padding-left: 3.75rem;
    margin-bottom: 1rem;
    &::before {
      width: 42px;
      top: 0.8rem;
    }
  }
`;
const Description = styled.p`
  color: ${(props) => props.theme.Description};
  max-width: 400px;
  margin-bottom: 3rem;
  @media screen and (max-width: 62rem) {
    max-width: initial;
    margin-bottom: 2.5rem;
  }
`;
const ButtomC = styled.a`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Background_color};
  font-size: 1rem;
  &:hover {
    background-color: ${(props) => props.theme.Link};
  }
`;
function DataP() {
  return (
    <HomeData>
      <Title>Stalin Acurio</Title>
      <Subtitle>
        <img src={hand} alt="" />
      </Subtitle>
      <Description>
        Hi, I am a Front-End developer and I have a passion for software
        development.
      </Description>
      <ButtomC href="#contact">Contact Me!</ButtomC>
    </HomeData>
  );
}

export default DataP;
