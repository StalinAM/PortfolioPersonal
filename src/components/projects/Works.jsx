import React, { useState } from "react";
import { projectsData, category } from "./data";
import styled from "styled-components";
import WorkItem from "./WorkItem";
const WorksFilter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 0.75rem;
  margin-bottom: 2rem;
  .active {
    background-color: ${(props) => props.theme.Link};
    color: ${(props) => props.theme.Background_color2};
  }
  @media screen and (max-width: 22rem) {
    column-gap: 0.25rem;
  }
`;
const FilterItem = styled.span`
  padding: 0.25rem 0.75rem;
  font-weight: 500;
  color: ${(props) => props.theme.Description};
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: capitalize;
  &:hover {
    background-color: ${(props) => props.theme.Link};
    color: ${(props) => props.theme.Background_color2};
  }
  @media screen and (max-width: 22rem) {
    font-size: 0.875rem;
  }
`;
const WorkC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(2, max-content);
  align-items: center;
  column-gap: 4rem;
  justify-content: center;
  @media screen and (max-width: 62rem) {
    gap: 1.25rem;
  }
  @media screen and (max-width: 48rem) {
    grid-template-columns: max-content;
  }
  @media screen and (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;
function Works() {
  const [listFilter, setListFilter] = useState("all");
  const [active, setActive] = useState(0);
  const NewArray =
    listFilter == "all"
      ? projectsData
      : projectsData.filter((item) => item.category == listFilter);
  return (
    <>
      <WorksFilter>
        {category.map((item, index) => (
          <FilterItem
            className={active === index ? "active" : ""}
            key={item.id}
            onClick={() => {
              setActive(index);
              setListFilter(item.name);
            }}
          >
            {item.name}
          </FilterItem>
        ))}
      </WorksFilter>
      <WorkC>
        {NewArray.map((item) => (
          <WorkItem item={item} key={item.id} />
        ))}
      </WorkC>
    </>
  );
}

export default Works;
