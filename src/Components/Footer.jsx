import React from "react";
import styled from "styled-components";
import { HomeSocial } from "./HomeSocial";

const Footer = () => {
  return (
    <FooterContainer>
      <p className="footerTitle">Shakil Ahmed</p>
    <div className="footerSocial">
    {HomeSocial &&
        HomeSocial.map((social) => (
          <a href={social.iconLink} key={social.id}>
            {social.iconName}
          </a>
        ))}
    </div>

      <p className="copyright">&#169; 2022 Copy_right all right reserved</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
    background: var(--second-color);
    color: white;
    text-align: center;
    font-weight: var(--font-semi);
    padding: 2rem 0;
    .footerTitle{
        font-size: 2rem;
        margin-bottom: var(--margin-2);
    }
    .footerSocial{
        a{
            color: white;
            font-size: 1.5rem;
            margin: 0 var(--margin-2);
            transition: 0.2s;
            &:hover{
                color: var(--fast-color);
                transform: scale(1.2);
            }
        }
    }
    .copyright{
        margin-top: 0.5rem ;
        font-family: 'Poppins', sans-serif;
    }
`;
