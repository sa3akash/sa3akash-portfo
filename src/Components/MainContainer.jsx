import React from "react";
import styled from "styled-components";
import Home from "./Home";
import Services from "./Services";

const MainContainer = () => {
  return (
    <Container>
      <Home />
      <Services />
    </Container>
  );
};

export default MainContainer;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  background: linear-gradient(
    310deg,
    rgba(128, 128, 128, 0.05) 0%,
    rgba(255, 255, 255, 0.6) 100%
  );
  z-index: -1;
`;

// 2 38 50
