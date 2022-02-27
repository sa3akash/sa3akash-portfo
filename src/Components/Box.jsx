import React from "react";
import styled from "styled-components";

const Box = ({ imgName, boxName, contant }) => {
  return (
    <ServiceBox>
      <img src={imgName} alt={imgName} />
      <h2>{boxName}</h2>
      <p>{contant}</p>
      <LearnMoreButton href="#">Learn More</LearnMoreButton>
    </ServiceBox>
  );
};

export default Box;

const ServiceBox = styled.div`
  min-width: 170px;
  min-height: 210px;
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    300deg,
    rgba(128, 128, 128, 0.05) 0%,
    rgba(255, 255, 255, 0.4) 100%
  );
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.15);
  padding: 12px 25px;
  border-radius: 5%;
  margin: var(--margin-2) 0;
  img {
    width: 70px;
    object-fit: contain;
  }
  h2 {
    color: var(--second-color);
    font-size: 1.8rem;
    text-transform: capitalize;
  }
  p {
    font-size: 16px;
    color: var(--text-color);
    text-align: center;
  }
  @media (max-width: 450px) {
    img {
      width: 40px;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 14px;
    }
  }
  @media (min-width: 768px) {
    width: 100%;
    height: 210px;
    margin-right: 5px;
    padding: 10px 15px;
    img {
      width: 40px;
    }
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 14px;
    }
  }
  @media (min-width: 1080px) {
    width: 47%;
    align-items: center;
    justify-content: space-between;
  }
`;
const LearnMoreButton = styled.a`
  background: #fff;
  padding: 8px 25px;
  border-radius: 5px;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.15);
  color: var(--second-color);
  font-size: 18px;
  transition: 0.3s ease;
  margin-bottom: 10px;
  &:hover {
    color: #1889e2;
    font-weight: bold;
  }
  @media (min-width: 768px) {
    padding: 6px 18px;
    font-size: 14px;
  }
`;
