import React from "react";
import styled from "styled-components";
import { HomeSocial } from "./HomeSocial";

const Home = () => {
  return (
    <Container className="home section bd_grid">
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>
      <Circle3 className="circle"></Circle3>
      <HomeData>
        <h2>
          Hi , I'am <br /> <span>Shakil Ahmed</span> <br /> Web Developer
        </h2>
        <ContactButton href="#">Contact Me</ContactButton>
      </HomeData>
      <HomeSocialLink>
        {HomeSocial &&
          HomeSocial.map((social) => (
            <a href={social.iconLink} key={social.id}>
              {social.iconName}
            </a>
          ))}
      </HomeSocialLink>
      <HomeImg>
        <img src="/img/lady_img.png" alt="profile" className="profile" />
        <img src="/img/lady_bgpath.svg" alt="path" className="path" />
        <img src="/img/smiley_1.svg" alt="smiley" className="smiley" />
        <img src="/img/star.svg" alt="star" className="star" />
        <img src="/img/star_2.svg" alt="star_2" className="star_2" />
        <img src="/img/star_3.svg" alt="star_3" className="star_3" />

        <Box1>
          {/* <img src="/img/smiley_1.svg" alt="BoxSmiley" className="boxSmiley" /> */}
          <Contant1>
            <h2>Ui/Ux</h2>
            <p>Type some contant over here</p>
          </Contant1>
        </Box1>
        <Box2>
          {/* <img src="/img/smiley_1.svg" alt="BoxSmiley" className="boxSmiley" /> */}
          <Contant2>
            <h2>Awards</h2>
            <p>Type some contant over here</p>
          </Contant2>
        </Box2>
      </HomeImg>
    </Container>
  );
};

export default Home;

const Container = styled.section`
  height: calc(100vh - 3rem);
  grid-gap: 1rem;
  margin: auto;
`;
const Circle1 = styled.div`
  width: 300px;
  height: 300px;
  background: var(--circle-one);
  top: 60%;
  left: 0;
`;
const Circle2 = styled.div`
  width: 250px;
  height: 250px;
  background: var(--circle-two);
  top: 10%;
  right: 0;
`;
const Circle3 = styled.div`
  width: 200px;
  height: 200px;
  background: var(--circle-two);
  top: 30%;
  left: 0;
`;

const HomeData = styled.div`
  align-self: center;
  margin-top: 3rem;
  h2 {
    font-size: var(--big-font-size);
    margin-bottom: var(--margin-5);
    span {
      color: var(--fast-color);
      font-size: 3rem;
    }
  }
`;
const ContactButton = styled.a`
  display: inline-block;
  color: #fff;
  background: var(--fast-color);
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 2rem;
  font-size: 1.2rem;
  filter: drop-shadow(0 5px 20px var(--fast-color));
  transition: 0.2s;
  &:hover {
    transform: scaleX(1.2);
  }
`;

const HomeSocialLink = styled.div`
  display: flex;
  flex-direction: column;
  a {
    width: max-content;
    margin-bottom: var(--margin-2);
    font-size: 1.5rem;
    color: var(--second-color);
    transition: 0.3s;
    &:hover {
      color: var(--fast-color);
      transform: scale(1.3);
    }
  }
`;

const HomeImg = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 300px;
  .profile {
    width: 100%;
  }
  .path {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .smiley {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 50px;
  }
  .star {
    position: absolute;
    top: 0%;
    width: 60px;
    right: 0;
    filter: drop-shadow(0 5px 20px #2cc245);
  }
  .star_2 {
    position: absolute;
    width: 30px;
    bottom: 30%;
    left: 12%;
    filter: drop-shadow(0 5px 20px #2ec6d3);
  }
  .star_3 {
    position: absolute;
    width: 50px;
    right: 0;
    bottom: 30%;
    filter: drop-shadow(0 5px 20px #2cc245);
  }
`;
const Box = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background: #fff;
`;
const Box1 = styled(Box)`
  top: 20%;
  right: 0;
`;
const Box2 = styled(Box)`
  bottom: 25%;
  left: 0;
`;
const Contant1 = styled.div``;
const Contant2 = styled.div``;
