import React from "react";
import styled from "styled-components";
import { ProjectsImgs } from "./ProjectsImg";

const Projects = () => {
  return (
    <div className="section" id="projects">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>

      <h2 className="section_title">Projects</h2>
      <ProjectsContainer className="bd_grid">

        {ProjectsImgs &&
          ProjectsImgs.map((n) => (
            <ProjectImg key={n.id}>
              <img src={n.imgUrl} alt={n.id} />
            </ProjectImg>
          ))}
      </ProjectsContainer>
    </div>
  );
};

export default Projects;

const Circle1 = styled.div`
  width: 250px;
  height: 250px;
  background: var(--circle-one);
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

const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: auto;
`;
const ProjectImg = styled.div`
    width: 100%;
    height: 210px;
    margin: 15px 0;
    overflow: hidden;
    box-shadow: 0 4px 25px rgba(14,36,49, 0.15);
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        img{
            transform: scale(1.2);
        }
    }
    img {
    width: 100%;
    object-fit: cover;
    transition:all 1s;
  }
  @media (min-width: 768px) {
    width: calc(100%/2 - 25px);
  }
  @media (min-width: 1080px) {
    width: calc(100%/3 - 25px);
  }
`;
