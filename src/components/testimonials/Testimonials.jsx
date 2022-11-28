import React from "react";
import styled from "styled-components";
import data from "./data";
// SWIPER
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const TestimonialSection = styled.section`
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
const TestimonialC = styled.div`
  width: 750px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 62rem) {
    width: initial;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.Background_color2};
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1.5rem 2rem;
    border-radius: 1.5rem;
    margin-bottom: 3rem;
    @media screen and (max-width: 62rem) {
      padding: 1.25rem 1.5rem;
    }
  }
  .swiper-pagination-bullet {
    background-color: ${(props) => props.theme.Description};
  }
  .swiper-pagination-bullet-active {
    background-color: ${(props) => props.theme.Title};
  }
`;

const Img = styled.img`
  width: 60px;
  border-radius: 3rem;
  margin-bottom: 1rem;
`;
const Name = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.Title};
`;
const Description = styled.p`
  font-size: 0.875rem;
  color: ${(props) => props.theme.Description};
`;
function Testimonials() {
  return (
    <TestimonialSection id="testimonials">
      <SectionTitle>My clients say</SectionTitle>
      <SectionSubtitle>Testimonial</SectionSubtitle>
      <TestimonialC>
        <Swiper
          loop={true}
          grabCursor={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <Img src={item.image} alt=""></Img>
              <Name>{item.title}</Name>
              <Description>{item.description}</Description>
            </SwiperSlide>
          ))}
        </Swiper>
      </TestimonialC>
    </TestimonialSection>
  );
}

export default Testimonials;
