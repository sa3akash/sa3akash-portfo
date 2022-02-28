import React from "react";
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";

const Alert = () => {
  return (
    <AlertContainer id="alert" className="animationClass">
      <div className="iconBox">
        <FaCheck />
      </div>
      <p className="alertMessage">Your message send successfully!</p>
    </AlertContainer>
  );
};

export default Alert;

const AlertContainer = styled.div`
  position: fixed;
  z-index: 101;
  right: 10%;
  height: 40px;
  top: 15%;
  background: #162619;
  border-radius: 10px;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border-left: 5px solid #2ecc77;
  border-right: 5px solid #2ecc77;
  .iconBox{
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background:#2ecc77;
    font-size: 12px;
    color: #fff;
    border-radius: 100%;
  }
  .alertMessage{
    color: #fff;
    font-size: 14px;
    margin-left: 20px;
  }
`;
