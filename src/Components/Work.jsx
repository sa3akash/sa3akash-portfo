import React from "react";
import styled from "styled-components";

const Work = () => {
  return (
    <div className="section" id="work">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>

      <h2 className="section_title">Work</h2>
      <WorkContainer className="bd_grid serviceContainer">
        <WorkImg>
          <img src="/img/Circle_group.svg" alt="Circle_group" />
        </WorkImg>
        <ServiceText>
          <h2>
            My awesome <br /> <span>Work</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eos
            corrupti fugiat nam repudiandae voluptatibus, quaerat quidem? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Ex eos corrupti
            fugiat nam repudiandae voluptatibus, quaerat quidem?
          </p>
          <CvDownload href="#">Details</CvDownload>
        </ServiceText>
      </WorkContainer>
    </div>
  );
};

export default Work;

const Circle1 = styled.div`
  width: 350px;
  height: 350px;
  background: #1889E2;
  left: 0;
  bottom: 0;
`;
const Circle2 = styled.div`
  width: 200px;
  height: 200px;
  background: var(--circle-two);
  right: 0;
  bottom: 0;
`;

const WorkContainer = styled.div`
  margin: auto;
  text-align: center;
  /* padding: 5px 10px; */
  @media (min-width: 1080px) {
    flex-direction: row;
  }
`;

const WorkImg = styled.div`
  justify-self: center;
  img {
    width: 260px;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 350px) {
    img {
      width: 160px;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    img {
      width: 320px;
      margin-bottom: 0;
    }
  }
  @media (min-width: 1080px) {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 60%;
      margin-bottom: 0;
    }
  }
`;

const ServiceText = styled.div`
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
