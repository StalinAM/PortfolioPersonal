import React from "react";
import styled from "styled-components";
import data from "./data";
const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  opacity: ${(props) => (props.show ? "0" : "1")};
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  transition: 0.3s;
`;
const ServicesModalC = styled.div`
  width: 500px;
  position: relative;
  padding: 4.5rem 2.5rem 2.5rem;
  background-color: ${(props) => props.theme.Description};
  border-radius: 1.5rem;
  @media screen and (max-width: 36rem) {
    padding: 4.5rem 1.5rem 2.5rem;
  }
  @media screen and (max-width: 22rem) {
    padding-right: 6rem;
  }
`;
const IconM = styled.i`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.Modal};
  cursor: pointer;
`;
const TitleM = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;
const DescriptionM = styled.p`
  text-align: center;
  font-size: 0.875rem;
  padding: 0 3.5rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 36rem) {
    padding: 0;
  }
`;
const ListServices = styled.ul`
  row-gap: 0.75rem;
`;
const Item = styled.li`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;
const IconI = styled.i`
  color: ${(props) => props.theme.Modal};
  font-size: 1.1rem;
`;
const ItemInfo = styled.p`
  font-size: 0.875rem;
`;
function ServicesModal({ id, show, handelToogle }) {
  return (
    <Modal show={show}>
      <ServicesModalC>
        <IconM onClick={handelToogle} className="uil uil-times"></IconM>
        <TitleM>{data[id - 1].titleM} Designer</TitleM>
        <DescriptionM>
          Service with more than 3 years of experience.Providing quality work to
          clients and companies.
        </DescriptionM>
        <ListServices>
          {data[id - 1].list.map((item) => (
            <Item key={item.id}>
              <IconI className="uil uil-check-circle"></IconI>
              <ItemInfo>{item.description}</ItemInfo>
            </Item>
          ))}
        </ListServices>
      </ServicesModalC>
    </Modal>
  );
}

export default ServicesModal;
