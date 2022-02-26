import React from "react";
import styled from "styled-components";

const Circle = () => {
  return (
    <>
      <Circle1 className="circle"></Circle1>
      <Circle2 className="circle"></Circle2>
      <Circle3 className="circle"></Circle3>
    </>
  );
};

export default Circle;

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
