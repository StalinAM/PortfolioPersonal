import React, { useState } from "react";
import styled from "styled-components";
import data from "./data";
import ServicesModal from "./ServicesModal";
const ServiceSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color};
  font-size: 1rem;
  @media screen and (max-width: 48rem) {
    padding: 2rem 1rem 4rem;
  }
`;
const SectionTitle = styled.h2`
  font-size: 2.25rem;
  color: ${(props) => props.theme.Title};
  text-align: center;
`;
const SectionSubtitle = styled.span`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 4rem;
  text-align: center;
  color: ${(props) => props.theme.Description};
`;
const ServicesC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  column-gap: 1.8rem;
  justify-content: center;
  @media screen and (max-width: 62rem) {
    grid-template-columns: repeat(3, 218px);
    row-gap: 2rem;
  }
  @media screen and (max-width: 48rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 22rem) {
    grid-template-columns: max-content;
  }
`;
const ServicesContent = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.SubTitle};
  padding: 6rem 0 2rem 2.5rem;
  @media screen and (max-width: 48em) {
    padding: 3.5rem 0.5rem 1.25rem 1.5rem;
  }
`;
const Icon = styled.i`
  display: block;
  font-size: 2rem;
  color: ${(props) => props.theme.Description};
  margin-bottom: 1rem;
  @media screen and (max-width: 48rem) {
    font-size: 1.5rem;
  }
`;
const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Title};
`;
const Button = styled.span`
  color: ${(props) => props.theme.Description};
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  cursor: pointer;
  &:hover {
    transform: translateX(0.25rem);
  }
`;
const IconB = styled.i`
  font-size: 1rem;
  transition: 0.3s;
  transform: translateX(0.25rem);
`;

function Services() {
  const [toggle, setToggle] = useState(true);
  const [id, setId] = useState(1);
  const handelToogle = () => {
    setToggle(!toggle);
  };
  return (
    <ServiceSection id="services">
      <SectionTitle>Services</SectionTitle>
      <SectionSubtitle>What i offer</SectionSubtitle>
      <ServicesC>
        {data.map((item) => (
          <ServicesContent key={item.id}>
            <div>
              <Icon className={`uil uil-${item.icon}`}></Icon>
              <Title>
                {item.titleM}
                <br />
                Designer
              </Title>
            </div>
            <Button
              onClick={() => {
                setId(item.id);
                setToggle(!toggle);
              }}
            >
              View More
              <IconB className="uil uil-arrow-right"></IconB>
            </Button>
            <ServicesModal show={toggle} id={id} handelToogle={handelToogle} />
          </ServicesContent>
        ))}
      </ServicesC>
    </ServiceSection>
  );
}

export default Services;
