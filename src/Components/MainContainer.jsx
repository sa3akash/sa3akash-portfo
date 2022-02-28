import React from "react";
import styled from "styled-components";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import Home from "./Home";
import Projects from "./Projects";
import Services from "./Services";
import Work from "./Work";

const MainContainer = () => {
  return (
    <Container>
      <Home />
      <Services />
      <Work />
      <About />
      <Projects />
      <Contact />
      <Footer />
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
  @media (max-width: 300px) {
    width: 120%;
    overflow-x: hidden;
  }
`;

// 2 38 50
