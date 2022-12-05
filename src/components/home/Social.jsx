import React, { useState } from "react";
import styled from "styled-components";
import data from "./data";
const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;
const IconMode = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Link};
  font-size: 1.5rem;
  color: ${(props) => props.theme.Link};
`;
const Line = styled.span`
  position: relative;
  left: 0.7rem;
  width: 2px;
  height: 8rem;
  background-color: ${(props) => props.theme.Title};
`;
const HomeSocialIcon = styled.a`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Link};
  &:hover {
    color: ${(props) => props.theme.Title};
  }
`;

function Social({ mode, setMode }) {
  const [iconMenu, seticonMenu] = useState("moon");
  const changeMode = () => {
    if (mode == "dark") {
      setMode("light");
      seticonMenu("sun");
    } else {
      setMode("dark");
      seticonMenu("moon");
    }
  };
  return (
    <HomeSocial>
      <IconMode
        onClick={() => changeMode()}
        className={`uil uil-${iconMenu}`}
      ></IconMode>
      <Line />
      {data.map((item) => (
        <HomeSocialIcon key={item.id} href={item.link} target="_blank">
          <i className={`uil uil-${item.icon}`}></i>
        </HomeSocialIcon>
      ))}
    </HomeSocial>
  );
}

export default Social;
