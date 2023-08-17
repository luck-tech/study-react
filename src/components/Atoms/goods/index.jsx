import React from "react";
import styled from "styled-components";
import BREAKPOINT from "../../../variables/breakpoint";
const Item = () => {
  return (
    <StyledItem>
      <ImgBox>
        <img src="../../assets/ex_text.png" />
      </ImgBox>
      <Message>
        <p>商品名</p>
      </Message>
      <ImgPrice>
        <p>1000円</p>
      </ImgPrice>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  background-color: white;
  margin: 15px 24px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    margin: 0px;
    border: 1px solid;
    border-color: white;
  }
`;

const ImgBox = styled.div`
  position: relative;
  > img {
    object-fit: contain;
    box-sizing: content-box;
    width: 100%;
    border-radius: 10px;
    background-color: beige;
  }
`;

const Message = styled.div`
  > p {
    line-height: 1.4;
    -webkit-line-clamp: 2; //text-overflowでの三点リーダー実装は1行の時しか使えない
    display: -webkit-box; //webkitはIE, Firefoxに対応していないとのこと。改良の余地あり
    -webkit-box-orient: vertical;
    box-sizing: content-box;
    width: 100%;
    overflow: hidden;
    color: #6f3f1a;
    text-align: center;
    font-size: 20px;
    margin-top: 8px;
    margin-bottom: 0;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      display: none;
    }
  }
`;

const ImgPrice = styled.div`
  > p {
    color: #6f3f1a;
    text-align: right;
    font-weight: bold;
    border-radius: 0 20px 20px 0;
    font-weight: 700;
    font-size: 20px;
    bottom: 0;
    margin: 0;
    @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
      margin-bottom: 8px;
    }
  }
`;
export default Item;
