import styled from "styled-components";

const HomeSection = styled.section`
  background-color: ${(props) => props.theme.Background_color2};
  padding: 6rem 0 2rem;
  @media screen and (max-width: 48rem) {
    padding: 2rem 0 4rem;
  }
`;
const AboutSection = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color};
`;
export { HomeSection, AboutSection };
