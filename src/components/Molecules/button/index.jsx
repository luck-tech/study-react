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
  color: #4b4b4b;
  position: fixed;
  z-index: 1;
  border-radius: 90px;
  font-size: 25px;
  text-align: end;
  bottom: 50px;
  right: 50px;
  text-align: end;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    bottom: 30px;
    right: 30px;
  }
  > img {
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      width: 65px;
      height: 65px;
    }
  }
  > div {
    position: absolute;
    top: 75%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #4b4b4b;
    text-align: center;
    font-size: 14px;
    font-weight: bold;
    line-height: normal;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      font-size: 10px;
      top: 65%;
    }
  }
`;
export default Button;
