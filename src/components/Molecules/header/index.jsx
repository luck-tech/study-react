import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import BREAKPOINT from "../../../variables/breakpoint";

const Header = () => {
  return (
    <StyledHeader>
      <BookIcons to="/">
        <i className="fa-solid fa-book fa-2xl"></i>
        <p>CampusBookTrade</p>
      </BookIcons>
      <Form>
        <input class="search-bar" placeholder="なにをお探しですか？" />
        <img class="search-mark" src="../../../img/search.png" alt="search" />
      </Form>
      <img class="icon" src="../../../img/user.png" alt="icon image" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  background-color: white;
  background-color: $white;
  margin-bottom: 103px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  gap: 45px;
  z-index: 1;
  @media screen and(max-width:960px) {
    padding-bottom: 20px;
    margin: 0;
  }
  .icon {
    width: 100px;
    height: 100px;
    border: 1.5px solid;
    border-radius: 50%;
    @media screen and(max-width:960px) {
      width: 50px;
      height: 50px;
    }
  }
`;

// Linkコンポーネントにスタイルを適用するためにstyled(Link)を使用
const BookIcons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 17px;
  margin-bottom: 17px;
  > p {
    color: #6f3f1a;
    font-size: 32px;
    text-align: center;
    margin-bottom: 0;
    @media screen and(max-width:960px) {
      font-size: 18px;
    }
  }
`;

const Form = styled.div`
  display: flex;
  width: 100%;
  > input {
    padding: 5px 0 5px 15px;
    border-width: 1.5px;
    border-color: black;
    border-right: 0;
    border-radius: 10px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;

    width: 100%;
    &:focus {
      outline: none;
    }
  }
  .serch-mark {
    height: 45px;
    padding: 5px 10px 5px 0;
    border: 1.5px solid;
    border-left-width: 0px;
    border-radius: 10px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    transition: background-color 0.2s ease;
    &:hover {
      background-color: $gray_gainsboro;
    }
  }
`;
export default Header;
