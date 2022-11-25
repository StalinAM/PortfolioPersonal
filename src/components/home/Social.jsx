import React from "react";
import styled from "styled-components";
import data from "./data";
const HomeSocial = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1rem;
`;
const HomeSocialIcon = styled.a`
  font-size: 1.25rem;
  color: ${(props) => props.theme.Link};
  &:hover{
    color: ${(props) => props.theme.Title}
  }
`;
function Social() {
  return (
    <HomeSocial>
      {data.map((item) => (
        <HomeSocialIcon key={item.id} href={item.link} target="_blank">
          <i className={`uil uil-${item.icon}`}></i>
        </HomeSocialIcon>
      ))}
    </HomeSocial>
  );
}

export default Social;
