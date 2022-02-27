import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <div className="section" id="about">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>

      <h2 className="section_title">About</h2>
      <AboutContainer className="bd_grid serviceContainer">
        <ServiceText>
          <h2>
            We work for all this <br /> <span>Brand and Clients</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos
            corrupti fugiat nam repudiandae voluptatibus, quaerat quidem? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ex eos corrupti
            fugiat nam repudiandae voluptatibus, quaerat quidem?
          </p>
          <CvDownload href="#">Details</CvDownload>
        </ServiceText>
        <AboutImg className="aboutImg">
          <img src="/img/model.jpg" alt="shakil" />
        </AboutImg>
      </AboutContainer>
    </div>
  );
};

export default About;

const Circle1 = styled.div`
  width: 350px;
  height: 350px;
  background: var(--circle-one);
  left: 0;
  bottom: 0;
`;
const Circle2 = styled.div`
  width: 400px;
  height: 400px;
  background: #F544B9;
  right: 0;
  bottom: 0;
`;

const AboutContainer = styled.div`
  margin: auto;
  text-align: center;
  /* padding: 5px 10px; */
  @media (min-width: 1080px) {
    flex-direction: row;
  }
`;

const AboutImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  img {
    width: 260px;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
    filter: drop-shadow(20px -20px 10px var(--fast-color));
  }
  @media (max-width: 350px) {
    display: flex;
    justify-content: center;
    img {
      width: 80%;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-around;
    img {
      width: 80%;
      margin-bottom: 0;
    }
  }
  @media (min-width: 1080px) {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    img {
      width: 60%;
      margin-bottom: 0;
    }
  }
`;

const ServiceText = styled.div`
  margin-bottom: 1rem;
  h2 {
    font-size: var(--big-font-size);
    margin-bottom: var(--margin-2);
    span {
      color: var(--fast-color);
      font-size: 3rem;
    }
  }
  p {
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
