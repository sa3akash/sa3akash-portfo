import React from "react";
import styled from "styled-components";


const Services = () => {
  return (
    <ServicesContainer className="section bd_grid" id="services">
     <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
    height: 100vh;
`;
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

