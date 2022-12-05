import React from "react";
import Social from "./Social";
import DataP from "./DataP";
import styled from "styled-components";
import homeImg from "../../assets/about.png";
import { Section1 } from "../../styles/CarouselSections";

const HomeC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1.5rem;
`;
const HomeContent = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 116px repeat(2, 1fr);
  padding: 5.5rem;
  column-gap: 2rem;
  align-items: center;
  @media screen and (max-width: 62rem) {
    grid-template-columns: 100px repeat(2, 1fr);
    column-gap: 1.25rem;
  }
  @media screen and (max-width: 48rem) {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 3.5rem;
    padding: 2rem;
  }
  @media screen and (max-width: 22rem) {
    padding: 1.5rem;
  }
`;
const HomeImg = styled.div`
  background: url(${homeImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  order: 1;
  justify-self: center;
  width: 300px;
  height: 300px;
  animation: profile__animate 8s ease-in-out infinite 1s;
  box-shadow: inset 0 0 0 9px rgba(255 255 255 / 30%);
  @keyframes profile__animate {
    0% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
  }
  @media screen and (max-width: 62rem) {
    width: 250px;
    height: 250px;
  }
  @media screen and (max-width: 48rem) {
    order: initial;
    justify-self: initial;
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width: 22rem) {
    width: 180px;
    height: 180px;
  }
`;

function Home({ mode, setMode }) {
  return (
    <Section1 id="home">
      <HomeC>
        <HomeContent>
          <Social mode={mode} setMode={setMode} />
          <HomeImg></HomeImg>
          <DataP />
        </HomeContent>
      </HomeC>
    </Section1>
  );
}

export default Home;
