import React from "react";
import styled from "styled-components";
import data from "./data";
import { useState } from "react";
const HeaderC = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: ${(props) => props.theme.Background_color};
  @media screen and (max-width: 48rem) {
    top: initial;
    bottom: 0;
  }
`;
const NavC = styled.nav`
  max-width: 60.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 1rem;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 62rem) {
    margin-left: 1.5rem;
    margin-right: 1.5rem;
  }
  @media screen and (max-width: 48rem) {
    height: 3rem;
  }
`;
const Logo = styled.a`
  font-family: "Pacifico", cursive;
  font-size: 1.5rem;
  color: ${(props) => props.theme.Title};
  font-weight: 500;
  @media screen and (max-width: 48rem) {
    font-size: 1.2rem;
  }
`;
const Link = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.875rem;
  color: ${(props) => props.theme.Link};
  font-weight: 500;
  transition: 0.3s;
  &:hover {
    color: ${(props) => props.theme.Title};
  }
`;
const List = styled.ul`
  display: flex;
  column-gap: 2rem;
  @media screen and (max-width: 48rem) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  @media screen and (max-width: 22rem) {
    column-gap: 0;
  }
`;
const Icon = styled.i`
  display: none;
  @media screen and (max-width: 48rem) {
    display: block;
    font-size: 1.2rem;
  }
`;
const NavMenu = styled.div`
  @media screen and (max-width: 48rem) {
    position: fixed;
    bottom: ${(props) => (props.show ? "0" : "-100%")};
    left: 0;
    width: 100%;
    padding: 2rem 1.5rem 4rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
    background-color: ${(props) => props.theme.Background_color};
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
  @media screen and (max-width: 22rem) {
    padding: 2rem 0.25rem 4rem;
  }
`;
const IconClose = styled.i`
  display: none;
  @media screen and (max-width: 48rem) {
    display: block;
    position: absolute;
    right: 1.3rem;
    bottom: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.Link};
    &:hover {
      color: ${(props) => props.theme.Title};
    }
  }
`;
const IconOpen = styled.i`
  display: none;
  @media screen and (max-width: 48rem) {
    display: block;
    font-size: 1.1rem;
    cursor: pointer;
    color: ${(props) => props.theme.Link};
  }
`;
function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <HeaderC>
      <NavC>
        <Logo href="index.html">SVAM</Logo>
        <NavMenu show={toggle}>
          <List>
            {data.map((item) => (
              <li key={item.id}>
                <Link href={item.link}>
                  <Icon className={`uil uil-${item.icon}`}></Icon>
                  {item.title}
                </Link>
              </li>
            ))}
          </List>
          <IconClose
            onClick={() => setToggle(!toggle)}
            className="uil uil-times"
          ></IconClose>
        </NavMenu>
        <IconOpen
          onClick={() => setToggle(!toggle)}
          className="uil uil-apps"
        ></IconOpen>
      </NavC>
    </HeaderC>
  );
}

export default Header;
