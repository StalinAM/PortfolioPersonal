import styled from "styled-components";

const Section1 = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color};
  @media screen and (max-width: 48rem) {
    padding: 2rem 1rem 4rem;
  }
`;
const Section2 = styled.section`
  padding: 6rem 0 2rem;
  background-color: ${(props) => props.theme.Background_color2};
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
export { Section1, Section2, SectionTitle, SectionSubtitle };
