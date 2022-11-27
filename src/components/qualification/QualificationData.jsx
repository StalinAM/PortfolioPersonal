import React from "react";
import styled from "styled-components";

const QualificationContent = styled.div``;
const Data = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 1.5rem;
  @media screen and (max-width: 22rem) {
    gap: 0.5rem;
  }
`;
const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Title};
  @media screen and (max-width: 22rem) {
    font-size: 0.79rem;
  }
`;
const Subtitle = styled.span`
  display: inline-block;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.Description};
  @media screen and (max-width: 22rem) {
    font-size: 0.74rem;
  }
`;
const Calender = styled.div`
  font-size: 0.875rem;
  color: ${(props) => props.theme.Description};
  @media screen and (max-width: 22rem) {
    font-size: 0.74rem;
  }
`;
const IconC = styled.i`
  margin-right: 0.25rem;
`;
const Rounder = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  background-color: ${(props) => props.theme.SubTitle};
  border-radius: 50%;
`;
const Line = styled.span`
  display: block;
  width: 1px;
  height: 100%;
  background-color: ${(props) => props.theme.SubTitle};
  transform: translate(6px, -7px);
`;
function QualificationData({ array }) {
  return (
    <QualificationContent>
      {array.map((item) =>
        item.id % 2 != 0 ? (
          <Data key={item.id}>
            <div>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <Calender>
                <IconC className="uil uil-calendar-alt"></IconC>
                {item.date}
              </Calender>
            </div>
            <div>
              <Rounder></Rounder>
              <Line></Line>
            </div>
          </Data>
        ) : (
          <Data key={item.id}>
            <div></div>
            <div>
              <Rounder></Rounder>
              <Line></Line>
            </div>
            <div>
              <Title>{item.title}</Title>
              <Subtitle>{item.subtitle}</Subtitle>
              <Calender>
                <IconC className="uil uil-calendar-alt"></IconC>
                {item.date}
              </Calender>
            </div>
          </Data>
        )
      )}
    </QualificationContent>
  );
}

export default QualificationData;
