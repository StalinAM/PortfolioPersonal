import React from "react";
import styled from "styled-components";
const Card = styled.div`
  padding: 1.25rem;
  border-radius: 1rem;
  border: 1px solid ${(props) => props.theme.Description};
  @media screen and (max-width: 62rem) {
    padding: 1rem;
  }
`;
const Img = styled.img`
  width: 295px;
  border-radius: 1rem;
  margin-bottom: 1rem;
  @media screen and (max-width: 62rem) {
    margin-bottom: 0.75rem;
  }
  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.Title};
  @media screen and (max-width: 62rem) {
    margin-bottom: 0.25rem;
  }
`;
const Arrow = styled.i`
  font-size: 1rem;
  transition: 0.4s;
`;
const Butoon = styled.a`
  font-size: 0.875rem;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  color: ${(props) => props.theme.Description};
  &:hover ${Arrow} {
    transform: translate(0.25rem);
  }
`;
function WorkItem({ item }) {
  return (
    <Card>
      <Img src={item.image} alt="" />
      <Title>{item.title}</Title>
      <Butoon>
        Demo
        <Arrow className="bx bx-right-arrow-alt"></Arrow>
      </Butoon>
    </Card>
  );
}

export default WorkItem;
