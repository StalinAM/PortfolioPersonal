import React from "react";
import styled from "styled-components";
import { frontend1, frontend2 } from "./data";
const SkillsContent = styled.div`
  border: 1px solid ${(props) => props.theme.Description};
  padding: 2rem 4rem;
  border-radius: 1.25rem;
  @media screen and (max-width: 36rem) {
    padding: 1.5rem;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.Link};
`;
const SkillsBox = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2.5rem;
  @media screen and (max-width: 22rem) {
    column-gap: 1.25rem;
  }
`;
const SkillsGroup = styled.div`
  display: grid;
  align-items: flex-start;
  row-gap: 1rem;
`;
const SkillsData = styled.div`
  display: fle;
  column-gap: 0.5rem;
`;
const Icon = styled.i`
  color: ${(props) => props.theme.Description};
  font-size: 1rem;
`;
const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  line-height: 18px;
  color: ${(props) => props.theme.Title};
  @media screen and (max-width: 22rem) {
    font-size: 0.875rem;
  }
`;
const Level = styled.span`
  color: ${(props) => props.theme.Description};
  font-size: 0.625rem;
`;
function FrontEnd({ name, data1, data2 }) {
  return (
    <SkillsContent>
      <Title>{name}</Title>
      <SkillsBox>
        <SkillsGroup>
          {data1.map((item) => (
            <SkillsData key={item.id}>
              <Icon className="bx bxs-badge-check"></Icon>
              <div>
                <Name>{item.name}</Name>
                <Level>{item.level}</Level>
              </div>
            </SkillsData>
          ))}
        </SkillsGroup>

        <SkillsGroup>
          {data2.map((item) => (
            <SkillsData key={item.id}>
              <Icon className="bx bxs-badge-check"></Icon>
              <div>
                <Name>{item.name}</Name>
                <Level>{item.level}</Level>
              </div>
            </SkillsData>
          ))}
        </SkillsGroup>
      </SkillsBox>
    </SkillsContent>
  );
}

export default FrontEnd;
