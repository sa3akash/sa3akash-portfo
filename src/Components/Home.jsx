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
        <ContactButton href="#contact">Contact Me</ContactButton>
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
          <img src="/img/smiley_1.svg" alt="BoxSmiley" className="boxSmiley" />
          <Contant1>
            <h2>Ui/Ux</h2>
            <p>Type some contant over here</p>
          </Contant1>
        </Box1>
        <Box2>
          <img src="/img/medal.svg" alt="BoxSmiley" className="boxSmiley" />
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
  height: 100vh;
  margin: auto;
`;

const HomeData = styled.div`
  align-self: center;
  h2 {
    margin-bottom: var(--margin-5);
    font-size: var(--big-font-size);
    span {
      color: var(--fast-color);
      font-size: 3rem;
    }
    @media (min-width: 768px) {
      margin-top: var(--margin-6);
      font-size: 3rem;
      span {
        font-size: 3.5rem;
      }
    }
    @media (min-width: 1080px) {
      font-size: 4rem;
      span {
        font-size: 5rem;
      }
    }
  }
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
      transform: scale(1.4);
    }
  }
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    a {
      margin-bottom: 0;
      margin-right: var(--margin-4);
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
    @media (max-width: 400px) {
      display: none;
    }
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
  @media (max-width: 350px) {
    width: 250px;
  }
  @media (min-width: 550px) {
    width: 350px;
  }
  @media (min-width: 768px) {
    width: 450px;
  }
  @media (min-width: 1080px) {
    width: 500px;
  }
`;
const Box = styled.div`
  position: absolute;
  width: 150px;
  height: 50px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  align-items: center;
  img {
    min-width: 30px;
    min-height: 30px;
    width: 40px;
    height: 40px;
    background: #fef4df;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5px;
  }
  @media (min-width: 768px) {
    width: 200px;
    height: 60px;
    img {
      width: 50px;
      height: 50px;
    }
  }
`;
const Box1 = styled(Box)`
  top: 20%;
  right: 0;
`;
const Box2 = styled(Box)`
  bottom: 25%;
  left: 0;
`;
const contant = styled.div`
  margin-left: 10px;
  h2 {
    font-size: 12px;
    font-weight: 800;
    @media (min-width: 768px) {
      font-size: 18px;
    }
  }
  p {
    font-size: 10px;
    @media (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
const Contant1 = styled(contant)``;
const Contant2 = styled(contant)``;
