import React, { useRef } from "react";
import styled from "styled-components";
import data from "./data";
// EMAIL
import emailjs from "@emailjs/browser";

const ContactSection = styled.section`
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
const ContactC = styled.div`
  max-width: 60.5rem;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, max-content);
  justify-content: center;
  column-gap: 6rem;
  padding-bottom: 3rem;
  @media screen and (max-width: 62rem) {
    column-gap: 3rem;
  }
  @media screen and (max-width: 48rem) {
    grid-template-columns: 1fr;
    row-gap: 3rem;
  }
`;
const ContactContent = styled.div``;
const Title = styled.h3`
  text-align: center;
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.Description};
`;
const Info = styled.div`
  display: grid;
  row-gap: 1rem;
  grid-template-columns: 300px;
  @media screen and (max-width: 48rem) {
    justify-content: center;
  }
  @media screen and (max-width: 36rem) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  padding: 1rem;
  border-radius: 0.75rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.Description};
`;
const Icon = styled.i`
  font-size: 2rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.Title};
`;
const TitleC = styled.h3`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${(props) => props.theme.Title};
`;
const Data = styled.span`
  display: block;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.Description};
`;
const IconB = styled.i`
  font-size: 1rem;
  transition: 0.3s;
`;
const Button = styled.a`
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  column-gap: 0.25rem;
  &:hover ${IconB} {
    transform: translate(0.25rem);
  }
  color: ${(props) => props.theme.Description};
`;

// Form
const FormC = styled.form`
  width: 360px;
  @media screen and (max-width: 48rem) {
    margin: 0 auto;
  }
  @media screen and (max-width: 36rem) {
    width: 100%;
  }
`;
const FormDiv = styled.div`
  position: relative;
  margin-bottom: 2rem;
  height: 4rem;
`;
const Tag = styled.label`
  position: absolute;
  top: -0.75rem;
  left: 1.25rem;
  font-size: 0.813rem;
  padding: 0.25rem;
  z-index: 10;
  color: ${(props) => props.theme.Description};
  background-color: ${(props) => props.theme.Background_color2};
`;
const Input = styled.input`
  position: absolute;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid ${(props) => props.theme.Description};
  background: none;
  outline: none;
  border-radius: 0.75rem;
  padding: 1.5rem;
  z-index: 1;
`;
const InputProject = styled.textarea`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 2px solid ${(props) => props.theme.Description};
  background: none;
  outline: none;
  border-radius: 0.75rem;
  padding: 1.5rem;
  z-index: 1;
  height: 11rem;
  resize: none;
`;
const ButtomForm = styled.button`
  display: inline-flex;
  align-items: center;
  background-color: ${(props) => props.theme.Title};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: ${(props) => props.theme.Background_color};
  font-size: 1rem;
  margin-top: 6.5rem;
  &:hover {
    background-color: ${(props) => props.theme.Link};
  }
`;
const IconF = styled.i`
  font-size: 1rem;
  margin-left: 3px;
`;
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ws3xds",
        "template_zslq32f",
        form.current,
        "ZD_8FYGrpSoVVUwFY"
      )
      e.target.reset()
  };
  return (
    <ContactSection>
      <SectionTitle>Get in touch</SectionTitle>
      <SectionSubtitle>Contact Me</SectionSubtitle>
      <ContactC>
        <ContactContent>
          <Title>Talk to me</Title>
          <Info>
            {data.map((item) => (
              <Card key={item.id}>
                <Icon className={`bx ${item.icon}`}></Icon>
                <TitleC>{item.title}</TitleC>
                <Data>{item.data}</Data>
                <Button href={item.ref}>
                  Write me <IconB className="bx bx-right-arrow-alt"></IconB>
                </Button>
              </Card>
            ))}
          </Info>
        </ContactContent>
        <ContactContent>
          <Title>Write me your project</Title>
          <FormC ref={form} onSubmit={sendEmail}>
            <FormDiv>
              <Tag>Name</Tag>
              <Input type="text" name="name" placeholder="Insert your name" />
            </FormDiv>
            <FormDiv>
              <Tag>Mail</Tag>
              <Input
                type="email"
                name="email"
                placeholder="Insert your email"
              />
            </FormDiv>
            <FormDiv>
              <Tag>Project</Tag>
              <InputProject
                name="project"
                cols={30}
                rows={10}
                placeholder="Write your project"
              />
            </FormDiv>
            <ButtomForm href="#contact">
              Send Message<IconF className="uil uil-arrow-to-bottom"></IconF>
            </ButtomForm>
          </FormC>
        </ContactContent>
      </ContactC>
    </ContactSection>
  );
}

export default Contact;
