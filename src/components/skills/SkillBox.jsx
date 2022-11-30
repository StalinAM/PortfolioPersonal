import React from "react";
import styled from "styled-components";
const SkillsContent = styled.div`
  border: 1px solid ${(props) => props.theme.Description};
  padding: 2rem 3.5rem;
  border-radius: 1.25rem;
  @media screen and (max-width: 22rem) {
    padding: 1rem;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.Link};
`;
const SkillsGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: flex-start;
  row-gap: 1rem;
  column-gap: 2.5rem;
  @media screen and (max-width: 22rem) {
    column-gap: 1rem;
  }
`;
const SkillsData = styled.div`
  display: flex;
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
function FrontEnd({ name, data }) {
  return (
    <SkillsContent>
      <Title>{name}</Title>
      <SkillsGroup>
        {data.map((item) => (
          <SkillsData key={item.id}>
            <Icon className="bx bxs-badge-check"></Icon>
            <div>
              <Name>{item.name}</Name>
              {/* <Level>{item.level}</Level> */}
            </div>
          </SkillsData>
        ))}
      </SkillsGroup>
    </SkillsContent>
  );
}

export default FrontEnd;
