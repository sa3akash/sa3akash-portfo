import React from "react";
import styled from "styled-components";
import Box from "./Box";

const Services = () => {
  return (
    <div className="section" id="services">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>

      <h2 className="section_title">Services</h2>
      <ServiceContainer className="bd_grid serviceContainer">
        <ServiceImg>
            <Box
            imgName='/img/smiley_1.svg' 
            boxName='Design' 
            contant=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas sed aliquam cupiditate laboriosam voluptatem eveniet consequatur?'
            />
            <Box
            imgName='/img/smiley_2.svg' 
            boxName='Developer' 
            contant=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas sed aliquam cupiditate laboriosam voluptatem eveniet consequatur?'
            />
            <Box
            imgName='/img/smiley_3.svg' 
            boxName='Ui/UX' 
            contant=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas sed aliquam cupiditate laboriosam voluptatem eveniet consequatur?'
            />
            <Box
            imgName='/img/smiley_1.svg' 
            boxName='Mobile App' 
            contant=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptas sed aliquam cupiditate laboriosam voluptatem eveniet consequatur?'
            />
        </ServiceImg>
        <ServiceText>
          <h2>
            My awesome <br /> <span>Services</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos
            corrupti fugiat nam repudiandae voluptatibus, quaerat quidem?
          </p>
          <CvDownload href="#">Download CV</CvDownload>
        </ServiceText>
      </ServiceContainer>
    </div>
  );
};

export default Services;

const Circle1 = styled.div`
  width: 250px;
  height: 250px;
  background: var(--circle-one);
  top: 0;
  right: 0;
`;
const Circle2 = styled.div`
  width: 200px;
  height: 200px;
  background: var(--circle-two);
  left: 0;
  bottom: 0;
`;

const ServiceContainer = styled.div`
  margin: auto;
  row-gap: 2rem;
  text-align: center;
  @media (min-width: 1080px) {
       flex-direction: row;
    }
`;

const ServiceImg = styled.div`
    justify-self: center;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
      
    }
    @media (min-width: 1080px) {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`;

const ServiceText = styled.div`
    h2{
        font-size: var(--big-font-size);
        margin-bottom: var(--margin-2);
        span{
            color: var(--fast-color);
            font-size: 3rem;
        }
    }
    p{
        margin-bottom: var(--margin-3);
    }
`;
const CvDownload = styled.a`
  display: inline-block;
  color: #fff;
  background: var(--fast-color);
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  margin-bottom: var(--margin-4);
  border-radius: 2rem;
  font-size: 1.2rem;
  filter: drop-shadow(0 5px 20px var(--fast-color));
  transition: 0.2s;
  &:hover {
    transform: scaleX(1.2);
  }
`;
