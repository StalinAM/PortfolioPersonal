import React from "react";
import styled from "styled-components";
import data from "./data";
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
    grid-template-columns: max-content;
    row-gap: 2rem;
  }
  @media screen and (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;
const ServicesContent = styled.div`
  position: relative;
  border: 1px solid ${(props) => props.theme.SubTitle};
  padding: 6rem 0 2rem 2.5rem;
`;
const Icon = styled.i`
  display: block;
  font-size: 2rem;
  color: ${(props) => props.theme.Description};
  margin-bottom: 1rem;
`;
const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Title};
`;
const Button = styled.span`
  color: ${(props) => props.theme.Description};
`;
const IconB = styled.i``;
const ServicesModal = styled.div`
  display: none;
`;
const ServicesModalC = styled.div``;
const IconM = styled.i``;
const TitleM = styled.h3``;
const DescriptionM = styled.p``;
const ListServices = styled.ul``;
const Item = styled.li``;
const IconI = styled.i``;
const ItemInfo = styled.p``;
function Services() {
  return (
    <ServiceSection>
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
            <Button>
              View More
              <IconB className="uil uil-arrow-right"></IconB>
            </Button>
            <ServicesModal>
              <ServicesModalC>
                <IconM className="uil uil-times"></IconM>
                <TitleM>{item.titleM} Designer</TitleM>
                <DescriptionM>
                  Service with more than 3 years of experience.Providing quality
                  work to clients and companies.
                </DescriptionM>
                <ListServices>
                  {item.list.map((item) => (
                    <Item key={item.id}>
                      <IconI className="uil uil-check-circle"></IconI>
                      <ItemInfo>{item.description}</ItemInfo>
                    </Item>
                  ))}
                </ListServices>
              </ServicesModalC>
            </ServicesModal>
          </ServicesContent>
        ))}
      </ServicesC>
    </ServiceSection>
  );
}

export default Services;
