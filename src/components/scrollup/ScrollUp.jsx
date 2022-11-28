import React, { useState, useEffect } from "react";
import styled from "styled-components";
const Scroll = styled.a`
  position: fixed;
  right: 2.5rem;
  bottom: ${(props) => (props.show ? "3rem" : "-20%")};
  opacity: 0.8;
  padding: 0.3rem 0.5rem;
  border-radius: 0.4rem;
  z-index: 10;
  transition: 0.4s;
  background-color: ${(props) => props.theme.Description};
  &:hover {
    background-color: ${(props) => props.theme.SubTitle};
  }
  @media screen and (max-width: 62rem) {
    right: 1.5rem;
    padding: 0.25rem 0.4rem;
  }
  @media screen and (max-width: 48rem) {
    bottom: ${(props) => (props.show ? "4rem" : "-20%")};
  }
  @media screen and (max-width: 22rem) {
    right: 1rem;
  }
`;
const Icon = styled.i`
  font-size: 1.5rem;
  color: ${(props) => props.theme.Background2};
  @media screen and (max-width: 62rem) {
    font-size: 1.25rem;
  }
`;
function ScrollUp() {
  const [show, setShow] = useState(false);
  //   the scroll is displayed when passing 500 vw
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setShow(true) : setShow(false);
    });
  }, []);

  return (
    <Scroll href="#" show={show}>
      <Icon className="uil uil-arrow-up"></Icon>
    </Scroll>
  );
}

export default ScrollUp;
