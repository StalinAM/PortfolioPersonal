import React from "react";
import styled from "styled-components";
import data from "./data";
const AboutInfo = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 140px);
  gap: 0.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 62rem) {
    justify-content: center;
  }
  @media screen and (max-width: 36rem) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 22rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const AboutBox = styled.div`
  border: 1px solid ${(props) => props.theme.Description};
  border-radius: 0.75rem;
  text-align: center;
  padding: 1rem 1.25rem;
  @media screen and (max-width: 62rem) {
    padding: 0.75rem 0.5rem;
  }
`;
const Title = styled.h3`
  font-size: 0.813rem;
  font-weight: 500;
  color: ${(props) => props.theme.SubTitle};
`;
const Subtitle = styled.span`
  font-size: 0.625rem;
  color: ${(props) => props.theme.Description};
`;
const Icon = styled.i`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.Description};
`;
function Info() {
  return (
    <AboutInfo>
      {data.map((item) => (
        <AboutBox key={item.id}>
          <Icon className={`bx bx-${item.icon}`}></Icon>
          <Title>{item.title}</Title>
          <Subtitle>{item.subtitle}</Subtitle>
        </AboutBox>
      ))}
    </AboutInfo>
  );
}

export default Info;
