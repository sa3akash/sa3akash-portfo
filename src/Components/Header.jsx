import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MenuList } from "./MenuList";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [width, setWidth] = useState(false);
  const ToogleClick = () => {
    setWidth(!width);
  };
  useEffect(() => {
    const menu = document.getElementById("menu");
    const allAll = menu.querySelectorAll("li");

    function linkActive() {
      allAll.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
      setWidth(!width);
    }

    allAll.forEach((n) => n.addEventListener("click", linkActive));
  });
  return (
    <HeaderContainer>
      <nav>
        <NavLogo href={MenuList[0].hyper_link}>SA3Akash</NavLogo>
        <ul className={width ? "show" : ""} id="menu">
          {MenuList &&
            MenuList.map((n) => (
              <li key={n.id} className={n.Text} id={n.logoId}>
                <a href={n.hyper_link}>{n.link_name}</a>
              </li>
            ))}
        </ul>
        <Humberger onClick={ToogleClick}>
          <BiMenuAltRight />
        </Humberger>
      </nav>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, 0.15);

  nav {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
    height: var(--header-height);
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: var(--font-semi);
    font-family: var(--header-font);

    div {
      display: none;
    }
    ul {
      position: none;
      display: flex;
      align-items: center;

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        margin-right: 10px;
        a {
          color: black;
          padding: 5px 10px;
          position: relative;
          &::after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            bottom: 0px;
            left: 0;
            right: 0;
            background-color: var(--fast-color);
            border-radius: 2px;
            z-index: var(--z-back);
            transition: width 0.2s;
          }
          &:hover::after {
            width: 100%;
          }
        }
        &.active a::after {
          width: 100%;
        }
      }
    }

    @media (max-width: 768px) {
      div {
        display: block;
        cursor: pointer;
        padding: 10px 20px;
      }
      ul {
        position: fixed;
        top: var(--header-height);
        right: -100%;
        width: 50%;
        height: 100%;
        padding: 2rem;
        background-color: var(--second-color);
        transition: 0.5s;
        flex-direction: column;
        li {
          margin-bottom: var(--margin-4);
          justify-content: center;
          a {
            color: #fff;
          }
        }
        &.show {
          right: 0;
        }
      }
    }
  }
  @media (min-width: 768px) {
    nav {
      height: 4rem;
    }
  }
`;

const NavLogo = styled.a`
  color: var(--text-color);
  margin-left: var(--margin-2);
`;

const Humberger = styled.div`
  color: var(--second-color);
  font-size: 1.5rem;
`;
