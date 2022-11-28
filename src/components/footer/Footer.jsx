import React from "react";
import styled from "styled-components";
import { social, items } from "./data";

const FooterF = styled.footer`
  border-top: 1px solid ${(props) => props.theme.Description};
`;
const FooterC = styled.div`
  padding: 2rem 0 6rem;
  background-color: ${(props) => props.theme.Background_color};
  font-size: 1rem;
  @media screen and (max-width: 48rem) {
    padding: 2rem 1rem 4rem;
  }
`;
const Title = styled.h1`
  font-family: "Pacifico", cursive;
  font-size: 2rem;
  color: ${(props) => props.theme.Title};
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  @media screen and (max-width: 48rem) {
    font-size: 1.2rem;
  }
`;
const List = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 1.5rem;
  margin-bottom: 2rem;
`;
const Item = styled.li`
  color: ${(props) => props.theme.Link};
  &:hover {
    color: ${(props) => props.theme.SubTitle};
  }
`;
const Link = styled.a``;
const Social = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1.25rem;
`;
const SocialIcon = styled.a`
  font-size: 1.3rem;
  color: ${(props) => props.theme.Link};
  padding: 0.4rem;
  border-radius: 0.5rem;
  display: inline-block;
  &:hover {
    color: ${(props) => props.theme.Title};
  }
  @media screen and (max-width: 62rem) {
    padding: 0.25rem;
    border-radius: 0.25rem;
    font-size: 1rem;
  }
`;
const Copy = styled.span`
  display: block;
  margin-top: 4.5rem;
  color: ${(props) => props.theme.Description};
  text-align: center;
  font-size: 0.813rem;
`;
function Footer() {
  return (
    <FooterF>
      <FooterC>
        <Title>SVAM</Title>
        <List>
          {items.map((item) => (
            <Item key={item.id}>
              <Link href={item.link}>{item.title}</Link>
            </Item>
          ))}
        </List>
        <Social>
          {social.map((item) => (
            <SocialIcon key={item.id} href={item.link} target="_blank">
              <i className={`uil uil-${item.icon}`}></i>
            </SocialIcon>
          ))}
        </Social>
        <Copy>&#169; Crypticalcoder. All rigths reserved</Copy>
      </FooterC>
    </FooterF>
  );
}

export default Footer;
