import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BREAKPOINT from "../../../variables/breakpoint";

const Button = () => {
  return (
    <StyledButton>
      <img src="../../../assets/camera.png" alt="search" />
      <div>出品</div>
    </StyledButton>
  );
};

const StyledButton = styled.div`
  z-index: 2;
  background-color: #dbd6d6;
  color: #4b4b4b;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  border-radius: 90px;
  font-size: 25px;
  height: 75px;
  width: 75px;
  bottom: 50px;
  right: 50px;
  text-align: end;

  > div {
    color: #4b4b4b;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
  }
`;
export default Button;
